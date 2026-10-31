# Travertine — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A room of honed stone, and one object in it. The ground is warm ivory, not
white and not beige-yellow. Type is charcoal. A single bronze hairline is the
only ornament, and it is short. Space is the luxury. Nothing shines, nothing
is striped, nothing asks to be tapped twice.

Fits a gallery viewing, a scent, a vessel, a hotel suite, a maison object.
It is a poor fit for tools, games, weather, and anything that needs a badge.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the stone. `surface-raised` is a lighter slab, used rarely, for
  a sheet of paper on the stone. Do not stack slabs.
- `surface-foreground` and `primary` are the same charcoal. The action is
  charcoal, not a bright fill. `primary-foreground` is the lighter stone, for
  the rare solid button.
- `muted` is for the aside and the dimension. It is still dark enough to read.
- `accent` is bronze. It colors one short rule and one eyebrow. It is not a
  button and not a background.
- `danger` is a dried red for a cancellation. The word is required.
- `border` is the long hairline. One pixel. It separates a list. It does not
  frame a card.

## Typography
- The object name is a text serif at weight 400. Large, 72–112px, tight
  line-height, slight negative tracking. Never black, never condensed.
- Eyebrows and the action are a grotesque, 12px, uppercase, tracking near
  0.2em. They are small so the serif can be large.
- The sentence under the name is the same serif, 18px, measure under 36
  characters. A wide paragraph becomes a website.
- Scale: name 72/112, sentence 18, eyebrow 12, list 16.

## Spacing & layout
- The cover is mostly stone. Padding 64 → 96 on the left. The name sits in
  the upper left, not the center.
- A dimension column may sit at the lower right, far from the name. The gap
  between them is the composition.
- Vertical rhythm inside a group is 28–40. Between groups, 64–96.
- One column of reading. A second column is a caption, not a dashboard.

## Components
- **The bronze rule:** 64–80px wide, 1px, `accent`. One per screen, under the
  name. A full-width bronze bar is off-style.
- **The action:** a tracked uppercase grotesque with a 1px `border` underline,
  not a filled pill. Hover does not grow a shadow. It shortens nothing; the
  underline may shift to `accent`.
- **Lists:** rows separated by 1px `border`, generous vertical padding, label
  left, value right. No cards, no icons.
- **Focus:** `shadow-focus`, a bronze ring. Shadows otherwise are `none`.
- **Radius:** the whole scale is 0.

## Motion
- `duration-still` (160ms). Color of an underline. Nothing travels, nothing
  fades up.
- Under `prefers-reduced-motion`, the same color change remains.

## Don't
- No gloss, no gradient sky, no water beads, no color fogs.
- No pills, no drop shadows, no rounded cards, no photography stand-in boxes.
- No seal, no hazard stripe, no sun disc, no leaf green, no coral.
- No second metal. Bronze once.
- No bold grotesque headline. The serif is the name; the grotesque is the whisper.
