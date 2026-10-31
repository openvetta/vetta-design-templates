# Riso Press — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A neighborhood print shop's job desk, not a poster hung on a wall. The page is
uncoated paper with a fine tooth. Work is separated by crop marks, a 1px soy
rule, and a second ink plate that sits a few pixels out of register. Color
arrives as flat spot ink — blue, fluorescent pink, yellow — and where two
plates cross they darken instead of blending through a gradient. Halftone dots
live inside the ink. Nothing is glossy, nothing is soft, nothing is a marketing
hero.

Fits independent presses, editioned goods, cultural programs, music, food, and
any product that should feel printed by a person. It is a poor fit for banking,
dense analytics, long-form reading, and anything that needs to look frictionless
or clinical.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the desk: warm uncoated stock, darker than the sheet. It is never
  pure white and never a cool gray.
- `surface-raised` is the sheet lying on the desk. Separation comes from a 1px
  `border` and the misregistered plate, not from a gray elevation step.
- `surface-foreground` is soy black. Body text, crop marks, rules, and the
  registration cross all use it.
- `primary` is the blue drum, the key action ink. `primary-foreground` is paper,
  not pure white — white looks like a screen.
- `accent` is the pink drum. It is the ghost plate (every `shadow-*`), the stamp
  ink, and the "on press" flourish. `accent-foreground` is paper, for type that
  sits on a pink fill.
- `ink-yellow` is the third drum, a fill only. Pair it with
  `ink-yellow-foreground` (soy black). Yellow never carries small type, and it
  is not a warning color.
- `danger` is a separate red drum for errors. It is not a brighter pink. Type on
  it uses `primary-foreground`.
- `muted` is a warm brown-gray for captions, job metadata, and secondary lines.
  Cool gray reads as a scanner, not a shop.
- `border` is soy black at full strength, drawn at 1px. A 4px frame belongs to
  a different system.
- One screen spends at most three inks plus paper and soy black. A fourth ink
  means a drum that is not loaded.
- Overlap is two plates multiplied, not a fourth color token. Do not invent a
  purple fill to fake the cross.

## Typography
System stacks only. No webfonts.
- Display and buttons: a heavy grotesque (`Arial Black`, Impact, then a bold
  system sans). `uppercase`, weight 800, tight negative tracking, line-height
  near 0.85. This is the poster voice, used for the job title and short
  actions — not for sentences.
- Body: a plain grotesque at regular weight, 16px, line-height 1.5. Measure
  stays near 65 characters. This is a job ticket, not a magazine column, so
  there is no serif prose face.
- Registration voice: a monospace, 11–12px, uppercase, tracked out. Job
  numbers, plate names, captions, and crop-mark labels use it. It is metadata,
  never a headline.
- Scale: display 64/76, H1 36/44, H2 24/28, H3 18/20, body 16, small 14,
  registration 12.
- The display color is `primary`, with a `text-shadow` in `accent` at
  `misregister-x` / `misregister-y` and zero blur. That shadow is the pink
  plate. Body text does not get it.

## Spacing & layout
- The sheet sits inset from the desk. Page padding 20 → 32. Sheet padding
  28 → 36, with extra room at the corners so crop marks (about 14px arms) do
  not cut the type.
- Section rhythm 64 → 80. Card padding 20 → 24.
- Gaps: 12, 16, 24, 32. The misregistered plate hangs to the right and below,
  so a gap under 12 lets the ghost collide with the next piece.
- The cover is a job desk: masthead, the edition on the bed, the queue. It is
  not a centered slogan with a single button.
- Asymmetry is mild. The poster block outweighs the copy, and the queue is a
  full-width ticket list under them. Broken grids and overlapping windows are a
  different style.
- Touch targets are 44px, 48px on a phone. Drums and dots are indicators, not
  targets, unless they sit inside a row that is itself 44px tall.

## Components
- **Crop marks:** 1px `border` arms at the four corners of a sheet. They mark a
  printable page. They are not decoration scattered through body copy.
- **Registration mark:** a soy circle with a cross through it, used once beside
  the wordmark. It is `radius-full` because it is a printer's mark, not a
  button.
