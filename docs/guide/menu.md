---
sidebar_position: 2
---

# 菜单

:::info 思考

- 简单 没有抽象要比错误的抽象来的更好。
- 直观 在添加菜单时不会因为和路由混合配置感到不知所措，从而导致较高的心智负担。

:::

:::tip 注意

支持多层级菜单，暂不支持服务端菜单渲染，需自行扩展。可在 `src/layouts/default/useMenu.tsx` 文件中组织服务端菜单逻辑。
或可根据业务自行调整书写位置。
:::

## 使用方式

找到 `src/config/menuConfig.ts` 文件并打开即可配置本地菜单。

示例：

```typescript
interface MenuItem {
  label: string;
  key: string;
  icon?: IconType;
  children?: MenuItem[];
}

const menus: Array<MenuItem> = [
  {
    label: 'Dashboard',
    key: '/',
    icon: 'DashboardOutlined'
  },
  {
    label: '表单页',
    key: 'form',
    icon: 'FormOutlined',
    children: [
      {
        label: '基础表单',
        key: '/form/basic-form'
      },
      {
        label: '分布表单',
        key: '/form/step-form'
      }
    ]
  }
]
```

## 配置项

### * label

`type: string;`

必传，菜单项名称。

### * key

`type: string;`

必传，菜单项唯一 `key`, 当菜单项存在子菜单项时，可指定随意值；相反，则必须是路由 `path`。

### icon

`type: IconType;`

[ant-design Icon](https://ant.design/components/icon-cn) 名称。本着项目中所有地方使用到的 `icon` 均需从 `src/components/Icons` 导出，菜单中使用的 `icon` 同理；所以，当 `IconType` 中没有可用的 `icon` 需自行进入 `src/components/Icons` 补充并导出。

### children

`type: Array<MenuItem>;`

配置子菜单。








