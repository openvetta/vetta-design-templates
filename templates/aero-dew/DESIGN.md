# Aero Dew — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
An afternoon that has just been wiped clean. The ground is open sky, not an
app canvas and not a night scene. Controls are gel: opaque, rounded, with a
white highlight along the top edge and a soft drop into the blue. Water beads
sit in the margins. A single grass horizon closes the screen. The optimism is
sincere. Nothing is frosted, nothing is matte clay, and nothing is chrome.

Fits a weather reading, a day-of outing, a fresh status with one number.
It is a poor fit for finance, code, night reading, and anything that should
feel dry, printed, or expensive.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the sky behind the reading. `sky-top` and `sky-deep` build the
  vertical wash. They are not a second theme.
- `surface-raised` is the gel body. It is nearly white and opaque. The big
  temperature may sit on the sky in `surface-foreground`; figures inside the
  gel sit on `surface-raised`.
- `surface-foreground` is deep teal. It is the text color on sky and gel.
- `primary` is the darker teal at the bottom of a gel action. `primary-foreground`
  is the near-white label on that action. The action washes from `gel-top` down
  into `primary`, plus an inset highlight. It is not a flat fill and not a
  glass chip.
- `muted` is the aside on the sky and the secondary line inside the gel.
- `accent` is the sun. One disc. It is not a button and not a link.
- `grass` and `grass-deep` are the horizon only. They do not color buttons,
  badges, or type.
- `danger` is a storm red for a warning word. The word is required. It is not
  a bead.
- `border` separates rows inside the gel. The card itself has no stroke. Its
  edge is the highlight and `shadow-lg`.

## Typography
System stacks only. No webfonts.
- A humanist grotesque. The temperature is the display: weight 600, very tight
  line-height, slight negative tracking, 120–148px on the cover and 88px in
  the phone.
- The place is 13px, uppercase, tracking near 0.16em, weight 600.
- The sentence under the temperature is 18px, regular, measure under 28
  characters.
- Inside the gel, labels and figures are 14px. Figures are weight 600.
- Scale: temperature 88/148, place 13, sentence 18, gel 14, section title 32.

## Spacing & layout
- The cover is the sky. The temperature sits left, the gel sits right, both
  vertically centered above the grass. Padding 64 → 8vw, with at least 120px
  clear of the horizon.
- Beads stay in the margins. They do not cover the temperature or the action.
- The gel is one column, 300–340px. It does not become a dashboard of equal cards.
- Below the cover, section rhythm is 72–88. Page padding matches the cover.
- At 720px the two columns stack. The temperature comes first. The gel becomes
  the full width of the padded screen. The horizon stays at the bottom. Beads
  drop to two. Touch targets stay 48px.

## Components
- **Gel card:** radius `radius-xl` (28px), `surface-raised`, a white inset along
  the top, a soft lower inset of sky color, and `shadow-lg`. No border stroke.
  No blur of the sky behind it. The card is opaque.
- **Gel action:** full pill, 48px tall, the wash from `gel-top` into `primary`,
  a white top highlight, a darker inset along the bottom. The label is
  `primary-foreground`. Hover brightens slightly. Press moves it 1px down.
  It does not grow a hard offset shadow.
- **Beads:** circles from 16–64px, a white rim and a radial highlight. They
  are not buttons. At most six on a cover, two on a phone.
- **Sun:** one disc in `accent`, softer at the edge. It sits in an upper
  corner and does not tile.
- **Horizon:** one band of `grass`, a `grass-light` hill, and a `grass-deep`
  strip at the bottom edge. No flowers, no characters, no photographed landscape.
- **Rows:** inside the gel, a label left and a figure right, divided by 1px
  `border`. Each row is at least 44px tall.
- **Focus:** `shadow-focus`, a sun-colored ring.

## Motion
- Press is `duration-press` (140ms). Beads may drift a few pixels over
  `duration-drift` (9s), and only in the margins.
- Under `prefers-reduced-motion`, beads stay put. The press remains.
- On a touch screen, hover brightening does not exist. The 1px press is the
  feedback.

## Don't
- No backdrop blur, no translucent panel, no night city, no champagne-on-ink
  glass. The gel is opaque.
- No matte clay, no candy pastel slab, no hard offset shadow.
- No beveled gray window chrome, no pixel grid, no metal type.
- No second sun, no leaf illustration, no coral pill, no hazard stripe.
- The horizon is grass. It is not a photograph and not a brand landscape.
