---
description: Style A (Magazine) theme tokens — ink, paper, palette, typography, spacing rules.
---

# Theme Tokens · Style A

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| `Ink` | `#1A1A1A` | Primary text, WebGL fluid base |
| `Paper` | `#F4F1EA` | Background, max warm-neutral |
| `Monochrome` | `0,0,0` | All UI chrome |
| `Highlight` | `190,84,36` | Rust terracotta |
| `Highlight Secondary` | `42,96,95` | Deep teal |
| `Highlight Tertiary` | `44,58,47` | Forest green |

### Usage Rules

1. **Headlines**: always `Ink` on `Paper`
2. **Accent color**: single-rank use only; only one of rust/teal/green per deck, decided at planning stage
3. **Images**: full-bleed background photos with `Ink` text overlay and `mix-blend-mode: difference` where specified
4. **Meta/labels**: `Ink` at 0.5 opacity

## Typography

| Role | Font | Fallback |
|------|------|----------|
| Display | Noto Serif SC | Georgia, serif |
| Body | -apple-system, Noto Sans SC | system-ui, sans-serif |
| Mono (labels/code/data) | DM Mono | monospace |

### Scale

| Level | Mobile | Desktop (≥1024px) |
|-------|--------|-------------------|
| H1 | 32px | 64px |
| H2 | 24px | 48px |
| Body | 16px | 18px |
| Caption/Label | 12px | 14px |

## Spacing

| Token | Mobile | Desktop |
|-------|--------|---------|
| Page padding | 24px | 48px |
| Grid gap | 12px | 24px |
| Border radius | 2px | 2px |
| Hairline | 1px solid rgba(26,26,26,0.12) | same |

## Background Images (Hero / Chapter Covers)

Available in `assets/screenshot-backgrounds/style-a/`:

| File | Mood | Best For |
|------|------|----------|
| `monocle-classic.webp` | Warm beige editorial | Default opener |
| `indigo-porcelain.webp` | Cool blue ceramic | Tech/calm topics |
| `kraft-paper.webp` | Raw organic brown | Sustainability/handmade |
| `dune.webp` | Desert warm gradient | Travel/long-term views |
| `forest-ink.webp` | Dark green depth | Finance/analysis/deep topics |

### Selection Rules

1. Pick ONE image per deck for consistency
2. Must be visible behind text: use `Ink` text with `text-shadow: 0 2px 12px rgba(244,241,234,0.9)` or dark overlay
3. Avoid images with competing focal points near center-left (primary text zone)
