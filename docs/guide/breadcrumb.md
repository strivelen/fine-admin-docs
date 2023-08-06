---
sidebar_position: 4
---

# 面包屑

:::info 工作流

菜单页面将自动展示面包屑为菜单路径，如果是非菜单导航页面，当配置了 `menuKey`，那么面包屑将展示 *菜单路径 + 页面名称*，相反，则只展示 *页面名称*。支持手动修改面包屑。

:::

## 手动更改面包屑

示例：

```javascript
// 手动将面包屑更改为：预制菜 / 小鸡炖蘑菇 / 配菜
import { setBreadcrumb } from '@/store/reducer/layoutSlice';

const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(
    setBreadcrumb([
      '预制菜',
      { name: '小鸡炖蘑菇', path: '/pre-dish/1' },
      '配菜'
    ])
  );
}, [])
```

## 获取当前页面面包屑

```javascript
const breadcrumb = useAppSelector(selectBreadcrumb);
console.log(breadcrumb);
// 输出： [{name: "Dashboard", icon: "DashboardOutlined"}]
```

## 数据类型

### Breadcrumb

`type: Array<BreadcrumbItem>`

### BreadcrumbItem

`type: string | { name: string; path: RoutePath; icon: IconType }`

:::tip 注意

`path` 只能使用路由路径，`icon` 只能使用 [ant-design Icon](https://ant.design/components/icon-cn) 名称。本着项目中所有地方使用到的 `icon` 均需从 `src/components/Icons` 导出，菜单中使用的 `icon` 同理；所以，当 `IconType` 中没有可用的 `icon` 需自行进入 `src/components/Icons` 补充并导出。

:::