# Bauhaus Polka Dot

A worked example ships as `demo.html`: Punkt, a local-first agent, with the census on the first screen, the same census narrowed, the controls, and a deliberately off-style counter-example. It is a static reference for this visual system.

## Atmosphere

Warm paper, ink rules, and circles on a module. The page is a poster that counts. A geometric sans stays in lowercase. Red, yellow, and blue appear only as flat dots. Black dots are the finished work. One larger red dot is the single thing that needs a person. The field around the dots stays quiet: no texture, no second pattern, no glow.

The product in the reference is Punkt. The model runs on this machine. A finished step adds one black dot and sends nothing out. The first screen is the instrument: a wordmark, a clipped row of small dots, the census plate, a short ledger, and a composer on the baseline.

This fits a local tool, a count, a queue, a catalog of steps, and any screen that can say its status as a number of identical marks. It is a poor fit for a long article, a night cockpit, a marketplace of many hues, and any view that needs squares, triangles, or a picture inside a circle.

The empty cells of a row are part of the module. Filling them so the row looks "finished," or scattering extra dots into the margin, removes the style.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the warm paper, and `surface-raised` is the same paper. A panel does not lift by changing fill. The 1px rule is the edge. Ink on this paper is about 15:1. Long text uses that pair.
- `primary` is the same ink. `primary-foreground` is the paper, for the commit control and for type sitting on an ink field. A product view keeps one ink commit control.
- `muted` is the only secondary text color, for labels and times. It is about 6.4:1 on `surface`. It is not a fill, and it is not a dot.
- `accent` is the blue of a running step, about 7.9:1 on `surface` as text and as a dot. In a product view it is the running dots and the word "running" when that word is the status. It is not a link color and not a focus ring.
- `dot-yellow` is the queue. Yellow against this paper is about 1.3:1, so the fill never carries the edge. Every yellow dot has a 2px ink keyline. Ink on `dot-yellow` is about 12:1, which is why a numeral may sit beside the dot and never inside a small one. Yellow is never type, never a button, and never a field.
- `dot-red` is the printer's red of the one attention dot, about 4.8:1 against `surface` (the shape clears the non-text need) and about 5.5:1 for paper type on the solid, which is enough for a large numeral and still not how this system sets the label. The label stays on the paper, in ink, next to the dot. `dot-red` is not a button and not a paragraph.
- `danger` is the darker red for an error sentence and an error rule, about 7.2:1 on `surface`. It is type and a 1px rule. It is not a second attention dot. A view that is not in an error state does not show it.
- `border` is the ink, at `rule-width` (1px). It is the plate edge, the split between census bands, and the ledger rules. Contrast against `surface` matches the body pair.

One product view holds paper, ink, the running blue, the queued yellow, and a single `dot-red` dot. The error red appears only with an error sentence. A tint, a gradient, a pastel chip, or a primary-colored rectangle is a different system.

## Typography

A geometric sans, set in lowercase. The intended faces are Futura, Avenir Next, and Century Gothic, in the spirit of a Bauhaus universal alphabet: circles and straight lines, no uppercase. The reference does not load a remote font. `--font-sans` names those faces, then Noto Sans Display, so a machine without Futura still resolves to a geometric-leaning sans rather than a neutral grotesk.

- The headline is weight 700, lowercase, flush left, about 104px from 1200px up, 72px from 960px, 60px from 720px, and 46px below that. Tracking is `tracking-display` (−0.045em). Line-height is near 0.9. It is ink. It is not uppercase, not italic, and not centered.
- Section titles are the same weight and case, about 40px (32px below 720px), tracking −0.03em, line-height near 1.
- The census numeral and the hold numeral are weight 700, about 28px, tracking −0.03em, tabular figures, in ink. They sit on the paper, baseline-aligned with a lowercase word.
- Body is 16px, line-height 1.5, weight 400. The measure stays under about 38em. There is no justified text.
- Labels and kickers are 13px, weight 400, lowercase, tracking `tracking-label` (0.14em, tightening to 0.08em below 720px). They are `muted` when they name a category, and ink when they are the status word next to a dot.
- The commit label is 15px, weight 700, lowercase, tracking 0.04em. It is not a tracked uppercase word.
- One family only. A monospace for paths, a serif for headlines, or a script for emphasis adds a second voice. Numerals use tabular figures in the same sans.

## Spacing & layout

