# Dither Plate

A worked example ships as `demo.html`: the press room at Plate, a fictional print atelier. The first screen is sheet 14, the moth Vespera selene, coarse cells on paper. Below it, sheet 07 is the mineral kerrite, fine cells and flat blue plates. The third sheet is pale gray: the kiln ibis, one-bit cells, and a lockup of roman, drawn blackletter, and a letter built on the dither grid. Under the sheets, the same language states the rules, including a phone frame.

## Atmosphere

Paper, or the pale gray of an unprinted proof. The picture is an ordered dither: a Bayer matrix of square cells, each cell fully opaque, the ground showing through the gaps. Tone is which cells are on, and which ink they carry. It is not a round dot that grows, not a blur, and not a stack of translucent layers.

Plate prints three kinds of sheet. A specimen plate uses a short palette on paper white, with a sliced display word and monospaced notes in the margins. A second sheet puts a finer multi-color dither under and over flat saturated plates. A third sheet is one-bit black on pale gray, with mixed poster type and small technical meta at the edges.

The subjects are invented. Vespera selene is a moth. Kerrite is a spar. The kiln ibis is a beast for a night firing. None of them is a portrait of a real specimen, and none of the sheets is a map or a product dashboard.

This fits posters, edition announcements, specimen plates, and a press room that shows its own sheets. It is a poor fit for banking, dense analytics, a feed, a chat, and any screen that wants glass, soft depth, or round chrome.

The reference copy is the press room on 18 April. Sheet 14 is on the bed. Sheet 07 is the spar. The night list is the kiln ibis, 21:30, upper bed and cellar.

## Color roles

Frames take color from the tokens in `theme.css`. A picture ink is not a text color.

- `surface` is paper white. Register A and the press room sit on it. `surface-foreground` is the ink. Ink on paper is about 15.8:1.
- `surface-raised` is the pale gray of register C. It is a sheet ground, not a card. Ink on it is about 12.7:1. The same gray fills the gaps of the one-bit dither.
- `primary` is the same ink. `primary-foreground` is paper, for type on an ink button and for the rare word that sits on a solid ink field. Paper on ink matches the 15.8:1 pair.
- `muted` is for a secondary caption when ink would shout. It is about 6.5:1 on paper and about 5.2:1 on pale gray. It is not a dither ink and not a plate.
- `accent` is the flat plate, a saturated blue used only as an opaque rectangle. `accent-foreground` is paper. Paper on the plate is about 7.2:1. Ink on the plate is about 2.2:1, so ink type never sits on a plate.
- `danger` is the words "Plate jam" and nothing else in the picture. It is about 7.1:1 on paper. It is not a dither ink and not a plate.
- `border` is the ink, used for the focus ring, the field rule, and the phone frame. It is not a card outline.
- `wing-pale`, `wing-mid`, and `wing-deep` are the moth's three picture inks, plus ink for the eyespot and the body. Pale on paper is about 2.1:1. Mid is about 4.5:1. Deep is about 11:1. Pale and mid never carry type. Deep can carry a large solid, not a caption.
- `ink-cyan`, `ink-crimson`, and `ink-chartreuse` are the mineral's picture inks, plus ink. Cyan on paper is about 4.0:1. Crimson is about 5.3:1. Chartreuse is about 1.4:1. Chartreuse is a fill only. These three do not color sentences, buttons, or the page.

One sheet spends one register. The moth does not wear the blue plate. The beast does not grow a second ink. The mineral may show every picture ink, because that sheet is the multi-color register. A gradient along a wing, a translucent plate, or a fourth ground is a different system.

## Typography

System stacks only. No font files. Letters that the stacks cannot draw are paths or cells.

