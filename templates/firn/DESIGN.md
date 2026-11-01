# Firn — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A still-water house at service, the allocation already on the counter. The
ground is pale ice paper, cool and gray, not white and not blue sky. Three
cores stand in a row: pale ice, wet stone, dark slate. They are flat mineral
steps, cut vertical, full height. Type on the paper is deep marine ink. One
steel line, short, sits under the sentence. Nothing fizzes, nothing frosts,
nothing draws a mountain.

Fits a water house, a cold cellar, a mineral ledger, a tasting allocation.
It is a poor fit for weather, soft drinks, spas, and glass dashboards.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the ice paper, on the ledger side. `surface-raised` is a
  lighter chip, used only for a note. Do not build cards from it.
- `band-pale`, `band-mid`, and `band-deep` are the three cores. They are flat
  fills. They are not a gradient and not a horizon. `band-deep-foreground`
  is the type on the slate core. `band-deep-muted` is its secondary line.
- `surface-foreground` and `primary` are the marine ink. The action is ink,
  not a bright fill. `primary-foreground` is the light paper, for type on
  the slate core or on a solid ink control.
- `muted` is the ledger label and the core's secondary line. It stays cool
  and dark enough to read on `band-pale` and on `band-mid`.
- `accent` is steel. It colors one short rule and the words "On service".
  It is not a button, not a band, and not a frost.
- `danger` is a dried red for a lot sent back. The word "Returned" is required.
- `border` is the hairline between ledger rows. One pixel. Core edges meet
  flush; they do not wear a card stroke.

## Typography
System stacks only. No webfonts.
- The source name is a grotesque at weight 500, 96–132px, tight line-height,
  slight negative tracking. One word, or two short lines. Not a serif monument
  and not a black poster.
- The sentence under it is the same grotesque, 18px, weight 400, measure
  under 34 characters.
- Ledger labels are 12px, uppercase, tracked, `muted`. Values are 16–18px
  in the ink.
- Core names are 13px, uppercase, tracked. The temperature is the grotesque
  at 64–80px, weight 400, tabular figures.
- "On service" is 12px, uppercase, tracked, `accent`.
- Scale: name 112, sentence 18, figure 72, ledger 16, label 12.

## Spacing & layout
- The first viewport is the counter. The cores occupy the left, about two
  fifths, and run from the top edge to the bottom edge with no outer margin.
  Three equal vertical columns, flush.
- Each core carries its depth log from just under the name to just above the temperature. The stations are equal rows. They are the body of the sample, not a caption floating in a blank panel.
- The ledger occupies the right, padded 48 → 64. The name sits at the top.
  The steel line sits under the sentence. The rows fill the middle. The
  action and the returned line sit on the bottom edge.
- Ledger rows are equal cells. They tile the open height. A row is a 1px
  rule, a label, and a value.
- One source is on service. The others stay in the rack. A second accent
  rule is off-style.
- At 800px the cores become a row of three vertical slabs, about 240px tall,
  still divided on the vertical. They do not become horizontal stripes. The
  name steps to 64px. Ledger rows stay full width and at least 48px tall.

## Components
- **Core:** a full-height flat fill. Name and place at the top. A depth log
  of ruled stations tiles the body: elevation at the left, a one-word bed
  at the right, in the core's own type color. Temperature sits at the foot,
  with a short rule above the figure. No highlight, no inner shadow, no bubble.
- **On service:** the words, in `accent`, on the pale core only.
- **Steel line:** 64–80px wide, 1px, `accent`. One per screen, under the
  sentence.
- **Ledger row:** label left, value right, 1px `border`. No icons, no chips,
  no meters.
- **Reserve:** tracked uppercase grotesque, 1px `border` underline, target
  at least 44px. Hover moves the underline to `accent`. It does not fill.
- **Returned:** the word in `danger`, same size as a label, under the action.
- **Focus:** `shadow-focus`. Other shadows are `none`.
- **Radius:** the whole scale is 0.

## Motion
- `duration-still` (150ms). The underline changes color. Bands do not melt,
  numbers do not count up.
- On a touch screen there is no hover. Press sets the reserve line to `accent`.
- Under `prefers-reduced-motion`, the color change remains.

## Don't
- No sky, no sun, no grass, no cloud, no weather glyph, no temperature-as-forecast.
- No bubbles, no fizz, no condensation, no rounded glass, no airbrushed frost.
- No blur, no translucent panel, no night scene behind the type.
- No blueprint grid, no white linework on a Prussian field.
- No plaster tooth, no wax band, no warm mineral swatch.
- No bronze hairline on ivory stone, and no serif monument for the source.
- No horizontal stripes that read as a landscape. The cores stand upright.
- No second steel line. The accent is the short rule and the words "On service".
