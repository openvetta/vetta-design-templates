# Interchange

A worked example ships as `demo.html`: Quay, a local-first transit board for the fictional city of Calder. The first screen is the station board at Market Ring: a schematic of five lines, the next trains, a trip with one change, and a service note. Below 960px the same board stacks and a flush dock sits on the bottom edge.

## Atmosphere

Cool paper, ink, and a diagram that does the talking. Geography is gone. What remains is the sequence of stations, the direction of each line, and where the lines meet. The city is Calder. The lines are Reed, Kiln, Vesper, Saffron, and Orchard. None of these names, and none of these colors, belong to a real network.

The board is a product, not a poster. A person opens it to see the next train and how to change. The diagram is the picture. Departure times are the other picture. Chrome stays quiet so the routes can keep their colors.

This fits a departure board, a trip with a change, a station page, and a service note. It is a poor fit for a marketing page, a feed, a map with streets, and any screen that needs a photograph, a roundel, or several filled cards.

The reference copy is a weekday morning at 07:42. The saved trip is North Quay to South Gate, 22 minutes, one change at Market Ring, due 08:04. Saffron is holding at Basin. The sentences are about trains. They do not describe the interface.

## Color roles

Frames take color from the tokens in `theme.css`. `surface` and `surface-raised` are the same cool paper, because a second fill would draw a card. Grouping is space.

- `surface` is the paper. `surface-foreground` is the ink. Ink on paper is about 15:1. Station names, times, and body use this pair.
- `primary` is the same ink. `primary-foreground` is the paper, for type on the solid button. Paper on ink is about 15:1.
- `muted` is for platforms, the scale line, and the word Open. It is about 7:1 on paper. It is not a fill and not a route.
- `accent` is the Reed trunk, the same value as `line-reed`. It appears in chrome once: the 16 by 3 active mark. It is not a button fill. Paper on this teal is about 6.9:1, which is why type on the route is avoided.
- `danger` is the alert word and a late status. It is about 8.7:1 on paper. It is never a route, never a fill behind a sentence, and never the color of a line that is merely busy.
- `border` is the ink, at `rule-width` (1px). It is the legend rule only. A gray hairline around a block is outside this system.
- `line-reed`, `line-kiln`, `line-vesper`, `line-saffron`, and `line-orchard` are flat route colors. Against paper they sit between about 5.9:1 (Kiln) and about 10:1 (Vesper). They paint strokes and the 22 by 10 identity bar. They do not paint sentences, buttons, or page backgrounds.

One screen may show every line in the diagram and in the legend. Chrome outside the diagram uses ink, muted, the single accent mark, and danger only when a train is late or a line is holding. A gradient along a route, a tinted card, or a second accent hue is a different system.

## Typography

The platform UI face. `--font-sans` is `system-ui`, then the usual system names. The reference loads no font file and no remote face. A shipped Johnston, Helvetica, or any other cut file is outside this system. Numerals are tabular.

- The station name is 32px from 960px up and 28px below, weight 600, tracking `tracking-display` (−0.03em), line-height 1.15. One per view.
- The column title is 20px, weight 600, tracking `tracking-title` (−0.02em), line-height 1.3.
- The clock and the departure time are 22px, weight 600, tracking `tracking-title`. The clock can sit at 20px in the header.
- Body is 16px, weight 400, line-height 1.45. Measure under about 62 characters.
- The destination line, the legend, the dock, and the scale note are 13px, weight 500 or 600. This is the floor for interface text.
- Diagram labels are 12px in the wide drawing and 14px in the compact drawing, weight 500, ink, sentence case. They are part of the figure, so they scale with it.
- The solid button is 14px, weight 600.
- One family. No italic, no small-caps lockup, no second face for the times.

The active nav item is the same size as its neighbors. Weight and the accent mark carry the difference.

## Spacing & layout

