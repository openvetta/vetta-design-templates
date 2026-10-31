# Cyanotype — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A sheet fresh from a sun-print frame. The ground is Prussian blue. Every mark
is a white line or a white type. There is a faint grid, a plan, dimensions, and
a title block in the corner. It is a drawing, so decoration that is not a line
does not belong.

Fits architecture, maps, fabrication, and technical explainers. It is a poor
fit for marketing, food, and portrait-led products.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the exposed sheet. `surface-raised` is a slightly deeper blue
  for the title block, still the same chemistry.
- `primary` and `surface-foreground` and `border` are the white line. Buttons
  invert: white fill, `primary-foreground` blue type.
- `accent` is a lighter cyan for a secondary line, a dimension witness, or a
  hover. It is still a line color, not a fill.
- `muted` is a washed white for notes that are not the cut line.
- `danger` is a pale coral used only for a revision cloud. Rare.
- `grid-line` is the sheet grid. It sits behind the drawing and never rises to
  the strength of `border`.

## Typography
- A plain grotesque for the sheet title. A monospace for dimensions, the title
  block, and revision notes.
- White on blue is the only reading pair. Do not set blue type on white except
  inside an inverted button.
- Scale: sheet title 28/40, room labels 14 uppercase tracked, dimensions 12 mono.
- All-caps is for labels and the title block, not for sentences.

## Spacing & layout
- The sheet runs near the viewport edge. Inset 16 → 28.
- The drawing occupies the cover. The title block anchors the lower right and
  does not float in the center.
- Grid is 24px. Walls and rooms snap to it.
- Dimension strings sit outside the object they measure, with a 1px witness line.

## Components
- **Walls:** 2px `border` on transparent. Fills are rare; a room may take
  `surface-raised` to separate from the ground.
- **Title block:** a ruled table, mono, `surface-raised`, 1px `border`. Fields:
  sheet, scale, date, name.
- **Buttons:** white fill, blue type, square, no shadow. Hover shifts the border
  to `accent`. Active fills with `accent` and keeps blue type.
- **Focus:** `shadow-focus`, a white ring.
- **Radius and shadow:** both scales are 0 or `none`. A rounded room is a
  drawing error.

## Motion
- `duration-draw` (120ms). Lines do not animate their length in the product UI.
  Hover only changes a line's color.
- Under `prefers-reduced-motion`, the same color change remains.

## Don't
- No photographs, no gradients, no drop shadows, no rounded corners.
- No dark-gray developer theme with a blue link. The entire ground is the blue.
- No black ink. The chemistry is white on blue.
- No decorative frames that are not the sheet border or the title block.
- No more than one revision coral on a sheet.
