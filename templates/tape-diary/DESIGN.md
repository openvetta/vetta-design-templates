# Tape Diary — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A Thursday that was assembled on a desk, not aligned on a grid. The ground is
kraft. Three objects overlap a little and tilt a little: a print held by one
strip of washi, a pencil note, and a perforated ticket. The mess has a limit.
One tape color, one ink, one day. Nothing is a sticker with a hard shadow,
and nothing is a print shop's crop marks.

Fits a personal week, a small reservation, a note to oneself, a program that
should feel handled. It is a poor fit for dashboards, banking, dense tools,
and anything that must look frictionless.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the kraft desk. `kraft-deep` is a darker fiber used only as a
  corner shade, not as a panel.
- `surface-raised` is the note paper and the print's border. It is warm white,
  never pure white.
- `surface-foreground` and `primary` are the same walnut ink. `primary` is the
  stamp and the ticket's type. `primary-foreground` is paper, for the rare
  solid ink button.
- `muted` is the caption under a print and the small date above the day.
- `accent` is the washi. It is also the notebook rule on the left of the note.
  It is not a button fill.
- `ticket` is the stub's stock, a pale yellow distinct from the note.
- `print` is the flat field inside the print's border. `print-ink` draws the
  object in that field. The field is not a photograph.
- `danger` is for a missed line. The word "missed" is required. It is not the
  stamp and not the tape.
- `border` is walnut ink at 1px, for the stamp's double rule. It does not
  frame the whole page.

## Typography
System stacks only. No webfonts. There is no script face.
- The day is a text serif, weight 400, 64–84px, tight line-height. It is the
  diary's date, not a campaign headline.
- The note is the same serif in italic, 20–22px, the pencil voice. One note
  per page.
- The stamp, the ticket, and the caption are a monospace, 12px, uppercase,
  tracking near 0.12em.
- The small date above the day is the serif, 14px, `muted`.
- Scale: day 48/84, note 20/22, stamp 12, caption 12, section 32.

## Spacing & layout
- The cover is a desk, not a centered card. Padding 48 → 72. The day sits top
  left. The stamp sits top right, rotated about −8 degrees.
- The cluster is the print, the note, and the ticket. The print tilts about
  −3.5 degrees, the note about +2, the ticket about −1. Tilts stay under 6
  degrees.
- The note may overlap the print by about 32px. The ticket sits below both,
  clear of the overlap.
- One tape, across the upper third of the print, extending past both sides.
- At 720px the cluster becomes one column. The note drops first, then the
  ticket. Tilts fall to about 1 degree so nothing clips. The tape stays.
  Objects take the full content width. The day steps down to 48px. The stamp
  moves under the day, still rotated, before the print. The ticket stays at
  least 48px tall.

## Components
- **Print:** a warm-white border, 12px at the sides and top, 36px at the
  bottom where the caption sits. Inside is a flat `print` field and a drawn
  object in `print-ink`. No external image. Radius 0.
- **Tape:** one strip, about 26px tall, `accent` in two close opacities so it
  looks like washi and not a flat bar. It crosses the print. It is not a
  sticker and has no black outline.
- **Note:** `surface-raised`, an inset 3px `accent` rule on the left, italic
  serif. Soft paper shadow `shadow-md`. No border.
- **Stamp:** double 2px `border`, monospace, uppercase, rotated. It marks the
  date. It is not a status pill.
- **Ticket:** `ticket` stock, holes punched along the left edge, monospace
  facts. The whole stub is the target, at least 48px tall. Radius 0.
- **Focus:** `shadow-focus`, an ink ring. Other shadows are only the soft
  paper lift.

## Motion
- `duration-still` (160ms). Hover may ease a tilt back by 1 degree. Nothing
  bounces, nothing fades up.
- On a touch screen there is no hover. The resting tilt is the look. Press
  darkens the ticket stock slightly.
- Under `prefers-reduced-motion`, tilts stay at rest.

## Don't
- No lime sticker, no thick black outline, no hard offset shadow, no polka dot.
- No crop marks, no halftone, no misregistered second plate, no fluorescent ink.
- No vast empty margin with a single seal. This page is occupied.
- No photographed face, no scraped texture, no external paper scan.
- No pill button, no blurple fill, no rounded app card as the note.
- One tape. A second color of washi means a different day.
