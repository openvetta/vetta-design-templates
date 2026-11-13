import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join } from "node:path";
import { test } from "node:test";

const INLINE_LIMIT = 256 * 1024;

function fixture(t) {
	const root = mkdtempSync(join(tmpdir(), "vetta-catalog-eol-"));
	t.after(() => {
		const target = realpathSync(root);
		assert.equal(dirname(target), realpathSync(tmpdir()));
		assert.ok(basename(target).startsWith("vetta-catalog-eol-"));
		rmSync(target, { recursive: true, force: true });
	});
	mkdirSync(join(root, "scripts"));
	mkdirSync(join(root, ".vetta"));
	const entry = join(root, "templates", "example");
	mkdirSync(entry, { recursive: true });
	copyFileSync(new URL("./build-catalog.mjs", import.meta.url), join(root, "scripts", "build-catalog.mjs"));
	writeFileSync(join(entry, "meta.json"), JSON.stringify({
		schemaVersion: 1, kind: "design-system", slug: "example", name: "Example",
		version: "1.0.0", order: 10, category: "playful", vibe: "light", tags: [],
		blurb: "A test design system.", tagline: { en: "Example", zh: "示例" },
		license: "MIT", origin: { type: "curated" }, collectedAt: "2026-08-31",
		assets: { spec: "DESIGN.md", theme: "theme.css", demo: "demo.html" },
	}));
	const files = {
		"DESIGN.md": "# Example\n\nA woodland palette. 森林配色。\n",
		"theme.css": "@theme {\n" + ["primary", "primary-foreground", "surface", "surface-foreground", "muted", "accent", "danger"].map(name => `  --color-${name}: #123456;\n`).join("") + "}\n",
		"demo.html": "<!doctype html>\n<html lang=\"en\">\n<body>Example</body>\n</html>\n",
	};
	return {
		root, entry, files,
		write(eol) {
			for (const [name, content] of Object.entries(files)) {
				writeFileSync(join(entry, name), content.replace(/\n/g, eol));
			}
		},
		run(...args) {
			return execFileSync(process.execPath, [join(root, "scripts", "build-catalog.mjs"), ...args], { encoding: "utf8", stdio: "pipe" });
		},
		catalogText() { return readFileSync(join(root, ".vetta", "design-templates.json"), "utf8"); },
	};
}

test("LF and CRLF checkouts produce identical catalogs and UTF-8 byte counts", t => {
	const f = fixture(t);
	f.write("\n");
	f.run();
	const expected = f.catalogText();
	f.write("\r\n");
	writeFileSync(join(f.root, ".vetta", "design-templates.json"), expected.replace(/\n/g, "\r\n"));
	assert.match(f.run("--check"), /catalog 校验通过/);
	f.run();
	assert.equal(f.catalogText(), expected, "line endings must not bump catalogVersion or rewrite resources");
	for (const resource of JSON.parse(expected).templates[0].resources) {
		assert.equal(resource.encoding, "text");
		assert.equal(resource.content, f.files[resource.path]);
		assert.equal(resource.bytes, Buffer.byteLength(resource.content, "utf8"));
	}
});

test("inline boundary is stable while binary downloads retain their original byte counts", t => {
	const f = fixture(t);
	// ASCII at the 256KB byte cap is past the client JS-string cap, so the inline
	// side stops at 65536 characters. Bytes over 256KB still fall back to binary.
	f.files["limit.txt"] = "字\n".repeat(32 * 1024);
	f.files["large.txt"] = "x\n".repeat(INLINE_LIMIT / 2 + 1);
	f.write("\r\n");
	const imageBytes = Buffer.from([0x89, 0x50, 0x0d, 0x0a, 0xff, 0x00]);
	writeFileSync(join(f.entry, "sample.png"), imageBytes);
	f.run();
	const resources = JSON.parse(f.catalogText()).templates[0].resources;
	const limit = resources.find(r => r.path === "limit.txt");
	assert.equal(limit.encoding, "text");
	assert.equal(limit.content.length, 64 * 1024);
	assert.equal(limit.bytes, Buffer.byteLength(limit.content, "utf8"));
	assert.equal(limit.content, f.files["limit.txt"]);
	const large = resources.find(r => r.path === "large.txt");
	assert.equal(large.encoding, "binary");
	assert.equal(large.bytes, readFileSync(join(f.entry, "large.txt")).length);
	assert.equal(large.url, "templates/example/large.txt");
	const image = resources.find(r => r.path === "sample.png");
	assert.equal(image.encoding, "binary");
	assert.equal(image.bytes, imageBytes.length);
	assert.deepEqual(readFileSync(join(f.entry, "sample.png")), imageBytes);
	f.run("--check");
});

test("inlined text over the client JS string limit fails before it can be dropped", t => {
	const f = fixture(t);
	f.files["wide.txt"] = "字".repeat(60000);
	f.files["edge.txt"] = "e".repeat(64 * 1024);
	f.write("\n");
	f.run();
	const resources = JSON.parse(f.catalogText()).templates[0].resources;
	const wide = resources.find(r => r.path === "wide.txt");
	assert.equal(wide.encoding, "text");
	assert.equal(wide.content.length, 60000);
	assert.ok(wide.bytes > 64 * 1024, "UTF-8 bytes can pass 64KiB while the JS string stays under the client limit");
	const edge = resources.find(r => r.path === "edge.txt");
	assert.equal(edge.encoding, "text");
	assert.equal(edge.content.length, 64 * 1024);

	f.files["over.txt"] = "o".repeat(64 * 1024 + 1);
	f.write("\n");
	assert.throws(() => f.run("--check"), (error) => {
		assert.equal(error.status, 1);
		assert.match(error.stderr, /example: 资源 over\.txt/);
		assert.match(error.stderr, /65537/);
		assert.match(error.stderr, /超过客户端上限 65536/);
		assert.match(error.stderr, /静默丢弃/);
		return true;
	});
});
