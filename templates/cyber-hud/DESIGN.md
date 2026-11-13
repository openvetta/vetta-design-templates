# Cyber HUD

A worked example ships as `demo.html`: Kite, a local-first agent console, on one clipped plate, with the same screen in a narrow frame and a deliberately off-style plate. It is a static reference for this visual system.

## Atmosphere

A field instrument, not a sky. The ground is near-black with a blue cast. A faint orthographic grid sits in the margin, flat to the screen, the same cell in both directions. The console is an opaque plate with the corners cut. L-shaped brackets mark the plate and, in acid yellow, the one line the operator is aimed at. Scanlines rib the plate only. Readouts are monospace. A diamond lamp says the link is live.

Acid yellow, cyan, and magenta are signals. Yellow means live: the commit, the active thread, the meter. Cyan means structure: brackets, focus, tool names, the grid. Magenta means a fault. A screen that paints all three as decoration has no signal left.

The product in the reference is Kite. The thread, the index, and the draft stay on the machine in front of you. The cover is the console itself: a queue, a trace, a telemetry column, and a call field. It is not a poster for the console.

This fits an agent workspace, a trace log, a local tool rail, and a dense status screen that still has to be read. It is a poor fit for long articles, a storefront, a calm wellness hour, and anything that wants a round corner or a sunset.

Glitch is a 1px chromatic split on the wordmark, for a short blink. It is not a filter on the page.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the field, a blue near-black. `surface-foreground` is a cool white. That pair is about 19:1. Long text uses it, including sentences on the plate. Text does not carry a glow or a shadow.
- `surface-raised` is the plate. Ink on it is about 17:1. The plate is opaque. The grid does not show through it.
- `muted` is a light gray-green for times, secondary labels, and inactive thread meta. It clears about 10:1 on `surface` and about 9:1 on `surface-raised`. A dim gray fails here, so muted stays light.
- `primary` is acid yellow. It is the live channel and the one commit fill. `primary-foreground` is a near-black green and clears about 16:1 on the fill. Yellow as text on the field also clears. It is still reserved for the live state, not for a paragraph.
- `accent` is a teal cyan for structure. It clears about 13:1 on `surface` and about 12:1 on the plate. Brackets, focus, tool names, and the grid use it. A sentence does not.
- `danger` is magenta, the fault channel. As text on the field it is about 7:1. As a fill, the label is `danger-foreground` (about 7:1). White on this magenta is not the pair.
- `border` is a desaturated edge that clears about 5:1 on `surface` and on `surface-raised`. It is the resting edge of a field. A bracket is not a substitute for it.
- `rule` is a dim divider between columns. It is decorative. It is not the boundary of a control.
- `live-wash`, `link-wash`, and `fault-wash` are 10–12% tints behind a selected thread, a target lock, or a fault alert. Type on a wash is still `surface-foreground`, `primary`, `accent`, or `danger` as the role requires. The wash is not a second fill for a button.

The grid uses `grid-line` at `grid-size`. Scanlines use `scan-ink` at `scan-size`. Neither is a type color.

## Typography

Two families, both local. `--font-sans` is a grotesque for sentences: the lede, section titles, card body, alert copy. `--font-mono` is the instrument: the wordmark, the screen title, the trace, labels, badges, fields, and buttons. The reference does not load a remote face.

- The screen title is mono, uppercase, weight 600, tracked about 0.08em, from 22px on a narrow viewport to 34px on a wide one. Line-height is near 1.15. A 2px yellow tick sits under it, about 2.2em wide.
- The wordmark is mono, uppercase, 15px, tracked about 0.18em. The glitch, when it blinks, is a 1px text-shadow in `accent` and `danger`. At rest the word is plain `surface-foreground`.
- Section titles are sans, weight 600, about 26–36px, roman, sentence case, no tracking trick.
- Body is sans, 16px, line-height about 1.55, on `surface` or on the plate. Measure stays under about 66 characters.
- Trace rows are mono, 13px, line-height 1.45. The time and the role use `muted`. The active role uses `primary`.
- Labels, kickers, and badges are mono, 12px, uppercase, tracked about 0.12–0.14em. Nothing informational sits below 12px.
- Figures use tabular numerals in the mono face.

## Spacing & layout

The signature screen is the console. A queue, a trace, and a telemetry column share one plate. The call field and the commit sit on the bottom edge of that plate. The grid is outside the plate, in the page margin.

- Page inset is 32px, stepping to 16px below 720px. The plate maxes out near 1180px and stays centered, so the grid remains visible beside it on a wide screen.
- From 1040px the plate is three columns: queue about 232px, trace fluid, telemetry about 220px. Column rules use `rule`. Below 1040px the telemetry leaves the side first and sits under the trace. The queue stays above the trace. Below that, the readout becomes two columns of figures and the reticle drops.
- Plate padding is 16px, stepping to 20px on a wide screen. The title block, the columns, and the composer separate by 12–16px.
- The plate chamfer is `chamfer-sm` (8px) by default and `chamfer-md` (14px) from 1040px. Bracket arms are 12px on a narrow plate and `bracket-arm-lg` (22px) on the wide console, inset by `bracket-gap` so the cut does not eat them.
- Cards are three columns from 800px and one column below. Gap 12px. A card is its own clipped plate.
- The composer is one row from 720px: field, quiet action, commit. Below that the three stack and both actions go full width. The field and the actions stay 48px tall.
- Touch targets are at least 48px: thread rows, the field, Hold, and Dispatch. Badges are labels, not targets.
- The narrow specimen is a square handset, not a rounded bezel. Inside it the queue collapses to one count, the reticle is gone, and Dispatch is full width.

Nothing in the reference depends on a horizontal scroll.

