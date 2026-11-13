# Swiss Grid

A worked example ships as `demo.html`: Raster, a local-first agent, set as a typographic sheet, with the same sheet narrowed, the controls, and a deliberately off-style counter-example. It is a static reference for this visual system.

## Atmosphere

Objective, asymmetric, and quiet. The page is a modular grid on white paper. A neutral grotesk does the work: a huge lowercase headline, a small tracked label, and a lot of unmarked space. Rules are hairlines. One signal red marks the single active index, and everything else is ink. The structure is the image. There is no illustration beside it.

The product in the reference is Raster. The model runs on this machine. A line placed in the grid stays in the grid. The poster is the interface: an index, a headline, four fields (one of them empty), and a composer on the baseline.

This fits a reading surface, a specification, a catalog, and a tool that wants to look decided. It is a poor fit for a game, a marketplace, a night dashboard, and any screen that needs several hues to separate categories.

The empty module is part of the layout. Filling it so the sheet looks "finished" removes the style.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the paper, and `surface-raised` is the same paper. A field does not lift by changing fill. The hairline is the edge. Ink on this paper is about 18:1. Long text uses that pair.
- `primary` is the same ink. `primary-foreground` is the paper, for the reversed commit control and for a single reversed line when a module needs to invert. A reversed module is a whole field, one line tall or more, and a screen keeps to one of them.
- `muted` is the only gray, for labels, the empty field's index, and secondary facts. It is about 8.9:1 on `surface`. It is not a cool blue-gray, and it is not a fill.
- `accent` is the signal red, about 8:1 on `surface` for the numeral and about 8:1 for paper type on a solid accent (the solid is reserved for the specimen of the token, not for buttons). In a product view the accent appears once: the active index at display size. The same numeral repeated at label size stays ink, so the red remains one mark.
- `danger` is a darker red, about 12:1 on `surface`. It is the error sentence and the error baseline. It does not decorate, and it does not sit beside `accent` as a second signal. A view that is not in an error state does not show it.
- `border` is the ink, at `rule-width` (1px). It is the mast line, the break between bands, and the split between fields. Contrast against `surface` matches the body pair. A lighter gray rule reads as a wireframe and is outside this system.

One view holds paper, ink, and the signal. The error red appears only with an error sentence. A second accent hue, a tinted field, or a gradient is a different system.

## Typography

A neutral grotesk. The intended faces are Helvetica, Neue Haas Grotesk, and Univers. The reference does not load a remote font. `--font-sans` names Inter first, then Helvetica Neue, so a machine where Helvetica is only a metric alias still resolves to a grotesk.

- The display index is weight 600, about 148px on a wide sheet, 96px from 1080px down, and 64px below 800px. Tracking is `tracking-display` or slightly tighter (`-0.05em`). Line-height is near 0.86. It is set in `accent`. One per view.
- The headline is the same weight, lowercase, flush left, about 104px on a wide sheet, 72px from 1080px down, and 44px below 800px. Tracking is near `-0.045em`. Line-height is near 0.96, with a little space under the second line so a descender does not meet the deck. It is ink. It is not uppercase, not italic, and not centered.
- Section titles are lowercase, weight 600, about 40px (32px below 800px), tracking `-0.03em`, line-height near 1.05.
- Body is 16px, line-height 1.5, weight 400, ragged right. The measure stays under about 42em. There is no justified text.
- Field titles are 18px, weight 500, line-height 1.3. Labels are 12px, weight 500, uppercase, tracking `tracking-label` (0.14em, tightening to 0.08em below 800px).
- The commit label is 14px, weight 500, sentence case. It is not tracked uppercase.
- One family only. A monospace for paths, a serif for headlines, or a script for emphasis adds a second voice. Numerals use tabular figures in the same grotesk.

## Spacing & layout

The sheet is a 12-column grid. The column, the gutter, and the margin are the layout. Elements sit on fields: span 3, 4, 5, 6, 8, or 12. Nothing is centered in the viewport, and nothing is nudged off the column to look lively.

- Wide margin is 56px, 40px from 1080px down, 20px below 800px. Column gutter is 24px, then 16px. Below 800px the row becomes one column in this order: display index, headline, deck, meta. The meta is the first side column to leave the row.
- The poster is at least one viewport tall. The index and the headline sit in the upper part. A flexible blank separates them from the fields, with a floor of 36px. On a tall screen the blank grows. On a short screen it shrinks to the floor. It is not removed.
- Fields are four columns from 800px up, two columns from 520px to 799px, and one column below 520px. Padding inside a field is 16px 18px 20px. The empty field keeps its index and no sentence. It is the last thing to drop, and in this system it does not drop.
- Bands separate by a 1px rule and 48px of padding (32px below 800px). The rule stays 1px at every width.
- The composer is a label, a baseline, and the commit control, on one row from 800px up. Below that, the control becomes full width. The baseline and the control stay 44px tall.
- The console is three columns: time, name, line. Below 640px the time and the name share a line and the sentence moves under them. The 2px signal rule stays on the left.
- Touch targets (the commit control, the quiet control, the field) are at least 44px. Labels and indexes are not targets.

