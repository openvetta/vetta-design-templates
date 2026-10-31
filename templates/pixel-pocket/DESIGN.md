# Pixel Pocket — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A pocket inventory. Every edge lands on a 4px grid. Blocks are flat color.
Corners are steps, not curves and not bevels. The ground is a dark indigo, and
the bright inks are items, not a rainbow theme. It should feel like a bag you
open, not like a desktop from 1995.

Fits small games, collectibles, habit toys, and playful tools that can live on
a grid. It is a poor fit for finance, long text, and anything that needs a
photograph.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the pocket lining. `surface-raised` is an empty slot.
- `surface-foreground` is the paper-white pixel. `border` matches it: slots are
  drawn, not hinted.
- `primary` is the coral item ink, with `primary-foreground` dark enough to sit
  on it.
- `accent` is the mint cursor. It marks the selected slot and the focus ring.
- `pixel-coin` and `pixel-water` are item dyes, each a whole slot, not text.
- `danger` is a heart-empty or a broken item. One per screen unless the bag
  really is in trouble.
- `muted` is for counts and captions on the dark ground.

## Typography
- A monospace, bold, uppercase for names and buttons. Tracking stays open so
  letters do not melt together.
- Sizes snap to the grid: 12, 16, 20, 28, 40. No 15px, no 18px.
- Body sentences are rare and short. The inventory speaks in labels.
- No serif, no thin weights, no webfont that pretends to be a bitmap face.
  The grid does that job.

## Spacing & layout
- The module is `pixel` (4px). Padding, gaps, and type sizes are multiples of it.
- Slots are 64px or 72px squares with a 4px gap. Do not pack them tighter.
- The cover is the bag: a name, a row of hearts, a grid of slots. Not a hero
  sentence.
- Page padding 16 → 24, still on the grid.

## Components
- **Slots:** `surface-raised`, 4px `border`, `shadow-md` as a hard step. The
  selected slot swaps the border to `accent`.
- **Hearts and items:** solid squares of `danger`, `primary`, `pixel-coin`, or
  `pixel-water`. No circles, no anti-aliased icons.
- **Buttons:** flat `primary` or raised dark, square, hard shadow. Active steps
  the shadow to `shadow-sm` and translates 2px down-right, as if the sprite moved.
- **Focus:** `shadow-focus`, mint outside a dark gap.
- **Radius:** every step is 0, including `radius-full`. A circle is off-style.

## Motion
- `duration-step` (60ms), linear. Sprites hop one grid cell. They do not ease.
- Under `prefers-reduced-motion`, keep the color change and drop the hop.

## Don't
- No border-radius above 0, no gradients, no blur, no bevel highlight.
- No silver window chrome, no title bars, no menu-bar gray.
- No photoreal items and no anti-aliased illustration.
- No more than four inks plus the dark ground and the paper pixel.
- No body copy longer than two lines inside a slot.
