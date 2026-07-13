---
description: Style B (Swiss) layout templates — hero, chapter, data-grid, comparison, methodology, closing. Strict grid system.
---

# Layout Templates · Style B

## Swiss Grid System

All layouts are built on an **8px grid**. Every element aligns to this grid.

- Gutter: 24px (desktop), 16px (mobile)
- Margin: 32px (desktop), 20px (mobile)
- No border-radius anywhere (0px)
- Hairlines: 1px solid #E5E5E5

## 1. Hero — Opening Page

- Structure: asymmetric 2-column (60/40 or 40/60 split)
- Left: H1 title (48–72px, 700–800 weight), uppercase for English
- Right: subtitle (Body) + metadata (Mono, label size)
- Background: Swiss background image (full-bleed) OR pure Paper with grid lines
- Accent color appears ONLY in: dot pattern, underline, or small geometric shape

## 2. Chapter Cover — Section Divider

- Full-width, 60% viewport height
- Large chapter number: H1, 120–200px, weight 800, accent color at 0.1 opacity (watermark)
- Chapter title: H2, `Ink`, positioned bottom-left
- Thin hairline separating from content above and below

## 3. Data Grid — Metrics

- Strict grid: 3 or 4 columns on desktop, 2 on tablet, 1 on mobile
- Each cell:
  - Top: hairline border
  - Number: H1 scale (48–64px), weight 800, accent color
  - Label: Caption (10–12px), Mono, uppercase, `Ink` at 0.5
  - Unit: inline with number, H3 scale, weight 400
- No background color on cells (transparent on Paper)

## 4. Comparison — Before/After or A/B

- 2-column split (50/50)
- Center: vertical hairline divider
- Each side: title (H3) + description (Body)
- Optional: checkmark/cross icons (SVG, accent color)

## 5. Methodology — Steps/Process

- Horizontal flow: numbered steps connected by hairline
- Each step: number in accent color (H2, 800 weight) + title (H3) + description (Body)
- On mobile: vertical stack with left-aligned numbers

## 6. Closing — Final Page

- Minimal: centered or left-aligned
- "Thank You" or contact: H2
- Below: email/URL in Mono, accent color for links
- Optional: thin hairline above and below contact block
- No background image (clean Paper finish)

## Layout Lock Rules

See `references/swiss-layout-lock.md` for enforcement rules that prevent common Swiss style violations.