The module is 8px. Margins, the gap between dots, and the space inside a band come from that module. Nothing is nudged off the module to look lively, and nothing is centered in the viewport.

- Margin is 56px from 1200px up, 48px from 960px, 28px from 720px, and 16px below 720px.
- From 960px up the hero is two columns: the statement on the left, the census plate on the right, aligned to the top, with a 48px column gap (64px from 1200px). The plate's right edge lines up with the ledger and the commit control. Below 960px the hero stacks: statement, plate, then the short index. The plate becomes full width.
- The census plate is a 1px ink frame. Inside, three bands stack with 1px rules. Each band is a numeral, a lowercase word, and one grid of `dot-3`. The attention rail is the right-hand cell, full height, with its own 1px rule. Below 960px that rail moves under the bands, the left rule becomes a top rule, and the rail is a row: the dot, then the words.
- A census grid is 8 columns. The gap is `dot-gap` (8px). Center to center for `dot-3` is 32px. The row length does not change on a narrow screen; the dots are small enough to keep eight across inside a 16px margin.
- Bands pad 16px 18px. The ledger starts 22px under the hero. Rows are at least 52px. The composer is a top rule, then a 44px field and 44px controls.
- The rhythm under the mast is a single line of `dot-1` at an 8px gap, clipped by the content box. It runs off the right edge. It is a rule, not a tally, so it never receives a numeral.
- Touch targets (the commit control, the quiet control, the field, the nav items) are at least 44px tall. Dots are not targets.

Text is flush left, ragged right. A centered stack, even with the right dots, is off this sheet.

## Components

### Dots

There are four diameters and no others. The gap, when dots sit in a row or a grid, is always 8px.

| Token | Diameter | Use |
| --- | --- | --- |
| `dot-1` | 8px | The rhythm rule. Ink only. May be clipped. Never a count, never a status, never beside a numeral. |
| `dot-2` | 16px | A status mark beside a word, and the single dot in the wordmark. Not a census cell. |
| `dot-3` | 24px | The census unit. One filled dot is one step. A row is eight cells. |
| `dot-4` | 96px | The attention dot. One per product view. Its quantity is the numeral `01`, not its diameter. |

Roles of fill:

- Ink (`primary`) is done, the rhythm, and the wordmark dot.
- `accent` is running.
- `dot-yellow` is queued, and it always carries the 2px ink keyline (`keyline`).
- `dot-red` is the hold. It appears once, at `dot-4`, in the attention rail. A specimen of the token, in a color chart, is labeled as a specimen and is not a second hold.
- An empty cell is a ring: transparent fill, the same 2px ink keyline, the same outer diameter as the filled dots in that grid. Rings complete the row of eight. They are not a second number. They do not appear outside a census grid, and they are never a background.

A greater count is more dots of the same diameter. Enlarging one census dot to mean "more" is off this sheet. The attention dot is larger because it is a different sign, and the view still prints the numeral.

Dots do not overlap, rotate, blur, or take a gradient. They do not sit behind paragraphs. They do not form a wallpaper across the page. A cluster lives in a named region: the rhythm, a census grid, a status mark, or the one attention dot.

Color is not the only signal. Every census band has a numeral and a word. Every ledger row has a word beside its `dot-2`. The hold has the word "hold" and the numeral.

### Plate, ledger, composer

- **Mast.** The word "punkt" in the headline weight at 22px, then one ink `dot-2`, then lowercase nav. The current item carries an ink `dot-1` before the word. Other items do not. Hover draws a 1px ink underline, offset 3px, and does not recolor the word to blue or red.
- **Census plate.** Three bands — done, running, queued — and the attention rail. Done is full rows of ink `dot-3` (24 is three rows of eight, no rings). Running and queued show the filled dots first, then rings out to eight. The rail holds the `dot-4` in `dot-red`, the kicker "attention", the numeral, the word "hold", and one short line. The dot is not a button.
- **Ledger.** Rows, not cards and not bubbles. Time, sentence, a `dot-2` plus its word, and a tabular numeral. The numeral is the count for that line. The plate remains the full count; the ledger does not repeat twenty-four dots. Below 720px the sentence moves to its own line. The row stays inside the margin.
- **Card.** Paper, a 1px ink rule, radius 0, no shadow. Padding 20px. A kicker, a short title, one sentence, and one status mark. A card does not wear a colored header bar.
- **Commit control.** `primary` fill, `primary-foreground` label, 1px `primary` border, radius 0, height 44px. One per product view. Hover and press invert it to paper with ink type. The invert on hover is limited to a fine pointer. A coarse pointer gets the same invert on press, then the control returns. It does not scale, lift, or grow a shadow.
- **Quiet control.** Paper, ink type, 1px `border`. Hover and press fill it with `primary`. Disabled is `muted` type and a `muted` rule, still fully opaque, still the same rectangle, removed from the tab order in a product build.
- **Field.** A visible label in the kicker style. The field is a 1px ink box, paper fill, radius 0, 16px type, height 44px. Placeholder text is not the label. Focus draws `shadow-focus` (a 3px paper gap and a 2px ink ring) and removes the browser outline. The caret is ink. Focus does not spend blue, yellow, or red.
- **Error.** The field's rule and the sentence switch to `danger`. The sentence stays. Color is not the only carrier. The error does not add a `dot-red` dot.
- **Link.** Ink, a 1px underline on hover, offset 3px. Hover does not recolor it to `accent`.

