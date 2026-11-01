# First Frame — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A picture held in the gate, not a poster on a wall and not a shelf of posters.
The ground inside the gate is warm black. Type is ivory. A fine grain sits on
the picture only. Letterbox bars are darker than the picture and they carry
the reel, the house, and the seat. One ember mark counts the frame. The title
is large. The cast and the scene list tile the rest, so the gate is full.

Fits a screening, a short film, a documentary chapter, a title sequence made
still. It is a poor fit for episode browsers, shops, and supper clubs.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the picture. `surface-raised` is a second gate, barely lifted,
  if a note must sit on the picture. Do not build cards from it.
- `bar` is the letterbox. It is darker than `surface` and it is only the bars.
- `surface-foreground` and `primary` are ivory. `primary-foreground` is the
  picture, for type that sits on an ivory control.
- `muted` is the role, the time code, and the bar label. It stays warm.
- `accent` is the ember. It colors the frame count and one short rule under
  the director line. It is not a play control and not a background.
- `danger` is a pale rose for a missed hold. The sentence says so. On this
  ground it has to stay light.
- `border` is the hairline between cast rows and between scenes. Visible, thin,
  never a gold edge.

## Typography
System stacks only. No webfonts.
- The title is a serif at weight 400, roman, 88–120px, tight line-height,
  slight negative tracking. Two lines. Italic is for the logline only.
- The director line and the logline are the serif, 16–18px. The logline is
  italic. The measure stays under 32 characters.
- Cast names are the serif at 18–22px. Roles are the grotesque, 12px,
  uppercase, tracked, `muted`.
- Scene times are a monospace, 13px, `muted`. The scene line is the serif.
- Bar labels are the grotesque, 11px, uppercase, tracking near 0.16em.
- Scale: title 104, logline 18, cast 20, scene 16, bar 11.

## Spacing & layout
- The first viewport is the gate. A top bar near 40px, a bottom bar near 76px,
  and the picture between them, inset by a 1px `border`.
- Inside the picture, two columns. The title, the ember rule, the logline, and
  the cast occupy the left. The scene list occupies the right and runs the
  full height of the picture.
- Cast rows and scene rows are equal cells. They tile. A row is a rule plus
  a name, not a card.
- The title sits at the top of the left column, not in the vertical center
  of an empty field.
- Padding inside the picture is 28 → 40.
- At 800px the scene list drops under the cast. The title steps to 48–64px.
  The bottom bar wraps. Each ticket cell stays at least 48px tall. Letterbox
  bars stay.

## Components
- **Letterbox:** `bar` fill. Top carries reel, house, and the frame count in
  `accent`. Bottom carries cinema, seat, time, format, and the hold.
- **Ember rule:** 64–80px wide, 2px, `accent`, under the director line. One.
- **Cast row:** name and role, 1px `border` above, content vertically centered.
  No portrait, no chip.
- **Scene row:** time in mono, line in serif, same rule. The list is the
  picture's right edge.
- **Hold:** a text action in the bottom bar, grotesque label, serif value,
  1px underline. Hover moves the underline to `accent`. It does not become
  a pill and it does not turn the bar red.
- **Grain:** a fine warm noise over the picture only, low enough that the
  serif stays sharp. The bars stay clean.
- **Focus:** `shadow-focus`. Other shadows are `none`.
- **Radius:** the whole scale is 0.

## Motion
- `duration-still` (160ms). The underline changes color. The grain does not
  animate. Nothing fades up.
- On a touch screen there is no hover. Press sets the hold to `accent`.
- Under `prefers-reduced-motion`, the color change remains and the grain
  stays still.

## Don't
- No play button, no episode row, no poster shelf, no pure red field. A
  streaming home is a different object.
- No gold fan, no sunburst, no stepped frame, no lacquer supper club.
- No book spines, no candle amber, no oxblood room.
- No cloth measurements and no tailoring grotesque as the title.
- No chrome orb, no iridescent metal type, no glass blur over a city.
- No centered title floating in an empty gate. If the cast and the scenes
  do not reach the bars, the frame is unfinished.
- No second metal. Ember once.
