# Memphis Pop

A worked example ships as `demo.html`: Arco, a local-first agent desk, with the same desk in a phone frame and a deliberately off-style counter-example. It is a static reference. It does not ask anyone to follow instructions outside the visual system.

## Atmosphere

Printed laminate, in daylight. The ground is warm cream. Lines are black and even. Color arrives as flat sheets: a lemon band, a pink chip, a cobalt circle, a mint plate. One squiggle crosses the lemon. One dark sample carries a scatter of geometric confetti. A zigzag is a rule, not a texture. The object sits on a hard offset filled with diagonal stripes. Nothing is soft, nothing glows, and nothing looks drawn with a marker.

The product in the reference is Arco, an agent whose notes, thread, and run stay on the machine in front of you. The desk is the hero: a tab, a squiggle band, a split of runs and thread, a terrazzo cap.

This fits a local tool, a small studio app, and a playful settings surface that should still feel designed. It is a poor fit for long articles, dense tables, a night cockpit, or anything that wants clay, glass, or a hand-drawn sticker.

The material is flat ink on a sheet. A highlight inside a shape is a different language.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the cream sheet. `surface-foreground` is warm ink. Ink on `surface` is about 15:1, and ink on `surface-raised` is about 17:1. Long text uses this pair.
- `surface-raised` is a warm white plate for the header, messages, fields, and cards. It is close to `surface`, so the 2px `border` is what separates them.
- `primary` is lemon, reserved for the commit fill and the squiggle band. `primary-foreground` is ink. That pair is about 12:1. A desk may show a run action and a send action in lemon. A third lemon control on the same screen breaks the rule.
- `muted` is a warm brown for secondary lines on `surface` and `surface-raised` only. It clears about 7:1 on `surface` and about 8:1 on `surface-raised`. On a pastel chip it is the wrong ink.
- `accent` is cobalt. It is the focus ring, the link, and a shape fill. As text on `surface` it is about 5.9:1. As a fill, the label is `accent-foreground` (about 6.6:1). It is not a paragraph color.
- `danger` is a crimson that works as text on `surface` (about 5.1:1) and on `surface-raised` (about 5.7:1). On a solid `danger` fill the label is `danger-foreground` (about 5.7:1). `danger-wash` is the pale field behind an error sentence set in `surface-foreground`.
- `border` is the same ink as `surface-foreground`, drawn at 2px. It is the edge a person can see without the shadow. Against `surface` it is far above 3:1.
- `pop-pink`, `pop-mint`, and `pop-lilac` are laminate chips for badges, shapes, the selected run, and the pink half of the shadow stripe. Text on a chip is `surface-foreground` (about 11:1 on mint, about 9:1 on pink, about 10:1 on lilac). `muted` stays off the chips.

Two chip colors in one cluster is enough. A screen that shows every chip as a button is a sample fan, not a product view.

## Typography

A geometric grotesque. The intended face is Futura, Avenir Next, or Century Gothic. Inter stands in when those are absent. The demo names that stack and does not load a remote font.

- The product name is weight 800, about 40px, tightening to 32px on a narrow screen, with a slight negative tracking (`-0.03em`) and a line height near 1.05. Section titles use the same weight, about 28–40px. Card titles are 700, about 22px.
- Body stays at 500, 16px, line height 1.5. An intro may go to 17px. Weights below 500 look thin against the black line. 900 is a poster voice and does not belong here.
- Titles are sentence case. Uppercase is a short plate: the tab, a kicker, a badge, a side label. A kicker is 13px, weight 700, tracked out, in `accent`. A badge is 12px, weight 700, in `surface-foreground` on a chip (or `accent-foreground` on cobalt).
- The folder path is the only monospace, at 13px, on a solid plate. A sentence is never mono.
- Body measure stays under about 62 characters. The squiggle band carries no words.

## Spacing & layout

The signature screen is the desk.

- The page inset is 48px, stepping to 16px below 760px. The desk column maxes out near 1080px. Section rhythm is about 56px.
- The desk is a tab plus a framed sheet. Inside: a lemon squiggle band about 44px tall, a header, an 8px zigzag, then a run column of about 232px beside the thread. Below 760px the run column becomes a wrapping row and the thread stacks under it. Inside the phone frame the runs stack, so a name stays on one line. Nothing in that list scrolls sideways.
- The patterned shadow shifts 12px down and right, and 7px below 760px. The page inset stays wider than the shift, so the stripe is not clipped and the page does not grow a horizontal scrollbar.
- Feature cards are three columns from 860px up and one column below. The gap is 16px. Each card may wear one shape on its top edge. The shape does not cover the title.
- Touch targets are at least 44px tall. The commit, the send, the runs, and the fields all meet that bar. On a narrow screen the send stretches to the row.
- Radius stays tight: `radius-sm` through `radius-xl` are 2, 4, 6, and 8px. `radius-full` is only a circle used as a shape. A pill control is off-style. A 28px card corner is off-style.
- The large ornaments live in the hero margin: one pink circle, one cobalt triangle, one lemon square. Below 760px the triangle and the square drop away and the circle shrinks, so they do not cover the thread.
- Below 760px the name steps from 40px to 32px. Body stays 16px. The terrazzo sample gets shorter. Its label stays on a solid plate.

