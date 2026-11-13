# Soft 3D

A worked example ships as `demo.html`: the Stillhour hour-keeper, the Puffet character sheet, an off-style comparison, and the same screens at a narrow width. It is a static reference. It is not a wellness service, and it does not ask anyone to follow instructions outside the visual system.

## Atmosphere

Quiet, warm, and slightly sleepy. Surfaces are matte clay or soft vinyl: a single volume with a broad upper-left highlight, a lower-right occlusion, and a contact shadow on the ground. The page is peach cream. Lilac is the accent, used sparingly. The one commit action is a near-black pill. Everything else stays light.

The product shape in the reference is Stillhour, an app that keeps one unhurried hour. The people in that world are the Puffets, an original family of neckless clay pebbles. They are not weather, not animals, and not a mascot borrowed from another brand.

This fits calm consumer products, gentle onboarding, and habit tools that should feel soft without turning into candy. It is a poor fit for dense data, finance, developer tools, or anything that needs a hard edge or a glossy render.

The material is opaque. A blurred color field behind a phone specimen is only the studio backdrop. Product canvases are a solid `surface`. Mesh washes, glass, chrome, and airbrushed spray are other languages.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is peach cream, the product canvas. `surface-foreground` is warm ink. Ink on `surface` is about 11:1, and ink on `surface-raised` is about 13:1. Long text uses this pair.
- `surface-raised` is a warm pillow white for cards, rows, and fields. It does not contrast with `surface` by fill alone, so interactive pillows also carry `border`.
- `primary` is a warm near-black, reserved for the single commit pill on a screen. `primary-foreground` is the pillow white. That pair is about 14:1. A second near-black control on the same screen breaks the rule.
- `muted` is a warm plum-gray for secondary text and inactive tab labels. It clears 4.5:1 on both `surface` and `surface-raised`. It is not a cool gray.
- `accent` is lilac clay, a fill for the selected chip, the active tab, and the lilac Puffet. Text on `accent` and on `selected` uses `surface-foreground` (about 8:1 on `accent`). `lilac-ink` is the darker lilac for focus rings, selected seams, and text links (about 6.7:1 on `surface`).
- `danger` is a rose that works as text (about 5.4:1 on `surface`, about 6.2:1 on `surface-raised`). `danger-foreground` sits on a solid `danger` fill. `danger-wash` is the pale field behind an error sentence set in `surface-foreground`.
- `border` is a warm clay seam, about 3.9:1 against `surface` and about 4.6:1 against `surface-raised`. It is the non-text boundary for controls. Shadow is not that boundary.
- Clay batches, each with a deeper stop for the shaded side: `clay-cream`, `clay-apricot`, `clay-sage`, `clay-lilac`, and the matching `-deep` tokens. They are character and object fills. Small text does not sit on a deep stop.
- `volume-light`, `volume-shade`, and `volume-ao` are the three stops of the material. They are not palette swatches for UI chrome.

Two clay batches in one cluster is enough. A screen that shows all four batches is a character sheet, not a product view.

## Typography

A rounded geometric sans. The intended face is Nunito, SF Pro Rounded, or the `ui-rounded` generic. The demo names that stack and does not load a remote font.

- Screen titles are 800, about 28–34px, with a slight negative tracking (`-0.02em`) and a line height near 1.15. Body stays at 500, 15–16px, line height 1.5, tracking left open. Labels and the black pill are 700.
- There is no monospace, no serif, and no condensed face. Weights below 500 look thin against the volumes. 900 is reserved for nothing here; 800 is the heaviest cut.
- Titles are sentence case. Uppercase is limited to a single short eyebrow if a specimen needs one, and the product screens in the demo do not use it.
- Meta and tab labels stay at 12px or larger. A 12px label uses `surface-foreground` or `muted`, never a pastel fill as the ink.

## Spacing & layout

The reference presents Stillhour as phone specimens on a peach studio field.

- Product padding is 18–20px. Cards stack with 10–12px gaps. Sections inside a phone separate by 16–20px.
- Touch targets are at least 44px tall. Chips, rows, tabs, and the black pill all meet that bar. The pill is full width inside the screen padding.
- Radius starts at 16px. Cards use `radius-lg` (28px) or `radius-xl` (36px). The phone specimen uses `radius-2xl`. Chips, the commit pill, and baths of clay use `radius-full`. A 4px corner is off-style. A square corner is off-style.
- One hero volume per screen, near the top. Lists use the bust crop, not another full scene.
- Below 760px the specimen board becomes one column. The phone width follows the viewport up to 390px. Headlines drop from 34px to 28px. Chips wrap instead of scrolling sideways. The hero scene shortens before the plan or the list is removed. Tab labels stay visible. Fixed navigation keeps a safe-area inset in a production build. Hover lifts are dropped where the pointer is coarse; the selected and pressed states remain.

Nothing in the reference depends on a horizontal document scroll.

## Components

