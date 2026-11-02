# Field Drawer — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A drawer pulled from a field cabinet and left open on the bench. The board
is khaki. Eight finds sit in a darker recess, each one a block of its own
material, each one numbered. The ledger on the right repeats those numbers
with a depth. Nothing depicts a landscape. The tray is the picture.

Fits a collection, a dig log, a materials intake, a conservation bench.
It is a poor fit for weather, travel posters, games, and anything that
needs a mascot or a hazard stripe.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the khaki board. `surface-raised` is the lighter face of a
  pale specimen, not a card behind type.
- `recess` is the tray bed, darker than the board, so the blocks sit down
  into it. It is not a panel for text.
- `chalk`, `bone`, `sand`, `clay`, `shale`, `oxide`, `slate`, and `char`
  are the eight finds. They are the only fills that large. One block, one
  material. Do not gradient them into each other.
- `surface-foreground` and `primary` are the same ink. `primary-foreground`
  is the light face used on `shale`, `oxide`, `slate`, and `char`.
- `muted` is the depth and the bench note. It stays readable on khaki.
- `accent` is oxidized clay. It colors the bench eyebrow and the focus
  ring. It is not a second specimen and not a stripe.
- `danger` is a dried red for a voided find. The word "voided" is required.
- `border` is the hairline between ledger rows and around the recess.
  One pixel. It does not frame the page in black.

## Typography
System stacks only. No webfonts.
- The site name is a text serif at weight 400, 56–72px, tight line-height,
  sentence case. Never black, never condensed, never all capitals.
- Find numbers, the drawer label, and the ledger are a grotesque, 12–13px,
  uppercase, tracking near 0.14em.
- The sentence under the site name is the same serif, 18px, measure under
  36 characters.
- Type on a dark find is the grotesque, 13px, `primary-foreground`.
- Scale: site 40/68, sentence 18, eyebrow 12, ledger 13, section 36.

## Spacing & layout
- The cover is one recess and one ledger, and it fills the first viewport.
  Padding 28. The recess takes about three fifths and stretches to the
  height of the ledger.
- Eight blocks, four across and two down, gap 10. Each block is a face,
  not a thumbnail. Number at the top, material and depth at the foot.
- The site name sits at the top of the ledger column. The eight rows fill
  the middle. The request sits at the foot, level with the last block.
- One column of reading beside the tray. A second column would be another
  drawer.
- At 860px the recess stacks above the ledger and keeps a height near
  420px. The grid becomes two columns and four rows. The site name steps
  to 40px. The request stays a text action with a 48px target.

## Components
- **Recess:** `recess` fill, `shadow-md` pressed into the board, a 1px
  `border`. Radius 0. No picture inside it.
- **Find:** one material token, `shadow-sm` as a lit top edge. Number,
  material, depth. No icon, no rounded pebble, no illustrated bone.
- **Ledger row:** number and material in ink, depth in `muted`, separated
  by 1px `border`. The row count matches the tray.
- **Request:** tracked uppercase grotesque, 1px `border` underline, not a
  filled shape. Hover moves the underline to `accent`. It does not grow a
  shadow.
- **Voided:** the word in `danger`, same size as a label, under the
  request. It does not replace a block.
- **Focus:** `shadow-focus`. The recess is the only mass with depth.
- **Radius:** the whole scale is 0.

## Motion
- `duration-still` (160ms). The underline changes color. Blocks do not lift.
- On a touch screen there is no hover. Press sets the request color to
  `accent`.
- Under `prefers-reduced-motion`, the color change remains.

## Don't
- No sky, no sun, no grass, no dune, no cartoon bone, no explorer costume.
- No hazard stripe, no stencil poster, no yellow on concrete.
- No white linework on a Prussian field. This is a tray, not a plan.
- No ice cores, no plaster tooth, no wax band, no honed-stone emptiness.
- No pills, no thick sticker borders, no hard offset shadows.
- No gradient that melts one find into the next. Each block is a single face.
- No second accent. Oxide is the eyebrow and the focus, not a decoration.