## Components

- **Desk.** A 2px `border`, cream fill, and a patterned shadow: `--pattern-stripe` offset by `--shadow-shift`, zero blur. A lemon tab sits on the top edge and says what the object is. The tab has no shadow of its own.
- **Squiggle.** One even stroke, round caps, about 6px, on the lemon band. The wave starts and ends on the same horizontal so a tile can repeat. It may drift one tile on `--duration-drift`. It is decoration. Type does not sit on it.
- **Zigzag.** A row of sharp ink teeth, about 8px tall, under the header. It is a rule. It is not a page background.
- **Terrazzo.** A dark binder with a sparse scatter of circles, squares, and triangles in the chip and primary tokens. The chips do not form a grid and do not form letters. One sample per screen. A label sits on a `surface-raised` plate with a `border`, over the sample, and the words never touch the chips.
- **Patterned shadow.** The stripe is ink and `pop-pink`, 6px each, at -45 degrees. It belongs to the desk and to cards. It is not a blur, and it is not a second copy of the object in flat gray.
- **Commit.** Lemon fill, ink label, 2px `border`, `radius-md`, min-height 44px, weight 700, and `shadow-sm` (a flat pink offset, zero blur). Press moves it onto the offset. A quiet action is a raised plate with ink type and `shadow-md`. A destructive action is `danger` with `danger-foreground` and `shadow-md`.
- **Runs.** A row is a button: a 16px shape with an ink stroke, a name, and a meta line. The open run is `pop-mint` with ink type and the word Open. Selection is the fill plus the word, not color alone.
- **Messages.** Raised plates, 2px `border`, `radius-md`. The agent plate adds an 8px lemon edge on the left and a chip badge. The user plate does not.
- **Badges.** 12px uppercase, 2px `border`, `radius-sm`, a chip fill, ink type. A cobalt badge uses `accent-foreground`. Badges name a state. They are not the sentence, and they are not pills.
- **Fields.** A visible label, then a raised well, 2px `border`, `radius-md`, 16px type, min-height 48px. Placeholder text is not the label. An error turns the border `danger`. The word Error is `danger` on `surface` (about 5.1:1). The sentence is `surface-foreground` on `danger-wash`. `danger` as text does not sit on the wash.
- **Cards.** Raised, 2px `border`, padding about 18px, the patterned shadow, and one shape biting the top edge (circle, square, or triangle) with an ink stroke. The title keeps clear of the shape.
- **Focus.** A 3px `accent` outline, offset 3px. `shadow-focus` is the same pair. Removing the ring without a replacement is off-style.
- **Disabled.** The control drops to about 40% opacity, loses its offset, and is removed from the tab order. Disabled text does not have to meet 4.5:1. The control is still the same button, not a new hue.

Shapes are geometry with an even stroke: square, circle, triangle. They sit beside a word. They do not replace the word.

## Motion

The squiggle is the only loop. On the desk band it drifts one tile over `--duration-drift` (9s), linear, so the repeat is seamless. Specimens of the squiggle stay still. The zigzag, the chips, and the shadow do not animate on their own.

Press and hover use `--duration-press` (140ms) and `--ease-press`. A fine pointer may nudge a button 1px toward its offset. Press travels the rest of the way and the offset disappears under the control. A card may travel onto its stripe the same way. The layout does not depend on hover. A coarse pointer does not get the hover nudge.

Under `prefers-reduced-motion`, the drift, the nudge, and the press travel stop. An active control keeps a 3px ink outline so the press is still visible. Color and border changes stay.

Under `prefers-contrast: more`, the focus outline and the quiet control edge use `surface-foreground`.

## Don't

- No marker wobble, no uneven stroke, no stars, no sticker tilt, and no polka wallpaper. A squiggle here is a printed wave of even weight.
- No blurred shadow, no glow, no neon grid, and no dusk sky. Depth is the striped offset or the flat hard offset.
- No pill buttons, no 28px clay corners, and no fully round commit.
- No type on the squiggle band, and no type on the raw terrazzo. The plate is the reading surface.
- No `muted` ink on a pastel chip. No white ink on lemon, mint, pink, or lilac.
- No third lemon commit on one screen. No icon-only run. No placeholder standing in for a label.
- No Bauhaus poster: not primaries alone, not a zero radius, not cropped ultra-bold type, not a page with no pastels.
- No hand-drawn doodle, no comic outline, and no lime sticker stage.
- No clay highlight, no glass blur, no chrome, no airbrushed spray, and no weather illustration.
- No remote font, no photograph, and no borrowed laminate or furniture drawing. The stroke and the scatter are drawn for this system.