- **Plates:** flat ink rectangles or circles. Halftone (`halftone` at
  `halftone-size`) sits inside the ink. Overlapping plates use multiply so the
  cross darkens. Plates do not carry body text; type sits above them.
- **Shadows:** `shadow-sm` on chips and fields, `shadow-md` on buttons,
  `shadow-lg` on the sheet and the poster. All zero blur, all the pink drum.
  `shadow-press` is the aligned plate (offset 0) for the active state.
- **Buttons:** square to `radius-md`, 1px soy border, heavy uppercase label,
  `shadow-md`. The primary action is a `primary` fill with
  `primary-foreground`. A quiet action is `surface-raised` with soy text. Hover
  shifts the piece up-left by 1px and lengthens the ghost. Active translates by
  the misregister and swaps to `shadow-press`, so the two plates line up under
  the thumb. Disabled drops the ghost, switches the border to dashed, and uses
  `muted` type — it reads as an empty drum, not a faded button.
- **Focus:** `shadow-focus`, a soy ring outside a paper gap. Never remove it
  without a replacement that is equally hard-edged.
- **Inputs:** `surface-raised` field, 1px soy rule, `radius-md`, `shadow-sm`.
  Focus fills the field with `ink-yellow` and `ink-yellow-foreground`. The
  yellow plate is how the shop says "this is the slot in use."
- **Chips:** status is a word plus an ink, not a dot alone. "On press" is
  `primary`, "drying" is `ink-yellow` with `ink-yellow-foreground`, "queued" is
  paper with a soy rule, "jam" is `danger` with `primary-foreground`.
- **Stamp:** a small mono label, `accent` border and text, rotated a few
  degrees, `shadow-sm`. One stamp per sheet. It is an edition mark, not a
  badge system.
- **Queue rows:** a ticket list. Index in mono, title in the grotesque, drums
  as tiny plates, status chip at the end. Rows are separated by 1px rules, not
  by cards floating in space.
- **Empty:** a dashed soy outline and a mono line ("No sheet on the bed"). No
  illustration, no gentle empty-state smile.
- **Error:** `danger` ink plus a mono reason ("Drum jam — pink"). Color is
  never the only signal.

## Motion
- Mechanical and short: `duration-shift` (120ms) on `ease-press`. The only
  travel is the plate sliding into or out of register.
- Hover lengthens the ghost. Active snaps it to zero. Nothing bounces, nothing
  fades up from transparent, nothing parallaxes.
- Halftone does not animate. A moving dot screen looks like a moiré error.
- Under `prefers-reduced-motion`, drop the translation and keep the shadow
  change, so the press state is still visible.

## Accessibility
- Soy on `surface` and on `surface-raised` is the reading pair, well above
  7:1. `muted` on both clears 4.5:1 for captions and metadata only.
- `primary-foreground` on `primary`, on `accent`, and on `danger` each clears
  4.5:1. `accent` on `surface` and on `surface-raised` clears 4.5:1 for text,
  so pink labels are legal — pink as a large display fill still prefers paper
  type on top.
- `ink-yellow` fails for small type. Type on yellow is always
  `ink-yellow-foreground`.
- Halftone and paper tooth stay behind or inside large ink fields. They do not
  tile across paragraphs.
- State is never the offset alone. Pair the ghost with a fill, a label, or a
  border change. The focus ring is the keyboard affordance.

## Don't
- No blurred shadows, and no soft ambient lift.
- No gradients, mesh, or glass. A second plate is a flat ink shape offset from
  the first, not a fade between them.
- No radius above `radius-xl` (4px) except `radius-full` for drums and the
  registration mark. No pills, no 16px cards, no squishy corners.
- No 4px black poster frames, no hard black sticker shadow, no lime field, no
  polka-dot paper. Those are other systems.
- No beveled metal, no title-bar chrome, no pixel fonts.
- No inset white highlight and no clay sheen.
- No cool gray palette, no pure white sheet, no near-black "premium" page.
- No serif article column, no drop cap, no magazine pull-quote.
- No centered product-marketing hero as the cover. The cover is the desk.
- No extra drums. Three inks plus soy black plus paper.
- No halftone over type smaller than 16px.
- No opacity-only disabled state, and no pink used as the error color.
- No webfonts and no photographic paper texture. Tooth and halftone are drawn
  with the tokens above.
