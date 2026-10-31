# Y3K Chrome — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A void, and one object made of liquid metal. The ground is near-black. Type for
the object name is silver, as if milled. A single iridescent orb is the light
source. Specs are hairline rows. Nothing is a window, nothing is frosted, and
nothing tries to look like glass over a city.

Fits future objects, concept tools, and a single-product viewer. It is a poor
fit for reading, commerce grids, and anything that needs many equal items.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the void. `surface-raised` is a recessed spec plate, one step up.
- `surface-foreground` is cool white for specs. `muted` is for units.
- `primary` is the silver metal. `primary-foreground` is the void, for type on
  a silver control. Display type uses `metal` as a fill, not a flat `primary`.
- `accent` is a cold cyan edge. `iris` is the magenta side of the same orb.
  They appear on the orb and on one highlight, not as a palette of buttons.
- `danger` is a hot fault light. Rare.
- `border` is a dim metal edge on spec rows.

## Typography
- A geometric grotesque. The object name is heavy, tight tracking, large.
- Specs are 13–14px, regular, with mono for the figures only.
- Scale: name 56/80, section 28, body 15, spec 13.
- Do not outline the metal type. The gradient fill is the material.

## Spacing & layout
- The object is centered. Specs sit under it in one column, full measure of the
  plate, not a bento of equal cards.
- Padding 24 → 40. The orb may bleed behind the name but not behind spec text.
- One orb. A second orb is a different product.

## Components
- **Orb:** a circle, `metal` mixed with `accent` and `iris` in a conic fill.
  It is not a button.
- **Name:** `metal` clipped to the glyphs.
- **Spec rows:** label in `muted`, value in `surface-foreground`, 1px `border`
  under each row. No cards.
- **Buttons:** silver fill, void type, `radius-md`, `shadow-sm`. Hover adds
  `shadow-md` (a cyan rim). Active removes the rim.
- **Focus:** `shadow-focus` in `accent`.
- **Radius:** small on controls, full only on the orb. No 32px clay corners.

## Motion
- `duration-glide` (180ms). The rim brightens. The orb does not spin forever.
- Under `prefers-reduced-motion`, the orb stays still and the rim change remains.

## Don't
- No backdrop blur, no translucent panels, no night-city photograph.
- No champagne gold, no paper texture, no hazard stripes.
- No rainbow UI. Iridescence lives on the orb and the name only.
- No soft pastel, no rounded marketing hero with three equal features.
- No blur on the type.
