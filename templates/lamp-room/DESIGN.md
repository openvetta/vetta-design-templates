# Lamp Room — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A library after hours. The ground is oxblood-black. Type is warm paper. Candle
amber is the only light that acts, and book spines carry wine, forest, and
navy as dyes — objects on a shelf, not a palette you paint the page with.
Quiet, close, and a little worn.

Fits reading rooms, holds, syllabi, small presses, and evening culture. It is
a poor fit for daylight tools, sport, and anything that should feel new.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the unlit room. `surface-raised` is the desk under the lamp.
- `surface-foreground` is warm paper for reading. `muted` is for the shelfmark.
- `primary` is candle amber. `primary-foreground` is the dark wood it sits on.
  Amber marks the hold action and the current line.
- `accent` is a paler brass for rules and the focus ring. It is not a second
  button color.
- `spine-wine`, `spine-forest`, and `spine-navy` are dyes for spine objects
  only, with paper type if a short title must sit on them.
- `danger` is for an overdue mark. One per screen.
- `border` is a worn brown rule, lighter than the room so it shows.

## Typography
- A transitional serif for titles and sentences. Titles are regular or medium,
  not black, with slight positive tracking on small caps labels.
- UI labels (shelfmark, due date) may be the same serif in small caps styling:
  uppercase, 12px, tracked.
- Scale: title 36/48, section 28, body 17, label 12. Line-height 1.55.
- No grotesque dashboard type. No mono except a call number if the serif
  figures are unclear — prefer serif.

## Spacing & layout
- The cover is a shelf and a hold, not a hero. Padding 24 → 40.
- Spines are vertical blocks in a row, touching, like books. Gap 0 between
  spines; 24px before the next group.
- Reading measure 60–70 characters on `surface-raised`.
- Radius stays at 2–4px. A book is not a pill.

## Components
- **Spines:** fixed widths, dyes from the spine tokens, a short title set
  vertically or in small type at the foot. They are objects, not buttons,
  unless the whole spine is the hit target at 44px or more.
- **Buttons:** candle fill, dark type, `radius-sm`, `shadow-sm`. A quiet action
  is a brass `border` on `surface-raised`.
- **Rows:** a title and a due date, separated by `border`. The active hold
  takes a 2px `primary` rule on the left.
- **Focus:** `shadow-focus` in brass.
- **Overdue:** `danger` type plus the word. Color is not the only signal.

## Motion
- `duration-lamp` (160ms). The amber fills. No page fades from black.
- Under `prefers-reduced-motion`, keep the color and drop any glow change.

## Don't
- No cream daylight page, no clay pastels, no gold deco fans, no glass blur.
- No pure black and no pure white. The room and the paper are both warm.
- No neon, no hazard yellow, no pixel grid.
- No more than three spines in a row on the cover. A longer shelf is a list.
- Spine dyes are not text colors and not button fills.
