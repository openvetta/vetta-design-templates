# 设计资源编写手册

本仓库是 Vetta「设计」工作台的资源源。桌面端插件 `vetta-ui-design` 会拉取本仓库的
`.vetta/design-templates.json`，校验后展示；用户挑选后，条目内容会落到他的设计项目里
供 Agent 参考。

这份手册面向在本仓库中添加/修改条目的人与 AI。**所有规则都对应
`scripts/build-catalog.mjs` 里的硬校验**，CI 上不通过就合不进来。

## 最重要的四条

1. **条目目录是唯一事实源，`.vetta/design-templates.json` 是生成物。**
   加一个条目 = 建一个目录，不要手改顶层清单。改完跑 `node scripts/build-catalog.mjs`。
   （这一点刻意不同于 `vetta-official-marketplace` 的手写清单：那边 slug/version 要三处
   一致，是常见的同步失败源；这里少一个事实源，也让多个自动 PR 不会在同一个 JSON 上冲突。）

2. **这里的内容会进入 Agent 的上下文。** 它是待处理的参考数据，不是给 Agent 的指令。
   任何试图指挥 Agent 的句子（"忽略上面的"、"你必须先执行"、"请打开并读取…"）都不允许
   出现在 `DESIGN.md` 里，评审时按注入处理。

3. **每个 `design-system` 必须带封面 `cover.webp`。**
   风格墙上每张卡的缩略图就是它。没有封面，客户端只能退回一块色板；想显示真实界面就得
   给每张卡现场渲染一份 demo，几十张连排会把滚动拖垮。封面从 `demo.html` 生成，
   不是手画的——见下方「封面」一节。**漏了封面 CI 直接失败。**

4. **不要放别人的原始素材。** 入库的是提炼后的规范文字和自己生成的示意图。
   原始网页截图、抓取到的 HTML 原文、品牌资源文件都不进仓库；来源记在 `meta.json` 的
   `origin` 里。

## 目录结构

```text
.vetta/design-templates.json     ← 生成物，不要手编
templates/<slug>/
  meta.json                      ← 条目事实源（唯一不算资源的文件）
  DESIGN.md                      ← 给 Agent 的规范正文
  theme.css                      ← 设计体系的 token（design-system 必需）
  demo.html                      ← 手写的界面样例（design-system 必需，见下）
  cover.webp                     ← 封面，由 demo.html 生成（design-system 必需）
  reference.html                 ← 可选，任意参考素材
  screenshots/home.webp          ← 可选，子目录会被保留
  ...                            ← 目录下**任何**文件都会自动进 resources
scripts/build-catalog.mjs
```

条目目录里除 `meta.json` 外的所有文件都是这套风格的资源，会被复制到用户项目的
`design-resources/<slug>/` 供 Agent 参考——不需要在 `meta.json` 里逐个声明。`assets`
只用来标注**角色**（哪个是规范、哪个是主题），让客户端认路。

文本（`.md` `.css` `.html` `.txt` `.json` `.svg` `.ts(x)` `.js(x)`）统一为 LF 换行，按
UTF-8 字节计数，单个 ≤256KB 时直接内联进清单，避免 Windows 的 CRLF 检出导致清单漂移。
其中 JS 字符串长度超过 65536 的文本不能内联：客户端会静默丢掉，清单校验直接失败。
客户端一次请求拿到全部内联内容；其余按二进制处理，保留原始字节，只在清单里留地址，等用户真的
选中这套风格再下载。所以截图放心加，但别放几十 MB 的东西。

## 添加一个条目

1. 建目录 `templates/<slug>/`，slug 符合 `^[a-z0-9][a-z0-9-]{0,63}$` 且与 `meta.slug` 一致。
2. 放内容文件（见下方各 kind 的必需资产）。
3. 写 `meta.json`。
4. 跑 `node scripts/build-catalog.mjs`，把生成的清单一起提交。
5. 开 PR。CI 会跑 `--check`。

## `meta.json` 字段

