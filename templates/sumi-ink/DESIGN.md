# Sumi Ink — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A tea-room book lying open. Rice paper, sumi black, and more margin than feels
efficient. One cinnabar seal is the only red. Rules are single hairs of ink.
Nothing shines, nothing is striped, nothing is a component library on display.
The empty space is part of the object.

Fits tea, ceramics, a small studio's book, a ceremony, a quiet reservation.
It is a poor fit for dashboards, games, and anything that needs to shout.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is rice paper. `surface-raised` is a second sheet, barely lighter.
  Do not separate them with gray elevation.
- `primary` and `surface-foreground` and `border` are the same sumi black.
  The action is black ink on paper, or paper ink on a black seal-sized block.
- `accent` is cinnabar, used for the seal and for a single corrected word.
  `primary-foreground` is paper, for type that sits on black.
- `danger` is a deeper red for a true cancellation. It is not a second seal.
- `muted` is diluted ink for the date and the aside.
- One red mark per screen. A page of seals is a stamp collection.

## Typography
- A text serif for the room name and the sentences. Regular and medium weights.
  No black display face.
- The seal uses a serif character, centered, not a logo mark from a file.
- Captions are the same serif at 13px, `muted`, not a mono ticket voice.
- Scale: name 40/56, section 28, body 17, caption 13. Line-height 1.6.
- Measure stays near 36–48 characters. Wide lines feel like a website.

## Spacing & layout
- Margin is the material. Page padding 32 → 64. The first screen is mostly paper.
- Vertical rhythm 48 → 80. Do not tighten it on small screens below 32.
- A hairline rule, 1px `border`, separates seatings. Cards do not.
- Asymmetry is slight: the seal sits off the title, not in a toolbar.
- One column. A second column is a second page, not a dashboard.

## Components
- **Seal:** a square, 3px `accent` rule, the character 印, rotated a few degrees.
  One per page. It does not receive a shadow.
- **Buttons:** black fill, paper type, square. A quiet action is paper with a
  1px ink rule. No pills, no yellow fill.
- **Seatings:** a name, a time, a hairline. The current seating is ink; the
  others are `muted`.
- **Focus:** `shadow-focus`, a cinnabar ring. It is the only red besides the seal,
  so a focused control and a seal should not sit in the same cluster.
- **Shadows:** `shadow-sm`, `shadow-md`, and `shadow-lg` are `none`.

## Motion
- `duration-brush` (180ms). Opacity and color only. No slides, no springs.
- Under `prefers-reduced-motion`, nothing moves. The ink change remains.

## Don't
- No halftone, no crop marks, no fluorescent ink, no misregistered plate.
- No green follow button, no article column at magazine size, no drop cap.
- No gray app chrome, no rounded cards, no drop shadows.
- No texture image. The paper is the flat token.
- No second accent. Cinnabar is singular.
