# Wax Coat — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A finish plate pulled from a materials index and set on cool paper. The
plate is the picture: mineral plaster with a visible tooth, and one matte
wax coat along its foot. The name of the finish sits in the margin, large
and quiet. Space around the plate is the margin of the index, not an empty
room. Nothing shines, nothing is round, nothing illustrates a place.

Fits a finish schedule, a sample request, a plaster or wax specification,
a material library. It is a poor fit for weather, reservations, diaries,
games, and anything that needs a badge or a mascot.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the index paper, cool and slightly green-gray. `surface-raised`
  is a lighter sheet, used only if a second note must sit on the paper. Do
  not build cards from it.
- `plaster` is the body of the plate. `pit` is the darker mineral speck in
  the tooth. Neither is a panel behind type.
- `surface-foreground` and `primary` are the same ink. The action is ink,
  not a bright fill. `primary-foreground` is paper, for type that sits on
  the wax coat.
- `muted` is the specification label. It stays readable.
- `accent` and `wax` are the coat. `wax` is the band. `accent` colors one
  eyebrow and the focus ring. The coat is not a button and not a page
  background.
- `danger` is a dried red for a refused plate. The word "refused" is required.
- `border` is the hairline around the plate and between specification rows.
  One pixel. It does not frame the page.

## Typography
System stacks only. No webfonts.
- The finish name is a text serif at weight 400, 72–104px, tight line-height,
  slight negative tracking. Never black, never condensed, never all capitals.
- The eyebrow, the specification, and the request are a grotesque, 12–13px,
  uppercase, tracking near 0.18em.
- The sentence under the name is the same serif, 18px, measure under 32
  characters.
- The plate number impressed in the plaster is the serif at 22px, in `pit`,
  low contrast on purpose.
- Type on the wax coat is the grotesque, 12px, `primary-foreground`.
- Scale: name 64/104, sentence 18, eyebrow 12, spec 13, section 36.

## Spacing & layout
- The cover is one plate and one margin, and it fills the first viewport.
  Padding 48. The plate takes the left, about three fifths, and stretches
  to the height of the margin column.
- The name sits at the top of the margin. The specification sits at the
  foot, level with the wax coat. The gap between them is open paper.
- The wax coat is 56px tall, the full width of the plate, along the foot
  only. It is a band, not a scene.
- One column of reading in the margin. A second column would be another plate.
- At 960px the plate stacks above the margin. The plate keeps a fixed height
  near 300px. The name steps to 64px. The request stays a text action with
  a 48px target. Specification rows stay full width.

## Components
- **Plate:** `plaster` fill, mineral tooth from two speck densities in `pit`,
  a 1px `border`, and `shadow-md` so it sits on the paper. Radius 0. No
  picture inside it.
- **Wax coat:** 56px, `wax`, a 1px lighter lip along its top edge. One per
  plate. A second coat is a different plate.
- **Specification row:** label in `muted`, value in ink, separated by 1px
  `border`. No icons, no chips.
- **Request:** tracked uppercase grotesque, 1px `border` underline, not a
  filled shape. Hover moves the underline to `accent`. It does not grow a
  shadow.
- **Refused:** the word in `danger`, same size as a label. It does not
  replace the plate.
- **Focus:** `shadow-focus`. Other shadows belong only to the plate.
- **Radius:** the whole scale is 0.

## Motion
- `duration-still` (160ms). The underline changes color. Nothing travels.
- On a touch screen there is no hover. Press sets the request color to
  `accent`.
- Under `prefers-reduced-motion`, the color change remains.

## Don't
- No gloss, no gradient wash, no beads, no round gel, no color fog.
- No pills, no thick black sticker borders, no hard offset shadows.
- No bronze hairline as the only ornament, and no empty stone field where
  the plate should be. The plate is the mass.
- No washi, no tilted print, no punched ticket, no kraft desk.
- No gold fan, no lacquer night, no emerald jewel.
- No cloth measurements, no book spines, no hazard stripe.
- No second metal. The wax is the only warm dark.
- No bold grotesque headline. The serif names the finish; the grotesque
  specifies it.