| 字段 | 约束 |
| --- | --- |
| `schemaVersion` | 固定 `1` |
| `kind` | `design-system` / `reference` / `remixable` |
| `slug` | 与目录名一致 |
| `name` | 展示名，品牌名不翻译 |
| `author` | 可选。署名字符串，会显示在客户端的风格详情里。不知道作者就**不写这个字段**，不要拿来源网站、`upstream` 或 AI 工具名冒充 |
| `version` | `^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$`，内容变了就 bump |
| `order` | 非负整数，**展示顺序**。见下方「顺序是有意义的」 |
| `category` | 如 `dev` / `fintech` / `playful` / `editorial` |
| `vibe` | `light` 或 `dark` |
| `tags` | 字符串数组 |
| `blurb` | 一句英文风格摘要，**给模型做推荐依据用**，不展示 |
| `tagline` | `{ en, zh }`，**给用户看的一句话**，两种语言都必填 |
| `license` | 必填 |
| `origin` | `{ type, upstream?, sourceUrl?, note? }`，`type` 为 `curated` 或 `collected` |
| `collectedAt` | `YYYY-MM-DD` |
| `assets` | **角色**声明，键只能是 `spec` / `theme` / `demo` / `cover` / `preview` / `package`；值是本目录内的相对路径。其余文件不必声明 |

各 kind 的必需资产：

- `design-system`：`spec` + `theme` + `cover`（`demo` 也应当有，封面从它生成）
- `reference`：`spec`
- `remixable`：`package`

## demo.html 是手写的

每个条目的 `demo.html` 是「这套体系自己长什么样」，**一套一份，手写**。

早期这些 demo 由 `scripts/build-demos.mjs` 统一生成——同一个页面结构套 22 份 token。
结果是 21 份长得几乎一样的营销页：token 换了，设计感没换。真正区分一套体系的是它的
**产品形态**（Linear 是 issue 列表、GitHub 是 PR 页、Spotify 是播放器、Retro 95 是窗口），
这些结构生成器表达不了。所以生成器已经删掉了。

写一份 demo 的要求：

- **拿这套体系最典型的界面当封面。** 客户端悬停预览只看得到首屏，第一眼就该认出是谁。
  不要写「某某设计体系」的营销首屏——除非这套体系本身就是做营销页的。
- **`:root` 里内联一份 `theme.css` 的 token**，让 demo 脱离构建也能直接打开。
- **带编号小节**（`01 — …`）讲清这套体系的规则：颜色分工、形状与深度、控件、以及一节
  **off-style 对照**——左边故意写错、右边写对，这一节最能说明边界在哪。
- **必须有一节移动端**：一个手机框展示同一界面在小屏下的样子，加一份逐条说明
  （断点怎么塌、什么列先掉、字号与触控目标怎么变、hover 态在触屏上换成什么）。
- **类名别用通用词。** 对照小节统一用 `.cmp-on` / `.cmp-off`——早先用 `.on` / `.off`
  时，撞上了 Slack 的 `.dot.on` 和 Notion 的 `.box.on`，把 8px 的状态点撑成了大圆。
- demo 会被客户端塞进**不给脚本执行权**的 sandbox iframe 作悬停预览，所以：
  **不许 `<script>`、不许外链样式表/图片、不许 `@import`**，样式和图片一律内联。
  build-catalog 会硬校验这几条。

## 封面（cover.webp）

封面是风格墙上这张卡的缩略图，**由 `demo.html` 自动截出来**，不手画、不手改：

```bash
npm i --no-save playwright && npx playwright install chromium   # 只需一次，不会写进仓库
node scripts/build-covers.mjs                # 给还没有封面的条目生成
node scripts/build-covers.mjs --all          # 全部重生成
node scripts/build-covers.mjs <slug> ...     # 只处理指定条目
```

脚本的渲染条件刻意与客户端悬停预览一致：1280px 桌面布局、**关闭脚本**、只取首屏
（1280×960）。所以：

