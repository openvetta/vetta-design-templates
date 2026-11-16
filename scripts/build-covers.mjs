#!/usr/bin/env node
/**
 * 从每个条目的 demo.html 生成封面 `templates/<slug>/cover.webp`。
 *
 *   node scripts/build-covers.mjs              给缺封面的条目生成
 *   node scripts/build-covers.mjs --all        全部重新生成（改了 demo.html 之后用）
 *   node scripts/build-covers.mjs linear bento-grid   只处理指定 slug
 *
 * 渲染条件刻意与客户端悬停预览一致：1280px 宽的桌面布局、**禁用脚本**、只取首屏
 * （1280×960），再缩到 960×720 存成 webp——4:3 正好是客户端卡片封面区的比例，不会被裁。
 *
 * 需要 Playwright（本仓库不引入依赖，临时装一份即可）：
 *   npm i --no-save playwright && npx playwright install chromium
 * 转码走浏览器自带的 canvas，不需要 cwebp / sharp。
 *
 * 跑完别忘了：meta.json 的 assets 里声明 "cover": "cover.webp"，再 node scripts/build-catalog.mjs。
 * 本脚本只管出图，不改 meta.json。
 */
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const TEMPLATES_DIR = join(ROOT, "templates");

/** 与客户端 DesignSystemDemo 的 DEMO_WIDTH / VIEWPORT_HEIGHT 对齐。 */
const VIEWPORT = { width: 1280, height: 960 };
/** 输出尺寸：卡片在高分屏上约 600 CSS px 宽，960 足够清晰又不浪费字节。 */
const OUTPUT = { width: 960, height: 720 };
const WEBP_QUALITY = 0.82;

async function loadPlaywright() {
	for (const name of ["playwright", "playwright-core"]) {
		try {
			return await import(name);
		} catch {
			// 换下一个名字
		}
	}
	console.error("找不到 playwright。先执行：npm i --no-save playwright && npx playwright install chromium");
	process.exit(1);
}

function selectSlugs(args) {
	const named = args.filter((arg) => !arg.startsWith("--"));
	const all = readdirSync(TEMPLATES_DIR, { withFileTypes: true })
		.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
		.map((entry) => entry.name)
		.sort();
	return named.length > 0 ? all.filter((slug) => named.includes(slug)) : all;
}

const args = process.argv.slice(2);
const force = args.includes("--all");
const slugs = selectSlugs(args).filter((slug) => {
	if (!existsSync(join(TEMPLATES_DIR, slug, "demo.html"))) return false;
	return force || !existsSync(join(TEMPLATES_DIR, slug, "cover.webp"));
});

if (slugs.length === 0) {
	console.log("没有需要生成封面的条目。");
	process.exit(0);
}

const { chromium } = await loadPlaywright();
// 本机已有别的版本的 Chromium 时，用 CHROMIUM_PATH 指过去，省一次下载。
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
try {
	// 脚本必须关：demo 在客户端是不给脚本执行权的 sandbox iframe，截图要看到同样的画面。
	const context = await browser.newContext({ viewport: VIEWPORT, javaScriptEnabled: false });
	// 转码页单独开一个允许脚本的 context，只用来跑 canvas。
	const encoder = await (await browser.newContext()).newPage();
	for (const slug of slugs) {
		const page = await context.newPage();
		await page.goto(pathToFileURL(join(TEMPLATES_DIR, slug, "demo.html")).href, { waitUntil: "load" });
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
		writeFileSync(join(TEMPLATES_DIR, slug, "cover.webp"), bytes);
		console.log(`${slug}: cover.webp ${Math.round(bytes.length / 1024)}KB`);
	}
} finally {
	await browser.close();
}