### States

- **Done** is an ink dot plus the word "done". There is no green and no check icon.
- **Running** is an `accent` dot plus the word "running".
- **Queued** is a keyed `dot-yellow` dot plus the word "queued".
- **Hold** is the single `dot-4` plus the word "hold" and the numeral.
- **Empty** is a census row of eight rings, the numeral `00`, and the words "nothing counted".
- **Loading** is the word "counting" and one running dot. Dots do not bounce, pulse, or travel.
- **Disabled** is `muted` at full opacity.
- **Focus** is the ink ring on every control.

## Motion

Almost none. Color on a control changes in `duration-ui` (120ms), `ease-ui` (linear). Nothing translates, scales, fades in, or parallaxes. The rhythm does not move. Dots do not animate.

Under `prefers-reduced-motion`, the color change is instant. The invert on hover and press remains, so the control still shows its state.

## Accessibility

- Body ink on paper is about 15:1. `muted` is about 6.4:1. `accent` as text or as a dot is about 7.9:1. `danger` text is about 7.2:1. Those are the pairs for reading.
- `dot-red` against paper is about 4.8:1, which is enough for a large graphical mark and not the pair used for body type. The hold's words stay ink on paper.
- `dot-yellow` against paper is about 1.3:1. The 2px ink keyline is the edge people actually see. Yellow type on paper, and a yellow dot with no keyline, fail this sheet.
- The 1px ink rule matches the body pair. A gray hairline does not.
- Status is a dot plus a word, and a census band also prints the numeral. A person who does not distinguish blue, yellow, and black still has the word and the number.
- The empty row keeps the words "nothing counted". The error keeps its sentence. The disabled control stays opaque.
- Focus is the ink ring. It is not the blue, the yellow, or the red, because every control has to show focus without spending a status color.
- Hit targets that receive a tap are at least 44px. The dots are readings, not controls.

## Don't

- No dot wallpaper, no random scatter, no mixed diameters in one cluster, no overlap, no rotation, and no dots behind a paragraph.
- No enlarged census dot standing in for a larger number. No count given to the rhythm row. No numeral inside a `dot-3` or a `dot-2`.
- No second attention dot in the same product view. No `dot-red` button, no `danger` used as a dot fill, and no field of red dots.
- No yellow type, no yellow button, no yellow dot without the ink keyline, and no yellow smaller than `dot-2`.
- No square or triangle as a motif. No primary-colored rectangle used as decoration. A 4px frame, a hard offset shadow, and a black uppercase headline are a poster of blocks, not this census.
- No squiggle, no pastel chip, no confetti, no zigzag rule, and no striped offset. Those belong to a laminate.
- No gradient, no blur, no glow, no grain, no photograph, and no icon inside a dot. `shadow-sm`, `shadow-md`, and `shadow-lg` are `none`.
- No radius on a field, a card, a button, or the plate. `radius-full` is for a dot only. A pill is off this sheet.
- No uppercase display, no italic headline, no centered lockup, and no second type family.
- No opacity used to create hierarchy. Disabled is `muted`, not a faded ink.
- No green success, no spinner, and no animated dot.
- No line-grid behind the dots. Rules separate regions; they are not graph paper. The repeating unit is the circle.
- No dropping a census row on the narrow screen, and no shrinking the four diameters so the phone can fit more decoration.
