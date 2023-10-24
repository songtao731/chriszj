# Tables 表格

用于展示多一个列表页多个Table组件.
里面的传参方式和Table组件结构略有不同,Table里的传值是一致的
### 基础用法

:::demo
TTables/base
:::


### 获取table属性页面
:::demo  因为有多个表格所以获取起来要通过索引来获取
TTables/tablesProp  
:::


| 参数 | 说明 | 类型 | 默认值 |
| :---------------------- | :----------------------------------------------------------------------------- | :----------- | :-------- |
| useTables | 表格数据对象 | Function |  |
| tabs | 表格上方的选项卡  | Object | {} |
| ---activeValue | 默认选中的值  | String&&Number | 必填 |
| ---isRoute | 开启浏览器缓存route,用于列表页点击进详情页 再返回 |  boolean |  false|
| ---tabsList | 选项卡的值  | Object |[{label:'选项一',value:'1'}] 必填 |
| table | 给表格传值  | Function(activeName) | 看demo,里面传参同Table组件一致 |






| request | 传入后台接口 展示数据 | Array | [] |


### 3、events 其他事件按照 el-table 直接使用（如 sort-change 排序事件）
| 事件名             | 说明                         | 参数 |
| :----------------- | :--------------------------- | :--- |
| tabClick     |  点击tab的回调 | -    |


### 4、Methods 方法 全局属性 参考 el-table 直接使用

| 事件名             | 说明                         | 参数 |
| :----------------- | :--------------------------- | :--- |
| tableRef     |  获取table  参考获取table属性页面 | -    |
| refresh          | 刷新列表数据                | -    |
| params | 获取查询条件             | -    |

