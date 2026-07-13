---
description: Style B (Swiss) theme tokens — IKB, lemon yellow, lime, safety orange, typography ladder, spacing grid.
---

# Theme Tokens · Style B

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `Paper` | `#F6F6F6` | Background, NEVER pure white |
| `Ink` | `#111111` | Primary text |
| `Grid` | `#E5E5E5` | Structural lines, hairlines |
| **IKB** | `#002FA7` | Default accent. Dots, highlights, links |
| **Lemon Yellow** | `#FDE047` | Alternate accent. Black text on yellow for impact |
| **Lime** | `#65A30D` | Alternate accent. Nature, growth, positive |
| **Safety Orange** | `#FF5F1F` | Alternate accent. Warnings, CTAs |

### Accent Selection (ONE per deck)

| Topic Domain | Recommended Accent | Rationale |
|-------------|-------------------|-----------|
| Tech / AI / Data | IKB | International Klein Blue signals precision |
| Finance / Growth | Lime | Positive, growth-associated |
| Warning / Security | Safety Orange | Highest attention grab |
| Bold statement / Contrast | Lemon Yellow | Maximum visual punch |

## Typography

| Role | Font | Fallback |
|------|------|----------|
| Display | Inter | Helvetica Neue, Arial, sans-serif |
| Chinese | Noto Sans SC | PingFang SC, sans-serif |
| Mono (data/labels) | JetBrains Mono | monospace |

### Scale Ladder

| Level | Size | Weight | Transform |
|-------|------|--------|-----------|
| H1 | 48px–72px | 700–800 | uppercase (English) |
| H2 | 32px–48px | 600–700 | uppercase (English) |
| H3 | 20px–24px | 500–600 | none |
| Body | 14px–16px | 400 | none |
| Caption/Label | 10px–12px | 400–500 | uppercase (English) |

### Weight Contrast Rule

Adjacent heading levels MUST have ≥200 weight difference. Examples: H1@800 → H2@600 (OK). H1@700 → H2@600 (NOT OK).

## Spacing Grid

| Token | Value |
|-------|-------|
| Base unit | 8px |
| Page padding | 32px (desktop), 20px (mobile) |
| Hairline | 1px solid #E5E5E5 |
| Border radius | 0px (Swiss: no rounded corners) |
| Max content width | 1200px |

## Background Images

Available in `assets/screenshot-backgrounds/style-b/`:

| File | Mood | Accent Pairing |
|------|------|---------------|
| `ikb-dot-gradient.webp` | Blue dot field | IKB |
| `lemon-grid.webp` | Yellow structural grid | Lemon Yellow |
| `lemon-green-dot-shadow.webp` | Green dot gradient | Lime |
| `safety-orange-halftone.webp` | Orange halftone pattern | Safety Orange |

### Selection Rule

Background image MUST match the chosen accent color. Never pair `ikb-dot-gradient` with Safety Orange accent.
