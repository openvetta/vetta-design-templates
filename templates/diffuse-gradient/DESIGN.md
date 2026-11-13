# Diffuse Gradient — Vetta Edition

A complete worked example of this system ships alongside this spec as `demo.html`: every rule below applied to one product, Mira, including its phone frames and a set of deliberately off-style counter-examples. It is the reference for what "on-style" looks like here.

## Atmosphere
A pale room with color soaked into the air. Four large pools — blush, lilac, peach, mint — sit out of focus on porcelain. A fine film grain keeps the fades from banding. Cards are milky frost, thick enough to hold ink, thin enough that a pool still tints them. Type is a bold grotesque with a lot of air. Actions are pills.

Night is a second field, not a dark-mode invert. The ground goes near-black. One warm glow, amber falling into mauve, rises from the bottom edge. Frost on that field is a dark veil. The same grain, a little stronger.

Fits a breath session, a listening list, a picture chat, a short account form, a light dashboard, and one night ledger. It is a poor fit for dense tables, long articles, and any screen that needs a photograph or a hard edge.

The field is the material. Frost, the orb, and the pills sit on it. They do not replace it.

## Color roles
All colors come from `theme.css` tokens — never hardcode hex in frames.
- `surface` is porcelain, the flat ground under the pools. `surface-raised` is the opaque fallback for inputs and for frost when blur is unavailable.
- `surface-foreground` is ink. It is the only color for type that sits on the raw field. It clears 4.5:1 on every pool; lilac is the darkest pool, and a pool must not go darker than `blob-lilac`.
- `muted` is for secondary type on frost or on flat `surface` only. On a raw pool it fails. Do not solve that with opacity.
- `primary` is iris, used as a pill fill with `primary-foreground`. It is not a pool, and it is not small type on a pool — that pair fails.
- `accent` is a deep green for a positive delta or a saved state, on frost or on flat `surface`. Same rule: not on a raw pool.
- `danger` is for errors and the rare destructive pill, with white type on the fill and `danger` type on porcelain.
- The pools are `blob-blush`, `blob-lilac`, `blob-peach`, `blob-mint`. They are background only. Positions are `blob-blush-x` / `blob-blush-y` and the matching pairs. Desktop uses all four, as `mesh`. A phone uses `mesh-compact`: blush and lilac only.
- `night`, `night-foreground`, and `night-muted` belong to the night field. `glow-amber` and `glow-mauve` are the single bottom glow, blurred by `glow-blur`. `night-positive` is the delta on night frost. `glow-amber` may fill one small control, with `night` as the label — white on amber fails.
- Measure contrast against the worst point, not the average. For the light field that is frost (`frost-fill`, 70% porcelain) over lilac. For night it is `frost-night` (76%) over the brightest amber stop. Both keep body text above 4.5:1. Large ink headlines on the light field are safe; small muted type is not, unless it sits on frost.

## Typography
- A geometric grotesque. Inter when it is present, otherwise the system sans in `--font`. No serif, no script, no wide-tracked fashion type.
- Display is bold, tight tracking, line-height near 0.92. Scale: display 42–76px, screen title 22–28px, section 32–40px, body 16–18px, caption 13px.
- The display line may sit on the field in ink. Captions, deltas, and legal lines sit on frost.
- Figures use `tabular-nums` in the same grotesque. One key figure per card.
- Body measure stays under about 40 characters on a phone and 66 in the spec column. The field is not a place for a paragraph.

## Spacing & layout
- The signature screen is a session: the name and the action on one side, a frost player on the other. Below 860px they stack, headline first, player full width. Pills become full width. Display steps down with the viewport; it does not grow a shadow to fake contrast.
- Pool blur is `blob-blur` (72px) on the cover and `blob-blur-mobile` (40px) on a phone and inside a small sample. Peach and mint drop on a phone so the blurred area stays small.
- Frost pads 16 → 22 → 28. Cards use `radius-xl` or `radius-2xl`. The device bezel is rounder than the cards inside it.
- Section rhythm 72. Page inset 20 → 40. Pools bleed to the edges; type does not.
- Frost cards are siblings, with the field visible between them: one sheet, or a short stack. Never nest frost inside frost — the second blur turns both to milk.
- Night glow is anchored at the bottom (`mesh-night`). Cards occupy the upper part of that screen so the glow remains visible around them.

