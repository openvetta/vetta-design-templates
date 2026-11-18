# Acid Lime

A worked example ships as `demo.html`: Pith, a local-first agent on a near-black desk, with the same home in a narrow frame and a deliberately off-style panel. It is a static reference for this visual system.

## Atmosphere

Night, but a room, not a club. The ground is near-black. One acid lime is reserved for the thing a person presses and for the small live state. Lilac and blush are supporting tiles, softer and smaller. An iridescent glass orb is Pith’s presence: a pinched lump, not a smooth pebble. Blue, cyan, and magenta smear through each other and feather out. The rim dissolves into the desk. It is not a letter, and it is not a button. Very fine contour lines sit in a corner, sparse, like a few elevation lines. They are not a grid and not a sound visualizer.

The product in the reference is Pith. Voice, notes, and the shelf stay on the machine. The cover is the desk itself: the orb and the voice control on one side, a greeting, three action tiles, and the threads already kept on the other. It is not a poster for the desk.

This fits a local agent home, a voice-and-thread tool, and a dark consumer surface that still has to be read at a glance. It is a poor fit for a long article, a storefront, a field instrument, and anything that wants a sunset, a metal wordmark, or a clipped tactical plate.

The finish is soft and round. Depth is a darker raised tile on the black, a flat lime fill, and the volume inside the orb. Nothing is a gel streak, a clay pillow, or a chrome bevel.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the desk, a neutral near-black. `surface-foreground` is a warm paper white. That pair is about 18:1. Long text uses it. Text does not carry a glow or a shadow.
- `surface-raised` is a history row, a spec card, and the quiet circle. Ink on it is about 16:1. The tile is opaque. Contour lines do not run through type.
- `muted` is a light gray-green for the time, secondary labels, captions, and the quiet link. It clears about 10:1 on `surface` and about 9:1 on `surface-raised`. A dim gray fails here, so muted stays light.
- `primary` is acid lime. It fills the voice tile, the voice circle, the send control, and the live capsule. `primary-foreground` is a near-black green and clears about 15:1 on the fill. Lime as text on the field also clears, about 17:1. It is still reserved for the voice path and the live state, not for a paragraph.
- `accent` and `lilac` are the same soft lilac. `lilac-ink` sits on a lilac fill, about 11:1. White on lilac fails. Lilac is the write tile, the write shortcut, and the write pip. It is not a second neon.
- `blush` is the shelf tile. `blush-ink` on it is about 12:1. White on blush fails. Blush is the shelf path only.
- `danger` is a rose for a fault sentence and the rare destructive control. As text on the field it is about 6.7:1, and about 6:1 on `surface-raised`. As a fill, the label is `danger-foreground`, about 6:1. White on this rose is not the pair.
- `border` is a desaturated edge that clears about 4.4:1 on `surface` and about 4:1 on `surface-raised`. It is the resting edge of a field, a quiet button, and a disabled control.
- `rule` is a dim divider between thread lines and under a list header. It is decorative. It is not the boundary of a control.

Cyan, violet, and a little warm pink appear inside the orb only. They are not button colors and not type colors. The contour lines use `surface-foreground` at low opacity. They are not a type color.

One voice path per product screen. The lime tile and the lime circle are that same path, one large and one in the hand. Write and shelf stay pastel. The capsule is status, not a second action.

## Typography

A plain grotesque for reading, a system monospace for the small readouts. The intended sans is Inter, Segoe UI, or Helvetica Neue. The mono is JetBrains Mono, `ui-monospace`, or a local fallback. The reference names those stacks and does not load a remote face.

- The greeting is sans, weight 500, about 34px on a narrow viewport and 52px on a wide one, tracking about `-0.035em`, line-height near 1.02. Two short lines. It is not italic, not outlined, and not a metal fill.
- The wordmark is sans, weight 600, 15px, tracking about `0.04em`. It sits in the top bar beside a lime dot. It is not a billboard.
- Tile titles are sans, weight 600, about 24px below 720px and 30px on a wide desk, tracking about `-0.03em`. A caption under them is 13px.
- Section titles are sans, weight 600, about 28–36px, sentence case.
- Body is sans, 16px, line-height about 1.5, on `surface` or on a raised card. Measure stays under about 62 characters.
- Labels, the clock, badges, and the thread’s speaker name are mono, 12px, uppercase, tracked about `0.12em`. Nothing informational sits below 12px.
- The agent’s name in a thread may use `primary`. The sentence beside it stays `surface-foreground`.

