---
sidebar_position: 3
---

# 路由

此模板支持约定式路由和配置路由同时使用，但推荐使用约定式路由，没有其他原因，就图个方便😛。

<!-- ## 约定式路由 -->

:::info 

约定式路由也叫文件路由，就是不需要手写路由配置，文件系统即路由，通过目录和文件及其命名分析出路由配置。

:::

比如以下文件结构：

```bash
pages
├── index.tsx
├── users.tsx
├── customer
│   └── [customerId].tsx
└── detail
    └── [[id]].tsx
```

会生成以下路由(与 `react-router-dom` 路由配置相同)：

```javascript
[
  { path: '/', element: lazy(() => import('@/pages/index.tsx')) },
  { path: '/users', element: lazy(() => import('@/pages/users.tsx')) },
  { path: '/customer/:customerId', element: lazy(() => import('@/pages/customer/[customerId].tsx')) },
  { path: '/detail/:id?', element: lazy(() => import('@/pages/detail/[[id]].tsx')) }
]
```
## 路由配置项

页面配置信息在 `src/config/pageConfig.ts` 。

### title

`type: string;`

页面名称。

### layout

`type: 'default' | false;`

页面布局，默认使用 `default`，`false` 为不使用布局组件（将只显示页面内容）。可参考 [布局](/docs/guide/layout)。

### auth

`type: boolean;`

是否进行路由认证，默认为 `true` 。

### menuKey

`type: string;`

菜单选中项 value，也是菜单配置中的 `key` 属性，对应 `src/layouts/default/useMenu` 中的 `selectKey` 值。

> 正常情况下，一个菜单项对应一个路由，但大部分的情况是一个菜单项对应的是一系列路由，如：
>
> 菜单中有一个 产品 菜单项，产品相关的路由可能有：产品列表页，产品详情页，产品编辑页等，通常情况下菜单是指到产品列表页面，如果产品相关的其他页面通过新标签页打开，那么菜单是空状态的，此时，产品相关的其他页面如果也要将菜单状态定位到 产品 菜单项，那么，配置 menuKey 即可。
> 
> 注意：仅仅是把**当前路由挂到某个菜单状态中**，并不会改变菜单点击后的跳转路由。







<!-- :::tip 设计

在设计约定式路由时，除了要考虑路由嵌套，路由参数，路由认证等问题外，还需考虑一个问题：页面配置（如: 页面名称，是否要使用Layout等），以及该如何设计。有考虑过挂到页面组件的静态属性上，或者在路由页面文件内单独导出一个配置对象，再者像小程序一样单独提供一个配置文件。再三考虑下还是提供一个集中的配置文件用来配置路由所需的配置（当然，这个决策相比前三者来说功能点比较离散，但是能更直观的看出哪些页面做了特殊配置以及后期维护起来更方便）。

::: -->

