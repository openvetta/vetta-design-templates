# Site Stencil — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A site-office board nailed to a hoarding. The ground is concrete. Type is
stencilled in black. Hazard yellow appears as a band, a checked box, or the one
action — never as a wash behind paragraphs. Diagonal stripes mean caution, and
they run once per screen. Nothing is friendly, rounded, or illustrated.

Fits logistics, field tools, safety status, wayfinding, and any product that
must be read at a glance. It is a poor fit for hospitality, beauty, and long
reading.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is concrete. `surface-raised` is a cleaner board sitting on it.
- `surface-foreground` and `border` and `accent` are the same black. Rules,
  type, and stencil labels share it.
- `primary` is hazard yellow. `primary-foreground` is black. Yellow is a fill
  for the action, the active check, and the stripe — not a text color on
  concrete.
- `muted` is a darker concrete gray for secondary lines. It still has to clear
  body contrast.
- `danger` is a stop red for a failed check. It is not a second brand color.
- `hazard` is the stripe. Use it on a band, not as a page background.
- Two inks only, plus red when something has failed.

## Typography
- Display and buttons: a heavy grotesque, uppercase, wide tracking. Stencil is
  a stance, not a separate webfont. No script, no serif.
- Body is the same family at regular weight, sentence case, 16px.
- Labels, bay numbers, and times are uppercase with tracking, 12–13px.
- Scale: display 40/56, H1 28/36, body 16, label 12.
- Do not tighten tracking on body. The wide tracking belongs to the stencil
  headlines only.

## Spacing & layout
- The board is a list with rules, not a card grid. Page padding 20 → 32.
- Row height is at least 48px so a gloved tap lands. Gap between groups 24.
- The hazard band is 14–18px tall and full width. It does not wrap type.
- One column. A second column appears only for a pair of facts (time, bay).
- Nothing floats. Nothing is centered like a campaign.

## Components
- **Stripe:** `hazard`, once, usually at the top edge of the board.
- **Checks:** a 18px square, 2px black rule. Done fills with `primary`. Empty
  stays concrete. The word still says the state.
- **Buttons:** square, 2px black rule, uppercase. Primary is yellow with black
  type. A quiet action is raised concrete with black type. No pills.
- **Focus:** `shadow-focus`, a black ring outside a concrete gap.
- **Rows:** 1px `border` rules, not cards. A failed row takes `danger` type and
  keeps the black rule.
- **Radius:** the scale is 0. `radius-full` exists and is unused.

## Motion
- `duration-snap` (80ms). A check fills. A button does not bounce.
- Under `prefers-reduced-motion`, the fill still changes. Nothing travels.

## Don't
- No rounded corners, no soft shadows, no gradients except the hazard stripe.
- No Bauhaus primary triad, no lime sticker field, no fluorescent pink plate.
- No serif, no lowercase display, no icons that are not a square or a rule.
- No bevels and no metallic chrome.
- Yellow text on concrete, and red used as decoration.
