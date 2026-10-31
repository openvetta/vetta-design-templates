# Frutiger Aero — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A forecast you could believe was printed on a sunny window. The page is open
sky. Controls are round and glossy, with a painted white highlight along the
top, like a water bead. Leaf green is the living part. It is daylight, hopeful,
and a little bit toy-like. It is not a night window and it is not flat.

Fits weather, lightweight consumer tools, and products that want technology to
feel like weather and plants. It is a poor fit for finance, law, and night.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the sky. `surface-raised` is a cloud-white card on it.
- `surface-foreground` is deep water for text. `muted` is for the secondary line.
- `primary` is the water blue of the main action. `primary-foreground` is nearly
  white, and it must sit on the blue, not on the sky.
- `accent` is leaf. It marks a living state (clear air, a good day), not a
  second button style.
- `danger` is a storm red, used for a warning, not for decoration.
- `border` is a horizon blue for hairlines on the white cards.
- `gloss` is the highlight painted on a round control. It is a gradient token,
  not a blur of the page behind.

## Typography
- A humanist grotesque. Titles are bold, not ultra-black. Slightly tight
  tracking on the temperature, open tracking nowhere else.
- The temperature is the display: 56/72, bold. Everything else is 14–18px.
- No serif, no mono, no stencil.

## Spacing & layout
- The sky is the page. A white forecast card floats on it with `radius-xl` and
  `shadow-lg`. Padding inside the card 20 → 28.
- Bubbles are circles of water, behind or beside the card, never behind small
  text.
- One card on the cover. A row of three hours sits inside it, not as a bento
  of separate products.

## Components
- **Buttons:** `radius-full`, `gloss` across the top half, `shadow-md`. Primary
  is `primary` fill. A quiet button is `surface-raised` with a `border`.
- **Bubbles:** circles, a radial highlight at the upper left, sizes 24–120px.
- **Hours:** three equal cells inside the card, value bold, label `muted`.
- **Focus:** `shadow-focus`. Do not remove the gloss when the ring appears.
- **Radius:** nothing under `radius-sm` (12px). The bubble and the button are
  full circles. A square control is off-style.

## Motion
- `duration-float` (160ms). Hover brightens the gloss. Nothing bounces.
- Under `prefers-reduced-motion`, drop movement and keep the color.

## Don't
- No night scene, no backdrop blur, no colourless glass panel.
- No hard offset shadow, no clay thickness, no hazard stripe.
- No sharp corners and no 4px poster frames.
- No black void and no chrome type.
- Green is a plant, not a brand electric on black.
