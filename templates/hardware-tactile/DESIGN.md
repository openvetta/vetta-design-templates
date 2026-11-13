# Hardware Tactile

A worked example ships as `demo.html`: Latch-1, a local agent instrument, with the same face upright in a hand frame and a pair of deliberately off-style panels. It is a static reference for this visual system.

## Atmosphere

A tool on a bench, matte and exact. The chassis is warm plastic. A brushed aluminum plate carries the name. The display is a recessed well with flat phosphor segments, not a glowing screen. Knobs are encoders: a plastic cap, an engraved tick ring, one orange notch. Keys are square, with a short lip under the cap so a finger can feel the travel. Orange is a job, not a theme. It appears on the run key, the power lamp, and the knob notches.

The product in the reference is Latch-1. The index, the transcript, and the run stay on the machine. The cover is the instrument itself. Feature plates, the console, and fields are smaller pieces of the same chassis, not cards floating on a marketing page.

This fits a local tool, a device panel, a field recorder of work, and any agent that should feel like hardware you can learn by touch. It is a poor fit for a campaign hero, a social feed, a long article, a weather cast, or a candy consumer app.

The finish is modern and dry. A broad, low highlight along a top edge is the plastic catching light. It is not a gel streak, a leather grain, a wood veneer, or a stitched seam.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the bench. `surface-foreground` is the engraved ink. That pair is about 13:1. Ink on `surface-raised` is about 15:1, and on `plastic` about 15:1. Long text uses this ink.
- `surface-raised` is the key cap and the face of a module. It is a warm off-white, not pure white.
- `plastic` is the chassis. `plastic-deep` is the recessed floor of a field and the lip under a resting key.
- `aluminum`, `aluminum-hi`, and `aluminum-deep` are the brushed nameplate only. Ink on `aluminum` is about 10:1. Do not set a paragraph on the plate.
- `muted` is graphite for legends, captions, and inactive meta. It is about 6.3:1 on `surface` and about 4.5:1 on `aluminum`. Legends on the plate use it. A lighter gray fails on the metal.
- `primary` is the functional orange. It fills the run key and the power lamp, and it colors the notch on every knob. `primary-foreground` is the near-black legend on that fill, about 5:1. White on `primary` fails. `primary-deep` is the lip and the border of the orange key, about 5.5:1 against `plastic`. The orange fill itself is only about 3:1 on `plastic`, so the key always keeps the deep lip.
- `accent` is the live ink, a dark phosphor green, about 6.3:1 on `surface`. It marks indexed, on-device, and focus-adjacent status text. It is not a large fill.
- `phosphor` is the lit segment and the live line inside the well, about 13.5:1 on `well`. `phosphor-soft` is the older line in the same well, about 6.5:1. `phosphor-dim` is the unlit segment, decorative, not a text color. Phosphor does not leave the well.
- `danger` is the stop key and the error sentence, about 6.3:1 on `surface`. `danger-foreground` sits on a solid `danger` fill, about 7.3:1. `danger-deep` is that key's lip. `danger-wash` is the pale field behind an error sentence set in `danger`.
- `border` is the machined seam, about 3.6:1 on `surface` and about 4:1 on `plastic`. It is the non-text boundary for a resting key, a field, and a module. A shadow is not that boundary.
- `screw` is the fastener only. It is not ink.
- `well` is the only dark region of any size. The page stays on `surface`.

One orange control per screen. The lamp and the notches are indicators, not a second button.

## Typography

A plain grotesque for reading, a system monospace for engraving. The intended sans is Helvetica Neue, Helvetica, or Arial. The mono is `ui-monospace` or a local fallback. The reference names those stacks and does not load a remote face.

- The instrument's name is 14px, weight 500, tracked out (`0.18em`). It sits on the plate. It is not a billboard.
- The page title under the instrument is weight 500, about 28px, tracking `-0.03em`, line height near 1.15. Section titles use the same cut at about 26–32px. Sentence case. No italic display.
- Body is 16px, weight 400, line height 1.5, on `surface`. Measure stays under about 62 characters.
- Key labels are 12px, weight 600, tracked slightly (`0.06em`), in the cap's ink. On orange that ink is `primary-foreground`. On stop it is `danger-foreground`.
- Engraved legends are 11px monospace, uppercase, tracking `0.14em`, in `muted` (or `phosphor` inside the well). A legend is a name. The value next to it is 13px sans in `surface-foreground`, or `phosphor` in the well. A legend never stands in for the value.
- The segment clock is drawn, not a font. A text equivalent sits with it for assistive technology. Transcript lines in the well are 13px mono.
- Weights below 400 disappear on the plastic. 800 is unused. 600 is the heaviest cut, and only on key labels and the speaker name in the well.

## Spacing & layout

The module is 4px. Padding, gaps, and the key lip are multiples of it.

