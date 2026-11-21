# Bauhaus Polka Dot

A worked example ships as `demo.html`: Punkt, a local-first social app, with a desktop feed and inbox, the same app at phone width, the controls, and a deliberately off-style counter-example. It is a static reference for this visual system.

## Atmosphere

Flat primary fields butted edge to edge, and a fine polka scale on top of them. Black, white, red, blue, and yellow are the surfaces of the app: the bar, the stories, the posts, the inbox, the tab bar, the buttons. They touch. They do not sit as small accents on a paper page.

Dots are small, solid, and regular. Four diameters do the counting, the status, the badges, and the rhythm. One circle, larger than that scale, is allowed once in a view, as a focal shape sitting on a field of fine dots. Nothing fades. A dot is either fully there or it is not in the layout.

The product in the reference is Punkt. Posts, likes, and messages stay on this device. The first screen is the app: a black bar, a red stories row, a white post, a black post, a yellow field of fine dots with one red circle, and a blue inbox. At phone width the inbox drops under the feed and a black tab bar sits on the bottom.

This fits a social app, a feed, a chat list, a profile, and any tool whose regions can be named with a single primary color. It is a poor fit for a long article, a magazine cover, a centered essay, and any screen that needs photographs, soft depth, or many quiet grays.

## Color roles

Frames take color from the tokens in `theme.css`. Regions use the token as a solid fill. Neighboring regions meet with no gap and no frame. A 1px `border` appears only where two light fills would otherwise melt together (white against yellow). Black against white, red, blue, or yellow does not need that rule. Red against blue, blue against yellow, and yellow against black do not either.

- `primary` is black. `primary-foreground` is white. White on this black is about 19:1. The top bar, a black post, and the phone tab bar use this pair.
- `surface` is white. `surface-foreground` is the same black, about 19:1. A white post is a color block, not a page background. Body copy on a white or yellow block uses this black.
- `surface-raised` is primary yellow. Black on this yellow is about 15:1. It is the loud field, the active tab, the post button, and the fine-dot plate. White type on yellow fails and does not appear.
- `accent` is primary blue. White on this blue is about 8:1. The inbox, a comment button, and a blue avatar use it. Black type on this blue is not a text pair.
- `danger` is primary red. White on this red is about 5.5:1. The stories bar, the compose cell in the tab bar, and the one focal circle use it. Black type on this red stays under about 4:1 and is not used for text.
- `muted` is a dark gray for secondary words on white and on yellow only (about 11:1 on white, about 9:1 on yellow). On black, blue, or red, secondary words are `primary-foreground`, at a smaller size. A gray word on red or blue fails.
- `border` is black, 1px, and only for the light-on-light seam and for a field that sits on a same-value ground.

Buttons, cards, headers, tabs, and badges are fills of these tokens. An outlined ghost on a quiet ground is off this system. A screen that is mostly white with a few colored dots is off this system.

## Typography

A geometric sans. The intended faces are Futura, Avenir Next, and Century Gothic. The reference does not load a remote font. `--font-sans` names those faces, then Noto Sans Display.

This is an app, so type stays at interface size. There is no poster headline and no magazine display.

- The product name is weight 700, 20px, lowercase, tracking −0.04em.
- Section titles inside the app (stories, messages, profile) are weight 700, 16px.
- Names are weight 700, 15px. Body is weight 400, 15px, line-height 1.4. A post is one or two sentences, not a column of prose.
- Meta (time, counts, tab labels) is 12px. Tab labels can be weight 700. On a light field, meta may use `muted`. On black, blue, or red, meta is white.
- Buttons are weight 700, 14px, lowercase.
- One family. Numerals are tabular. No italic, no uppercase lockup, no second face for headlines.

## Spacing & layout

The product runs to the viewport edge. Margin on the app is 0. Color regions abut. Padding lives inside a region: 12px below 960px, 16px from 960px up.

- From 960px up the workspace is two columns with no gutter: the feed, then a 320px inbox. The inbox is as tall as the feed. The yellow post grows to fill the feed column so the screen ends on a color, not on empty paper.
- Below 960px the inbox moves under the feed, in document order. A tab bar is fixed to the bottom of the viewport, full width, 56px tall. The page keeps 56px of padding under the content so the last row is not covered. The bar is five equal cells: feed, chat, post, alerts, you.
- Stories are a horizontal row of avatars that fits the column. At 390px, five stories at 36px still fit inside 12px of padding. The row does not widen the page. A fine dot patch on the stories bar is desktop-only; it drops below 960px.
- Touch targets (tabs, buttons, the field, the switch) are at least 44px tall. Dots and avatars are not the target; the row or the button is.
- The one focal circle is 64px (`focal`). It sits inside the yellow dot field, overlapping a blue square. It does not cover a control.

## Components

### Dots

Four diameters. Every dot is a solid fill of `primary`, `primary-foreground`, `surface-raised`, `accent`, or `danger`. No fifth size. No hollow dot. No tint.

| Token | Diameter | Use |
| --- | --- | --- |
| `dot-1` | 4px | The rhythm. A regular grid or a single row: dividers, like-counts, the patch on a color bar. Pitch is 8px (dot plus a 4px gap) when it is a texture, and the same 4px gap when a row is a count. |
| `dot-2` | 8px | One status mark, or a member of a stacked unread mark. |
| `dot-3` | 12px | A badge dot, or the middle shape in a stack. |
| `dot-4` | 16px | The top of the polka scale: the switch knob, the largest shape in a stack. |

The focal circle is 64px and is not a fifth polka size. A view gets one. It overlaps other opaque shapes. It is not a button and not an avatar.