- Display, sliced: `font-display`, weight 800, uppercase, tight negative tracking, line-height near 0.82. The word is set four times. Each copy is clipped to a horizontal quarter and shifted a few pixels on x. That is the deconstructed face. It is the moth's name, not a sentence.
- Serif: `font-serif`. The mineral's large word is roman, weight 700, size clamped from 88 to 168, line-height near 0.8. A high-contrast italic stack, weight 700, line-height near 0.95, sits under it in short lines. On the night sheet, a small tracked roman uppercase sits above the lockup, and an italic word sits under it.
- Blackletter: drawn, not typed. Stems, diamond terminals, and broken diagonals are filled ink paths. It is the night sheet's main word. It is not a body face.
- Dither letter: one character built on `cell-bitmap`. The cells are the same square grid as the beast. Strokes are a whole number of cells. Counters stay open. The letter is ink. It sits in the lockup beside the blackletter, on the same baseline.
- Mono: `font-mono`, 12–13px, line-height near 1.45. Specimen notes, sheet numbers, floor, time, and the night list. Uppercase when it is a label, sentence case when it is the specimen paragraph. It is never the display word.
- Guide text is the serif at 17px, line-height near 1.45, measure near 62 characters. Section titles are the same serif, large, weight 700.

Scale on a wide sheet: sliced display about 76 to 120, mineral word about 96 to 164, italic stack about 32 to 46, blackletter about 140 tall, mono 13, guide title about 48, guide body 17. Below 800px the sliced word floors at 52 and the mineral word floors at 72. Mono does not go below 12.

## Spacing & layout

The press room is a stack of sheets on paper. Separation is space and, on the night sheet, a change of ground. There is no rule between sheets, no card, and no frame around a poster.

- Sheet padding 20 on a phone, 40–48 on a wide screen. The first sheet is at least 960 tall on a wide screen so the moth, the sliced name, and both captions sit inside the first viewport. The captions pin to the bottom edge. The extra paper is the margin, not a missing block.
- The moth sheet: a mono mast on the top edge, the sliced name across the top, the moth large and to the right, overlapping the lower quarters of the name, captions at the two bottom corners. Below 800px the overlap goes away. The name, the moth at full column width, and the captions stack. The moth's aspect ratio is kept. It is not cropped.
- The mineral sheet: type on the left, the crystal drawing on the right. Two flat plates live inside the drawing, one behind the upper crystals and one crossing in front of the lower crystals. Below 800px the type stacks above the drawing. The plates stay inside the drawing, so they scale with it and do not cover the words.
- The night sheet: pale gray, full bleed. Meta in a row along the top edge. The lockup sits low on the left. The beast sits low on the right. A mono footer runs the bottom edge. Below 800px the order is meta, lockup, beast, footer, each at full column width.
- Guide padding matches the sheets. Sections stack. The phone frame is 390 wide, square, with an ink bezel.
- Targets that take a tap are at least 44px, and 48px below 800px. Cells, plates, and eyespots are not targets.

## Components

- **Mast:** mono, 12px, tracked. The atelier name in ink, the room and the sheet number in `muted` or ink. It is type on the sheet, not a bar.
- **Sliced display:** four clipped copies of one uppercase word in `font-display`. Shifts stay inside the sheet padding. The gaps between quarters show whatever is behind the word.
- **Dither subject:** closed paths filled with a Bayer pattern. Empty cells are the ground, or a paper path of the same outline when type would otherwise show through the wing. Cells use `cell-coarse` (10px) on the moth, `cell-fine` (6px) on the mineral, and `cell-bitmap` (8px) on the beast and on the dither letter. `shape-rendering` is crisp so the squares stay squares. No cell uses opacity.
- **Bayer pattern:** the 4×4 matrix. A cell takes the first ink whose threshold is above its matrix value. Inks in one tile occupy different matrix slots, so they never share a cell and never blend. A second tone is a second path with its own pattern, painted over a ground path so the inner zone replaces the outer one.
- **Eyespot and solid:** the darkest tone can be a solid ink shape. The moth's eyespot is an ink disk, a paper disk, and an ink pupil, all opaque. Antennae are an ink stroke with a square cap. The beast's beak, head, crest, and legs are solid ink. These are the "all cells on" tone, not a second technique.
- **Color plate:** a rectangle of `accent`, radius 0, no shadow. It slides behind a crystal or across the front of one. Type does not sit on it. If a label must, the label is `accent-foreground`.
- **Blackletter:** filled ink paths. Diamond terminals, a heavy stem, a flag, a foot. It is used for one word on the night sheet.
- **Dither letter:** a group of ink rects on the bitmap grid, one character wide in whole cells, baseline aligned with the blackletter. The counters are empty cells, not punched circles.
- **Caption:** mono, in the margin. The moth's note is four short lines. The family line is four short lines, opposite corner. The night sheet's meta is floor, time, and where to ask. The footer is who printed it, the list, and the year.
- **Button:** mono, uppercase, tracked, min-height 44px, radius 0, `shadow-sm` which is `none`. The solid button is `primary` with `primary-foreground`. Hover, on a fine pointer only, inverts it to paper with a 2px ink inset. The quiet button is ink with an underline. Disabled is `muted` ink and a 1px `muted` inset, still opaque.
- **Field:** paper, 1px `border`, mono, radius 0, min-height 44px. Focus uses `shadow-focus`.
- **Focus:** `shadow-focus`, a 2px paper gap and a 2px ink ring, zero blur. Every control can take it.
- **Plate jam:** the words "Plate jam" in `danger` and mono, then a serif reason. Color is not the only signal.
- **Empty:** the mono line "The bed is empty." No illustration.
- **Phone frame:** square ink bezel, paper screen, the moth sheet in its stacked order. It is a proof, not a device with a rounded shell.

