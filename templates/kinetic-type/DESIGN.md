# Kinetic Type

A worked example ships as `demo.html`: Desk, a local-first agent whose answer is set as type. It includes the lockup, the controls, the transcript, a narrow sheet, and a deliberately off-style comparison. It is a static reference for this visual system.

## Atmosphere

Paper, then ink, then a word large enough to be the layout. The sheet is warm and nearly white. Type is a gothic grotesque, black enough to feel printed, and big enough that three words are a screen. One word in the lockup is an outline and sits across the other two. A single signal red marks the live state. Nothing else is chromatic.

The second ground is an ink field, used for the working transcript. Type there is paper. The commit control swaps with the ground: ink on paper, paper on ink.

Desk is the product shape in the reference. A person asks in a line. The answer comes back as a lockup — a short stack of display words — plus one sentence and a path. The model stays on the machine.

This fits a local agent, a reader, a single-task tool, a poster-scale status. It is a poor fit for dense tables, long articles, dashboards, and anything that needs a serif, a card grid, or a second hue.

The motion is the words themselves. They squeeze on the horizontal axis, slide inside a clipped measure, and rest overlapped. Under reduced motion the same overlap stays, still and sharp. The page does not depend on the animation to be understood.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the paper. `surface-foreground` is the ink. That pair is about 16:1. Long text uses it. `surface-raised` is a second sheet, barely lighter, for a control group that must separate without a shadow. Ink on `surface-raised` is about 17:1.
- `primary` is the same ink, used as a fill: the commit control, and the transcript field. `primary-foreground` is paper. A commit sitting on the ink field inverts — paper fill, ink label — so it does not disappear.
- `muted` is warm gray for captions, paths, and inactive labels on paper. It clears about 6:1 on `surface` and on `surface-raised`. It is not cool gray, and it is not for type on the ink field.
- `ink-muted` is the caption color on the ink field (about 11:1 against `primary`). It does not appear on paper.
- `accent` is the signal red. It is ink, not a fill. One live mark per screen: a badge, or the single word that names the color in a specimen. It clears about 6:1 on paper. It does not sit on the ink field.
- `danger` is a darker red for an error sentence on paper (about 8:1). `danger-on-ink` is the light red for that same sentence on the transcript field (about 11:1). The word "Stop" is required. Color does not replace it.
- `border` is the ink, the same value as `primary`. Rules are 1px. A rule on the ink field is `primary-foreground`. Shadow is not a boundary.

Near-monochrome means paper, ink, and one red. A second hue, a gradient, or a tinted card is a different system.

## Typography

A gothic grotesque. The intended face is Helvetica Neue, Helvetica, Arial, or Liberation Sans. The reference names that stack and does not load a remote font. A variable face with a width axis may replace the scale squeeze; the reference uses `scaleX` so a static cut still squeezes.

- The lockup is uppercase, weight 700, tracking near `-0.045em`, line-height `lock-leading` (0.78). Size follows the sheet: about 50px in the narrow frame, about 64px on a phone, about 230px on a wide sheet. Three lines, one size. The middle line is an outline: fill transparent, stroke about 0.015em of ink, and at least 1.5px.
- Section titles are the same grotesque, sentence case, weight 700, about 40–64px, tracking near `-0.04em`. They do not animate.
- Body is weight 400, 16–17px, line-height 1.5. Measure stays under about 62 characters. The lockup is not a paragraph.
- Labels, badges, and paths are the mono in `--font-mono`, 12px, uppercase, tracking near `0.14em`. 12px is the floor. The mono is for a short label, never for the answer.
- Buttons are the grotesque, weight 700, 15px, sentence case. They are words, not a second display line.
- There is no serif, no italic, no script, and no weight below 400. 700 is the display weight. 800 and 900 are unused.

## Spacing & layout

The reference is one sheet. The first viewport is the lockup, the answer sentence, and the ask line.

- Page inset is 20px under 720px and 48px above it. Sections separate by 72px, with a 1px rule at the top of each. The ink transcript runs edge to edge; its inset matches the page.
- The lockup is one full measure. On a wide sheet the sentence and the badges share the row under it, and the ask line is a single row pinned to the bottom of the first viewport. Below 860px the sentence, the badges, and the ask stack. The commit becomes full width.
- The lockup's layout box is the open width (`squeeze-open`). Squeezing is a transform, so neighbors do not reflow. The outline word is taken out of flow and shifted by `overlap-shift`.
- Touch targets are at least 48px tall. The commit, the quiet word, and the field all meet that bar. Badges are status, 26px, and are not the hit target.
- Radius is 0 at every step. A pill, a rounded card, or a circular control is off-style.
- Feature words sit in three equal columns divided by 1px rules. Below 800px they stack and the rules become horizontal. Nothing in the reference scrolls sideways. A sliding line is clipped by its own measure.

