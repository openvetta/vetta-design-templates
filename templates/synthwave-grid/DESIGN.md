# Synthwave Grid（合成波网格）

A worked example ships as `demo.html`: Vesper, a local-first desktop agent, on a dusk horizon, with the same screen in a phone frame and a set of deliberately off-style counter-examples. It is a static reference for this visual system.

## Atmosphere

Neon 1980s dusk, played straight. The sky falls from deep violet at the top through magenta at the horizon. A large sun sits on that line, graded from pale gold to hot pink and cut by horizontal bands that thicken toward the base. Below the horizon a cyan wire grid runs in one-point perspective to a single vanishing point. Wireframe mountains cross the sun. Palm silhouettes stand at the sides. Type that has to be read sits on opaque dusk, after the grid has ended.

The product in the reference is Vesper, an agent whose thread, files, and run stay on the machine in front of you. The horizon is the hero. Feature cards, the console, and fields use solid `surface` or `surface-raised`.

This fits a product poster, a launch screen, and a single night console. It is a poor fit for long articles, dense tables, and any layout that puts many equal reading columns on the moving grid.

The sun is a plain banded disc. It is not a wheel, not a face, and not a mark.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the dusk ground, a deep violet, not pure black. `surface-foreground` is a pale lavender-white. That pair is about 17:1. Long text uses it, with no glow and no shadow.
- `surface-raised` is one step up, for cards, the console, and the panel around a field. Ink on it is about 16:1.
- `muted` is a light lilac for secondary sentences, meta lines, and nav links. It clears about 10:1 on both `surface` and `surface-raised`. A dim purple fails here, so muted stays light.
- `primary` is a hot magenta deep enough that white `primary-foreground` clears about 5:1. It is the one commit fill. A brighter pink fails with white type and stays decorative.
- `accent` is the grid cyan. It clears about 14:1 on `surface` and is safe for a short label, a focus ring, and the quiet outline. It is not the color of a paragraph, and it does not share a line with magenta body type. The two neons together vibrate.
- `danger` is a light rose. As text on `surface` it is about 9:1. As a destructive fill, the label is `surface` — the same pair. White on this rose fails.
- `border` is a mid lilac that clears about 4:1 against `surface` and against `surface-raised`. It is the resting edge of a card and a field. Glow is not that edge.
- Sun stops `sun-0`, `sun-1`, and `sun-2` grade the disc from pale gold to pink. `sun-0` may color one display line. It is not caption ink.
- Sky stops `sky-top`, `sky-mid`, `sky-hot`, and `sky-deep` are the hero background only. `wire` strokes the mountains. `palm` fills the silhouettes and the gaps in the sun. None of these are type colors.
- The scrim at the foot of the hero is solid `surface`. Display type sits on that scrim. It does not sit on the raw sun.

## Typography

A geometric grotesque. Inter when it is present, otherwise the system sans in `--font-body`. The reference does not load a remote face. Display uses the same family, italic, weight 700, tracked slightly open, set in capitals. There is no chrome bevel, no script, and no outlined letter.

- Display is two lines, about 40px on a phone and 76px on a wide screen, line-height near 0.9. The first line is `surface-foreground`. The second may be `sun-0`. A spare glow (`glow-display`, or `glow-gold` on the sun line) sits behind the glyphs. The fill is what makes the word readable. The glow is extra.
- Section titles are roman, weight 700, about 28–40px, with no glow and no italic.
- Body is 16–17px, line-height about 1.55, weight 400–500, on `surface` or `surface-raised`. No text-shadow, no italic, no uppercase paragraph.
- Labels and eyebrows are 13px, uppercase, tracked out. An eyebrow may use `accent`. A paragraph may not.
- The console meta line uses `--font-mono` at 13px in `muted` or `surface-foreground`.
- Body measure stays under about 66 characters. A sentence on the horizon sits on the scrim.

## Spacing & layout

The signature screen is the horizon. The nav sits on the dark top. The sun and the mountains occupy the middle. The grid fills the ground. The product sentence sits on a dusk scrim at the lower left. Wide screens leave the right side of the grid open. Below 800px the scrim becomes full width, the nav links drop, and the two actions stack.

- Page inset is 48px, stepping to 20px below 800px. Section rhythm is 72px, stepping to 48px.
- The hero is at least 840px tall on a wide screen and 860px on a narrow one, so the sun, a band of grid, and the stacked actions all stay in view. The sun is 300px, stepping to 196px. The right palm drops on the narrow screen so the disc stays clear.
- Feature cards are three columns from 800px up and one column below. The gap is 16px. Cards do not overlay the grid.
- The console is one column, max width about 760px. Below 720px the send control moves under the field and becomes full width. The field stays 48px tall.
- Actions, the send control, and the nav commit are at least 48px tall. Badges are labels, not targets, and stay at 13px type.
- Radius stays small: `radius-sm` through `radius-xl` (4, 6, 10, 14). The sun is the circle. A 32px card corner is off this sheet. A zero corner with a bevel belongs to a different system.
- The grid, the scanlines, and the sun live in the hero and in specimens of the hero. They do not run under the console or under spec text.

