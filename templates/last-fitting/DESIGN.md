# Last Fitting — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A fitting room with the lights low. The ground is dark wool, warm, not blue
and not oxblood. Type is ivory. Rules are the color of undyed cloth. The
content is measurements: a few numbers, a cloth name, a time. No ornament, no
sheen, no object floating in a void. Precision is the luxury.

Fits tailoring, a made-to-order appointment, a cloth book, a quiet checkout
for one garment. It is a poor fit for weather, beauty campaigns, games, and
stone galleries.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the wool. `surface-raised` is a second cloth, barely lifted,
  for a note. Do not build cards out of it.
- `surface-foreground` and `primary` are ivory. `primary-foreground` is wool,
  for type on an ivory control.
- `muted` is for the unit and the secondary label. It stays warm gray, not
  blue-gray.
- `accent` is a lighter cloth thread for the focus ring and for one eyebrow.
  It is not gold and not chrome.
- `danger` is a faded rose for a missed appointment. The sentence says so.
- `border` is the long rule between measures. Visible, thin, never a frame
  around the page.

## Typography
- The appointment title is a grotesque at weight 400, 56–80px, slight negative
  tracking, line-height near 1. Not a serif monument and not a black poster.
- The numbers are the same grotesque at 400, 40–48px. They align on a column.
- Labels are 12px, uppercase, tracked, `muted`. They sit above or beside the
  number, never inside a chip.
- A short sentence, if needed, is 16px ivory, measure under 42 characters.
- No serif display. The cloth does not want a literary face.

## Spacing & layout
- Padding 56 → 88. The title occupies the upper left. The measures are a
  single column under it, each row at least 72px tall.
- Numbers align to one vertical edge. Labels align to another. The space
  between label and number is wide on purpose.
- One screen, one garment. A second garment is another page.
- Nothing is centered as a hero card.

## Components
- **Measure row:** label, number, optional cloth word. Separated by 1px
  `border`. No icons, no progress, no color chip for the cloth. The cloth is
  a word.
- **Confirm:** ivory fill, wool type, square, padding 14px 22px, no shadow.
  One per screen. A second button is a text action with an underline, `accent`
  on hover.
- **Time:** set as type, not as a clock face and not as a giant isolated
  degree. It belongs to the eyebrow or to a row.
- **Focus:** `shadow-focus`. All other shadows are `none`.
- **Radius:** the scale is 0. A pill is off-style.

## Motion
- `duration-still` (140ms). The underline or the fill changes. No slide, no
  glow pulse.
- Under `prefers-reduced-motion`, the color change remains.

## Don't
- No stone ground, no bronze line, no gallery serif monument.
- No book spines, no candle amber, no oxblood room.
- No chrome orb, no glass blur, no iridescence.
- No gloss, no sky, no color fog, no hazard yellow.
- No rounded controls, no drop shadows, no badge, no icon row.
- Ivory is the cloth's highlight. Do not add a second metal.