- **`demo.html` 的首屏就是封面。** 首屏要一眼认出是谁，这条在「demo.html 是手写的」里
  已经写过，现在它同时决定了卡片上的样子。首屏是一大片空白或一个营销标题，封面就是
  一大片空白。
- **改了 `demo.html` 就要重生成封面**（`--all` 或带 slug），并 bump `version`。封面不会
  自己跟着 demo 更新，CI 也看不出两者是否同步，靠你自己记得。
- 生成后在 `meta.json` 的 `assets` 里声明 `"cover": "cover.webp"`，再跑
  `node scripts/build-catalog.mjs`。脚本只出图，不改 `meta.json`。

`build-catalog` 对封面的硬校验：必须是 **webp**、**4:3**（脚本输出 960×720，卡片封面区就是
4:3，别的比例会被裁）、宽度 ≥ 640px、体积 ≤ 150KB。封面是缩略图不是原图，一张 20–50KB
是正常的；超限通常说明首屏塞了大面积渐变或噪点，回头简化 demo 的首屏比调压缩参数管用。

封面会作为二进制资源进清单（只带地址，不内联），客户端在风格墙上按需加载。它和目录里其它
文件一样，会在用户选中这套风格时落进项目的参考资料目录，Agent 可以把它当一张视觉参考。

## 顺序是有意义的

`order` 决定用户看到的排列，**按风格差异交错排**（亮/暗、冷/暖、克制/张扬），
让人横滑前几张就能碰到完全不同的方向。不要按字母序、也不要按收录时间追加到末尾。

现有条目用 10 的间隔（10、20、30…），插新条目时取中间值即可，不必重排别人的。

## `DESIGN.md` 约定

- **不要写 YAML frontmatter。** 客户端落盘时会自己拼上 `system` / `name` / `source` /
  `license`，条目里再带一份会写出两段 frontmatter。校验会拦。
- 正文用固定小节：`Atmosphere` / `Color roles` / `Typography` / `Spacing & layout` /
  `Components` / `Motion` / `Don't`。
- 颜色一律引用 token 名，不写死 hex —— 真值只在 `theme.css` 里。

## `theme.css` 的 token 契约

必须包含这 7 个基础 color token，**只换值、不改名、不删除**：

```text
--color-primary            --color-primary-foreground
--color-surface            --color-surface-foreground
--color-muted              --color-accent
--color-danger
```

统一追加 `--color-surface-raised`、`--color-border`，以及 radius / shadow 刻度。
体系特有的 token 可以增，但不能减少上面这些 —— 客户端和已有画框都按这套名字取色。

## 更新多久到用户手上

客户端首选 `raw.githubusercontent.com`（`max-age=300`），本地 TTL 5 分钟且带 ETag 条件
请求。**合进 `main` 之后几分钟内、用户下次打开「设计」页就会看到**，不需要任何人工操作。

jsDelivr 只是兜底。它对 `@main` 会缓存「分支→commit」的解析结果（12 小时），而且
purge 单个文件刷不掉——实测调用 purge 返回 `finished`，内容依然是半天前的。所以
**不要把它当首选源，也不要指望 purge 能救**。

想立刻确认：在设计页点一下「刷新」会强制跳过本地 TTL。

## 提交前检查清单

- [ ] `node scripts/build-catalog.mjs` 跑过，清单一起提交了
- [ ] `node scripts/build-catalog.mjs --check` 通过
- [ ] `DESIGN.md` 没有 frontmatter、没有指挥 Agent 的句子
- [ ] `theme.css` 7 个基础 token 齐全
- [ ] 跑过 `node scripts/build-covers.mjs`，`cover.webp` 已生成并在 `assets.cover` 声明；改过 `demo.html` 的话封面已重生成
- [ ] 打开 `cover.webp` 看过一眼：首屏认得出是这套风格，不是空白或半截内容
- [ ] `author` 只在确实知道作者时才写
- [ ] `order` 没和别人撞，且插的位置符合"风格交错"
- [ ] `origin` 如实填写，没有夹带别人的原始素材
- [ ] `tagline` 中英都写了
