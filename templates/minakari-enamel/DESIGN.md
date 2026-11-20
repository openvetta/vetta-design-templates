# Minakari Enamel

A worked example ships as `demo.html`: Glost, a local-first agent desk, on one fired plate, with the same desk in a narrow frame and a deliberately off-style card. It is a static reference for this visual system.

Glost is a product name in the example, from the ceramics word for a glaze firing. The desk, the threads, and the sentences are demo content.

## Atmosphere

An opaque cobalt field, as even as a fired ground. Plates sit a step lighter and are closed by a warm gold line. A second, brighter gold line sits inset on the main plate only. Turquoise and vermilion appear as small fired cells: the petals of one radial flower, and almost nowhere else. Cream serif titles name the plate. A plain sans carries the thread, the history, and the fields.

The material being interpreted is Iranian minakari (mīnākārī): powdered glass, colored with metal oxides, fused onto metal. Painted enamel is the predominant technique in Iran, and Isfahan is a principal center of it. Cloisonné (khāne-bandī) is a separate technique, made in Isfahan in recent years, and is not the historical default. Cobalt blue and turquoise are characteristic oxide colors. Copper is the common base today; gold and silver are used for finer pieces. Grounds are also turquoise, white, and other fired colors. This system chooses one opaque cobalt ground.

This is an original interface, not a traditional object and not a replica of a workshop plate. The gold line is a painted frame. It is not wire, not a cell wall, and not a claim that all minakari is cloisonné. The flower has eight petals and no inscription. There is no pseudo-script and no religious emblem.

The finish is luminous glaze: a short warm highlight along the top of a plate, and one soft catch of light on the flower. The color is opaque. Nothing behind the plate shows through.

This fits a local desk, a reading of files that stay on the machine, and a ceremonial tool that still has to be read for a long time. It is a poor fit for a pale dashboard, a weather cast, a glassmorphism card, a chrome orb, or a children's toy.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the field. `surface-foreground` is cream for sentences. That pair is about 11:1. Cream on `surface-raised` is about 9.8:1, and on `surface-deep` about 13:1. Long text uses this cream.
- `surface-raised` is the plate, one step lighter than the field, still cobalt. `surface-deep` is the floor of a field and the well inside the flower. Do not stack a third plate on a plate.
- `primary` is the bright gold. It colors the title, the inner line, the commit, and the focus ring. On `surface` it is about 7.7:1, and on `surface-raised` about 6.8:1, so a gold title and a gold label both stay readable. `primary-foreground` is the ink on a gold fill, about 10.4:1. `primary-hot` is the hover of that fill only.
- `border` is the deeper gold of the outer frame and of resting controls. On `surface-raised` it is about 4.9:1. The outer frame uses `border`. The inner line of the main plate uses `primary`. One metal, two duties.
- `muted` is the quieter cream for times, captions, and inactive nav. It is about 7.6:1 on `surface` and about 6.7:1 on `surface-raised`. A dimmer tan fails the caption.
- `accent` is the light turquoise used for a live word such as Firing. It is about 6.3:1 on `surface` and about 5.5:1 on `surface-raised`. It is text and a pip, not a wash.
- `turquoise` is the petal fill, a deeper fired green-blue. It is a shape. It is not a sentence color, and cream type does not sit on it.
- `vermilion` is the inner petal. `vermilion-deep` is the discard fill. Cream on `vermilion-deep` is about 5.9:1. Gold type on vermilion fails, so the label on that fill is cream.
- `danger` is the error sentence, a light vermilion, about 6.6:1 on `surface` and about 5.8:1 on `surface-raised`. `fault-wash` is the deep red field behind that sentence. The word is required.
- `highlight` is the short warm fade at the top of a plate, about 8% cream. It is glaze catching light. It is not a translucent panel.
- One gold, one turquoise, one vermilion. They do not become a palette of buttons. The field stays cobalt.

## Typography

System stacks only. No remote face. The serif is for short titles. The sans is for everything that has to be read in bulk, including Han characters.

The serif stack is Iowan Old Style, Palatino Linotype, Palatino, Noto Serif, Liberation Serif, then Songti SC, STSong, Noto Serif CJK SC, Source Han Serif SC, and WenQuanYi Micro Hei before a generic serif. The sans stack is Segoe UI, Noto Sans, PingFang SC, Hiragino Sans GB, Noto Sans CJK SC, Noto Sans SC, Source Han Sans SC, Microsoft YaHei, and WenQuanYi Micro Hei before a generic sans. A missing face is skipped. Chinese in a title falls through to a CJK face in the same stack. Chinese in a thread uses the sans at the same size as the English sentence.

- The product name is the serif, about 28px, weight 500, tracking near 0. A kicker is the same serif, 12px, capitals, tracking near 0.16em, in `primary` or `muted`. Kickers are Latin and short. A kicker is not a sentence.
- The plate title is the serif, 40px on the desk and 30px in the hand, weight 500, line height near 1.15, cream or gold. Sentence case. No small caps on a title that might be Chinese.
- Body, thread, history, fields, and buttons are the sans. Body is 16px, weight 400, line height 1.55, tracking 0. Measure stays under about 62 characters. A Chinese sentence uses that same block. It is not tracked, not italic, and not set in the display serif.
- Meta is 13px sans in `muted`. Badges are 12px sans. Button labels are 15px sans, weight 600.
- Weights below 400 disappear on the glaze. 700 is the discard label only if 600 is already in use. The title does not go to black.