## Components

- **Field grid.** `surface` plus a flat grid of `grid-line` at `grid-size`. It is behind the page, not behind the type on a plate. It has no vanishing point.
- **Plate.** `surface-raised`, chamfered with `clip-path`, padding as above. Scanlines are a repeating gradient of `scan-ink` on the plate only, `pointer-events: none`, painted over the fill and under a click. They do not cover spec paragraphs.
- **Brackets.** Eight 1px arms in `accent`, inset by `bracket-gap`. The active target uses `primary` for its arms and `live-wash` for its ground. A full bright rectangle is for a field edge, not for a panel.
- **Lamp.** An 8px square in `primary`, rotated 45 degrees, beside the wordmark. It eases between full and about half opacity on `duration-lamp`. It is status, not a logo.
- **Ruler.** A hairline in `accent` with small ticks, under the status row. It is decoration.
- **Screen title.** Mono, with the yellow tick and one `primary` badge reading Live.
- **Thread row.** At least 48px, mono, index in `accent`, name in ink, badge at the end. The current row has a 2px `primary` edge and `live-wash`, and `aria-current`. Selection is not a shadow.
- **Trace line.** Time, role, sentence, on one grid. The sentence wraps. The time does not shrink below 12px.
- **Target lock.** Yellow brackets and `live-wash` around the active reply only. Tool names sit under it in `accent`, 12px. One lock on screen.
- **Readout.** A label in `muted` and a figure in mono. The fault label is `danger` even when the value is Clear, so the channel keeps its color. The meter is a 4px track in `rule` with a `primary` fill. The figure is the accessible value. The bar is decorative.
- **Reticle.** One small ring-and-tick mark in `accent`, with a single `primary` blip. It is decorative. It leaves on the narrow layout.
- **Call field.** A visible label, 12px mono. The input is `surface` (recessed against the plate), 1px `border`, radius 0, 16px mono, min-height 48px. Placeholder text is not the label. Focus uses the accent outline. An error swaps the edge and the message to `danger` and keeps the sentence.
- **Commit.** One per product screen. `primary` fill, `primary-foreground` label, min-height 48px, mono uppercase. The corners are cut on two diagonals, about 10px. The fill is flat. Press shifts it 1px down. A quiet action is transparent with a 1px `accent` edge and ink type. A fault action is a `danger` fill with `danger-foreground` type, and it lives on a fault alert, not beside the commit.
- **Disabled.** Transparent ground, `border` edge, `muted` label. It is not a faded yellow.
- **Badges.** 12px mono uppercase, 1px edge, radius 0. Live uses `primary`. Link uses `accent`. Fault uses `danger`. A resting badge uses `muted` and `border`. They name a state. They are not pills and not buttons.
- **Cards.** A clipped plate, cyan brackets, a 12px index in `accent`, a sans title, a sans sentence in `muted`.
- **Fault alert.** `fault-wash`, a 1px `danger` edge, a short hazard stripe (yellow and magenta, 8px tall) along the top, then a sentence in `surface-foreground` with the word Fault in `danger`. One per view. The stripe is not a background for the page.
- **Focus.** A 2px `accent` outline, 3px offset, from `shadow-focus`. Clipped controls draw that outline on a wrapper so the cut does not eat it.

## Motion

The scan is a soft cyan band, about a third of the plate tall, moving down the wide console on `duration-scan` (9s), linear. It is behind the type. It does not run on a narrow viewport.

The lamp breathes on `duration-lamp`. The wordmark blinks a 1px split on `duration-glitch`, for a few frames out of each loop, and is still the rest of the time. Hover and press use `duration-ui` (140ms) and `ease-ui`. A fine pointer may wash a thread or brighten the commit. The layout does not depend on hover. Press moves the commit 1px down.

Under `prefers-reduced-motion`, the sweep, the lamp breath, the glitch, and the press shift stop. The lamp stays lit. The wordmark stays a single color. Scanlines stay. They do not move. Color and border changes remain.

Under `prefers-contrast: more`, field edges, quiet actions, and brackets take `surface-foreground`.

## Accessibility

- Body text, `muted`, `accent`, `danger`, and yellow-on-dark all clear 4.5:1 on the surfaces named above. The commit pair and the fault-fill pair do too.
- A control's edge clears 3:1 by `border`, by an `accent` or `primary` edge, or by a fill as strong as `primary` or `danger`. `rule`, the grid, and the scanlines do not count.
- State pairs a second signal with color: a Live badge, a current edge, a Fault word, or a full sentence.
- The focus outline is the keyboard affordance.
- The reticle, the lamp, the ruler, the meter bar, and the scanlines expose no name. The figures next to them do.
- Under `prefers-contrast: more`, the decorative rules step up to `surface-foreground`.

## Don't

- No perspective grid, no vanishing point, no sun, no horizon, no palm, no italic display, and no glow on a headline. That is a dusk poster.
- No beveled silver, no navy title bar, no window gadgets, and no 11px system font. That is a 1995 desktop.
- No liquid metal type, no iridescent orb, and no chrome specular.
- No pill, no radius above 0, and no circular commit. The chamfer is the only cut.
- No fourth signal hue. No matrix green, no amber sunset, no purple field.
- No glass, no backdrop blur, no translucent plate over a city.
- No scanlines over a paragraph of spec text, and no moving sweep on a narrow screen.
- No glitch on a sentence, a button, or a whole plate. The wordmark is the only blink, and it rests still.
- No second commit on a product screen. No white label on `danger`. No dim gray for secondary text.
- No airbrushed haze, no weather mascot, no glossy bubble cluster.
- No remote font, no photograph, and no borrowed mark. The reticle is drawn for this system.
