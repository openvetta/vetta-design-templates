# Solarpunk — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A neighborhood co-op's power board, late afternoon. Linen paper, leaf green,
and a brass sun. Curves belong to the sun and to a vine rule, not to toy
buttons. The technology is a meter and a roof, drawn as if it grew there.
Optimistic, civic, and specific — a shared system, not a mascot.

Fits energy, food gardens, repair, libraries, and civic tools. It is a poor
fit for luxury night, games, and extractive dashboards that only borrow the green.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is linen. `surface-raised` is a card of lighter cloth.
- `surface-foreground` is a deep garden ink. `muted` is for units and asides.
- `primary` is leaf, the action and the meter fill. `primary-foreground` is linen.
- `accent` is brass, for the sun's label and a key figure. It is dark enough
  for small type on linen.
- `sun` is the bright disc, a fill only, with `sun-foreground`. Never small
  brass-yellow type on linen; that pair fails.
- `danger` is a dried-leaf red for a fault. The word "fault" is required.
- `border` is a warm hem, not a black rule.

## Typography
- A humanist serif for the co-op name, a grotesque for the meter and the buttons.
- The name is medium, not black. The figure (kilowatts, percent) is the grotesque,
  tabular if the face allows.
- Scale: name 36/48, figure 40/56, body 16, label 13.
- No stencil, no pixel, no ultra-light fashion type.

## Spacing & layout
- The cover splits: sun and name on one side, meter and two plots on the other.
  On a small screen the sun stacks above the meter.
- Card padding 20 → 24. Section rhythm 56 → 80. Radius `radius-lg` on cards.
- Plots are two, not a bento of six. They name a real bed (herbs, roof).

## Components
- **Sun:** a circle of `sun`, a soft ring, no rays made of clipart. One per page.
- **Meter:** a track of `border`, a fill of `primary`, a brass figure. The
  track is 12px tall, radius full.
- **Buttons:** leaf fill, linen type, `radius-md`. Not a pill, not a 3D press.
- **Plots:** `surface-raised`, `border`, a name and a yield. No illustration
  of a character.
- **Focus:** `shadow-focus` in leaf.
- **Fault:** `danger` text plus the word. The meter does not turn red alone.

## Motion
- `duration-grow` (180ms). The meter fill eases. The sun does not spin.
- Under `prefers-reduced-motion`, the meter snaps to its value.

## Don't
- No chunky game green, no uppercase shout labels, no 3D press.
- No merchant-admin gray, no electric green on black.
- No glass tower with a token tree. The subject is a shared roof.
- No clay blobs, no hazard stripes, no chrome.
- Bright `sun` is a disc, not a text color.