- **Volume.** Paint a clay body in three layers, light always from the upper left. A broad highlight disc centered near 30% 24%, falling off by about half the radius (`volume-light`). An occlusion disc near 78% 88% (`volume-ao`). The batch color melting into its `-deep` stop. Then two inset shadows: light on the upper left, shade on the lower right (`volume-shade`). Under about 48px, keep a single highlight and drop the second inset so the form does not turn to mud. A separate contact ellipse sits on the ground (`shadow-contact`). It is blurred and warm. It is not a zero-blur offset, and it is not a glow.
- **Seam edge.** Interactive pillows use a 1.5px `border` plus `shadow-sm` or `shadow-md` and a 1px inner light along the top. The border is the boundary a person can see without the shadow. Static hero scenes may omit the border when the volume itself is the object.
- **Commit pill.** `primary` fill, `primary-foreground` label, `radius-full`, height 48px, weight 700. One per screen. Press settles it 1px down at a scale of about 0.985. A quiet action is a pillow pill with the seam edge and ink text, or a text link in `lilac-ink`.
- **Chips.** Full pills, 44px tall. Resting chips are `surface-raised` with `border` and ink. The selected chip is `accent` (or `selected`) with ink text, a `lilac-ink` seam, and `aria-pressed`. Selection is never shadow alone.
- **Rows.** A bust, a title, a 12–13px meta line, and a chevron. The whole row is one control. The bust is decorative.
- **Fields.** Recessed, not extruded: `surface-raised`, the seam border, and an inset shade along the top so the well reads as pressed into the page. The label is visible text. Placeholder text is not the label. Error state adds `danger` text on `danger-wash` and keeps the sentence, not color alone.
- **Tabs.** Four labels, always with words. The active tab is a lilac pillow. Inactive labels use `muted`.
- **Focus.** A 3px `lilac-ink` ring, offset 3px, outside the seam. Inside a clipped phone specimen the ring may be inset so it stays visible. Removing the ring without a replacement is off-style.
- **Disabled.** The commit pill loses its contact shadow, drops to about 40% opacity, and is removed from the tab order. Disabled text does not have to meet 4.5:1. The control is still visibly the same pill, not a new color.

### The Puffet family

Puffets are the Stillhour IP. One squashed volume, no neck, no ears, no fingers, no teeth. The family mark is a pressed seam across the crown, about 22% down from the top and about 64% of the width: darker on the upper lip, lighter just under it. Eyes are short arcs. Blush is a soft disc. A mouth appears only on the Glad expression, and it is a short arc, never an open grin.

Proportions, taking body width as 1: height 0.86, eyes at 42% of height, each eye 15% of width, gap between eyes about 18% of width, blush at 52%. Arms are optional stubs, 24% of width, and they stay close to the body. The contact shadow is about 68% of the width and is always there, including on a bust if the crop shows the base.

Color is identity, not a costume.

- **Mallow** — `clay-cream`. Host of the hour. Default expression Rest, pose Sit. Does not congratulate.
- **Pippin** — `clay-apricot`. The walker. Pose Lean. Glad only when a route is chosen, not when it is finished.
- **Thimble** — `clay-sage`. The noticer. Expression Listen on a check-in. Counts textures, not steps.
- **Lillet** — `clay-lilac`. The small companion. Pose Wave for a first meeting, bust in a list. Stays beside. Does not lead.

Expressions: Rest (two closed arcs), Glad (arcs lifted, blush wider, a short mouth), Listen (one arc, one soft open oval with no googly pupil), Tuck (two short dashes, body slightly squashed, for “the phone is down”).

Poses: Sit, Lean, Wave, Bust. Bust hides the arms and is the list crop.

Size: full face at 48px wide and up. Below 48px, blush and mouth drop off. At 32px and below, use the seam mark only — a clay pill with the groove, no eyes. Clear space around a hero is about 0.15 of the height. One breathing Puffet per screen. The others are still. Characters are decorative: the control’s words carry the meaning, and the art is hidden from assistive technology.

Do not recolor a named Puffet into another batch. Do not add weather props, leaves with veins, rays, crescents, or a sky. Do not draw a stroke outline around the volume. Do not put a tight white specular on the highlight. Do not place a Puffet on pure white or pure black. Do not set text across the body.

## Motion

Breathing is the signature. The live body scales from 1 to about 1.018 and settles 1% toward the contact shadow over `duration-breathe` (4.8s), with `ease-breathe`. Transform origin is the bottom center so the shadow stays put. Only the hero of that screen breathes.

The commit pill uses `duration-press` (160ms) and `ease-soft`, whose slight overshoot past 1 is a small bounce on release, not a squash-and-stretch gag. Pressed: translate 1px down, scale 0.985. A fine pointer may lift a reference-page control by 1px. Product screens do not depend on hover.

Under `prefers-reduced-motion`, breathing, lift, and the press transform stop. Color, border, and opacity changes stay, so selection and press remain visible.

## Accessibility

- Body text meets WCAG AA at 4.5:1. The ink, muted, danger, and lilac-ink pairs above are the ones that do. Large titles may use the same ink; they do not switch to a pastel.
- UI boundaries meet 3:1 against the adjacent surface by `border` or by a fill as dark as `primary` or `danger`. A shadow, a highlight, or a batch color against peach does not count.
- State pairs a second signal with color: pressed text, a “Chosen” label, a heavier seam, or an icon change.
- The focus ring is the keyboard affordance.
- Under `prefers-contrast: more`, seams and the focus ring move to `surface-foreground`.
- Decorative characters expose no name. Charts expose a text series, not only bar height.

## Don't

- No hard offset shadows, no zero-blur extrusion, and no candy rainbow. That is a different clay language.
- No glass blur, no translucent panels, no chrome, no specular streak, no bubble or water highlights.
- No airbrushed spray that dissolves the silhouette. The highlight falls off inside the form.
- No weather characters, no sun rays, no moons, no clouds, and no forecast cards.
- No outlined cartoon, no teeth, no googly eyes, no neck and limbs borrowed from a person.
- No white or pastel text on a clay batch. No cool gray ink. No pure black page. The near-black pill is a control, not a canvas.
- No second commit pill. No icon-only tab. No placeholder standing in for a label.
- No springy squash on press, and no screen full of looping characters.
- No mesh-gradient field as the product background. Color washes belong behind specimens, not under sentences.
