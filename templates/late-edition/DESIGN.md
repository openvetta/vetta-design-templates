# Late Edition — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A city paper at dusk, the sheet already full. The ground is warm newsprint,
darker than ivory and yellower than stone. Type is carbon ink. Rules are the
same ink, cut thin. One dried red names the section and nothing else. The page
is edited: one lead, three columns, an index, a notice bar. It is dense because
a broadsheet is dense, and quiet because nothing else is competing.

Fits a journal, a cultural weekly, a city report, a letters page. It is a poor
fit for tools, games, shops, and anything that wants a card.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the newsprint. `surface-raised` is a proof sheet, used only if
  a second note must sit on the paper. Do not build cards from it.
- `surface-foreground`, `primary`, and `border` are the same carbon ink. Rules,
  the nameplate, and the headline are ink. `primary-foreground` is the proof
  sheet, for the rare line that sits on an ink ground.
- `muted` is the folio, the page number, and the index dek. It stays warm and
  readable. Cool gray reads as a scan.
- `accent` is the section kicker. One word, once, on the lead. It is not a
  button and not a highlighted sentence.
- `danger` is the correction. The word "Correction" is required. It is darker
  than the kicker, and it does not replace the kicker.
- `border` is every rule: the nameplate's thick-and-thin pair, the column
  rules, the index rules, the notice rule. One pixel, except the nameplate's
  upper rule, which is three.

## Typography
System stacks only. No webfonts.
- The nameplate is a serif, weight 700, uppercase, tracking near 0.18em,
  about 34px. It is the paper's name, not the story.
- The headline is the same serif, weight 700, 48–56px, sentence case, tight
  line-height, slight negative tracking. Two lines. Never condensed, never
  a grotesque.
- The deck is the serif italic, 18px, under 46 characters wide.
- Body is the serif, 15–16px, line-height near 1.4, left aligned. The first
  column opens with a two-line drop cap in the same serif, weight 700.
- Folio, kicker, index label, and the action are a grotesque, 11–12px,
  uppercase, tracking near 0.16em.
- The index entry is the serif at 16px. Its page number is the grotesque.
- Scale: nameplate 34, headline 52, deck 18, body 15, folio 12.

## Spacing & layout
- The sheet runs near the edge. Padding 20 → 32. The first viewport is the
  front page and nothing else: folio, nameplate, rules, lead, columns, index,
  notices.
- The nameplate is a three-part row: volume at the left, the name centered,
  the issue number at the right. A 3px rule and a 1px rule sit above it. A
  1px rule sits under it.
- Under that, a grid of three text columns and one index. The headline and
  the deck span the three columns. Column rules are 1px and run only as tall
  as the text. The index is a full-height stack of equal rows.
- The notice bar sits on a 1px rule and spans the sheet in three. It is the
  foot of the page, not a footer widget.
- One lead per page. A second story starts below the fold, or it does not
  start.
- At 860px the columns stack under the headline. The index moves above the
  body. Column rules become horizontal rules. The nameplate steps down. The
  action stays a text control with a target at least 48px tall.

## Components
- **Nameplate:** tracked uppercase serif between a thick rule and a thin rule.
  Volume and issue sit on the same baseline, in the grotesque. No seal, no
  ornament, no second color.
- **Kicker:** one word in `accent`, grotesque, uppercase, above the headline.
  A second kicker on the same page is off-style.
- **Columns:** serif body, 1px `border` between them. No cards inside a column.
  The drop cap belongs to the first column only.
- **Index:** label "Inside", then equal rows. Entry and page number. A short
  dek in `muted` may sit under the entry. Rows tile the height of the lead.
- **Notices:** three items. The correction uses `danger` for its label only.
- **Action:** "Read the order", grotesque, uppercase, 1px underline. Hover
  moves the underline and the words to `accent`. It does not grow a shape.
- **Focus:** `shadow-focus`. Every other shadow is `none`.
- **Radius:** the whole scale is 0.

## Motion
- `duration-still` (140ms). The underline changes color. Nothing travels,
  nothing fades up, nothing slides in from the column.
- On a touch screen there is no hover. Press sets the action to `accent`.
- Under `prefers-reduced-motion`, the color change remains.

## Don't
- No single reading column with a follow control and a yellow mark. That is
  a magazine essay, and this is a sheet.
- No book-cloth ground, no clay accent, no literary brand page.
- No empty stone field and no bronze hairline. The rules are ink, and they
  are many, because the columns need them.
- No spot-color plate, no halftone, no crop mark, no misregistered shadow.
- No pills, no rounded cards, no drop shadows, no photography stand-ins.
- No weather strip, no cartoon, no mascot, no badge.
- No second display color. Red is the kicker or the correction, not both as
  decoration, and never a fill behind the headline.