The module is 4px. Use 4, 8, 12, 16, 24, 32, 40, and 48. Do not invent a 10px or 20px gap in the chrome. The diagram's own measures (the 10px stroke, the 14px corridor, the 18px ring) are figure geometry, not page padding.

- Page inset is 16px below 960px and 32px from 960px up. The board is at most 1320px wide and centered in the paper. Text does not touch the viewport edge.
- From 960px up: two columns, diagram 1.4 and the board 0.9, gap 40px. The columns start together. The header is one row: wordmark, city, four text items, clock.
- Below 960px the header links leave. The columns stack in this order: diagram and legend, next trains, trip, service note. The dock is fixed to the bottom edge, full width, 56px, on the same paper. The page clears it by 56px at the end of the scroll.
- Below 960px the wide diagram is replaced by the compact diagram. Every route, ring, and tick remains. Intermediate names drop (Ash Wharf, Harbor Steps, Glass Court, Kiln Yard, Lantern). Interchanges and termini keep their names.
- Rows, the dock, and the solid button are at least 44px tall. The dock is 56px. Route bars, ticks, and rings are not targets.
- Nothing scrolls sideways at 1440 or at 390. The diagram is `width: 100%` of its column. The compact drawing's viewBox is 360 wide so it fits a 390px viewport after the 16px inset.

The first screen is the board. A centered slogan, a hero photograph, or a card grid is a different object.

## Components

### Diagram

The diagram is schematic. It is not to scale, and it says so in one muted line. There is no river, no street, and no north arrow.

Routes use only four directions: 0°, 90°, and the two diagonals at 45° and 135°. A segment is horizontal, vertical, or has equal absolute dx and dy. A curve, a 30° cut, or a free angle is outside the system.

- The route stroke is `stroke-route` (10px) in user units, so it scales with the figure. Every route on a diagram uses that one width. Caps are butt. Joins are miter, miter limit 2, so a 45° corner stays sharp and does not spike.
- Color is flat. One class, one `line-*` token, no gradient, no dash, no opacity.
- When two routes share a corridor they run parallel. Center to center is `corridor` (14px): the 10px strokes plus a 4px paper gap. They do not overlap and they do not blend.
- A route ends at a terminus tick or at the center of a ring. It does not fade out.

### Station tick

An ordinary station, including a terminus, is a tick. The tick is ink, `stroke-tick` (2.5px), `tick-span` (20px) long, butt caps, centered on the route and perpendicular to it. On a horizontal route the tick is vertical. On a vertical route the tick is horizontal. On a corner, the tick is perpendicular to the segment the name sits beside.

The tick crosses the route so about 5px of ink shows on each side of the 10px stroke. It is not a dot, not a diamond, and not a filled circle. Interchanges do not also take a tick.

### Interchange ring

A station where lines meet is a hollow ring. Outer radius `ring-radius` (18px), stroke `ring-stroke` (3px), ink, no fill. The interior is paper: an opaque disc of `surface` at radius 17px painted after the routes, then a short chord of each route redrawn across the disc, then the ring stroke on top. The hole is paint, not transparency and not a blend.

The compact board may use a 16px radius with the same 3px stroke when a segment would otherwise disappear inside an 18px ring. The stroke stays 3px. The wide board keeps 18px.

The ring is a station mark. It is not a logo, not a wordmark, and not a disc with a bar through it. The wordmark is the word Quay in the UI face, with no symbol.

Labels are ink, 12px (14px on the compact drawing), placed in an open quadrant at least 8px clear of a stroke. They do not cross a route. They do not sit inside a ring.

### Legend

The legend is the only place a hairline appears in the chrome. A 1px `border` rule sits above a row of identity bars. Each item is a 22 by 10 bar in the line color, the line name in ink, and a status word. Open is `muted`. Hold is `danger`. The bar does not change color when the status changes. The row wraps as whole items. It does not scroll sideways.

### Departure row

