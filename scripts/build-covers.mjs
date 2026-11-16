#!/usr/bin/env node
/**
 * 给 design-system 条目生成封面，并把后续步骤一并做完。一条命令走完，不留需要记得的尾巴。
 *
 *   node scripts/build-covers.mjs <slug> [<slug>...]   处理指定条目
 *   node scripts/build-covers.mjs                      给所有「还没有封面」的条目生成
 *   node scripts/build-covers.mjs --all                全部重新生成（批量改了 demo 之后用）
 *   node scripts/build-covers.mjs <slug> --no-catalog  不重建清单（自己稍后跑 build-catalog）
 *
 * 每个条目依次做：
 *   1. 用 Chromium 渲染 demo.html 的首屏，存成 templates/<slug>/cover.webp（4:3、960×720）；
 *   2. 在 meta.json 的 assets 里声明 "cover": "cover.webp"（已声明则不动）；
 *   3. 封面是**重新生成**（此前就有）时，bump 一次补丁版本——内容变了就要 bump，客户端的
 *      封面缓存靠 version 判断过期；新条目第一次生成不 bump，保持你写的初始版本；
 *   4. 最后重建 .vetta/design-templates.json 并跑校验。
 * 脚本**不会**提交、不会推送。
 *
 * 渲染条件刻意与客户端悬停预览一致：1280px 桌面布局、**禁用脚本**、只取首屏（1280×960）。
 * 所以封面画面就是 demo.html 的首屏——首屏是空白或营销大标题，封面就是那样。
 * 跑完**务必打开 cover.webp 看一眼**（脚本会把路径打印出来）。
 *
 * 依赖：Playwright + Chromium。缺了脚本会自己装（playwright 装进被 gitignore 的 node_modules，
 * 不改 package.json）；也可以用环境变量 CHROMIUM_PATH 指向本机已有的 Chrome/Chromium 可执行文件。
 * 转码走浏览器自带的 canvas，不需要 cwebp / sharp。
 */
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { bumpPatchVersion, declareCover } from "./cover-meta.mjs";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const TEMPLATES_DIR = join(ROOT, "templates");

/** 与客户端 DesignSystemDemo 的 DEMO_WIDTH / VIEWPORT_HEIGHT 对齐。 */
const VIEWPORT = { width: 1280, height: 960 };
/** 输出尺寸：卡片在高分屏上约 600 CSS px 宽，960 足够清晰又不浪费字节。 */
const OUTPUT = { width: 960, height: 720 };
const WEBP_QUALITY = 0.82;

function die(message) {
	console.error(`\n✗ ${message}`);
	process.exit(1);
}

function run(command, args) {
	execFileSync(command, args, { cwd: ROOT, stdio: "inherit" });
}

/** 取 playwright；没有就自己装一份（--no-save：不碰 package.json，node_modules 已被 gitignore）。 */
async function loadPlaywright() {
	const attempt = async () => {
		for (const name of ["playwright", "playwright-core"]) {
			try {
				return await import(name);
			} catch {
				// 换下一个名字
			}
		}
		return null;
	};
	let playwright = await attempt();
	if (playwright) return playwright;
	console.log("未找到 playwright，正在安装（只装进本地 node_modules，不改 package.json）…");
	try {
		run("npm", ["i", "--no-save", "--no-package-lock", "playwright"]);
	} catch {
		die("自动安装 playwright 失败。请手动执行：npm i --no-save --no-package-lock playwright");
	}
	playwright = await attempt();
	if (!playwright) die("playwright 已安装但仍无法导入，请检查 node_modules。");
	return playwright;
}

