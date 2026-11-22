# Bauhaus Polka Dot

A worked example ships as `demo.html`: Punkt, a local-first social app, set in a warm shell with a sidebar, a centered feed, and a right rail. The same feed narrows to a phone with a bottom bar and a floating compose button. Geometry lives in the pictures, the profile header, and the avatars. The chrome stays quiet.

## Atmosphere

A modern product on warm paper, with Bauhaus construction kept inside the frames that are allowed to be pictures. The canvas is `surface`. Cards are `surface-raised`, rounded, and lined. Red, blue, yellow, and black appear as tiles inside those frames, as one primary button, and as the single focal circle. They do not flood the shell.

Dots are a fine opaque scale: 4, 8, 12, 16. They mark status, unread, and a contained texture inside one tile. They are not a field behind the feed.

The people in the reference are Maya Chen, Jonah Adler, Priya Shah, Leo Martins, and Nora Kim. Posts sound like messages, not like a caption for the visual system.

This fits a social app, a feed, a profile, and a small inbox. It is a poor fit for a poster, a full-bleed color catalog, and any screen that needs photography or blur.

## Color roles

Frames take color from the tokens in `theme.css`. A view is mostly canvas and cards. Primary inks are the accent, and together they stay under about a third of the screen. One yellow control, one red focal circle, and the tiles inside media are enough.

- `surface` is the warm canvas. Ink on it is about 15:1.
- `surface-raised` is the card. Ink on it is about 17:1. `muted` on a card is about 6.9:1, and on the canvas about 6.2:1. Secondary words use `muted` only on these two light fields.
- `primary` is ink. `primary-foreground` is the card white, for type on ink, on red, and on blue. White on ink is about 17:1. White on `accent` is about 7.2:1. White on `danger` is about 5.6:1.
- `accent` is the blue tile and a rare link. It is not the default button.
- `danger` is the red tile and the focal circle. Error text on a card uses it (about 5.5:1 or better for the sentence). It is not a wash.
- `block-yellow` is the yellow tile and the active phone tab. Ink on yellow is about 13:1. White type on yellow does not appear.
- `border` is ink, used for the 2px offset and for emphasis controls. `line` is the card hairline, a warm gray, used at 1px where a black rule would shout.
- `border` against the canvas is the body pair. `line` is a separator, not text.

Black type stays off blue and off red. White type stays off yellow.

## Typography

A neutral grotesk. The intended face is Inter, then Segoe UI, Roboto, and Noto Sans. The reference does not load a remote font. Geometry is carried by tiles, not by a display face.

- Display, used once for a profile name: 32px, weight 600, tracking `tracking-display` (−0.03em), line-height 1.1.
- Title, for a card heading: 20px, weight 600, tracking `tracking-title` (−0.02em), line-height 1.25.
- Body: 16px, weight 400, line-height 1.5. A post is one or two sentences. Measure stays under about 62 characters.
- Name: 15px, weight 600.
- Caption: 13px, weight 500. This is the floor for labels, times, and tabs. Nothing important is set smaller.
- Buttons: 14px, weight 600.
- Numerals are tabular. One family. No italic poster, no tracked-out uppercase headline.

## Spacing & layout

The module is 8px. Padding, gaps, and control heights are multiples of 4 or 8. The shell is inset from the viewport: 16px below 960px, 24px from 960px up. Content does not touch the screen edge.

- From 960px up the shell is three columns: a 220px sidebar, a flexible center, and a 300px rail, with 24px gaps. The feed inside the center is at most 640px and centered. The sidebar sticks to the top inset.
- Below 960px the sidebar and the rail are not shown. The feed is the screen. A phone bar sits 12px above the bottom edge, inset 12px on the sides. A compose button floats 16px from the right and 84px from the bottom. The page pads 104px at the bottom so the last card clears both.
- Cards pad 16px. The gap between cards is 16px. Inside a mosaic the gap is 0.
- Stories are a row of 40px avatars with 16px gaps. Five fit a 390px width inside the page inset. The row does not widen the page.
- Targets that receive a tap (nav rows, buttons, the field, tabs, the compose button) are at least 44px. Tiles and dots are not targets.

## Geometric tiling

The shape vocabulary is the square, the bar (a 2-by-1 rectangle), the full circle, the half circle, and the quarter circle. Triangles stay out. Every tile snaps to the module. Inside a mosaic the gap is 0, so shared edges meet.

A quarter circle is a square cell whose fill uses a 100% radius on one corner. The rest of that cell shows the mosaic ground (`surface-raised`), so two facing quarters can complete a half across a grid line. A half circle is a cell with a 100% radius on one side. A bar spans two columns and is twice as wide as it is tall. A full circle is reserved for the focal.

Where geometry is allowed:

- The image of a post, as one mosaic, radius `radius-lg`, clipped so the outer corners follow the card.
- A profile header, as a 3-by-2 tile grid, clipped by the card radius.
- An avatar, as a circle split into two solid halves.
- An empty state and a short section break, as a 2-by-2 tile group, no larger.
- One cell in the post mosaic may be a contained `dot-1` texture. That texture does not leave the cell.