## Components

- **Lockup.** Three lines, one size, leading 0.78. Lines one and three are filled ink. Line two is the outline, shifted right, painted across the seam. One lockup per screen. The accessible name is the sentence the three words say; the painted words are decorative duplicates of that name. Hover on a fine pointer opens every line to `squeeze-open` and eases the outline back toward the left edge.
- **Measure.** A 1px rule under a lockup, origin at the left. It is the width of the answer. It can retract while the words squeeze. It is not a shadow and not a second color.
- **Ask field.** A visible label in the mono, then a single bottom rule, then the value in the grotesque at about 20px. Placeholder text is not the label. The field is transparent paper. On the ink transcript the rule and the value are paper.
- **Commit.** Ink fill, paper label, height 48px, radius 0. One per screen. On the ink field it inverts. Hover opens its tracking from `-0.03em` toward `0.16em` inside a fixed width, so the row does not jump. Press adds a 2px `accent` outline. Disabled drops to about 40% opacity, keeps its shape, and leaves the tab order.
- **Quiet action.** The word alone, with a 1px underline. Hover retracts the underline. It is not a second fill.
- **Badge.** Mono, uppercase, 1px rule, no fill, except the live badge, which is `accent` ink and an `accent` rule. On the ink field the live badge is paper, because `accent` fails there. "Queued" uses `muted` on paper and `ink-muted` on ink.
- **Card.** An equal column: a mono index, a short sentence, and a feature word at the foot. The word opens its tracking on hover. The boundary is the 1px rule, shared with the next card. No shadow, no fill other than `surface-raised` if the group must lift off the sheet.
- **Transcript.** Ink field. A turn is a mono name, then the words. The answer's first word is display size, in paper. The path sits under the sentence in `ink-muted`. An error turn leads with "Stop" in `danger-on-ink`.
- **Focus.** `shadow-focus` on paper: a 2px paper gap and a 3px ink ring. On the ink field the ring is paper. Removing the ring without a replacement is off-style.
- **Narrow sheet.** The same lockup, sentence, badge, field, and commit, in one column, inside a 1px frame. Display is about 50px there, with the leading opened slightly so the outline still reads. The commit is full width. Overlap stays in ems and tightens with the type.

## Motion

Three motions, all on the type, all in CSS.

- **Squeeze.** The filled lines scale on X from `squeeze-rest` (0.68) to `squeeze-open` (1), origin at the left edge, over `duration-squeeze` (6.8s), with `ease-squeeze`. The two filled lines run in opposite directions, so one is wide while the other is narrow. `font-stretch` may replace `scaleX` when the face has a width axis. The reference does not run both at once.
- **Slide.** A line of display type translates inside a clipped measure, over `duration-slide` (18s), linear. The phrase is duplicated so the loop has no gap. The clip is the component's box, never the page.
- **Overlap.** The outline line rests at `overlap-shift` and eases further right, then back. It is out of flow. The filled lines do not move vertically.

Hover uses `duration-hover` (420ms). A fine pointer opens the lockup and the commit's tracking. A coarse pointer does not depend on hover. Press on the commit is the accent outline.

Under `prefers-reduced-motion`, every animation and transform transition stops. Filled lines sit at `squeeze-open` so the type stays sharp. The outline keeps its overlap shift. The sliding measure shows its first phrase, clipped, still. The commit's tracking stays at `-0.03em`. The lockup remains three overlapping lines. That still state is the design, not a broken animation.

Under `prefers-contrast: more`, the outline stroke thickens and rules move to 2px.

## Don't

- No serif, no nameplate, no folio, no drop cap, no multi-column body. A broadsheet is a different system.
- No circles, triangles, or primary-color blocks. A shape poster is a different system.
- No pills, no radius, no soft shadow, no blur, no glass, no gradient field, no grain.
- No second hue, no tinted surfaces, no red used as a large fill. The signal is a word or a badge.
- No icon as the control. The word is the control. No placeholder standing in for a label.
- No remote font, no italic display, no light weight, no type smaller than 12px.
- No squeeze on every heading. One lockup animates per screen. Section titles stay still.
- No motion that is the only way to read the answer. The still lockup has to work.
- No horizontal scroll on the page. A slide stays inside its measure.
- No pure white sheet and no pure black canvas. Paper and ink are near, not absolute.
- No mascot, no weather, no chart. The type is the picture.
