# Cove — glisse 0.6.0 example

This folder is the runnable Liquid Glass screen. It imports the published React package. It is not a SwiftUI sample, and it is not `demo.html`.

`demo.html` (one level up) is the catalog still. The style wall renders that file with scripts off, so the lens, the springs, and the menu animation are absent there on purpose.

## Setup

From this directory:

```bash
npm install
npm run typecheck
npm run dev
```

`npm run dev` serves `http://127.0.0.1:5173`. `npm run build` writes `dist/` for a production check. Peers are React 18 or newer; this example installs React 19. The library pin is `glisse@0.6.0`.

Open the phone for the queue and the job. From 1100px wide, the column beside the phone is the full component gallery. Narrower viewports keep that gallery on the Library tab.

## What is mounted

`src/screens.tsx` uses `SearchField`, `Glass`, `Menu`, `SegmentedControl`, `Switch`, `Slider`, `Input`, and `Button` as the Cove desk. `src/App.tsx` uses the icon `TabBar`. `src/gallery.tsx` mounts every public component again, including the states the desk does not need on the first screen: disabled controls, tints, a text tab bar, a link tab bar, and `Menu` with `align="start"`.

Mark scenery with `data-glisse-backdrop` on a sibling behind the glass, as `App.tsx` does. Set `data-theme` to `light` or `dark` on `.app`.

## License

The example source is original and covered by the template MIT license. Glisse itself is MIT, Copyright (c) 2026 Kelvin Zhang, and is installed as a dependency rather than copied. https://github.com/0kzh/glisse
