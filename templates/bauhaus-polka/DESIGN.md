# Bauhaus Polka Dot

A worked example ships as `demo.html`: Punkt, a local-first social app. A sidebar, a feed, and a right rail sit on a warm canvas. Nothing is boxed. The phone uses a flush tab bar. Geometry stays inside the pictures.

## Atmosphere

Warm paper, ink type, and air between things. A post is a name, a sentence, and a picture. The picture is a Bauhaus construction: squares, bars, halves, and quarters sharing edges, plus one red circle. The rest of the screen does not compete with that picture.

Red, blue, and yellow are scarce. They live in the mosaic, in two or three avatars, in the active mark, and in that one circle. The shell is not a color catalog.

Dots are 4, 8, 12, and 16, fully opaque. A status dot is one mark. A texture is one cell of a mosaic. There is no field of dots behind the feed.

The people are Maya Chen, Jonah Adler, Priya Shah, Leo Martins, and Nora Kim. The sentences are about a studio, a table, a train. They do not describe the interface.

This fits a feed, a profile, and a short inbox. It is a poor fit for a poster, a dashboard of cards, and any screen that needs a photograph or a blur.

## Color roles

Frames take color from the tokens in `theme.css`. The canvas and the raised surface are the same warm paper, because a second fill would draw a card. Grouping is space, not a plate.

- `surface` and `surface-raised` are the warm paper. Ink on this paper is about 15:1.
- `primary` is the ink. `primary-foreground` is the paper, for type on an ink button and for type on red or blue tiles. White on ink is about 17:1. White on `accent` is about 7.2:1. White on `danger` is about 5.6:1.
- `muted` is for times and secondary lines on the paper only, about 6.2:1. It is not a fill.
- `accent` is the blue tile and, rarely, one avatar. It is not the default button.
- `danger` is the red tile, the error sentence, and the focal circle. The error sentence sits on the paper.
- `block-yellow` is a tile, one avatar, and the active tab mark. Ink on yellow is about 13:1. White type on yellow does not appear.
- `border` is the ink, reserved for a focus ring. `rule-width` is 0. Regions do not draw rules between themselves.

Black type stays off blue and off red. White type stays off yellow.

A view keeps primary color inside the mosaics and in at most one control. The active tab mark is a short bar or a 4px dot, not a filled tab.

## Typography

A neutral grotesk. Inter, then Segoe UI, Roboto, and Noto Sans. The reference does not load a remote font. The pictures carry the geometry. The type stays plain.

- Display, once, for a profile name: 28px, weight 600, tracking `tracking-display` (−0.03em), line-height 1.15.
- Title: 18px, weight 600, tracking `tracking-title` (−0.02em), line-height 1.3.
- Body: 16px, weight 400, line-height 1.5. One or two sentences. Measure under about 62 characters.
- Name: 15px, weight 600.
- Caption: 13px, weight 500. Times, tabs, and meta use this size. It is the floor.
- A text button: 14px, weight 600.
- Numerals are tabular. One family. No italic, no uppercase lockup.

The active nav item is the same size as its neighbors. Weight and a small mark carry the difference, not a bigger word.

## Spacing & layout

The module is 8px. Three steps group the screen. They replace boxes.

- `space-related` is 12px: name to sentence, sentence to picture, picture to the counts.
- `space-block` is 40px: between a profile and the messages under it.
- `space-group` is 48px: between posts. This is the only separator. There is no line.

The shell is inset 16px below 960px and 28px from 960px up. Text and pictures do not touch the viewport edge.

- From 960px up: a 200px sidebar, a center column, a 280px rail. Column gap is 40px. The feed is at most 600px, aligned to the start of the center column, not centered in the viewport. The sidebar sticks to the top inset.
- Below 960px the sidebar and the rail are absent. The feed is the page. The tab bar is fixed to the bottom edge, full width, 56px, on the same canvas. The page pads 72px at the bottom so the last line clears the bar.
- Stories are 36px avatars with uneven gaps, not a perfectly even strip stretched to the width. Five names fit a 390px width. The row does not widen the page.
- Tap targets (nav rows, the post control, the field, tabs) are at least 44px. Tiles and dots are not targets.

## Geometric tiling

The vocabulary is the square, the bar (two columns by one row), the half circle, the quarter circle, and one full circle. Triangles stay out. Tiles snap to the module. Inside a mosaic the gap is 0.

