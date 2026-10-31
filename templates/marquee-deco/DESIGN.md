# Marquee Deco — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one real page, including its mobile layout and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A night bill at the door. The ground is black lacquer. One gold draws the
frame, the fan, the sunburst, and the name. A single emerald jewel is the
house color, used once. Symmetry is the layout. The name is announced in
tracked capitals. Nothing is quiet stone, nothing is a streaming poster, and
nothing is a block of primary colors.

Fits a supper club, a premiere, a single evening, a scent or a spirit.
It is a poor fit for tools, children, weather, documents, and anything that
should feel casual or soft.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is the lacquer. `surface-raised` is the plaque, one step lighter,
  still near black. Do not stack a third level.
- `surface-foreground` is ivory. It is for the sentence and the facts.
- `primary` is the gold. It colors the name, the frame, the fan, the burst,
  and the action's outline. `primary-foreground` is lacquer, used only when
  the action fills with gold.
- `muted` is a dim gold-ivory for the secondary fact. It stays light enough
  to read on lacquer.
- `accent` is emerald. One square jewel, 12px, with no type inside it. It is
  not a button, not a link, and not a background wash. Type never uses
  `accent` as its color.
- `danger` is a house red for a cancellation. The word is required. It is not
  a ruby ornament.
- `border` is a dim gold for the rule between facts. The outer frame uses
  `primary`, not `border`.
- One metal. Gold is that metal. Emerald is a jewel, not a second metal.
  There is no chrome gradient and no bronze hairline.

## Typography
System stacks only. No webfonts. A deco display face is not assumed.
- The name is a text serif in capitals, weight 400, tracking near 0.18em on
  the cover and 0.1em on a phone. Size 64–72px on the cover, 40px on a phone.
  It is never a heavy grotesque and never sentence case.
- The eyebrow and the action are the same serif, 12px, capitals, tracking
  near 0.22em.
- The sentence is the serif in sentence case, 18px, weight 400, ivory, measure
  under 36 characters. It is the only line that is not in capitals.
- Facts are 13px, capitals, tracking 0.14em.
- Scale: name 40/72, sentence 18, eyebrow 12, fact 13.

## Spacing & layout
- The bill is centered on both axes. A stepped frame holds the content.
  Outside the frame is lacquer and the sunburst. Padding from the viewport
  edge is 48px, 16px on a phone.
- The order inside the frame is fixed: fan, chevrons, eyebrow, name, a gold
  rule with one diamond, the sentence, two facts, the action. Each group is
  centered.
- Vertical gaps inside the frame are 18–28. The name has more air above it
  than a dashboard row.
- Symmetry survives the phone. The two facts stack, but they stack on the
  center line. The layout does not become flush-left. The name's tracking
  tightens to 0.1em so the capitals fit. The fan shrinks from about 220px to
  140px. The action becomes the full width of the plaque and stays 48px tall.
- The sunburst radiates through the lacquer around the frame, centered on the
  bill. It does not run under the type. One burst. It fades before the
  viewport edge.

## Components
- **Sunburst:** thin `primary` rays on a repeating conic, masked so they fade.
  Rays are about 1–2 degrees of color separated by wide lacquer. A filled gold
  disc is off-style.
- **Fan:** a semicircle of the same rays above the name, with one gold arc.
  Width about 220px on the cover, 140px on a phone.
- **Chevrons:** a short centered row, five to seven, drawn as gold corners.
  They sit under the fan. They do not tile the background.
- **Frame:** an outer 1px `primary` rule and an inner 1px `primary` rule,
  inset about 8px, with a square step at each corner. Radius is 0 on every
  corner. The plaque fill is `surface-raised`.
- **Diamond rule:** a 1px `primary` line broken by one small rotated square.
  One per bill.
- **Jewel:** a 12px square of `accent`, sitting beside the eyebrow. One.
- **Action:** capitals, 1px `primary` outline, transparent fill, no radius,
  height 48px. Hover fills it with `primary` and sets the label to
  `primary-foreground`. It does not become a pill and it does not grow a glow.
- **Facts:** two centered lines. On a wide bill they sit side by side with a
  `border` rule between them. Not cards.
- **Focus:** `shadow-focus`, a gold ring. No other shadow.

## Motion
- `duration-still` (160ms). The fill of the action changes color. Nothing
  travels. The burst does not rotate.
- Under `prefers-reduced-motion`, the same color change remains.
- On a touch screen there is no hover. Press fills the action the same way
  hover would.

## Don't
- No honed stone, no marble vein, no ivory ground, no single bronze hairline
  in place of a frame.
- No Bauhaus red, yellow, and blue blocks, no 4px black border, no hard
  offset shadow.
- No cinematic red poster, no full-bleed photograph, no streaming row.
- No wool texture, no glass blur, no rounded pill, no sun over grass.
- No second metal. No glow on the type. Gold is a line and a fill, not a lamp.
- The name stays in capitals. A bold lowercase word is a different bill.