Density is a second axis. The same `dot-1` packed on a 4px gap reads as a count or a texture. The same dot on an 8px gap reads as a looser rhythm. A greater count is more dots of the same diameter, plus a numeral. Enlarging one dot to mean "more" is off this scale.

Overlap is the third axis. Two or three dots of different diameters and different inks may stack, each fully opaque, the later one covering the earlier one. The offset is 4px or 6px, on the module. Use a stack for an unread thread or an unseen story. Do not stack more than three, and do not scatter stacks across the screen. One stack in a list row is enough.

Where a dot attaches:

- **Avatar.** A 36px circle (`avatar`), filled with a block token, with a one-letter name in the contrasting text pair. It is a person, not a polka dot. An unseen story adds a stack of `dot-2` on the avatar's corner, inside the avatar box. A seen story has no stack.
- **Unread and badges.** A stack, or a solid yellow square with a black numeral. The numeral is present. The dots are not the only signal.
- **Status.** One `dot-2` beside the word or the time.
- **Divider.** A row of `dot-1` in an ink that contrasts with the field, or a 1px solid token rule. Not a faded line.
- **Count.** A tight row of `dot-1`, then the numeral and the word ("12 likes").
- **Background rhythm.** `dot-1` on a regular pitch, painted in a solid ink on a solid field, and only in a region that is not carrying a paragraph. The yellow plate under the focal circle is that region. The header may hold a small patch of the same rhythm. The pattern does not run under sentences.
- **Switch.** The track is a 44×24 solid rectangle. The knob is a `dot-4` circle. On is a yellow knob on a black track. Off is a black knob on a white track with a 2px black rule. The knob moves; it does not fade.

### App parts

- **Bar.** Black fill, white type, 64px tall. Name, text tabs, an optional rhythm patch, a search field, and one yellow post button. The active tab is a yellow block with black type. Inactive tabs are black with white type. Tabs abut.
- **Stories.** Red fill, white type. Avatar, name, and the unseen stack described above.
- **Post.** One fill for the whole card: white, black, or yellow. Name row, one or two sentences, a `dot-1` count, a numeral, and a solid button. A yellow post may end in the fine-dot plate and the single focal circle.
- **Inbox.** Blue fill, white type, full height beside the feed from 960px up. Rows separate with a 1px yellow rule. The reply field sits at the bottom of the column.
- **Tab bar.** Phone only. Five cells, no gap. Feed is yellow when it is the current tab. Post is red. The others are black. White or black type follows the fill.
- **Field.** White fill, black type, 40px tall, radius 0, 16px text so a phone does not zoom. The label is visible. Focus is a 2px yellow ring (`shadow-focus`), including on the black bar. The caret is black.
- **Button.** A solid token fill, the matching text pair, radius 0, height 40px or 44px. Hover (fine pointer only) swaps fill and text to another solid pair: yellow becomes black with yellow type, blue becomes white with blue type. Press does the same swap. No lift, no scale, no shadow.
- **Disabled.** A white fill, black type, and a 2px black rule, still fully opaque. It is not a washed-out version of the enabled button.
- **Badge.** A yellow square, black numeral, at least 18px. It sits on the messages tab and on a notification row.

## Motion

Color on a control swaps in `duration-ui` (120ms), `ease-ui` (linear). Nothing moves, fades, scales, or blurs. Dots do not travel. The switch knob changes side without a fade.

Under `prefers-reduced-motion`, the color swap is instant.

## Accessibility

- White on black is about 19:1. Black on white is about 19:1. Black on yellow is about 15:1. White on blue is about 8:1. White on red is about 5.5:1. `muted` on white is about 11:1 and on yellow about 9:1. Those are the text pairs.
- Black type stays off blue and off red. White type stays off yellow.
- A 4px dot is a graphic mark. The word and the numeral travel with it. Unread is a stack plus the preview text, not the stack alone.
- The 1px yellow rule on blue is about 6.5:1. The 1px black seam between white and yellow matches the body ink.
- Focus is the yellow ring on every control. It does not rely on a change in opacity.
- Disabled stays opaque and is removed from the tab order in a product build. The reference shows it disabled.
- Hits that receive a tap are at least 44px. The dot and the avatar glyph are not the hit.

## Do

- Butt black, white, red, blue, and yellow in large regions. Let a header, a post, a button, and a tab be one of those fills.
- Keep polka dots at 4, 8, 12, and 16. Repeat the smallest size to count and to make a rhythm.
- Stack two or three opaque dots when a row needs more than one status. Cover; do not blend.
- Use one 64px circle in a view, on the fine-dot field, overlapping a flat square.
- Pair every dot cluster with a word or a numeral.
- Run the app to the screen edge. Put the phone chrome in a bottom bar of solid cells.

## Don't

- No page that is mostly off-white with small colored accents. No centered essay, no giant headline, no magazine column.
- No dot larger than 16px except the single focal circle. No field of large dots. No mixed random diameters.
- No opacity, no rgba fade, no tint, no hollow dot, no blur, no gradient, no soft shadow. `shadow-sm`, `shadow-md`, and `shadow-lg` are `none`. A disabled control does not go translucent.
- No photograph, no dotted wallpaper under a paragraph, and no pattern on every region at once. The rhythm has a region.
- No pill, no rounded card, no thick 4px frame around every block. The color change is the edge.
- No second focal circle. An avatar stays at 36px. A stack stays at three dots.
- No gray text on red or blue. No white text on yellow. No black text on blue or red.
- No uppercase poster, no italic, no second type family.
- No green success and no spinner. A like is a row of black or yellow dots plus a numeral.