## Components
- **Field:** `surface` plus `mesh` (or `mesh-compact` / `mesh-night`) on one layer, blurred once. Content sits above that layer.
- **Grain:** `--grain-image` tiled at `--grain-size`, opacity `--grain-opacity` (night: `--grain-opacity-night`), `overlay` blend, `pointer-events: none`. It is an image. It is not a live filter on the type.
- **Frost:** `frost-fill`, a 1px `frost-border`, `backdrop-filter` blur at `frost-blur` (14px on a phone) and saturate at `frost-saturate`, plus `shadow-md`. Quiet pills use `frost-fill-strong`. When `backdrop-filter` is unsupported, or under `prefers-reduced-transparency`, frost becomes `frost-fallback` (night: `frost-night-fallback`) and the blur is dropped.
- **Pills:** `radius-full`, min-height 48px, iris fill for the one action, frost for the quiet action, `danger` fill for a destructive action. Disabled is a `border` fill with `muted` type, not a faded iris. Focus is a 2px iris outline with 3px offset, including on night (there the outline may be `glow-amber`).
- **Inputs:** solid `surface-raised`, `radius-lg`, 16px type, a `border` edge. Focus uses the same iris outline. Error swaps the edge and the message to `danger`. Inputs are never frost — typed text has to clear on every keystroke.
- **Chips:** metadata only, 36px, frost or iris. They are not the primary target.
- **Breath disc:** one soft radial in blush and lilac, a light stroke across it, a slow scale on `duration-breath`. It is a glow, not a glass object.
- **Glass orb:** one per product, on the picture screen only. A single sphere: inner ribbon, one specular, a light rim. No cluster, no water, no second orb.
- **Night ledger:** dark frost card, one amber control with `night` type, a short meter in the glow pair, rows on frost. The glow stays in the background.
- **States:** resting, hover (shadow steps from `shadow-md` to `shadow-lg` on fine pointers only), focus, active (scale 0.98), disabled, loading (a disabled pill that says what it is waiting on), empty (a quiet line on frost), error (`danger` edge and text).

## Motion
- Pools may drift on `duration-drift` by a small transform only. The breath disc scales a few percent on `duration-breath`. UI hover and press use `duration-ui` and `ease-soft`.
- Do not animate `filter` or `backdrop-filter`. Blur is painted once.
- The static mesh is the design. Drift is optional. Under `prefers-reduced-motion`, and on any low-power or slow-update setting, drop the drift and the breath scale; leave the pools where the tokens place them. Shadow and color changes on hover may stay.
- A low-power setting also takes the reduced-transparency frost: opaque fallback, no backdrop blur. Grain stays — it is a tiled image, not a filter.
- No bounce, no elastic, no parallax, no scroll-linked blur.

## Don't
- No type in `muted`, `primary`, or `accent` on a raw pool. Ink, or frost underneath.
- No frost fill so thin that the pool shows through harder than `frost-fill`. No nested frost.
- No fifth pool hue, and no acid or neon blend. The four pool tokens are the whole palette.
- No gradient text, no text shadow as a contrast crutch, no outlined display type.
- No colorless 5–12% glass over a night photograph. That is a different material. Night here is black, grain, and one warm glow.
- No clay extrusion, no hard black offset shadow, no 4px corners, no hairline-only "tool" chrome.
- No chrome orb, no metal type, no iridescent UI. The glass orb is one still object.
- No Frutiger Aero or neo-aero: no glossy water, bubble clusters, tropical shine, or skeuomorphic windows.
- No airbrush clouds, and no cartoon weather — no smiling sun, no faced cloud, no mascot forecast.
- No photographs, no brand marks, no live `feTurbulence` filter on the element. Grain is the static image token.
- No animated blur, and no full-screen drift on a phone. Compact mesh, mobile blur, static is enough.
- No second glow on the night field, and no amber buttons on the light field. Amber belongs to night.
