# Bento Grid

A worked example ships as `demo.html`: Folio, a local-first agent desk, arranged as one mosaic of unequal tiles, with the same desk in a narrow frame and a set of deliberately off-style counter-examples. It is a static reference for this visual system.

## Atmosphere

A desk seen from above, the way a bento is seen: one grid, compartments of different sizes, each holding a single portion. The canvas is warm stone. Tiles are either porcelain or ink. The largest ink tile is the work in progress. Porcelain tiles hold the brief, the files, the count, and the queue. A soft shadow sets each tile down. Nothing is translucent, extruded, or neon.

The product in the reference is Folio, an agent whose thread, notes, and index stay on the machine in front of you. The desk is the hero. A headline lives inside a tile, not in a banner above the grid.

This fits a product desk, a feature mosaic, a spec summary, and a local agent console. It is a poor fit for a long article, a dense table, a poster made of type, and any screen that wants every card the same size.

The mosaic reads as one object because the gutter never changes and every tile snaps to the same columns. Size is the hierarchy. The agent is the large cell. A count is a small one.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the warm stone canvas. `surface-foreground` is ink. That pair is about 12:1. Long text on the canvas uses it.
- `surface-raised` is porcelain, the light tile. Ink on porcelain is about 16:1. The step from stone to porcelain is slight; the shadow and the 1px seam are what separate them.
- `muted` is a warm gray for secondary lines, eyebrows, and inactive meta. It clears about 4.7:1 on `surface` and about 6.4:1 on `surface-raised`. It is not cool gray, and it is not used on an ink tile.
- `primary` is the same ink as `surface-foreground`, reserved for the commit pill. `primary-foreground` is porcelain. That pair is about 16:1. `primary-hover` is a one-step lighter ink for a fine pointer. A second filled pill inside the same tile breaks the rule.
- `accent` is iris, the only chromatic signal. It clears about 6.8:1 on porcelain and about 5:1 on stone. It colors a live dot on porcelain, a text link, the focus ring, and a chosen chip. White on an `accent` fill clears about 7:1, but a whole tile of iris is off-style. `accent-wash` is the pale field behind an iris label (the label still clears about 6:1). `accent-on-ink` is the light iris for type and the live dot on an ink tile (about 12:1). The dark iris on ink fails, so it does not cross over.
- `danger` is a deep red for errors and the rare destructive pill. As text it clears about 7.6:1 on porcelain and about 5.7:1 on stone. `danger-foreground` is white on a `danger` fill (about 8:1). `danger-wash` is the pale field behind an error sentence set in `danger`.
- `border` is the control edge. It clears about 5:1 on porcelain and about 3.8:1 on stone. Inputs, quiet pills, and chips use it. A shadow is not that edge.
- `seam` is the hairline between rows inside a porcelain tile. It is not a control boundary.
- `tile-ink`, `tile-ink-foreground`, and `tile-ink-muted` are the dark tile. Foreground on ink is about 16:1. Muted on ink is about 9.8:1. `tile-ink-raised` is the recessed well for a field inside an ink tile; foreground on it is about 14:1.
- `glow-ink` is a single corner light on the largest ink tile. It sits behind the type, which remains on solid `tile-ink`. It is not a canvas, not a second tile fill, and not a blur over a photograph.

Two tile fills, and only two: porcelain and ink. Accent never becomes a third surface.

## Typography

A neo-grotesque system sans. The intended face is SF Pro, otherwise the stack in `--font-display` for titles and figures and `--font-sans` for body. The reference does not load a remote face.

- Tile titles are weight 600, about 30px on a wide desk and 26px on a narrow one, tracking near `-0.035em`, line height near 1.08. They are sentence case.
- The one big figure is weight 600, about 56px down to 44px, tracking near `-0.05em`, `tabular-nums`. One figure per tile.
- Body is 16px, line height about 1.5, weight 400–500. Dialogue inside the agent tile may sit at 15px. Measure stays under about 42 characters in a tile and 66 in a section intro.
- Eyebrows are 12px, weight 600, tracked out, uppercase, in `muted` on porcelain and in `tile-ink-muted` on ink. They name the job. They are not paragraphs.
- Section titles outside the mosaic are the same face, about 28–40px, weight 600.
- There is no monospace requirement, no serif, no italic display, and no gradient text. Weights above 600 are unused. Type below 12px is off-style.

## Spacing & layout

The signature is a six-column grid with a fixed gutter, `--gap-bento` (16px). Tiles span whole columns. The reference desk is:

- Agent, ink, columns 1–4, rows 1–2. The only double-height cell.
- Brief, porcelain, columns 5–6, rows 1–2.
- Files, machine, and the day’s count, one row, two columns each.
- Queue, porcelain, four columns, beside a two-column ink memory tile.

Page inset is 24px, 16px below 560px. The desk column is about 1120px. Tile padding is 22px, 16px on a narrow desk. Radius of a tile is `radius-xl` (28px), easing to 22px below 560px so the corner does not eat the sentence. Inner wells use `radius-md`. Pills, chips, and badges use `radius-full`.

Below 900px the desk becomes two columns. The agent, the brief, and the queue span both. Files sit beside the machine; the count sits beside memory. The agent gives up its double height. Below 560px it is one column, gutter `--gap-bento-tight` (10px), in this order: agent, brief, files, machine, count, queue, memory. Nothing scrolls sideways.