## Components

- **Horizon.** `sky-top` through `sky-hot` as one vertical gradient, settling into `surface` at the foot. Stars are static dots in the upper portion. A soft bloom sits behind the sun. Nothing twinkles.
- **Sun.** A disc filled by the sun stops, cut by horizontal bands of `palm` that thicken toward the bottom. The glow is a static drop-shadow in magenta and gold. The sun is not a control.
- **Grid.** One-point perspective. Lines use `grid-line` (`accent` at about 62% opacity). The transform origin is the horizon. The floor color is `surface`. On `duration-drive` the pattern shifts one cell toward the viewer. A mask fades the lines in at the horizon.
- **Mountains.** Two wire ridges in `wire` and `accent`, over a `palm` silhouette, so the sun sets into the notches. They are decoration.
- **Palms.** `palm` silhouettes drawn for this system: a curved trunk and fronds that arch out and droop. No face. Two on a wide hero, one on a narrow hero.
- **Scan.** A 1px repeating line over the scene only, under the scrim, at low opacity. It does not cross body type.
- **Scrim.** A short fade into solid `surface` under the headline. The headline, the lede, and the actions sit on the solid part.
- **Actions.** `radius-md`, min-height 48px, weight 700. The commit action is `primary` with `primary-foreground` and `shadow-md`. The quiet action is transparent, with `surface-foreground` type and a 1px `accent` edge. The destructive action is a `danger` fill with a `surface` label. Disabled is a `surface` fill, a `border` edge, and a `muted` label, with no glow. Press moves the control 1px down.
- **Cards.** `surface-raised`, 1px `border`, `radius-lg`, padding 20. A 13px `accent` eyebrow, an ink title, a `muted` sentence. A fine pointer may switch the edge to `accent` on hover. The fill stays opaque.
- **Badges.** 13px ink, 1px `border`, `radius-sm`. They name a state. They do not carry the sentence, and they are not pills.
- **Console.** A raised panel, `radius-xl`, a lamp square in `primary`, the product name, a badge, then rows. The agent row has a 3px `accent` edge. The composer is a labeled field plus the commit action. Placeholder text is not the label.
- **Fields.** Solid `surface`, 1px `border`, `radius-md`, 16px type, min-height 48px. Focus uses the accent ring. An error swaps the edge and the message to `danger` and keeps the words.
- **Focus.** A 2px `accent` outline, 3px offset, on buttons, links, and fields. `shadow-focus` is the same pair where a control paints its own ring.
- **Nav.** The wordmark is the display italic at a small size, with a 12px `primary` lamp. Links use `muted`. One commit action. Below 800px the links go away. The wordmark and the action remain.

## Motion

The grid is the only loop. It shifts one cell over `duration-drive` (8s), linear, so the floor comes toward the viewer. The sun does not pulse. Stars do not twinkle. Nothing flashes.

Hover and press use `duration-ui` (160ms) and `ease-ui`. A fine pointer may brighten the commit glow and the card edge. The layout does not depend on hover.

Under `prefers-reduced-motion`, the grid stays on its first frame and the 1px press shift stops. Color and border changes remain, so hover and error are still visible. Scanlines stay. They do not move.

Under `prefers-contrast: more`, card edges, field edges, and the quiet action take `surface-foreground` as their border.

## Don't

- No glow, no text-shadow, and no italic on body copy, on the lede, or on a field. The display line is the one place a glow belongs.
- No type set on the sun or on a raw sky stop. The scrim is `surface`.
- No white label on `danger`, and no white label on a pink brighter than `primary`.
- No paragraph in `accent`, and no magenta word inside a cyan sentence.
- No liquid chrome, no metal-gradient word, no iridescent orb, no hairline spec plate.
- No beveled silver, no navy title bar, no zero-radius window chrome.
- No backdrop blur, no translucent panel over a city photograph, no glass card.
- No statue, no marble, no mall collage, no borrowed lettering used as texture.
- No sunwheel, no eagle, no bust-and-slogan. The sun stays a plain banded disc.
- No flicker, no twinkle, and no grid underneath long text. Reduced motion leaves a still horizon.
- No remote font and no photograph. Mountains and palms are drawn for this system.