## Spacing & layout

The module is 4px. Padding and gaps are multiples of it.

- The desk is at most about 1180px wide and centered on the field. Inset is 28px, and 16px below 760px.
- The main plate is two gold lines with about 7px of glaze between them, radius `radius-xl`. Inside, three columns: plates near 240px, the thread, the flower near 300px. Column rules are 1px `border`.
- Below 1040px the columns stack in this order: flower, thread, plate list. The flower shrinks to about 168px and centers. The thread stays the reading column.
- Below 760px the inner gold line drops, so the hand keeps one frame. The flower shrinks to about 148px. The title steps from 40px to 30px. Body stays 16px. Send becomes the full width of the frame and stays 48px tall. Nav may wrap; tracking may tighten. Targets stay at least 44px. The page does not scroll sideways at 390px.
- Thread rows, fields, nav items, and buttons are at least 44px tall. Badges are labels, not controls.
- Radius: fields and quiet buttons use `radius-md`. Cards use `radius-lg`. The main plate uses `radius-xl`. The commit and the badges use `radius-full`. A plate is not a pill. A pill is the one commit, and the small status.
- A fine pointer may brighten a gold fill or a gold line. A coarse pointer gets no hover change. Nothing lifts.

## Components

- **Plate.** `surface-raised`, a 1px `border` line, an inset 1px `primary` line on the main plate only, `highlight` along the top, `shadow-md` as contact. Inner cards have one line, not two.
- **Flower.** Eight turquoise petals, each with a vermilion core and a gold stroke, between gold rings, with cream dots on the outer band and a vermilion center. The center is a small cream rosette and a gold dot. No letters. The flower is a mark. It is not a button, and it does not repeat in every corner.
- **Wordmark.** A 36px flower and the serif name. The name is Glost in the example. The flower is the mark.
- **Thread row.** A button, sans title, muted meta, 1px `border`, `radius-md`, min-height 44px. The current row takes a 3px `primary` rule on the left. The title may be Chinese; it stays 15px sans with tracking 0.
- **Transcript.** Speaker name in the serif, 13px, gold, short. The sentence is 16px sans cream. The agent line has a `primary` rule on the left. No bubble, no avatar, no tail.
- **Trace.** Time in `muted`, sentence in cream, 14–15px sans. One line each.
- **Commit.** One gold fill per screen, `primary` ground, `primary-foreground` label, `radius-full`, height 48px. Hover uses `primary-hot` on a fine pointer. It does not grow a shadow.
- **Quiet button.** Transparent, 1px `border`, cream label, `radius-md`, height 44px.
- **Discard.** `vermilion-deep` fill, cream label. One per screen, and only for a real fault.
- **Field.** A visible legend, then the control. Floor is `surface-deep`, seam is `border`, value is cream, 16px sans. Placeholder text is not the label. Focus: 2px `primary` ring, offset 2px. Error: `danger` seam, the sentence in `danger` on `fault-wash`, `aria-invalid`. The sentence stays.
- **Badge.** A label, not a control. 12px sans, `radius-full`, 1px line. Resting and Ready use gold. Firing uses `accent`. Fault uses `danger`. The word does the work. A pip may repeat the word's color; the pip is not the only signal.
- **Card.** One gold line, `radius-lg`, serif title, sans sentence. Three cards are a set of rules, not a gallery.
- **Disabled.** Opacity near 0.42. The control keeps its shape. Disabled text does not have to clear 4.5:1.
- **Focus.** `:focus-visible` draws a 2px `primary` ring, offset 3px. On a gold fill the ring is cream, so it stays visible. A specimen may show the same ring at rest.

## Motion

There is no loop. Color and border may change over `duration-ui` (160ms) with `ease-ui`. No overshoot, no travel, no sheen animation. The glaze highlight is painted, not moving.

Under `prefers-reduced-motion`, transitions stop. Current, error, and disabled stay visible without motion.

Under `prefers-contrast: more`, frame and field seams move to `surface-foreground`.

A fine pointer may brighten the commit and a resting line. Product meaning does not depend on hover. A coarse pointer sees the resting state.

## Don't

- No claim that this plate is an antique, a workshop original, or a religious object. No fake Persian, Arabic, or other pseudo-script. No copied inscription in the flower.
- No cloisonné mesh, no gold wire across the page, no cell pattern behind the type. One flower. Frames are lines.
- No glass, no backdrop blur, no see-through panel, no liquid chrome, no iridescent orb, no hairline metal on black void.
- No pale blue card, no white dashboard, no soft SaaS shadow as the edge. The edge is the gold line.
- No airbrush, no cartoon cloud, no weather card, no clay pillow, no gel highlight.
- No second commit. No gold paragraph. No cream sentence on turquoise. No gold label on vermilion.
- No display serif for the transcript, the history, or a Chinese paragraph. No tracked capitals for body text. No italic chat.
- No remote font, no script, no ornament in every corner, no sunburst, no deco fan, no Bauhaus primary blocks.
- No moving shine. The highlight is still.
