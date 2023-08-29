---
sidebar_position: 1
---

# 创建页面

在 `src/pages` 目录下创建一个以 `.tsx` 结尾的文件，将自动生成一个独立页面：

- `src/pages/index.tsx` → `localhost:3000/`
- `src/pages/foo.tsx` → `localhost:3000/foo`
- `src/pages/foo/index.tsx` → `localhost:3000/foo`
- `src/pages/foo/bar.tsx` → `localhost:3000/foo/bar`
- `src/pages/detail/[id].tsx` → `/detail/:id` → `localhost:3000/detail/100`
- `src/pages/detail/[[id]].tsx` → `/detail/:id?` → `localhost:3000/detail` or `localhost:3000/detail/99`

:::danger 注意事项

`components` 文件夹下的文件（如：`/src/pages/foo/components/bar.tsx`）不会生成路由。不以 `.tsx` 结尾的文件同样不会生成路由，小伙伴们可自行扩展。

:::

## 示例：创建一个页面

在 `src/pages` 目录下创建一个文件： `src/pages/my-test-page.tsx`

```jsx title="src/pages/my-test-page.tsx"
export default function MyTestPage() {
  return <div>My test page.</div>
}
```

现在可以访问新页面： [http://localhost:3000/my-test-page](http://localhost:3000/my-test-page).

## 页面元数据配置

进入 `src/config/pageConfig.ts` 文件配置页面所需元数据。当页面不做元数据配置时默认使用 `defaultPageConfig` 配置。

> 常见的配置化路由页面元数据配置方式通常都是与路由绑定在一起的，或者约定式路由中常见的元数据配置方式是跟随页面文件指定一个单独的配置文件（如小程序的page.json），之所以在一个文件中集中式配置路由的元数据是为了使元数据更加直观和后期维护更便捷。
