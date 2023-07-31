---
sidebar_position: 2
title: 快速上手
---

现在我们来使用 Fine Admin 创建一个自己的中后台管理系统。

## 🚥 使用前你需要做什么？

- [Node.js](https://nodejs.org/en/download) 版本 16.18 或更高版本：
  - 推荐使用 [nvm](https://github.com/nvm-sh/nvm) (使用 Go 编写的版本管理版本工具，windows 用户需使用 [nvm-windows](https://github.com/coreybutler/nvm-windows) )管理 Node.js 版本, 或者 _[nvs](https://github.com/jasongin/nvs)_（使用 Node.js 编写的版本管理工具）、_[fnm](https://github.com/Schniz/fnm)_（使用 Rust 编写的版本管理工具）, 三者选其一即可。

## 创建项目

```bash
# 创建项目目录
mkdir my-admin
cd my-admin

# 拉取 Fine Admin 模板
npx degit github:strivelen/fine-admin .

# 安装依赖
pnpm i

# 启动开发服务器
pnpm run dev
```

打开浏览器，在新标签页输入 [http://localhost:3000](http://localhost:3000) 进行访问。

## 项目结构

```bash
my-admin
├── .vscode
│   └── settings.json
├── public
│   ├── fine-admin.svg
│   └── logo32.png
├── src
│   ├── assets
│   ├── components
│   │   ├── FormItems
│   │   ├── DarkModeSwitch.tsx
│   │   ├── FiexdHeaderSwitch.tsx
│   │   ├── FiexdWidthSwitch.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Icons.tsx
│   │   ├── Loading.tsx
│   │   └── ThemeColors.tsx
│   ├── config
│   │   ├── index.ts
│   │   ├── menuConfig.ts
│   │   └── pageConfig.ts
│   ├── hooks
│   │   ├── useAppHooks.ts
│   │   ├── useGlobalTips.ts
│   │   └── useUserInfo.ts
│   ├── layouts
│   │   ├── default
│   │   └── xxx
│   ├── pages
│   ├── router
│   ├── services
│   ├── store
│   ├── utils
│   ├── App.tsx
│   ├── App.css
│   ├── auto-imports.d.ts
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintignore
├── .eslintrc-auto-import.json
├── .eslintrc.cjs
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🛠 生产构建

```bash
# 要构建用于生产，请运行
pnpm build

# 本地构建预览
pnpm preview
```