Where the UI stays plain:

- Sidebar, phone bar, fields, menus, and body copy are not tiled.
- A mosaic does not sit behind a paragraph.
- A second full red circle does not appear. Halves and quarters are not that circle.

The focal circle is 64px, red, centered in one yellow cell of the post mosaic. It is not a button and not an avatar.

## Components

### Dots

Four diameters, all solid fills of ink, white, yellow, blue, or red. No fifth size. No hollow dot. No tint.

| Token | Diameter | Use |
| --- | --- | --- |
| `dot-1` | 4px | The texture inside a single mosaic cell, on an 8px pitch. |
| `dot-2` | 8px | The status dot on an avatar, and an unread mark. |
| `dot-3` | 12px | A count pip beside a numeral, used sparingly. |
| `dot-4` | 16px | The top of the scale. A stack may use it once. |

A greater count is a numeral, not a longer row of dots. Overlap is two solid dots, the upper one covering the lower, offset by 4px. Use that on one unread row, not on every avatar.

An avatar is 40px (`avatar`), a split circle, with a 2px solid ring in yellow when the story is unseen and in `line` when it is seen. The status dot sits on the corner, inside the ring box. The letter, if any, is not required; the split is the face.

### Chrome

- **Sidebar.** Canvas ground. Wordmark at title size. Nav rows are 44px, radius `radius-md`, ink type. The current row is an ink fill with `primary-foreground` type. Other rows are transparent to the canvas. Hover (fine pointer) fills the row with `line`.
- **Card.** `surface-raised`, radius `radius-xl` (20px), 1px `line`, padding 16px. Primary actions add `shadow-sm` (a 2px ink offset). The floating compose button uses `shadow-lg` (a 3px red offset). Cards themselves do not carry a heavy offset.
- **Button.** Pill (`radius-full`), height 40px, weight 600. The primary pill is ink with white type and `shadow-sm`. The quiet pill is a card fill, ink type, 1px ink rule. Hover swaps the primary pill to yellow with ink type. Press translates the pill by 2px and removes the offset. A disabled pill is a card fill, `muted` type, 1px `line`, still opaque.
- **Field.** Card fill, 1px `line`, radius `radius-md`, height 44px, 16px type. Focus draws `shadow-focus`. The label is visible.
- **Segment.** A track of `line` at radius `radius-full`, two equal labels, 36px tall. The selected half is an ink pill.
- **Phone bar.** Card fill, radius `radius-xl`, 1px ink rule, `shadow-sm`, inset 12px from the screen. Four tabs with inline icons. The current tab is a yellow tile behind the icon, ink type. Icons are 22px strokes, 1.75px, round caps, in the same file.
- **Compose button.** 56px circle, ink fill, white plus icon, `shadow-lg`, phone only.
- **Icon button.** 40px, radius `radius-md`. Hover fills `line`.

### States

Default, hover, press, and focus are described above. Unread is a yellow `dot-2` plus the word or the numeral. Seen is the quiet ring and no extra dot. Empty is a 2-by-2 mosaic and one sentence. Error is a `danger` sentence under the field; the field rule switches to `danger`. Loading is the word "Posting" on the button. Dots do not spin.

## Motion

Color and the press translation run in `duration-ui` (140ms), `ease-ui`. Nothing fades, blurs, or scales. Under `prefers-reduced-motion`, the translation is removed and the color swap is instant. The pressed fill still changes.

## Accessibility

- Ink on canvas is about 15:1. Ink on a card is about 17:1. `muted` on a card is about 6.9:1. White on ink is about 17:1, on blue about 7.2:1, on red about 5.6:1. Ink on yellow is about 13:1.
- The 1px ink rule and the 2px offset are the body ink, so they clear the non-text need. `line` is a card edge on a warm canvas; it is not used as text.
- Status is a dot plus a ring color, and the row still has its sentence. The numeral is the count.
- Focus is the double ring in `shadow-focus`. It is not a fade.
- Disabled stays opaque. Hits that receive a tap are at least 44px.

## Do

- Keep the shell warm and quiet. Spend red, blue, and yellow inside mosaics, on one primary control, and on the focal circle.
- Build pictures from squares, bars, halves, and quarters that share edges on an 8px module.
- Use split-circle avatars and a solid status dot.
- Round the cards to 20px and the buttons to pills. Line them. Offset only the primary actions.
- Set type on the scale above. Leave 16px or more between the UI and the screen edge.
- Write the product as a social app. Names, times, and sentences should sound like people.

## Don't

- No full-bleed flood of primary color. No page that is mostly one red, blue, or yellow field.
- No dot texture outside a single mosaic cell. No row of dots standing in for a number. No dot larger than 16px except the one 64px focal circle.
- No second focal circle. No triangle. No quarter that ignores the grid.
- No opacity, no rgba fade, no blur, no gradient, no glass. `shadow-*` are solid offsets.
- No copy that explains the visual system inside the product. The post is about a day, a seat, a train.
- No edge-to-edge text. No label under 13px. No second type family.
- No photograph and no external icon file. Icons are inline strokes.
