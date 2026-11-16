/**
 * meta.json 里和封面有关的两处文本编辑：声明 `assets.cover`、bump 补丁版本。
 *
 * 做成**最小文本编辑**而不是 JSON.parse / stringify 重写：仓库里 meta.json 的排版并不统一
 * （有的数组写成一行），整文件重排会让一次加封面变成满屏无关 diff。纯函数、不碰磁盘，
 * 方便单测；磁盘读写在 build-covers.mjs。
 */

/** 声明 `"cover": "cover.webp"`。已经声明过就原样返回。 */
export function declareCover(metaText) {
	if (/"cover"\s*:/.test(metaText)) return { text: metaText, changed: false };
	// 紧跟在 assets 里最后一个键之后插入。assets 是对象，最后一项没有尾逗号。
	const pattern = /("assets"\s*:\s*\{[^}]*?)(\s*)\n(\t*)\}/;
	const match = pattern.exec(metaText);
	if (!match) throw new Error('找不到 meta.json 里的 "assets" 对象，请手动加上 "cover": "cover.webp"');
	const [whole, body, , closingIndent] = match;
	const indent = `${closingIndent}\t`;
	const text = metaText.replace(whole, `${body},\n${indent}"cover": "cover.webp"\n${closingIndent}}`);
	return { text, changed: true };
}

/** `version` 的最后一段数字 +1（1.1.0 → 1.1.1）。版本不是以数字结尾就抛错，交给人处理。 */
export function bumpPatchVersion(metaText) {
	const pattern = /("version"\s*:\s*")([^"]+)(")/;
	const match = pattern.exec(metaText);
	if (!match) throw new Error('meta.json 里没有 "version"');
	const parts = match[2].split(".");
	const last = parts[parts.length - 1];
	if (!/^\d+$/.test(last)) throw new Error(`version "${match[2]}" 不以数字结尾，请手动 bump`);
	parts[parts.length - 1] = String(Number(last) + 1);
	return { text: metaText.replace(pattern, `$1${parts.join(".")}$3`), version: parts.join(".") };
}