A row is a 22 by 10 bar, the line name at 16px, the destination and platform at 13px `muted`, and the time at 22px tabular. Minimum height 56px. Rows are separated by 8px of paper, not by rules. A late train keeps an ink time. The words "1 min late" are `danger`, so color is not the only signal. The connecting train can add the word "connects" in ink. There is no pill, no avatar, and no countdown ring.

### Trip

A trip title is 20px. Under it, one meta line: duration, the number of changes, and the due time. Each leg repeats the departure row. A change leg uses an ink bar, not a line color, because walking between platforms is not a route. The reference trip is one change. A second change is allowed; a graphic of three overlapping circles is not.

### Service note

A short heading, then the line bar and the line name, then two sentences. The word Holding is `danger`. The rest is ink. There is no filled banner, no icon circle, and no left-edge rule.

### Header, dock, button

The header wordmark is 22px, weight 600. The city name beside it is 13px `muted`. Nav items are text buttons, 14px, `muted` at rest and ink at weight 600 when active. The active mark is a 16 by 3 rectangle in `accent`, flush under the word, not a pill behind it.

Below 960px those header items are absent. The dock replaces them: four equal columns, 56px, square, paper, fixed to the bottom edge, no margin, no radius, no shadow, no top rule. The active item uses the same weight and the same accent mark, centered under the word.

The solid button is `primary` fill, `primary-foreground` type, height at least 44px, radius 0, horizontal padding 16px. Hover on a fine pointer inverts it to paper with a 2px ink inset. The quiet button is ink text on paper, no fill and no rule. Disabled is `muted` type, still opaque.

Focus is `shadow-focus`: a 2px paper gap and a 2px ink ring, drawn as an outline rather than a drop shadow. Every control can take focus without spending `accent` or `danger`.

## Motion

Almost none. A button's fill changes in `duration-ui` (120ms), `ease-ui` (linear). Routes do not march, dash, or draw on. Rings do not pulse. Nothing translates, scales, or fades in.

Under `prefers-reduced-motion`, the fill change is instant. Hover and press still show the inverted button, so the control still has a state.

## Accessibility

- Ink on paper is about 15:1. `muted` is about 7:1. `danger` text is about 8.7:1. Those are the pairs for reading.
- Line colors are graphical. The weakest, Kiln, is about 5.9:1 as a 10px stroke on paper. The line name next to a bar is ink, so the name does not depend on the stroke color.
- Late and Hold use the word as well as `danger`. The active item uses weight as well as the accent mark. The connecting train uses the word "connects".
- The legend rule is ink, so the one hairline matches body contrast.
- Targets that take a tap are at least 44px. On a coarse pointer there is no hover-only state. The dock's active item is visible at rest.
- The diagram has a text title that names the city and says the figure is not to scale. The rows repeat the line names in HTML.

## Don't

- No angle other than 0°, 45°, 90°, and 135°. No curve, no hand-drawn wobble, and no geography under the routes.
- No second stroke width on a route. No gradient, dash, glow, blur, or opacity on a line. No transparent hole. The ring interior is `surface` paint.
- No station dot, diamond, or filled disc. No tick on an interchange. No roundel: a disc with a bar is not the wordmark and not a station.
- No official network's line names, line colors, roundel, or wordmark. Calder's five names and five tokens are the set.
- No font file. No second family. Times stay in the UI face, tabular.
- No pill, no avatar, no split-color face, no offset shadow, no card frame, and no hairline except the legend rule. `radius-full` is 0. `shadow-sm`, `shadow-md`, and `shadow-lg` are `none`.
- No route color as a page fill, a button, or a sentence. No `danger` route. No `muted` fill.
- No floating dock. The dock, when it is on screen, is flush with the bottom edge.
- No horizontal scroll. No dropping a route from the compact diagram to make it fit. Drop names before dropping geometry.
- No poster headline in place of the board. The first screen is the diagram and the next trains.