A quarter circle is a square cell with a 100% radius on one corner. The unfilled part of that cell is the paper ground, so two quarters can meet across a grid line and read as one curve. A half circle uses a 100% radius on one side. A bar spans two columns and is twice as wide as it is tall. The full circle is the focal, 64px, red, centered in one yellow cell. A view has one.

Geometry is allowed in:

- The picture of a post.
- A profile head, as a 3-by-2 tile grid, sitting on the canvas with no frame.
- At most one avatar, as a single geometric mark (a quarter inside the circle), not a repeated half-and-half face.
- One mosaic cell of `dot-1` on an 8px pitch.

Geometry is not allowed in:

- The sidebar, the tab bar, the field, or the body copy.
- A strip of tiles used as a divider.
- A second red circle.

Avatars are otherwise one solid ink: yellow, blue, red, or black, with a one-letter initial in the contrasting pair. An unseen story adds one `dot-2` at the corner. A seen story has no dot.

## Components

### Dots

| Token | Diameter | Use |
| --- | --- | --- |
| `dot-1` | 4px | Texture inside one mosaic cell. Also the active tab mark when a bar is not used. |
| `dot-2` | 8px | One status dot on an avatar. |
| `dot-3` | 12px | Rare. A single pip, always with a numeral. |
| `dot-4` | 16px | The top of the scale. Not a button. |

A count is a numeral. It is not a row of dots. Dots do not overlap in the chrome. They may sit inside the mosaic only as the texture.

### Chrome

- **Sidebar.** Paper ground. Wordmark at title size. Rows are 44px, square, ink type, no fill. The current row has an 8px yellow square before the word. Hover changes the word to `danger`. It does not paint a pill.
- **Post.** No container. Name row, sentence, mosaic, then the counts. The next post begins `space-group` later.
- **Mosaic.** Square corners, no stroke, gap 0. It is the color on the page.
- **Profile and messages.** Plain blocks on the canvas. A title, then the lines. No card, no rule between messages. The gap is 16px.
- **Field.** No box. Paper fill, square, 44px, 16px type. A 1px ink line sits on the bottom only. Focus thickens that line to 2px. The label is visible. An error turns the line and the sentence to `danger`.
- **Button.** Square, 40px, weight 600. The primary is an ink fill and paper type, with no offset. Hover (fine pointer) turns it yellow with ink type. Press darkens nothing and moves nothing. The quiet control is the word alone. Disabled is `muted` type, still opaque, with no box.
- **Tab bar.** Flush to the bottom edge, canvas fill, no border, no shadow, no floating capsule. Four items: icon plus a 13px label. The current item carries a 12px by 3px yellow bar, placed inside the 56px bar, above the icon. It does not sit in the page above the bar. Compose is the single "Post" control beside the field. The phone title does not repeat it. There is no floating action button.
- **Icons.** Inline strokes, 22px, 1.75px, round caps, in the same file.

## Motion

The primary button changes color in `duration-ui` (120ms). Nothing translates, fades, or scales. Under `prefers-reduced-motion` the color change is instant.

## Accessibility

- Ink on paper is about 15:1. `muted` on paper is about 6.2:1. White on ink is about 17:1, on blue about 7.2:1, on red about 5.6:1. Ink on yellow is about 13:1.
- The bottom line of a field is ink, so it meets the non-text need. A missing line is not repaired with a gray box.
- The active tab is a yellow bar plus the label, so color is not the only signal. The current nav row has the yellow square and the current word.
- Focus is the ink ring in `shadow-focus`. It is not a glow.
- Disabled type stays opaque. Tap targets are at least 44px.

## Do

- Separate posts with 48px of paper. Separate a name from its sentence with 12px.
- Keep red, blue, and yellow inside the mosaic, a few avatars, and one mark.
- Use one solid color and an initial for an avatar. Vary the colors. Give one person a single geometric mark if the row needs a difference.
- Leave the corners of the chrome square. Reserve the circle for avatars, dots, and the focal.
- Write like a person sending a note.

## Don't

- No card, no 1px frame around a post, no hairline between messages, no filled tab, no floating dock.
- No offset shadow, in red or in ink, under a button or a bar.
- No pill control, no fully rounded rectangle, no bubbly empty-state badge.
- No half-and-half avatar repeated down a list.
- No copy that names the style, the badge, or the dot. No "you're up to date" tile.
- No dot larger than 16px except the one 64px circle. No dot texture outside one mosaic cell.
- No opacity, no blur, no gradient, no second type family.
- No triangle, and no second red circle.