Touch targets are at least 44px: the commit pill, the quiet pill, chips, fields, and job rows. The row is the control. Badges that are not controls may be shorter, and they still use words.

A feature row under the desk uses the same gutter and the same two fills, with spans that add up to the width. It is another mosaic, not a row of equal cards.

## Components

- **Porcelain tile.** `surface-raised` fill, 1px of ink at about 6% opacity, `shadow-sm`, and a 1px inner light along the top. Padding 22px. One job: one eyebrow, one title or one figure, one proof (a list, a sentence, or a chart). Content starts at the top. A footer, when there is one, sits at the bottom of the cell.
- **Ink tile.** `tile-ink` fill, `tile-ink-foreground` type, `shadow-ink`, and a 1px inner light along the top. The largest ink tile may add `glow-ink` in a corner, clipped to the radius. Smaller ink tiles stay flat. Muted lines use `tile-ink-muted`. Dividers are a 14% line of the foreground, not `seam`.
- **Commit pill.** One per tile, plus one in the page chrome. Height 44px, `radius-full`, weight 600. On stone or porcelain: `primary` fill, `primary-foreground` label. On an ink tile the same pill inverts to `tile-ink-foreground` fill and `tile-ink` label, so it does not disappear. Press scales it to about 0.985. Disabled drops to about 42% opacity, loses the lift, and stays the same pill.
- **Quiet pill.** Transparent, `border` edge, ink label, height 44px. On an ink tile the edge is `tile-ink-muted` and the label is `tile-ink-foreground`.
- **Destructive pill.** `danger` fill, `danger-foreground` label. It is rare, and it is not a second commit.
- **Text link.** `accent` on porcelain, weight 600, a real control with a visible label. On ink, `accent-on-ink`.
- **Chips.** 44px, full radius. Resting chips are porcelain with `border`. The chosen chip is `accent-wash` with an `accent` edge, `accent` text, and the word “Chosen”, with `aria-pressed`. Selection is never color alone.
- **Badges.** Status words, not targets. Live uses `accent-wash` and `accent` on porcelain, and a 16% field of `accent-on-ink` on an ink tile. Queued uses `muted`. Done uses ink on stone. A live dot on porcelain is `accent`; on ink it is `accent-on-ink`. The word is the status. The dot repeats it.
- **Fields.** A visible label, then a 44px well, 16px type, `radius-md`, `border` edge. On porcelain the well is `surface-raised`. On ink the well is `tile-ink-raised` with foreground type. Placeholder text is not the label. An error keeps the sentence, sets `aria-invalid`, turns the edge to `danger`, and puts the sentence in `danger` on `danger-wash` when it needs a field of its own.
- **Job row.** The whole row is the button: a dot, a name, a badge, at least 44px. A `seam` divides porcelain rows.
- **Bars.** One small chart per count tile, decorative, with the figure and a caption carrying the data. The current bar is `accent`. The rest are ink at low opacity. No second chart in that tile.
- **Focus.** A 2px `accent` outline, offset 3px, on stone and porcelain. Inside an ink tile the outline is `accent-on-ink`. Removing it without a replacement is off-style.
- **Page chrome.** A wordmark, one status badge, and the single chrome commit. It is not a second mosaic, and it does not grow a marketing headline beside the desk.

## Motion

A fine pointer may lift a tile 2px and step the shadow from `shadow-sm` to `shadow-md` (ink tiles, toward `shadow-lg`) over `duration-tile` with `ease-tile`. The commit pill uses the same duration to scale to 0.985 on press. The live dot eases between full and about 45% opacity over `duration-pulse`. Nothing else moves. Type does not travel. The gutter does not animate. Tiles do not swap places.

A coarse pointer does not lift. Pressed pills and rows darken the edge instead. Inside a narrow specimen, tiles do not lift, because that frame is a picture of touch.

Under `prefers-reduced-motion`, the lift, the press scale, and the pulse stop. Color and border changes stay, so hover, press, and the live status remain visible. Under `prefers-contrast: more`, tile edges and quiet-pill edges move to the foreground of that tile.

## Don't

- No equal card row standing in for the mosaic. If every tile is the same span, it is a different layout.
- No third tile color, no rainbow borders, no gradient text, and no accent fill used as a surface.
- No two jobs in one tile, and no tile nested inside a tile. A field, a row, and a badge sit in the tile. Another rounded compartment does not.
- No glass blur, no translucent panel, no photograph under a tile. Both fills are opaque.
- No clay extrusion, no hard offset shadow, no zero-radius corner, no hairline-only tool chrome with a 6px radius.
- No perspective grid, no horizon, no neon glow on type, no scanline, no terminal chrome.
- No poster type as the layout, no italic display, no moving letters. The tile is the unit, not the word.
- No hardware bezel, screw, or material texture. The narrow frame in the reference is a flat ink specimen, not a device render.
- No mesh washed across the stone. `glow-ink` belongs to one corner of the largest ink tile.
- No cool gray canvas and no single blue used as the commit. The commit is ink. Iris is the signal.
- No muted type on an ink tile, no dark iris on ink, and no text under 12px.
- No second commit pill in a tile. No icon-only control. No placeholder standing in for a label.
- No Frutiger Aero or neo-aero: no glossy water, bubble clusters, or tropical shine. No airbrush. No cartoon weather, no mascot, no faced sun.
