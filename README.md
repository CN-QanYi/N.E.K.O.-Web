<!--
N.E.K.O.-Web 项目主说明文档
此文件包含项目的完整使用说明、技术栈介绍和部署指南
-->

## N.E.K.O.-Web 网页文档站

基于 VuePress 2 的文档与展示站点。


### 功能概述
- **文档编写与发布**：采用 VuePress 2（Vite 打包，Vue 3 渲染）。
- **快速开发预览**：本地热更新预览文档改动。
- **静态化部署**：产出纯静态文件，支持任意静态托管（Vercel、Netlify、GitHub Pages、Nginx 等）。


### 技术栈
- VuePress 2 (vuepress@2.0.0-rc.20)
- Vue 3
- Vite Bundler


### 环境要求
- Node.js ≥ 18（推荐 LTS）
- 包管理器：任选其一
  - pnpm（推荐）
  - npm / yarn


### 安装
使用 pnpm（推荐）
```bash
pnpm install
```

或使用 npm
```bash
npm install
```

或使用 yarn
```bash
yarn install
```


### 本地开发
- 标准启动
```bash
pnpm docs:dev
```

- 若出现缓存相关问题，可使用“清缓存后启动”
```bash
pnpm docs:clean-dev
```

启动后访问提示的本地地址（通常为 `http://localhost:8080/`）。


### 构建与部署
1) 生成静态文件
```bash
pnpm docs:build
```
构建产物会输出到 `docs/.vuepress/dist`。

2) 部署到任意静态托管
- 将 `docs/.vuepress/dist` 目录内容上传至静态服务器（如 Nginx）根目录。
- 或者将该目录推送到托管平台（如 Vercel/Netlify）作为“静态构建输出”。

3) GitHub Pages 简要流程（示例）
- 方式 A：将 `docs/.vuepress/dist` 内容推送到仓库的 `gh-pages` 分支，并在仓库设置中启用 Pages 指向该分支。
- 方式 B：使用 CI（GitHub Actions）在 `push` 后自动构建并部署到 `gh-pages`。


### 常用脚本
来自 `package.json`：
```json
{
  "scripts": {
    "docs:build": "vuepress build docs",
    "docs:clean-dev": "vuepress dev docs --clean-cache",
    "docs:dev": "vuepress dev docs",
    "docs:update-package": "pnpm dlx vp-update"
  }
}
```
- `docs:dev`：本地开发预览。
- `docs:clean-dev`：清理缓存后开发预览，修复构建/热更新异常时使用。
- `docs:build`：生成静态站点到 `docs/.vuepress/dist`。
- `docs:update-package`：更新 VuePress 相关包版本的小工具（按需使用）。


### 目录结构说明
参考当前仓库快照：
```
N.E.K.O.-Web/
├─ docs/                     # 文档源代码（Markdown、静态资源）
│  ├─ .vuepress/             # VuePress 配置与主题定制
│  │  └─ config.js           # 站点与主题配置入口
│  └─ assets/                # 文档内静态资源（图片、视频等）
│     ├─ demo.mp4
│     ├─ framework.drawio.svg
│     ├─ icon.ico
│     └─ neko_logo.jpg
├─ node_modules/             # 依赖（安装后生成）
├─ package.json              # 脚本与依赖声明
└─ pnpm-lock.yaml            # pnpm 锁定文件
```

- `docs/`：编写 Markdown 文档的根目录。你可以在此新增页面、目录，或调整侧边栏结构（通常在 `docs/.vuepress/config.js` 中配置）。
- `docs/.vuepress/`：VuePress 的站点级配置、主题/插件设置、样式覆盖等均在此处进行。
- 构建输出路径为 `docs/.vuepress/dist`（执行 `pnpm docs:build` 后生成）。


### 编写与组织文档的建议
- 将主题模块按目录划分（如 `guide/`、`api/`、`examples/`）。
- 图片与大文件放置于 `docs/assets/` 并用相对路径引用。
- 在 `docs/.vuepress/config.js` 中维护侧边栏、导航、站点元信息。
- 需要自定义样式时，可在 `.vuepress/styles/` 放置样式文件进行覆盖（如 `index.scss`）。


### 常见问题（FAQ）
- Q: 本地开发报错或内容不更新？
  - A: 尝试 `pnpm docs:clean-dev` 清理缓存后再启动。
- Q: 构建后页面空白或 404？
  - A: 检查 `base` 配置是否与部署路径一致（若部署在子路径下需设置 `base`）。
- Q: 静态托管后资源路径错误？
  - A: 同样与 `base` 配置相关；确保构建产物与实际访问路径一致。


### 版本与许可
- 版本：详见 `package.json` 中的 `version` 字段。
- 许可协议：MIT（参见仓库 LICENSE 或遵循默认 MIT）。


### 维护与贡献
- 提交 PR 前请先本地构建验证通过。
- 建议使用 `pnpm`，并保持 Node 版本与团队一致（≥18）。


### 快速命令速查
```bash
# 安装依赖
pnpm install

# 开发预览
pnpm docs:dev

# 清缓存后开发预览
pnpm docs:clean-dev

# 构建静态站点
pnpm docs:build
```


