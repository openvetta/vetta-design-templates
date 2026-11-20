# Liquid Glass — Vetta Edition

Cove is a phone desk for a local coding agent. The screen is an iOS-styled mobile web app. Its controls are the published React package **glisse 0.6.0** (Kelvin Zhang, MIT), checked against git tag `v0.6.0` at `4922c852a6866ee9991d2f8c715bb1cfbe7aa2b9`. Glisse is not a Swift, SwiftUI, UIKit, or React Native library. There is no native iOS API in this system.

`demo.html` is a static catalog preview. The style wall renders it with scripts disabled and with no network, so it cannot mount React or Glisse's lens. Its frost is an original CSS stand-in for the still frame. Shipping that CSS as the app's controls is off-style. The runnable source that imports the real components is `integration/`, copied with the rest of this template's resources. `integration/README.md` is the setup note. `integration/src/App.tsx` is the shell, `screens.tsx` is the product, and `gallery.tsx` is every public component.

## Atmosphere

Daylight first. A soft outdoor scene carries the color: sky, a warm sun, green hills. Glass stays neutral and thin, close to white in light and close to charcoal in dark, and borrows the scene instead of introducing a second palette. Controls are capsules. One blue action per view. Green is only the on-state of a switch. Red is only a destructive label or fill. Sheets that hold sentences use the higher-opacity surface; the 3px frost is for controls and short islands.

Dark is a first-class Glisse theme (`data-theme="dark"`), not a separate template. The catalog's `vibe` is light because that is the default page.

## Color roles

Shell colors live in `theme.css`. Glisse paints controls from its own `--lg-*` properties, which the package inserts at import. Point the three role properties at the tokens:

- `--lg-fill` → `primary`. Filled actions and the selected tab icon.
- `--lg-on` → `accent`. Switch track when checked. Not body copy.
- `--lg-destructive` → `danger`. Destructive glass labels, and the fill when a filled button is also destructive.