## Motion

Almost none. A button's fill changes in `duration-ui` (120ms) on `ease-ui` (linear). Cells do not march, plates do not drift, and type does not fade in.

Under `prefers-reduced-motion`, the fill change is instant. Hover and press still invert the solid button, so the control still has a state.

## Accessibility

- Ink on paper is about 15.8:1. Ink on pale gray is about 12.7:1. `muted` is about 6.5:1 on paper and about 5.2:1 on pale gray. `danger` text is about 7.1:1. Paper on `accent` is about 7.2:1. Those are the reading pairs.
- Picture inks fail for small type. Pale is about 2.1:1, chartreuse about 1.4:1, cyan about 4.0:1, mid about 4.5:1. They paint cells. Captions stay ink or `muted`.
- Ink on the blue plate is about 2.2:1. Type does not go there.
- "Plate jam" is words plus `danger`. The dither letter is a character in the word, and the blackletter word is also drawn as paths with a text label on the figure. Sheet titles exist as text, not only as shapes.
- Targets that take a tap are at least 44px. On a coarse pointer there is no hover-only state.
- The moth, the mineral, and the beast each have a text title that names the subject.

## Don't

- No round halftone, no dot that grows with tone, and no CMYK rosette. The cell is a square. Its size is fixed inside a register.
- No blur, no gaussian fringe, no airbrush, and no soft shadow. `shadow-sm`, `shadow-md`, and `shadow-lg` are `none`.
- No CSS opacity and no alpha stack used as depth. A gap in the pattern is empty ground, not a 50% ink. Plates are opaque.
- No gradient on a dithered subject, and no gradient used as a ground. Tone comes from which cells are on.
- No glass, no frost, and no translucent panel.
- No colored offset shadow under type or under a plate.
- No pill, no radius above 0 on chrome, and no `radius-full` circle used as a button or an avatar. `radius-full` is 0. An eyespot may be a disk because it is the specimen, not a control.
- No split-color avatar, no card, no divider between sheets, and no boxed empty state. Empty is one mono line.
- No generic empty illustration, no cartoon weather, and no Frutiger Aero gloss.
- No second ground on the moth sheet, and no blue plate on the beast. Registers do not mix on one sheet.
- No picture ink as a sentence, a button, or a caption. Chartreuse and pale gold especially.
- No font file, no blackletter webfont, and no icon font. Blackletter and the dither letter are drawn.
- No horizontal scroll, and no crop of a poster artboard on a narrow screen. Stack the sheet. Keep the drawing's aspect ratio. Let captions wrap inside the padding.
- No dashboard, no feed, and no marketing hero in place of a sheet. The first screen is the moth sheet.
