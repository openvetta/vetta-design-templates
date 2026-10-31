# Airbrush — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A studio cyclorama with three fogs of color: hot pink, cyan, and saffron. Edges
dissolve. Type sits in the calm between the fogs, sharp, so the haze stays a
ground and not a veil over the words. Nothing is glossy plastic, nothing is a
hard sticker, nothing is a clay toy.

Fits beauty, fragrance, music artwork, and a single product drop. It is a poor
fit for tools, data, and safety information.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the pale studio. `surface-raised` is a cleaner patch where type
  and controls sit so they are not lost in the fog.
- `surface-foreground` is a soft ink for reading. `muted` is the caption.
- `primary` is the pink fog's dense core, used for the action and one orb.
  `primary-foreground` is a pale pink-white that clears on that core.
- `accent` is cyan, the second fog and a link. `saffron` is the third fog, a
  fill only, with `saffron-foreground` if a short label must sit on it.
- `danger` is a true red for an error, darker than the pink so it is not
  another blush.
- `border` is a faint warm line, used sparingly. The fogs do the separating.

## Typography
- A grotesque, light or regular for the product name at display size, medium
  for buttons. The haze is the drama; the type stays clean.
- Scale: name 56/84, section 28, body 16, caption 13.
- No black poster weight, no mono, no serif editorial column.

## Spacing & layout
- Orbs are large, blurred, and anchored to edges. They may be cropped by the
  viewport. They do not sit under paragraphs.
- The name and the action sit on `surface-raised` or in a gap between orbs.
- Padding 24 → 40. One product on the cover, three color chips, not a catalog.

## Components
- **Orbs:** circles, 180px and up, `filter: blur`, opacity under 0.85, colors
  `primary`, `accent`, and `saffron`. Blur is the material. Do not blur type.
- **Chips:** small rounds of the three fogs with a one-word name beside them
  on the pale ground, not on the fog.
- **Buttons:** `radius-full`, `primary` fill, no hard shadow. `shadow-md` is a
  soft color wash. Hover lifts opacity of the fill, not a plate offset.
- **Focus:** `shadow-focus`.
- **Radius:** from 16px upward. A square chip is off-style.

## Motion
- `duration-haze` (200ms). Hover softens a shadow. Orbs do not drift on a loop.
- Under `prefers-reduced-motion`, orbs stay where they are and do not pulse.

## Don't
- No water-bead gloss, no sky-blue page, no clay offset, no sticker border.
- No sharp hazard marks, no pixel grid, no black void.
- No text on top of a blurred orb. Move the sentence onto `surface-raised`.
- No fourth fog. Pink, cyan, saffron.
- No photographic grain as a file. The fog is a blurred circle.
