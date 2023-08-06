---
sidebar_position: 5
---

# 布局

布局使用 [`Layout`](https://ant.design/components/layout-cn) 搭建。无需任何配置即可直接使用。

## 调整默认布局组件

如需对布局进行调整，请打开 `src/layouts/default/index.tsx` 文件自行分析调整。

## 同时使用多种布局方案

### 示例：

1. 进入 `src/layouts` 文件夹下并创建你的布局组件文件（`customLayout.tsx` 或 `customLayout/index.tsx`）。

2. 编写自定义布局组件内容：

```tsx title="/src/layouts/customLayout.tsx"
import Header from './default/components/Header';
import Content from './default/components/Content';

export default function CustomLayout() {
  return <>
    <Header>你的头部内容</Header>
    <Content />
    <Footer />
  </>
}
```
3. 进入 `src/config/pageConfig.ts` 文件将 `defaultPageConfig` 中的 `layout` 改为你的 `layout` 文件名: "customLayout"。如果是只给指定路由启用你的自定义布局，请按照以下操作：

  1) 进入 `src/config/pageConfig.ts` 文件。

  2) 在 `pageConfig` 对象中添加自定义布局路由 `path` 并配置 `layout` 属性。如：
  ```javascript
  {
    "/details/:id?": { layout: "customLayout" }
  }
  ```

> `layout` 值来自 `/src/layouts/customLayout.tsx` 中的 `customLayout`。本质上就是 `layouts` 文件夹直接子级文件（或文件夹）名称，符合 `@/layouts/*.tsx` 或 `@/layouts/*/index.tsx` 模式。

4. 启动开发服务器并从浏览器打开查看是否将 default 布局更换为你的自定义布局组件。

