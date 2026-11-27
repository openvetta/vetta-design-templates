# Heist Cover

A worked example ships as `demo.html`: three original posters for Palm Haven, an invented coast, printed for Marlin & Daughters Pictures. The first sheet is the key art, ten vignettes in one gutter. The second is a loading sheet, one figure and the lockup in the corner. The third is Pier Seven, a night dock. Under them, a short guide, including a square control and an off-sheet pair. Aldo Voss, Nia Calder, Roux Pell, and Lina Varga are invented.

## Atmosphere

Hot dusk on a coast that is not a real city. The sheet is a collage: unequal rectangles, packed edge to edge, split by one even white gutter. Each rectangle is its own vignette. A figure, a car, a helicopter, palms, a tower row, a boat, a wheel. The drawing is comic and semi-solid: a heavy ink outline, two or three flat tones, and a hard rim where the sun hits.

The palette is a sunset. Orange, magenta, teal, sky blue, yellow. Night panels go dusk purple and keep the same outline. The footer of the key sheet is an ink panel in the same gutter, holding the wordmark.

This fits posters, loading frames, mission sheets, and a wall of covers. It is a poor fit for a dashboard, a feed, a bank, or any screen that wants quiet type, glass, or soft depth.

The reference afternoon is sheet 04. Aldo stands in the center with a briefcase. Lina's white frames fill a top panel. Nia holds a phone. Roux holds a fan of cash. Pier Seven is the night job, 22:40, north pier, a cash van.

The collage, the sunset cel shading, and the boxed numeral take their mood from the box-art and loading screens of Grand Theft Auto, including the gridded 2013 cover and the earlier sunset coast posters. Palm Haven does not reuse those panels, people, skylines, or letters.

## Color roles

Frames take color from the tokens in `theme.css`. A picture fill is not a text color.

- `surface` is the ink wall behind the sheets. `surface-foreground` is paper, the reading color on that wall. Paper on the wall is the high pair.
- `surface-raised` is a slightly lifted ink, used as a hairline between guide sections. It is not a card.
- `primary` is hot orange, the sunset panel and the sun's lower sky. `primary-foreground` is the dark brown that sits on a solid orange control. Orange is a field. It is not small type.
- `muted` is the peach used for secondary lines on the wall, including guide captions. It stays off the vignettes.
- `accent` is bay teal: water, a helicopter stripe, a phone screen, a visor. `accent-foreground` is the deep green-black for the rare word that sits on a solid teal field. Teal does not carry a sentence on orange.
- `danger` is heat magenta. It is a large stamp, a lip, a shirt, a wake of neon. It is not body text and not a small status dot.
- `border` is paper. It draws the badge keyline, the stamp rule, and the focus ring. It is not a card outline.
- `ink` is the outline, the footer, the badge fill, and the night silhouette. `paper` is the gutter, the wordmark fill, and the legal line on ink.
- `sun` and `rim` are the yellows: the sun disk, window lights, cash bands, the rim on a shoulder. `sun-deep` is the lower sky band. `bay` and `bay-deep` are sky and deep water. `dusk` and `night` are the tower row and the dock sky.
- `suit` and `suit-shade` are Aldo's cream jacket, lit plane and shadow plane. `jacket` and `jacket-shade` are Nia's cobalt. `shirt` is Roux's magenta. `trouser` and `trouser-shade` are the dark legs.
- `skin-1` through `skin-4`, each with a shade, are the four people. `skin-2-lit` is the lit plane on Nia. Skin is never a gradient and never a UI color.
- `frond` and `frond-deep` are the palms. `car` and `car-shade` are the wedge. `cash` is the bill fill. `chrome` is the wheel dish.

One vignette can hold a sky gradient. Skin, cloth, and metal stay in flat steps. A fourth tone on a jacket is a different system.

## Typography

The display word is drawn. System faces carry only the kicker, the legal line, the stamp, the guide, and the one control. No font file.

- Wordmark: the paths for Palm and Haven. Paper fill, ink stroke, `paint-order` stroke then fill, round joins, skewed about 8 degrees. Palm sits above Haven. The badge sits to the right of the stack, inside the same skew: an ink rectangle, a paper keyline, and the numerals 04 with no extra stroke. This is the only title. It is not a sentence.
- Pier title: the same paths and the same stroke, two lines, Pier over Seven.
- Kicker: `font-display`, weight 700, uppercase, tracked wide. "Key Meridian" over the wordmark. "Open air" over the pier title. It is small. It does not compete with the drawn word.
- Legal: `font-body`, 10–12px, uppercase, tracked, paper on ink. One or two short lines. It is the box-art credit, not a paragraph.
- Stamp: `font-display`, uppercase, tracked, paper, with a square paper rule. "Tonight" on the dock. It rotates a few degrees. It is not a pill.
- Guide: `font-body` at 16px, line-height near 1.45, measure near 62 characters. Section titles are `font-display`, uppercase, tight tracking, paper.
- The sheet control uses `font-display`, uppercase, tracked, on an ink fill.

Scale on the key sheet: the wordmark is about 460px wide inside the footer. On the loading sheet the same mark sits in the corner at about 42% of the sheet width. Below 800px the key mark is about 90% of the column. The legal line does not go below 10px. The stamp does not go below 16px.

## Spacing & layout

