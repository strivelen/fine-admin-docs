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