## Spacing & layout

The signature screen is the desk. A presence column and a home column share one rounded stage. The contour lines sit in the corners of those columns, behind nothing that has to be read.

- Page inset is 24px, stepping to 16px below 720px. The stage maxes out near 1120px and stays centered, so a margin of the near-black ground remains on a wide screen.
- From 920px the stage is two columns: presence about 0.9fr, home about 1.1fr, gap 16px. Below 920px the presence stacks above the home. The orb steps from 248px to 176px, then to 142px below 720px. The greeting stays above the tiles.
- Stage padding is 22px, stepping to 14px below 720px. The stage radius is `radius-2xl` (36px), stepping to 28px below 720px.
- The greeting, the tile group, and the list separate by 16–18px. The tile group is at least about 300px tall on a wide desk so the lime tile has a real face.
- Tiles use `radius-xl` (28px). History rows use `radius-lg` (22px). The voice circle, the capsule, and send use `radius-full`.
- Below 480px the lime tile spans the row and the lilac and blush tiles sit side by side under it. They do not become a single scrolling strip.
- The composer is one row from 640px: field, then send. Below that the two stack and send goes full width. The field and send stay at least 48px tall.
- Touch targets are at least 48px: tiles, history rows, the voice circle, the side circles, fields, and send. Badges and pips are labels, not targets. The side circles are 48px. The voice circle is 76px on the wide desk and 64px below 720px.
- The narrow specimen is a rounded handset, the same black, not a silver bezel. Inside it the presence and the home share one column. The orb is smaller. Send is not on that home. The wide page uses the same stack once the desk gets narrow.

Nothing in the reference depends on a horizontal scroll.

## Components

- **Ground.** `surface`, full bleed. No photograph, no lime wash, no horizon.
- **Contour lines.** A few stroked curves in `surface-foreground` at about half opacity, tucked into a corner, `pointer-events: none`. Six lines is enough. They do not cross the greeting or the orb.
- **Stage.** The desk’s frame. `surface` fill, 1px edge mixed down from `border`, `radius-2xl`, padding as above. It clips the contour lines.
- **Orb.** One irregular lump, wider than it is tall, with a dent rather than an even corner. Blue, cyan, and magenta overlap and feather. There is no hard color island and no stroke around the body. The highlight is a soft wet pool, not a cut bar. The outer paint fades into `surface`. The orb is decorative. The sentence under it carries the meaning. It is not a control.
- **Capsule.** Lime fill, `primary-foreground` type, an ink dot, `radius-full`. It reads “On device”. It is status. It is not a button.
- **Wordmark row.** Lime dot, the name, a mono legend, and the clock at the far side. The clock uses tabular numerals.
- **Greeting.** Two short lines in `surface-foreground`, with a mono kicker above and one muted sentence below.
- **Voice tile.** `primary` fill, `primary-foreground` type, `radius-xl`, a small ink icon, a corner arrow, a two-line title. It is the large form of the voice path.
- **Write tile.** `lilac` fill, `lilac-ink` type. **Shelf tile.** `blush` fill, `blush-ink` type. Same radius, smaller face, one word and a caption. They are not lime.
- **History row.** `surface-raised`, at least 48px, a 28px pip, a sentence, a quiet more mark. The pip uses lime, lilac, or blush to name the channel the line came from. The row itself stays dark. The current row may carry a 1px `primary` edge. Selection is not a glow.
- **Voice circle.** `primary` fill, an ink microphone, two static lime rings in a soft shadow. It is the in-hand form of the same voice path. Press shifts it 1px down.
- **Side circles.** Write is a lilac circle with `lilac-ink`. Stop is `surface-raised` with a `border` edge and ink type. Both are 48px.
- **Send.** The commit on a thread. `primary` fill, `primary-foreground` label, min-height 48px, `radius-full`. One per thread view. Press shifts it 1px down.
- **Quiet action.** Transparent ground, 1px `border`, ink type, `radius-full`, min-height 48px. Hold is this. It is not a faded lime.
- **Danger action.** `danger` fill, `danger-foreground` type. It lives on a fault, not beside send.
- **Disabled.** Transparent ground, `border` edge, `muted` label. It is not a dimmed lime.
- **Field.** A visible mono legend, 12px. The input is `surface` against a raised panel, or `surface-raised` against the desk, 1px `border`, `radius-md`, 16px sans, min-height 48px. Placeholder text is not the label. Focus uses the lime outline. An error swaps the edge and the message to `danger` and keeps the sentence.
- **Badges.** 12px mono uppercase, `radius-full`, padding inline. Live uses `primary` and `primary-foreground`. Resting uses a `border` edge and `muted` type. Fault uses a `danger` edge and `danger` type. They name a state. They are not tiles and not buttons.
- **Cards.** `surface-raised`, `radius-xl`, a mono legend, a sans title, a sans sentence. A feature card may show a pip in the channel color. The sentence stays `surface-foreground`.
- **Thread.** Speaker name in mono, sentence in sans, a `rule` between lines. Pith’s name is `primary`. The person’s name is `muted`. No bubbles, no avatar, no tail.
- **Focus.** A 2px `primary` outline, 3px offset, so it lands on the dark ground even when the control itself is lime.