`surface` is the daylight field behind the scene art. `surface-foreground` is ink. `surface-raised` is the readable sheet (Glisse's `--lg-surface` is the same job inside menus). `muted` is secondary ink on that sheet. `border` is the 0.5px edge.

Glisse's own muted ink (`--lg-muted`) is a 60% black or white used for placeholders and unselected text tabs. It is too light for 13px sentences on a sheet. Secondary sentences in the shell use `muted`.

Library default fills (`--lg-fill` light `#0088ff`, dark `#0091ff`, destructive `#ff383c` / `#ff4245`) fail 4.5:1 for white 14px labels. This template's tokens replace them. Glisse hardcodes `#fff` on `.lg-button[data-variant="filled"]`. In dark mode the fill is light, so the shell overrides that text color to `primary-foreground`. The override is in `integration/src/app.css` under `.app .lg-button[data-variant="filled"]:not([data-tint])`. A filled button that also sets `tint` keeps the library's white label, so that tint has to be a dark fill.

Glass material, not set as Vetta tokens because Glisse owns it: light `--lg-glass` is white at 60% with `blur(3px) saturate(1.5)` and a 0.5px `--lg-edge`; the menu and grouped sheet use `--lg-surface` at about 86% with a stronger blur. Leave those formulas alone unless reduced transparency is on (see Motion).

## Typography

The shell uses the platform sans:

`-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

Glisse controls set their own sizes and inherit the family (`font: inherit` plus an explicit size). Do not restyle those sizes.

- Large title, 34px, weight 700, tracking `-0.022em`, one line, `surface-foreground`.
- Screen title under a bar, 17px semibold.
- Body on a sheet, 17px, line-height 1.35. Secondary lines 13px in `muted`.
- Button label, 14px, from `.lg-button`. Segment labels, 13px. Icon-tab labels, 10px weight 500.
- One primary action may use a filled button. Other actions stay glass.

There is no display serif and no marketing scale. The large title is the iOS page title, not a hero headline.

## Spacing & layout

The product is a phone column, max 430px, centered on wider viewports. A desktop gallery can sit beside it; it does not stretch the phone into a tablet layout.

- Page gutter 16px. Card gap 10px. Section gap inside a scroll view 16px.
- Top safe area `max(54px, env(safe-area-inset-top))` when the status area is drawn by the shell. Bottom safe area `max(12px, env(safe-area-inset-bottom))` under the dock.
- The dock is centered, 8px above the home indicator. `TabBar` is `inline-flex`; it does not stretch to the screen width.
- Scroll the page content. Keep the dock fixed. Give the scroller at least 96px of padding-bottom so the last card clears the bar.
- Radius: buttons and inputs are 20px pills (library). Cards and grouped sheets are 22px (`radius-lg`). The device screen, when framed, is 36px.
- Touch: shell rows are at least 48px tall. Glisse's button and input are 40px tall, the icon button is 40×40, the segmented control is 32px tall, and the switch graphic is about 60×25 with a hit slop the library expands to 44px (`.lg-switch::before`). Do not shrink any of those. Separate adjacent 32px segments from other controls by at least 8px. Full-card targets are native buttons inside `Glass`, min-height 72px.

`Input` and `SearchField` default to `max-width: 360px`. On the phone, pass a class that sets `max-width: none; width: 100%`.

## Components

### Runtime

Peer dependencies are `react` and `react-dom`, both `>=18`. The checked example uses React 19 and Vite 6. Install the pinned library:

```bash
npm install glisse@0.6.0 react@^19 react-dom@^19
```

Import every control from the package root. Styles are inserted once, at the top of `head`, when the module loads (`insertStyles` in the package). An app stylesheet loaded after that wins ties. The only other style entry is the plain sheet, which is optional because the JS insert already happened:

```tsx
import {
  Button,
  Glass,
  Input,
  Menu,
  SearchField,
  SegmentedControl,
  Slider,
  Switch,
  TabBar,
} from "glisse";
```

```ts
import "glisse/styles.css";
```

Package exports are `.` (import and require), `./styles.css`, and `./package.json`. There is no `glisse/button` path and no icon font. The ESM and CJS bundles start with `"use client"`. In the Next.js App Router, import them from a client component. Do not render them in a server component. There is no React Native build.

Mark the scenery the glass should bend with `data-glisse-backdrop`. The marker is an attribute, not a component. The marked node must overlap the glass and must not contain it (a sibling behind the shell is the working structure in `App.tsx`). Chromium can also bend the live backdrop without the marker. WebKit, including every browser on iOS, bends marked content by drawing it; see Platform.

Set the theme on an ancestor:

```tsx
<div data-theme={mode}>...</div>
```

`mode` is `"light"` or `"dark"`. With neither, Glisse follows `prefers-color-scheme`. The attribute `data-theme="light"` pins light even when the OS is dark.

Build targets recorded in the library's bundler config are Safari 16, Chrome 111, and Firefox 113 for the CSS. Those floors are not a promise that backdrop refraction exists there. Behavior by engine is under Platform.

### Public inventory

Verified from `src/index.ts` at the tagged commit. Nine components, plus their prop types. Nothing else is exported.

| Export | Kind | Where the example uses it |
| --- | --- | --- |
| `Button`, `ButtonProps` | Component | Job actions; `gallery.tsx` variants |
| `Glass`, `GlassProps` | Component | Queue cards, job sheet; gallery sample |
| `Input`, `InputProps` | Component | Job note field; gallery |
| `Menu`, `MenuProps`, `MenuItem`, `MenuEntry` | Component and item types | Queue header; gallery `align="start"` |
| `SearchField`, `SearchFieldProps` | Component | Queue filter |
| `SegmentedControl`, `SegmentedControlProps`, `SegmentedControlItem` | Component | Job Plan / Diff / Notes |
| `Slider`, `SliderProps` | Component | Review depth |
| `Switch`, `SwitchProps` | Component | Permissions; appearance |
| `TabBar`, `TabBarProps`, `TabBarItem` | Component | Phone dock (icons); gallery text bar and link bar |

`MenuEntry` is `MenuItem | "separator"`. Items are data, not child components. There is no `Menu.Item`, no `Separator`, no icon set, no `Dialog`, `Sheet`, `List`, `NavBar`, `Toolbar`, or `Alert`.

Not exported, and not widgets to reimplement: `src/internal/` (`useControllable`, `cx`, `createLens`, `createDrawnLens`, `useRefraction`, `usePress`, `Segments`, `createSpring`, `insertStyles`, the SVG helpers). `TabBar` and `SegmentedControl` are the public faces of `Segments`.

### Props, states, and composition

`Button` renders `<button type="button">` and forwards a ref plus button attributes (`disabled`, `onClick`, `aria-*`). `variant` is `"glass"` (default) or `"filled"`. `icon` is a `ReactNode` drawn before the label; with no children the button is a 40px circle and needs `aria-label`. `destructive` tints with `danger`. `tint` is any CSS color and sets `--lg-tint` (it replaces the destructive default when both are set). States the library draws: hover on fine pointers, instant pressed (`:active` / `data-pressed`), disabled at 35% opacity. One filled button per view. A destructive filled button is the rare confirm, not the default.

`Glass` renders a `div` with `class="lg-glass"` and accepts div attributes. It has no radius of its own. Set `border-radius` (22px for a card) in `className` or `style`. Grouped switch rows live in one `Glass`, separated by a 0.5px `border` rule, each row at least 48px. A whole-card target is a native `<button>` inside the `Glass`, not a second `Button`, so the island stays one hit target.

`Input` is controlled with `value` / `defaultValue` / `onValueChange`. The native `value`, `defaultValue`, and `onChange` props are omitted on purpose. `className` and `style` land on the glass wrapper; `id`, `placeholder`, `disabled`, `aria-label`, and `autoComplete` land on the inner `<input>`, which is also the ref. `icon` is a node in the wrapper. `type="search"` adds a clear button labeled "Clear" when there is text and the field is enabled. Placeholder and icon use Glisse muted.

`SearchField` is that input with `type="search"`, a magnifier, and placeholder `"Search"`. `SearchFieldProps` is `InputProps` without `type`. Override `icon` or `placeholder` only when the field is not a search.

`Slider` is a labeled range. `value` / `defaultValue` / `onValueChange`, with `min` 0, `max` 100, `step` 1 when omitted. `className` and `style` land on the root; the ref and `aria-label` land on the `<input type="range">`. Put a text value next to it. The library does not render a numeric label. Disabled drops the root to 35% opacity. `--lg-slider-bend` overrides the lens strength.

`Switch` is `role="switch"` with `aria-checked`. `checked` / `defaultChecked` / `onCheckedChange`. It does not use `onChange`. Always set `aria-label` (or `aria-labelledby`). Disabled is 35% opacity. The thumb can be dragged; a vertical swipe still scrolls. `--lg-switch-bend` overrides lens strength.

`SegmentedControl` takes `items: { value, label }[]`, `value` or `defaultValue` (`string | null`), and `onValueChange`. `null` shows no thumb, so pass a real default. The root is `role="radiogroup"`; options are `role="radio"` with `aria-checked`. Set `aria-label` on the root. Arrow keys, Home, and End move the selection. There is no per-item `disabled`. Default segment width is 84px (`--lg-tab-width`); override that custom property on the root for a longer label instead of shrinking type below 13px. A press or drag lifts the thumb into a lens. `--lg-segment-bend` overrides strength.

`TabBar` uses the same value API. Items may include `icon` and `href`. With any icon, the bar sets `data-icons`: 72×52 slots, icon over a 10px label, selected color `--lg-fill`. Without icons, slots are 84×32 and unselected labels are muted. If every item has `href`, the root is `role="navigation"` and the selected item is `aria-current="page"`; otherwise the root is `tablist` and items are tabs with roving `tabIndex`. `link` is the component used for href items (default `"a"`); pass Next.js `Link` when the app has that router. Modifier-clicks do not change selection. `--lg-tab-bend` and `--lg-tab-dispersion` override the lifted lens. The phone dock in `screens.tsx` is the icon bar without href. The gallery renders a text bar and a link bar.

`Menu` is uncontrolled. There is no `open` prop and no leftover DOM props: only `items`, `aria-label` (required), `icon` (default ellipsis), `align` (`"end"` default, or `"start"`), `className`, and `style`. `className` sits on the wrapper. The trigger is a glass icon `Button` with `aria-haspopup="menu"` and `aria-expanded`. The card is `role="menu"`, 200px wide, aligned to the trigger. Entries are objects `{ label, icon?, onSelect?, destructive?, disabled? }` or the string `"separator"`. Choosing an item closes the menu and then calls `onSelect`. Escape closes and restores focus. Arrow keys, Home, and End move inside the menu. Tab closes it. A pointer outside closes it. Disabled rows are 38% opacity. The queue menu uses `align="end"` on the trailing edge so the 200px card stays on screen.

Forwarding summary: `Button`, `Switch`, and `Glass` put class, style, and other props on their root. `Input` / `SearchField` put class and style on the wrapper and the rest on the input. `Slider` puts class and style on the wrapper and the rest on the range input. `TabBar` and `SegmentedControl` put them on the root. `Menu` does not accept anything else.

### Recipes

Queue (`screens.tsx`): `SearchField` filters three `Glass` cards. Each card is a native button. The header `Menu` holds a plain item, a disabled item, a separator, and a destructive item. The dock is an icon `TabBar`.

Job: `SegmentedControl` switches Plan, Diff, and Notes. One `Glass` groups two `Switch` rows. Another holds a `Slider` with a live number. `Input` is the note. `Button variant="filled"` is the single primary; a glass `Button` is the quiet action.

Gallery (`gallery.tsx`): glass, filled, icon, icon-only, tint, destructive, and disabled buttons; input with icon; both switch states plus disabled; slider including disabled; text `TabBar`; href `TabBar`; `Menu` with `align="start"`; a `Glass` sample; the appearance `Switch` that sets `data-theme`.

```tsx
<SearchField
  aria-label="Search jobs"
  placeholder="Search jobs"
  value={query}
  onValueChange={setQuery}
  className="field"
/>

<TabBar
  aria-label="Cove"
  value={tab}
  onValueChange={setTab}
  items={[
    { value: "queue", label: "Queue", icon: <QueueIcon /> },
    { value: "job", label: "Job", icon: <JobIcon /> },
    { value: "library", label: "Library", icon: <LibraryIcon /> },
  ]}
/>

<Menu
  aria-label="Job actions"
  align="end"
  items={[
    { label: "Hold for later", onSelect: hold },
    { label: "Page the studio", disabled: true },
    "separator",
    { label: "Drop this job", destructive: true, onSelect: drop },
  ]}
/>
```

The SVG glyphs in `integration/src/icons.tsx` are original. Pass any `ReactNode` as `icon`. Size is the library's: 20px in a button, 26px in an icon tab, 16px in a menu row.

### What the app owns

Glisse owns the control chrome, refraction, springs, and focus ring on its own elements (2px `--lg-ring`, offset 2px). The app owns the scene, safe areas, large title, card layout, the native full-card button, copy, and the filled-button text color override. `data-glisse-backdrop` is app markup. Theme choice is app state written into `data-theme`.

### Accessibility

- Name every icon-only `Button`, every `Switch`, the `Slider`, the `SearchField`, the `SegmentedControl`, the `TabBar`, and the `Menu`.
- `Menu`'s `aria-label` names both the trigger and the menu.
- Do not put a `Button` inside the card's native button.
- Focus rings are visible. Do not remove `:focus-visible` outlines.
- Hover styles in the library are wrapped in `@media (hover: hover) and (pointer: fine)`. Press is the touch feedback. Do not add a hover-only action.

## Motion

Glisse animates with its own spring (`createSpring`). Under `prefers-reduced-motion: reduce`, or while the document is hidden, springs jump to the target. The menu plate shortens its CSS transition in that mode. The shell does not add a second bounce. Pressed glass changes background immediately and fades on release.

`prefers-reduced-transparency` is not handled inside Glisse 0.6.0. The shell answers it by raising `--lg-glass` and `--lg-surface` toward solid and setting `--lg-blur` to `0px`, in `app.css`. Mirror that in any new screen.

## Don't

- Don't rebuild a glass button, switch, slider, tab bar, segmented control, menu, or search field with `backdrop-filter` and present it as this system. Use the exports above.
- Don't treat `demo.html` as implementation source. It is a still preview.
- Don't copy `src/internal` from the Glisse repo into the app, and don't import it. It is not part of the package exports.
- Don't call SwiftUI, UIKit, or React Native APIs. This is a website.
- Don't put a sentence on the 3px control frost over a photograph. Put it on `surface-raised` or a `Glass` sheet whose `--lg-glass` is lifted toward `--lg-surface`.
- Don't stack more than two translucent layers in the same spot.
- Don't tint the glass with a gradient, a glow, or a second accent. Color stays in the scene, in `primary`, and in `danger`.
- Don't reuse the Apple template's marketing page or the Glassmorphism template's night plate. Those are different systems.
- Don't imitate an Apple system alert, share sheet, or status-glyph set.
- Don't shrink a library control to make a row fit. Move it to the next line.
- Don't leave `TabBar` or `SegmentedControl` at `value={null}` if a thumb should be visible.
- Don't expect `Menu` to be controlled, portaled, or wider than 200px without a local override.

## Platform and fallbacks

Backdrop bending is engine-specific, from `refractsBackdrop` and `drawn.ts` in 0.6.0:

- Chromium applies the lens to the live backdrop, so unmarked scenery still bends behind `Glass` and `Button`.
- WebKit (Safari, and every iOS browser) does not filter a backdrop. With `data-glisse-backdrop` it draws the marked content into a canvas and shades the rim. Paintable content is images, video, canvases, text, background colors, linear gradients, and background images. Borders, shadows, SVG, other gradients, and cross-origin images that don't allow a read stay unbent.
- Firefox and other non-Chromium browsers without a usable drawn lens keep the frost, the edge, and the lit rim, without displacement.
- Several lenses over one marked region share a filter. A lens that moves across a large region is expensive in Safari; keep marked scenery to the phone scene, not the whole document.
- The CSS file includes `-webkit-backdrop-filter`. Where `backdrop-filter` is missing, the solid `background-color` remains, which is the readable fallback.
- Reduced motion snaps springs. Reduced transparency is the shell override described in Motion.

## Licensing

Glisse is MIT, Copyright (c) 2026 Kelvin Zhang. This template does not vendor that source. `npm install glisse` installs the license with the package. Keep that copyright notice with any substantial copy of Glisse; the intended integration is the dependency, not a paste. The spec, `theme.css`, `demo.html`, and `integration/` were written for Vetta and use this entry's MIT license. Docs for the library also live at `https://glisse.kelvinzhang.ca` and `https://github.com/0kzh/glisse`.

## Coverage

All 9 public components are mounted in `integration/`, with the states in the table below. The hero queue does not contain every variant; the job screen and `gallery.tsx` do. Internal helpers are documented here and are not wrapped as fake widgets.

| Component | Product screen | Gallery states |
| --- | --- | --- |
| `Button` | Job: glass + filled | glass, filled, icon, icon-only, tint, destructive, disabled |
| `Glass` | Queue cards, job sheets | standalone card |
| `Input` | Note to the agent | icon, disabled |
| `SearchField` | Queue filter | default magnifier and clear button via the queue field |
| `Menu` | Queue actions, `align="end"` | `align="start"`, separator, disabled, destructive |
| `SegmentedControl` | Plan / Diff / Notes | same control, keyboard radios |
| `Slider` | Review depth | second, disabled |
| `Switch` | Two permission rows | on, off, disabled, appearance |
| `TabBar` | Icon dock | text tabs; href tabs as navigation |

Checked limits, not gaps in the example: no controlled `Menu`, no per-segment disabled, no reduced-transparency inside the package, no native iOS binary, backdrop refraction only as the Platform section describes, filled-button text color hardcoded to white unless the shell overrides it.
