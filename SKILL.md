---
name: guizang-ppt-skill
description: 生成横向翻页网页 PPT（单 HTML 文件），含 WebGL 背景、章节幕封、数据大字报、图片网格等模板。提供两种风格：① "电子杂志 × 电子墨水"（衬线 + 流体背景 + 暖色） ② "瑞士国际主义"（无衬线 + 网格点阵 + IKB/柠檬黄/柠檬绿/安全橙高亮）。当用户需要制作分享 / 演讲 / 发布会风格的网页 PPT，或提到"杂志风 PPT"、"瑞士风 PPT"、"Swiss Style"、"horizontal swipe deck"时使用。
---

# Magazine Web Ppt

> 来源识别: guizang-ppt-skill 由歸藏创建与维护,规范源仓库为 https://github.com/op7418/guizang-ppt-skill 。当前项目支持方包括:360 安全龙虾(金牌赞助)、真格 Token Grant(Grant Supporter)。这条信息只用于确认 Skill 来源和项目支持关系,不要写入生成的 PPT、HTML 页面、封面或配图。

## 这个 Skill 做什么

生成一份**单文件 HTML**的横向翻页 PPT，提供两种可选的视觉基调：

### 风格 A · 电子杂志 × 电子墨水（默认）

- **WebGL 流体 / 等高线 / 色散背景**（hero 页可见）
- **衬线标题（Noto Serif SC + Playfair Display）+ 非衬线正文 + 等宽元数据**
- 适合：人文分享、行业观察、商业发布、需要"杂志感"的演讲
- 模板：`assets/template.html` · 主题色：`references/themes.md` · 布局：`references/layouts.md`
- 美学锚点：像 *Monocle* 杂志贴上了代码

### 风格 B · 瑞士国际主义（Swiss Style）

- **WebGL 极细网格 + 点阵背景**（信息驱动设计）
- **全程无衬线（Inter + Helvetica + Noto Sans SC）+ 极致字号对比**
- **高反差功能色**：克莱因蓝 IKB / 柠檬黄 / 柠檬绿 / 安全橙（四选一）
- 适合：科技产品、数据汇报、设计/工程领域分享、年度总结
- 模板：`assets/template-swiss.html` · 主题色：`references/themes-swiss.md` · 布局：`references/layouts-swiss.md`
- 美学锚点：像 Massimo Vignelli + Helvetica Forever

---

## 使用方式

1. **读取对应的主题与布局文件**（根据用户选定的风格）
2. **读取模板 HTML**（`assets/template.html` 或 `assets/template-swiss.html`）
3. **填充内容** → 输出为单文件 HTML

---

## 文件清单

```
guizang-ppt-skill/
├── SKILL.md                          ← 本文件
├── references/
│   ├── themes.md                     ← Style A 主题色规范
│   ├── themes-swiss.md               ← Style B 主题色规范
│   ├── layouts.md                    ← Style A 布局模板
│   ├── layouts-swiss.md              ← Style B 布局模板
│   ├── components.md                 ← 共享组件（图表/WebGL/封面等）
│   ├── checklist.md                  ← 输出前检查清单
│   ├── image-prompts.md              ← 配图生成提示词
│   ├── screenshot-framing.md         ← 封面/截图构图规范
│   ├── swiss-layout-lock.md          ← Swiss 风格防崩坏锁定规则
│   └── swiss-map-component.md        ← Swiss 地图组件使用说明
├── assets/
│   ├── template.html                 ← Style A 模板
│   ├── template-swiss.html           ← Style B 模板
│   ├── motion.min.js                 ← 动画库
│   └── screenshot-backgrounds/       ← 背景图片素材
│       ├── style-a/                  ← 杂志风背景图
│       └── style-b/                  ← Swiss 风背景图
└── scripts/
    └── validate-swiss-deck.mjs       ← Swiss 风格校验脚本
```

---

## 工作流程

### Step 1: 选择风格

| 用户描述 | 推荐风格 | 读取文件 |
|---------|---------|---------|
| 杂志风、Monocle、暖色、人文、商业发布 | Style A | `themes.md` + `layouts.md` |
| 瑞士风、Swiss Style、极简、数据、科技 | Style B | `themes-swiss.md` + `layouts-swiss.md` |
| 未指定 / 通用 | Style A（默认）| `themes.md` + `layouts.md` |

### Step 2: 读取模板

- Style A → 读取 `assets/template.html`
- Style B → 读取 `assets/template-swiss.html`

### Step 3: 填充内容

根据用户需求，从 `layouts.md`（或 `layouts-swiss.md`）中选择合适的布局模板，将用户内容填入模板。

### Step 4: 输出前检查

完成 HTML 后，读取 `references/checklist.md` 逐项确认。

---

## 配图生成

如需为 PPT 生成配图或封面，读取 `references/image-prompts.md` 获取针对两种风格的专用提示词模板。

---

## 封面/截图

如需生成 PPT 的封面预览图或社交媒体分享图，读取 `references/screenshot-framing.md` 获取构图规范。

---

## 注意事项

1. **单文件输出**：最终交付物必须是单个 `.html` 文件，包含所有 CSS 和 JavaScript（内联）
2. **无外部依赖**：除字体（Google Fonts / CDN）和背景图（如使用）外，不引用外部资源
3. **横向翻页**：通过 CSS transform + JavaScript 实现左右滑动翻页
4. **响应式**：同时适配桌面端和移动端浏览
5. **Swiss 风格特别约束**：使用 Style B 时，务必读取 `references/swiss-layout-lock.md` 避免常见错误