## Motion

The smear drifts a few pixels on `duration-sheen` (14s). The first frame is the resting lump. Hover and press use `duration-ui` (160ms) and `ease-ui`. A fine pointer may lift a tile 2px. The layout does not depend on hover. Press moves the voice circle and send 1px down.

Under `prefers-reduced-motion`, the sheen, the lift, and the press shift stop. The orb stays at its resting shape. Color and border changes remain.

Under `prefers-contrast: more`, the stage edge, history rows, fields, and the quiet circle take `surface-foreground`.

## Accessibility

- Body text, `muted`, lime-on-dark, and `danger` as text all clear 4.5:1 on the surfaces named above. The lime pair, the lilac pair, the blush pair, and the danger-fill pair do too.
- White on lime, lilac, or blush fails. Those fills use their ink tokens.
- A control’s edge clears 3:1 by `border`, or by a fill as strong as `primary`, `lilac`, `blush`, or `danger`. `rule` and the contour lines do not count.
- State pairs a second signal with color: the words “On device”, a channel pip plus the sentence, the word Fault, or a full error sentence.
- The focus outline is the keyboard affordance.
- The orb, the contour lines, the rings, and the contact shadow expose no name. The sentences next to them do.

## Don't

- No fisheye grid, no spiky starburst, no warped display type, and no chrome-filled wordmark. Liquid metal lettering is a different system. The orb is the only iridescent object, and it is not type.
- No chamfer, no targeting bracket, no scanline, no monospace instrument plate, and no acid yellow plus cyan plus magenta as three signals. This desk is round, and lime is the only signal fill.
- No sunset, no striped sun, no horizon, and no perspective floor. The page ground stays near-black. A lime-to-peach field behind the desk is a poster, not this system.
- No milky frost, no backdrop blur, and no glass panel over a photograph.
- No matte clay mascot, no pillow card, and no peach wellness scene.
- No warm-stone light mosaic. The bento here is nocturnal. Lime, lilac, and blush are the only light fills, and each one is an action.
- No flat playful laminate, no extra candy hues, and no fourth pastel.
- No airbrushed haze, no weather illustration, and no glossy aqua bubbles around the type.
- No lime paragraph, no lime page wash, and no second lime job beside voice. The capsule is status. Write and shelf stay pastel.
- No white label on lime, lilac, blush, or `danger`.
- No contour lines through a headline, and no full-screen wave pattern.
- No remote font, no photograph, and no borrowed mark. The orb is drawn for this system.
