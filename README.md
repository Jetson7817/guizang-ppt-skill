# guizang-ppt-skill

AI-agent Skill for generating polished HTML slide decks.

Forked from [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill).

## 两种视觉风格

- **Style A · 电子杂志 × 电子墨水**: 衬线标题 + WebGL 流体背景 + 暖色调
- **Style B · 瑞士国际主义**: 无衬线 + 网格点阵 + IKB/柠檬黄/柠檬绿/安全橙高亮

## 安装方式

### 方式一：通过 Kimi 技能管理页面添加 GitHub 仓库

在 Kimi 桌面端/网页端的技能管理页面，添加仓库地址：
```
https://github.com/Jetson7817/guizang-ppt-skill
```

### 方式二：通过 .skill 文件安装

下载 `guizang-ppt-skill.skill` 文件，在 Kimi 技能管理页面上传安装。

## 触发方式

安装后，通过 `/guizang-ppt-skill` 或在对话中要求生成网页 PPT 即可触发。

## 文件结构

```
guizang-ppt-skill/
├── SKILL.md                          # 主技能文件
├── references/
│   ├── themes.md                     # Style A 主题色规范
│   ├── themes-swiss.md               # Style B 主题色规范
│   ├── layouts.md                    # Style A 布局模板
│   ├── layouts-swiss.md              # Style B 布局模板
│   ├── components.md                 # 共享组件
│   ├── checklist.md                  # 输出前检查清单
│   ├── image-prompts.md              # 配图生成提示词
│   ├── screenshot-framing.md         # 封面/截图构图规范
│   ├── swiss-layout-lock.md          # Swiss 风格防崩坏规则
│   └── swiss-map-component.md        # Swiss 地图组件
├── assets/
│   ├── template.html                 # Style A 模板
│   ├── template-swiss.html           # Style B 模板
│   ├── motion.min.js                 # 动画库
│   └── screenshot-backgrounds/       # 背景图片素材 (见 .skill 文件)
└── scripts/
    └── validate-swiss-deck.mjs       # Swiss 风格校验脚本
```

## License

AGPL-3.0 (same as original)
