# Blotter — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A formula card on a warm desk, with three blotter strips doing the work a
bottle would have done. The top strip is pale, the heart is rose paper, the
base is resin-dark. Each strip names its note and its share of the whole.
The ledger on the right is the same formula, line by line, and it sums to
one hundred. Scent is paper, type, and proportion.

Fits a perfume formula, a materials card, a blending bench, a sample
request. It is a poor fit for florals, bottle photography, weather, and
anything translucent or gummy.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the desk, a pink-tan board. `surface-raised` is the pale
  strip's paper when a note must sit on the desk. Do not build cards from it.
- `top`, `heart`, and `base` are the three strips. They are equal masses.
  `base` carries `primary-foreground` type. The others carry ink.
- `fiber` is the tooth, a fine vertical line inside each strip. It is not
  a pattern you can count from across the room.
- `surface-foreground` and `primary` are the same ink. The action is ink,
  not a bright fill.
- `muted` is the material role in the ledger. It stays readable on the desk.
- `accent` is the resin mark: the eyebrow "No. 18" and the focus ring.
  It is not a fourth strip.
- `danger` is a spoiled batch. The word "spoiled" is required.
- `border` is the hairline between ledger rows. One pixel.

## Typography
System stacks only. No webfonts.
- The formula name and each strip's note are a text serif at weight 400,
  40–72px, tight line-height, sentence case. Never black, never a script.
- Shares, roles, and the ledger are a grotesque, 12–13px, uppercase,
  tracking near 0.14em.
- The large share on a strip is the grotesque at 64px, weight 500, tabular
  figures. The percent sign is the same face at 18px.
- The sentence under the formula name is the serif, 18px, measure under
  36 characters.
- Type on `base` is `primary-foreground`.
- Scale: formula 40/68, note 36/44, share 64, sentence 18, ledger 13.

## Spacing & layout
- The cover is three strips and one ledger, and it fills the first viewport.
  Padding 28. The strips take about three fifths and stretch to the height
  of the ledger. Gap between strips is 14, so the desk shows through.
- Each strip is one note, one sentence, one share. The share sits on the
  right, vertically centered. Nothing else shares that edge.
- The formula name sits at the top of the ledger. Seven rows fill the
  middle and sum to 100. The request sits at the foot.
- At 860px a running line names the formula, then the three strips fill
  the rest of the first viewport. The ledger follows. The name steps to
  40px. The request stays a text action with a 48px target.

## Components
- **Strip:** one of `top`, `heart`, `base`; `fiber` as vertical tooth;
  `shadow-sm` along the top edge and `shadow-md` so it sits on the desk.
  Radius 0. No illustration inside it.
- **Share:** the number and a percent sign. One per strip. The three shares
  are 18, 34, and 48.
- **Ledger row:** material, role in `muted`, percent at the right, 1px
  `border`. The percents sum to 100 in the last rule's weight.
- **Request:** tracked uppercase grotesque, 1px `border` underline, not a
  filled shape. Hover moves the underline to `accent`.
- **Spoiled:** the word in `danger`, same size as a label, under the
  request. It does not recolor a strip.
- **Focus:** `shadow-focus`.
- **Radius:** the whole scale is 0.

## Motion
- `duration-still` (160ms). The underline changes color. Strips do not peel.
- On a touch screen there is no hover. Press sets the request color to
  `accent`.
- Under `prefers-reduced-motion`, the color change remains.

## Don't
- No bottle, no pump, no glass highlight, no droplet, no flower.
- No gummy translucency, no jelly shine, no airbrushed glow.
- No gold fan, no bronze hairline on empty stone, no wax band as the only mass.
- No newspaper columns, no washi, no tilted print.
- No script face and no handwritten ingredient list. The serif names the
  note; the grotesque counts it.
- No fourth color of paper. Pale, rose, and resin are the whole set.
- The shares must sum with the ledger. A strip that disagrees with the
  table is wrong.
