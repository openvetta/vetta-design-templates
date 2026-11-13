# Anti-Grid Brutalism

A worked example ships as `demo.html`: the Unfiled desk, three overlapping windows, the rule sections, a narrow pile, and an off-style comparison. It is a static reference for this visual system.

## Atmosphere

Paper, ink, and one signal. The reference product is Unfiled, a local-first agent desk. Three windows — thread, agent, and files — rest on a grid that does not close. They overlap. Their title strings stay readable. Inside a window, type aligns. Between windows, it does not.

The face is a raw grotesk already on the machine, with a mono for indexes, paths, and title bars. Edges are square. Depth is overlap, not a shadow. The signal belongs to the live window: its title bar and the single dispatch inside it.

This fits a tool that should feel built, local, and slightly rude: an agent desk, a file index, a review queue. It is a poor fit for wellness, shops, long reading, and anything that wants a soft card or a perfect column.

The ground is flat. No grain, no glow, no bevel.

## Color roles

Frames take color from the tokens in `theme.css`.

- `surface` is the paper. `surface-foreground` is the ink. Ink on paper is the body pair, well above body contrast.
- `surface-raised` is the sheet, the window fill. It is a step lighter than the paper. A 2px ink border separates them. The fill alone does not.
- `primary` and `accent` are the same signal. They share a value on purpose: there is one loud color. `primary` fills the dispatch. `accent` fills the live title bar. `primary-foreground` is ink on that signal, and it clears body contrast for the short label.
- A view spends the signal on the live window only. The bar and the dispatch inside that window are one cluster. A second signal button, a signal wash behind a paragraph, or a signal numeral on every row is outside the system.
- `muted` is a dark gray for index labels and secondary lines. It stays above body contrast on paper and on the sheet. It is not a pale gray.
- `danger` is darker than the signal and is the word for a failure. The word is part of the state. It is not a second brand and not a fill.
- `border` is the ink, the same structural black as the type. Window edges, button edges, and rules use it.
- `shadow-sm`, `shadow-md`, and `shadow-lg` are none. Overlap is the depth. `shadow-focus` is an ink ring with a paper gap.

## Typography

System faces only. The reference names the stack and does not load a remote font.

- The grotesk is Arial, Helvetica, Liberation Sans, or Noto Sans. Display and UI share it. Weight 700 is the heavy cut. A black weight is not faked.
- The desk name is 700, about 56px on a narrow screen and up to about 200px on the wide desk, tracking near `-0.04em`, line-height near 0.85. It may crop at the edge of the desk. It does not crop a title string or a control.
- Statements and window body are 400, 15–16px, line-height 1.45, tracking open. A line inside a window stays short enough to clear the overlap.
- The mono is Courier New, Liberation Mono, or `ui-monospace`. Title bars, indexes, paths, times, and button labels are 12–13px, weight 700, uppercase, tracking near `0.08em`.
- Window titles and button labels are uppercase. Body is sentence case.
- 12px is the floor for text. The signal is not the color of a sentence. Ink on the signal is for the short label on a bar or a dispatch.

## Spacing & layout

- The desk is full width. The first view is the overlapping windows.
- Padding below the desk is 16px, growing toward 40px. Prose stays under about 62 characters. It does not sit in a centered column.
- Inside a window, padding is 14–16px. The title bar is 36px. Buttons and fields are at least 44px tall. File rows are at least 36px, and 44px on a narrow screen.
- The broken grid is 1px ink. A rule stops before it meets the next rule. Windows do not snap to those rules. Content inside a window does align: labels share a column, rows share a baseline.
- Overlap is a resting composition. The front window covers part of the one behind. The covered part is empty padding or the tail of a bar, never a title string and never a control. Two or three windows. A fourth window turns the desk into a pile.
- The grip — three 6px squares at the start of the bar — marks the edge a production desk may drag. The reference is still.
- Below 860px the windows leave absolute positions and stack. Each sheet uses the page width. One sheet shifts about 12px sideways. The next sheet overlaps the one above by about 20px, less than the title bar, so every title stays visible. The display word drops to 56px and sits above the pile. The broken rules hide. A fine pointer may invert a button; a coarse pointer does not. The signal bar, the ink border, and the pressed fill remain.
- The reference does not scroll sideways. The display word clips inside the desk.

## Components

- **Window.** Sheet fill, 2px `border`, square corners. The live window's bar is `primary` with `primary-foreground` type. Other bars are ink with paper type. The index and the name sit at the start. A status word may sit at the end of the live bar.
- **Grip.** Three squares, current color, 6px, with a 3px gap. Decorative. The title carries the name.
- **Dispatch.** `primary` fill, `primary-foreground` label, 2px ink border, square, height 44px, mono uppercase. One per desk. A quiet action is a sheet fill with an ink border and ink type, or an ink fill with paper type. Press and hover swap the fill. They do not move the control.
- **Field.** A visible mono label, then a 44px sheet input with a 2px ink border. Placeholder text is not the label. An error keeps the ink border, adds the `danger` word under the field, and may add a `danger` bar on the inline start. The sentence names the failure.
- **Badge.** A square ink outline, mono uppercase, 12px. The words carry the state. "On disk" is a badge. A failure uses the word "Failed" in `danger`.
- **Row.** A path and a fact on one line, divided by a 1px ink rule. On a narrow screen the fact wraps under the path.
- **Focus.** `shadow-focus`: a paper gap, then an ink ring, outside the border. A control without a visible focus replacement is outside the system.
- **Link.** Ink, underlined, including the current location. Links stay ink.

## Motion

Color snaps in `duration-snap` (80ms), linear. The live square blinks in two steps across `duration-blink`, and it is on for most of that cycle. The word beside it does not blink.

Under `prefers-reduced-motion`, the blink stops and the snap duration is zero. The live square stays solid. Hover and press still change color where a pointer can hover.

## Don't

- No radius. `radius-full` is 0 in this system.
- No blurred shadow, no glow, no gradient, no glass, no grain.
- No hard offset shadow. A sticker block behind a card is a different system.
- No polka dots, no marker doodles, no lime sticker field.
- No primary triad, no circle-and-triangle poster, no even Swiss columns. The rules miss on purpose. The inside of a window does not.
- No hazard stripes, no concrete board, no beveled chrome, no navy title bar.
- No pixel grid, no scanline, no terminal green, no hardware texture.
- No serif body, no script, no remote display face, no moving marquee.
- No pale gray text. No signal-colored paragraph. No second signal cluster on the same view.
- No window whose title string or dispatch is covered by the one in front.
- No horizontal page scroll.
