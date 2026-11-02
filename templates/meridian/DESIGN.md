# Meridian — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A transit sheet on the observing desk. The field is blue-black. A graticule
covers the plate edge to edge, and one cold meridian cuts it. Stars are hard
squares whose size is magnitude. The hour is a table, not a sky. Nothing
glows, nothing orbits, nothing wears a costume.

Fits an observatory log, a catalog, a timing desk, a night almanac. It is a
poor fit for streaming shelves, beauty campaigns, and anything that wants a
planet illustration or a metallic orb.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the desk. `plate` is the chart, a step darker, still the same
  night. `surface-raised` is only a second sheet if a note must leave the
  table. Do not build cards from it.
- `surface-foreground` and `primary` are the same ivory-cold ink. The action
  is that ink, not a bright fill. `primary-foreground` is the desk, for type
  that would sit on a light chip. This system rarely needs it.
- `grid` is the fine graticule. `grid-strong` is the major rule, every
  fourth fine line. Neither rises to the strength of `border`.
- `border` is the plate edge and the rule between table rows.
- `muted` is the axis label and the fainter magnitude. It stays readable.
- `accent` is the meridian and the brightest square. One line, one star.
  It is steel, not gold, and not a gradient.
- `danger` is a pale refusal for a clouded observation. The word "rejected"
  is required. It is not a second star color.

## Typography
System stacks only. No webfonts.
- The hour is a grotesque at weight 500, 72–104px, tight line-height,
  slight negative tracking. Never a serif monument, never italic, never
  all capitals.
- Coordinates, magnitudes, and axis labels are a monospace, 12–13px.
- The sentence under the hour is the grotesque, 16px, `muted`, measure
  under 42 characters.
- The brightest star's name on the plate is monospace, 12px, `accent`.
  Other names on the plate are `muted`.
- Scale: hour 48/96, sentence 16, row 13, section 36.

## Spacing & layout
- The cover is one plate and one hour, and it fills the first viewport.
  Padding 24. The plate takes about half and stretches to the height of
  the table.
- The graticule runs to the plate edge. Hour labels sit on the top rule.
  Declination labels sit on the left rule. The meridian is a 1px vertical
  at the center.
- Eight stars, placed on the grid, each a square. Brighter is larger.
  Labels sit to the right of the square and do not cross the meridian
  unless the star does.
- The table has eight rows and four fields: name, right ascension,
  declination, magnitude. Rows share the height equally.
- At 860px the plate stacks above the hour and keeps a height near 300px.
  The hour steps to 48px. Declination leaves the row. The log stays a text
  action with a 48px target.

## Components
- **Plate:** `plate` fill, 1px `border`, fine rules in `grid` and major
  rules in `grid-strong`. Radius 0. No vignette, no glow, no photograph.
- **Meridian:** 1px `accent`, full height of the plate, one per screen.
- **Star:** a square, 4–12px, `primary` or `accent` for the brightest.
  No circle, no blur, no ring.
- **Magnitude key:** six squares along the foot of the plate, labeled in
  monospace. It explains the squares. It is not a legend card.
- **Row:** name in ink, figures in monospace, 1px `border`. No icons.
- **Log:** tracked uppercase grotesque, 1px `border` underline, not a
  filled shape. Hover moves the underline to `accent`.
- **Rejected:** the word in `danger`, same size as a label, under the log.
- **Focus:** `shadow-focus`. Other shadows are `none`.
- **Radius:** the whole scale is 0.

## Motion
- `duration-still` (160ms). The underline changes color. Stars do not twinkle.
- On a touch screen there is no hover. Press sets the log color to `accent`.
- Under `prefers-reduced-motion`, the color change remains.

## Don't
- No iridescent orb, no liquid chrome, no holographic wash, no alien.
- No letterbox, no film grain, no cast list, no play mark.
- No glass blur, no scene showing through the plate.
- No gold fan, no brass sunburst, no lacquer nightclub.
- No serif title. The hour is grotesque; the figures are mono.
- No glowing halos. Magnitude is size, and the square stays hard.
- No empty void. The graticule and the table fill the frame.