/** 启动浏览器：CHROMIUM_PATH → Playwright 自带 → 系统 Chrome → 现场下载 Chromium，依次尝试。 */
async function launchBrowser(chromium) {
	if (process.env.CHROMIUM_PATH) return chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
	try {
		return await chromium.launch();
	} catch (error) {
		if (!/Executable doesn't exist|download new browsers/i.test(String(error))) throw error;
	}
	try {
		return await chromium.launch({ channel: "chrome" });
	} catch {
		// 本机没有系统 Chrome，下载 Playwright 的 Chromium。
	}
	console.log("未找到可用浏览器，正在下载 Chromium…");
	try {
		run("npx", ["playwright", "install", "chromium"]);
	} catch {
		die("下载 Chromium 失败。可设置 CHROMIUM_PATH 指向本机的 Chrome/Chromium 可执行文件后重试。");
	}
	return chromium.launch();
}

function listSlugs() {
	return readdirSync(TEMPLATES_DIR, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
		.map((entry) => entry.name)
		.sort();
}

/** 只有 design-system 需要封面；读不出 kind 的当作需要，交给后面的校验报错。 */
function isDesignSystem(slug) {
	try {
		return JSON.parse(readFileSync(join(TEMPLATES_DIR, slug, "meta.json"), "utf8")).kind === "design-system";
	} catch {
		return true;
	}
}

const args = process.argv.slice(2);
const flags = new Set(args.filter((arg) => arg.startsWith("--")));
const named = args.filter((arg) => !arg.startsWith("--"));
for (const flag of flags) if (!["--all", "--no-catalog"].includes(flag)) die(`未知参数 ${flag}（见脚本文件头的用法）`);

const all = listSlugs();
for (const slug of named) if (!all.includes(slug)) die(`没有这个条目：templates/${slug}`);

const candidates = named.length > 0 ? named : all.filter(isDesignSystem);
const slugs = candidates.filter((slug) => {
	if (!existsSync(join(TEMPLATES_DIR, slug, "demo.html"))) {
		if (named.includes(slug)) die(`templates/${slug}/demo.html 不存在：封面从它生成，先写 demo.html`);
		return false;
	}
	// 点名处理的永远生成；不点名时，--all 全部重做，否则只补缺。
	return named.includes(slug) || flags.has("--all") || !existsSync(join(TEMPLATES_DIR, slug, "cover.webp"));
});

if (slugs.length === 0) {
	console.log("没有需要生成封面的条目（都已有封面；改了 demo.html 请带 slug 或 --all 重新生成）。");
	process.exit(0);
}

const { chromium } = await loadPlaywright();
const browser = await launchBrowser(chromium);
const done = [];
try {
	// 脚本必须关：demo 在客户端是不给脚本执行权的 sandbox iframe，截图要看到同样的画面。
	const context = await browser.newContext({ viewport: VIEWPORT, javaScriptEnabled: false });
	// 转码页单独开一个允许脚本的 context，只用来跑 canvas。
	const encoder = await (await browser.newContext()).newPage();
	for (const slug of slugs) {
		const dir = join(TEMPLATES_DIR, slug);
		const coverPath = join(dir, "cover.webp");
		const regenerated = existsSync(coverPath);

		const page = await context.newPage();
		await page.goto(pathToFileURL(join(dir, "demo.html")).href, { waitUntil: "load" });
		const png = await page.screenshot({ type: "png", clip: { x: 0, y: 0, ...VIEWPORT } });
		await page.close();

		const webpBase64 = await encoder.evaluate(
			async ({ pngBase64, output, quality }) => {
				const image = new Image();
				image.src = `data:image/png;base64,${pngBase64}`;
				await image.decode();
				const canvas = document.createElement("canvas");
				canvas.width = output.width;
				canvas.height = output.height;
				const context2d = canvas.getContext("2d");
				context2d.imageSmoothingQuality = "high";
				context2d.drawImage(image, 0, 0, output.width, output.height);
				const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", quality));
				const buffer = new Uint8Array(await blob.arrayBuffer());
				let binary = "";
				for (let i = 0; i < buffer.length; i += 0x8000) {
					binary += String.fromCharCode(...buffer.subarray(i, i + 0x8000));
				}
				return btoa(binary);
			},
			{ pngBase64: png.toString("base64"), output: OUTPUT, quality: WEBP_QUALITY },
		);
		const bytes = Buffer.from(webpBase64, "base64");
		writeFileSync(coverPath, bytes);

		// meta.json：声明 cover；重新生成时 bump 补丁版本。
		const metaPath = join(dir, "meta.json");
		let meta = readFileSync(metaPath, "utf8");
		const notes = [];
		const declared = declareCover(meta);
		meta = declared.text;
		if (declared.changed) notes.push("已声明 assets.cover");
		if (regenerated) {
			const bumped = bumpPatchVersion(meta);
			meta = bumped.text;
			notes.push(`version → ${bumped.version}`);
		}
		writeFileSync(metaPath, meta);

		done.push(slug);
		console.log(`✓ ${slug}: ${Math.round(bytes.length / 1024)}KB${notes.length ? `（${notes.join("；")}）` : ""}`);
		console.log(`    请打开看一眼：${coverPath}`);
	}
} finally {
	await browser.close();
}

if (flags.has("--no-catalog")) {
	console.log("\n已跳过清单重建。稍后请运行：node scripts/build-catalog.mjs");
} else {
	console.log("\n重建清单并校验…");
	try {
		run(process.execPath, [join(ROOT, "scripts", "build-catalog.mjs")]);
		run(process.execPath, [join(ROOT, "scripts", "build-catalog.mjs"), "--check"]);
	} catch {
		die("清单校验没通过，见上方报错。封面和 meta.json 已写好，修完问题再运行 node scripts/build-catalog.mjs。");
	}
}
console.log(`\n完成：${done.join(", ")}。别忘了看封面，并把 templates/ 与 .vetta/design-templates.json 一起提交。`);