The key sheet is the first screen. It is 960px tall on a wide viewport and full width. Ten vignettes and an ink footer sit in one grid. The gutter is `--gutter` (8px), including the outer frame. The footer is an ink cell in that grid, not a bar stuck on afterwards.

- Columns, wide: `1fr 1.12fr 1.12fr 1fr`. Rows: 150px, a flexible hero row, 148px, a 268px footer.
- Top row: helicopter across the first two columns, Lina's face, the tower row.
- Middle row: Nia, Aldo across the two center columns, Roux.
- Bottom row: the wedge car, three palms, the boat, the wheel.
- The hero row is the tall one so Aldo reads as the center. Every other vignette is one subject.
- Below 800px the fixed 960 frame drops. The grid becomes two columns with automatic rows. Aldo goes full width first, then the footer, then the other vignettes in pairs. The helicopter spans the width. Gutters stay 8px. Heads stay in frame: the tall figures anchor to the top of the crop.
- The loading sheet and Pier Seven sit side by side under the key sheet, 18px apart, on the ink wall. The loading sheet is 2:3. Pier Seven stretches to the same height: dock picture on top, title underneath. Below 800px they stack, full width, and the loading sheet keeps 2:3.
- The guide is a column on the wall, max about 980px, padding 22px. It is not a third poster and not a card.
- The sheet control is at least 48px tall. Vignettes are not targets.

## Components

- **Gutter grid:** the sheet background is `gutter`. Cells touch that gap and nothing else. No radius, no shadow, no border on the cell.
- **Vignette:** one inline picture, sliced to the cell, ink outline, flat tones, one rim. A sky may gradient. The picture has a text title.
- **Figure:** hair, head, two skin tones, cloth in two tones, a rim along the lit edge, a prop (briefcase, phone, cash, glasses). The prop is large enough to name at a glance. Legs stay separate.
- **Palm:** a curved trunk and separate fronds, `frond` and `frond-deep`, sometimes a `rim` frond. Reused, not redrawn as a blob.
- **Wheel:** ink tire, `chrome` dish, five spokes, a `sun` hub.
- **Wordmark:** drawn paths, as in Typography. The loading sheet pins it to the top-left corner over the sky. The key sheet centers it in the ink footer with the kicker above and the legal line below.
- **Badge:** ink fill, paper keyline, paper numerals. It is the boxed number. It does not become a button.
- **Legal line:** paper, tracked, uppercase, on ink.
- **Stamp:** "Tonight", square paper rule, slight rotation, sitting on the dock picture.
- **Heat marks:** three solid `danger` bars, 8 by 18, square. They are not stars and not a slider.
- **Sheet control:** ink fill, paper type, 3px paper rule, skew about 8 degrees, radius 0, min-height 48px. On a fine pointer, hover inverts it to paper with ink type. Disabled is not a faded card; this sheet does not show a disabled control.
- **Focus:** `shadow-focus`, a 2px wall gap and a 2px paper ring. The control can take it.
- **Off sheet:** a round face, a pill, and a magenta offset shadow. That block is the counter-example. The on-sheet pair is two vignettes and the 8px gutter.

## Motion

None on the sheets. Pictures do not drift, type does not fade, and the stamp does not blink. The sheet control changes fill in `duration-ui` (120ms) on `ease-ui` (linear).

Under `prefers-reduced-motion`, that fill change is instant. Hover still inverts on a fine pointer, so the control still has a state.

## Accessibility

- Paper on `ink` and paper on `surface` are the reading pairs. The legal line, the kicker, the guide, and the control use them.
- `primary`, `danger`, `sun`, `frond`, and the skin tones are picture fills. They do not carry small type. The stamp is large paper type with a rule, not magenta type alone.
- "Tonight" is a word. Heat is three bars plus the words in the meta line. The wordmark is real text in the picture title, and the paths sit in a named figure.
- The sheet control is at least 48px tall. On a coarse pointer there is no hover-only state.
- Each vignette has a text title that names the subject.

## Don't

- No guns, no real city, no real person, no game character, no copied skyline, no logo from a publisher. The briefcase, the phone, the cash, and the boat are the props.
- No second gutter size. 8px everywhere, including the outer frame. A hairline between panels, or a wide margin inside a cell, is a different sheet.
- No radius on a panel, a badge, a stamp, or the control. `radius-full` is 0. A sun disk and a wheel are circles because they are objects.
- No pill. The off-sheet pill is the mistake.
- No colored offset shadow and no soft shadow. `shadow-sm`, `shadow-md`, and `shadow-lg` are `none`. The badge keyline is a stroke, not a drop.
- No blur, no grain, no glass, no translucent panel. A rotor is a solid ellipse. A rim is a solid shape.
- No gradient on skin, cloth, or metal. Sky and water may gradient. A fourth flat tone on one jacket is already too many.
- No thin illustration stroke. The outline stays heavy enough to survive the thumbnail.
- No font file and no icon font. The display word is paths. Impact, Haettenschweiler, and Arial Black are only the fallback stack for kickers and the control, behind the system faces.
- No card frame around a poster, no device bezel, and no phone mock in the guide. Narrow layout is the real column.
- No dashboard, no feed, and no marketing hero in place of the collage. The first screen is the ten-panel sheet, wordmark included.
