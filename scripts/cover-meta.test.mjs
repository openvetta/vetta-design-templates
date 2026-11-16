import assert from "node:assert/strict";
import { test } from "node:test";
import { bumpPatchVersion, declareCover } from "./cover-meta.mjs";

const EXPANDED = `{
	"slug": "linear",
	"version": "1.1.0",
	"tags": ["dev", "dark"],
	"assets": {
		"spec": "DESIGN.md",
		"theme": "theme.css",
		"demo": "demo.html"
	},
	"collectedAt": "2026-08-11"
}
`;

test("declareCover inserts the role after the last asset and keeps the rest byte-identical", () => {
	const { text, changed } = declareCover(EXPANDED);
	assert.equal(changed, true);
	assert.equal(JSON.parse(text).assets.cover, "cover.webp");
	assert.equal(
		text,
		EXPANDED.replace('"demo": "demo.html"', '"demo": "demo.html",\n\t\t"cover": "cover.webp"'),
	);
	// 一行写法的数组等排版不能被顺手重排。
	assert.match(text, /"tags": \["dev", "dark"\]/);
});

test("declareCover is a no-op when already declared", () => {
	const once = declareCover(EXPANDED).text;
	const twice = declareCover(once);
	assert.equal(twice.changed, false);
	assert.equal(twice.text, once);
});

test("declareCover refuses a meta.json it cannot place the role in", () => {
	assert.throws(() => declareCover('{ "slug": "x" }'), /assets/);
});

test("bumpPatchVersion increments only the last numeric segment", () => {
	assert.equal(bumpPatchVersion(EXPANDED).version, "1.1.1");
	assert.equal(JSON.parse(bumpPatchVersion(EXPANDED).text).version, "1.1.1");
	assert.equal(bumpPatchVersion('{"version": "2.0.9"}').version, "2.0.10");
	assert.equal(bumpPatchVersion('{"version": "3"}').version, "4");
});

test("bumpPatchVersion refuses versions it cannot bump safely", () => {
	assert.throws(() => bumpPatchVersion('{"version": "1.0.0-beta"}'), /手动 bump/);
	assert.throws(() => bumpPatchVersion('{"slug": "x"}'), /version/);
});