- Chassis padding is 16–22px. The cover instrument is at most 960px wide and centered on the bench. Sections use the same measure.
- Keys, fields, and the run key are at least 44px tall. Encoder dials are 64–74px on the instrument and 96px in the anatomy specimen. Status plates that are not controls may be shorter.
- Radius: keys use `radius-sm` (3px). The well and fields use `radius-md`. Modules use `radius-lg`. The chassis uses `radius-2xl` (18px). Knobs use `radius-full`. A pill button is off-style. A zero-radius window is a different system.
- The face is two columns: the well, and a three-column key pad beside it. The four encoders are one row under both. Below 860px the face stacks in this order: plate, well, encoders, keys, rail. The pad becomes four columns, and the run key returns to a single cell. It stays the only orange key and stays at least 44px tall.
- Below 700px, material swatches go to two columns. Specimens, feature plates, and the off-style pair go to one column. Below 640px the prompt stacks, run under the field, full width.
- Section titles step from 32px to 26px. Body stays 16px. Legends stay 11px.
- Touch targets do not shrink to fit a caption. Captions wrap. The page does not scroll sideways at 390px.
- A fine pointer may lift a resting key by 1px. A coarse pointer gets no hover lift. Press travels 2px down and the lip collapses, on both pointers.

## Components

- **Chassis.** `plastic` graduating to `plastic-deep`, a 1px `border`, an inset light along the top, and `shadow-lg` as the contact shadow. Four `screw` fasteners, one at each corner, decorative. The nameplate is `aluminum` with a fine vertical brush (`aluminum-hi` lines) and an `aluminum-deep` edge.
- **Well.** `well` fill, `shadow-well`, `radius-md`. Segments are `phosphor` on `phosphor-dim`. No outer glow. The clock has a text equivalent. Speaker names are visible; color only distinguishes the live line (`phosphor`) from the older line (`phosphor-soft`).
- **Encoder.** A tick ring in `border`, masked to a band. A `plastic` cap with a broad upper-left highlight. A 3px `primary` notch. Under the dial: a `muted` legend and a 13px value. The notch angle and the value say the same thing. Knobs in the reference are figures, not native sliders.
- **Key.** `surface-raised` to `plastic`, 1px `border`, 2px `plastic-deep` lip, `radius-sm`, height 44px. The label is the word. Press: translate 2px, lip removed, 90ms. The current mode is a key already seated (`plastic-deep` fill, inset shade) with `aria-pressed`.
- **Run.** One per screen. `primary` fill, `primary-foreground` label, `primary-deep` lip and border. On a narrow prompt it may span the row. It does not become a pill.
- **Stop.** `danger` fill, `danger-foreground` label, `danger-deep` lip. One per screen unless the machine is actually halted.
- **Field.** Visible legend, then the control. Floor is `plastic-deep`, seam is `border`, inset shade along the top. Value text is `surface-foreground`. Placeholder text is not the label. Error: `danger` seam, the sentence on `danger-wash` in `danger`, `aria-invalid`. The sentence stays.
- **Badge.** A status plate, not a control. 11px mono, `radius-sm`, 1px `border`. Resting plates are `surface-raised` with ink. Live plates use `accent` ink. Halt uses `danger` ink. The word does the work.
- **Module.** A feature plate: `surface-raised`, `radius-lg`, `border`, padding 16px, one screw, a legend, a 16px title, a short sentence. Three plates is a set. They do not become a bento of equal pictures.
- **Focus.** A 2px `primary` ring, offset 2px (`shadow-focus` on the bench). Inside the well the same orange ring is visible on `well`. Removing it without a replacement is off-style.
- **Disabled.** The key drops to about 40% opacity and loses its lip. It stays the same plastic key. Disabled text does not have to clear 4.5:1.

## Motion

The colon in the segment clock is the only loop. It steps off to about a quarter opacity on `duration-blink` (1.2s). The power lamp is steady.

Press uses `duration-press` (90ms) and `ease-press`. No overshoot, no bounce, no squash. A fine pointer may lift a resting key 1px. Product meaning does not depend on hover.

Under `prefers-reduced-motion`, the colon holds steady, and lift and press travel stop. The pressed key still darkens, and the seated key still shows its inset fill, so state remains visible.

Under `prefers-contrast: more`, seams and key borders move to `surface-foreground`.

## Don't

- No gel buttons, specular streaks, glass highlights, leather, wood, or stitched seams. That is glossy skeuomorphism from another decade.
- No clay pillows, no fat radius, no hard offset extrusion, no pastel candy.
- No frost blur, no translucent panel, no liquid chrome, no iridescent rim.
- No neon glow, no HUD brackets, no scanlines, no dusk grid. Phosphor is flat and stays in the well.
- No beveled gray window chrome and no navy title bar. Zero radius is a different desktop.
- No rainbow knob caps. Caps match the chassis. Orange is the notch, the lamp, and the one run key.
- No second run key. No orange paragraph. No white label on orange.
- No pill. No chat bubble. No icon-only key. No placeholder standing in for a legend.
- No pure white page and no pure black page. `well` is a part, not a theme.
- No remote font, no script, no airbrushed weather, no mascot.
- No spring on press, and no screen of looping parts. The colon is enough.
