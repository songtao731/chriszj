### 快速上手

::: tip 提示

chris-ui-plus 基于 vue3 + ts + Element-plus 再次封装的基础组件

:::

### 安装

```bash:no-line-numbers
pnpm  install chriszj

使用pnpm安装是最为稳定的




### 使用
    
在tsconfig里配置 添加  "types": ["chriszj/components"]

  "compilerOptions": {

    "types": ["chriszj/components"],
    ...
}
```js
// main.ts   
import Chriszj from "chriszj";
import "chriszj/style.css";
const app = createApp(App)
app.use(Chriszj)
app.mount('#app')
```





