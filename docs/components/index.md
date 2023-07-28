### 快速上手

::: tip 提示

s-ui-plus 基于 vue3 + ts + Element-plus 再次封装的基础组件

:::

### 安装

```bash:no-line-numbers
npm add chriszj
&
npm  install chriszj
```


### 使用

```js
// main.ts
import TuiPlus from '@wocwin/t-ui-plus'
import '@wocwin/t-ui-plus/lib/style.css'
const app = createApp(App)
app.use(TuiPlus)
app.mount('#app')
```




### 若需要t-ui-plus集成的Element-plus支持 Volar 类型提示(1.1.12版本支持)
>#### 注意：不安装及注册`element-plus`直接使用那么当前的`element-plus`版本是`@2.2.18`
```js
// 需要在使用的项目中安装element-plus(不需要注册，也能在项目中全局使用)
npm install element-plus

```
### docs文档结构目录
```
├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件
├─ components             # .md文件
├─ public                 # 静态资源文件
├─ .vitepress
│  ├─ config              # 插件配置
|  │  ├─ global.ts        # 全局变量定义
|  │  └─ plugins.ts       # 自定义.md文件渲染
│  ├─ theme               # 主题配置
│  ├─ utils               # 文档展开隐藏代码高亮
│  ├─ vitepress
|  │  ├─ vp-demo          # VPDemo组件源码
|  │  ├─ style            # VPDemo组件样式
|  │  └─ index.ts         # 暴露VPDemo组件
│  └─ config.ts           # vitepress配置文件
├─ index.md               # 文档home页面
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 全局配置文件（支持tsx）
```