Text is flush left, ragged right, aligned to the top of its field. A centered stack, even with the right typeface, is off this sheet.

## Components

- **Poster.** A running head in the label style, then the display index and the headline, then the meta in the open field (status, count, bytes), then the ruled fields, then the composer. The first screen is this sheet. A marketing hero with a centered slogan is a different object.
- **Fields.** Four modules sharing 1px rules. Each has an index and, except the empty one, a title and one sentence. The live field is the one whose index matches the display numeral. Its label-size index stays ink.
- **Commit control.** `primary` fill, `primary-foreground` label, 1px `primary` border, radius 0, height 44px. One per view. Hover and press invert it to paper with ink type. The invert also runs on `:active` for a coarse pointer. It does not scale, lift, or move.
- **Quiet control.** Paper, ink type, 1px `border`. Hover and press fill it with `primary`. Disabled is `muted` type and a `muted` rule, still fully opaque, still the same rectangle.
- **Stop.** A quiet control whose resting type and rule are `danger`. Hover fills it with ink, not with `danger`. `danger` is never a resting fill.
- **Composer and fields.** A visible label. A baseline, not a box: transparent fill, 1px `border` on the bottom only, radius 0, 16px type. Placeholder text is not the label. Focus draws `shadow-focus` (a 3px paper gap and a 2px ink ring). The caret is ink, so focus does not spend the signal red.
- **Error.** The baseline and the sentence switch to `danger`. The sentence stays. Color is not the only carrier.
- **Index mark.** A tabular numeral. It is not a pill, not a chip, and not a colored sticker. The display size may use `accent`. The label size uses ink, or `muted` when the field is empty.
- **Console.** Rows, not bubbles. Time, name, line. No avatar, no tail, no colored name. The latest agent row carries an inset 2px `accent` rule. That rule is the signal for the console view, which has no display index.
- **Link.** Ink, a 1px underline, offset 3px. Hover does not recolor it to `accent`.
- **Focus.** `shadow-focus` on controls. The ring is ink, visible on paper and, with the paper gap, on the ink commit control. Removing it without a replacement is off this sheet.

## Motion

Almost none. Color on a control changes in `duration-ui` (120ms), `ease-ui` (linear). Nothing translates, scales, fades in, or parallaxes. The blank does not animate when it grows. The system adds no keyframe animation.

Under `prefers-reduced-motion`, the color change is instant. The invert on hover and press remains, so the control still shows its state.

## Accessibility

- Body ink on paper is about 18:1. `muted` is about 8.9:1. `accent` as a numeral is about 8:1. `danger` text is about 12:1. Those are the pairs for reading.
- The 1px ink rule is the boundary. It clears the non-text contrast need because it is the same ink as the body. A gray hairline does not.
- The signal red is not the only sign of the active field: the numeral matches the display index, and the console row also carries its sentence.
- The error state keeps the words. The disabled control stays opaque and is removed from the tab order in a product build; the reference shows it disabled.
- Focus is the ink ring. It is not the signal red, because every control must be able to show focus without spending the one accent.

## Don't

- No second hue, no tinted card, no gradient, no photography, no illustration, and no icon family. The grid and the type are the picture.
- No color block used as decoration. A red rectangle behind a headline, a primary-colored square, a circle, or a triangle belongs to a poster of shapes, not to this sheet.
- No radius. `radius-full` is 0 here. A pill, an avatar, and a rounded device shell are off-style.
- No shadow, no blur, no glass, no grain, no glow, and no perspective floor. `shadow-sm`, `shadow-md`, and `shadow-lg` are `none`.
- No centered headline, no justified paragraph, no uppercase display, and no weight above 600. The label is the only uppercase.
- No second type family. Paths, times, and indexes stay in the grotesk, with tabular figures.
- No opacity used to create hierarchy. Disabled is `muted`, not a faded ink.
- No filled `danger` or `accent` button. The commit control is ink.
- No extra accent mark in a view that already has the display index. No red rule, red word, and red button sharing that screen.
- No filling the empty module to balance the row. No dropping it on a narrow sheet.
- No neon grid, no dusk sky, and no serif broadsheet. Those are other sheets that also care about structure.
