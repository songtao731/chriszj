# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

### 基础用法

:::demo
TTable/base
:::

### 后端接口

:::demo 在`useTable`对象中添加`request`
TTable/request
:::

### 配置查询条件 "input"| "select"| "date"| "cascader"| "inputrange"| "checkBox"| "radio"| "rate"| "switch"| "slider"| "space"| "custom";

:::demo 在`columns`对象中添加`filter`
TTable/search
:::

### 回显列表 枚举数据 自定义回显

:::demo 在`columns`对象中添加`formatter`(格式化数据) `dictData`(处理枚举),`formatType`(处理时间,金钱)
TTable/enum
:::

### 隐藏列和隐藏查询条件

:::demo 在`columns`对象中添加`hide`
TTable/hide
:::

### 自定义头部

:::demo 在`columns`对象中添加`header` 开启以后和饿了么原 header 插槽一样
TTable/header  
:::

### 自定义插槽 特殊情况的 column

:::demo 在`columns`对象中添加`slotName`
TTable/slotname  
:::

### 操作按钮

:::demo 在`columns`对象中添加`buttons` button type 的属性同 elemnetui
TTable/buttons  
:::

### 表格基础属性设置 分页 索引等开启关闭

:::demo
TTable/baseoptions  
:::

### 表格头部 中间 尾部 插槽

:::demo
TTable/tableslot  
:::

### 自定义搜索

:::demo 手动传入 resetFn 重置的时候情况自定义的查询条件
TTable/zdySearch  
:::

### 表格校验

:::demo 表格里有输入框 下拉框 日期 次级 switch
TTable/formtable  
:::

### 获取 table 属性页面

:::demo tableRef
TTable/tableprop  
:::
| 参数 | 说明 | 类型 | 默认值 |
| :---------------------- | :----------------------------------------------------------------------------- | :----------- | :-------- |
| useTable | 表格数据对象 | Function | |
| data | 展示数据 静态数据 | Array | [] |
| request | 传入后台接口 展示数据 | Array | [] |
|column|查询条件一行展示几个|Number|不传的话 表格宽度大于 1800px 展示 4 个否则 3 个
|gutter|查询条件之间间隔|Number|20
|labelWidth|查询条件 label 宽度|-
| --columns | 表格内数据 | Array | [] |
| -------label | 表格头部文字 | Object | - |
| -------prop | 表格内容展示值 | Array | - |
| -------filter | 搜索条件 | Object 或者 String 具体参考配置查询条件 | - |
| -------event | 搜索条件 | Object 具体参考配置查询条件(这里只支持 input,select,date,cascader,switch) | - |
| -------dictData | 用于回显模具数据 | Array |  
| -------formatType | 用于快速格式化数据 | String price,priceChinese,date,dateTime | | - |
| -------formatter | 用于格式化数据 | Function(row, column, cellValue, index) | Element 原始方法 |
| -------hide | 控制显示隐藏 | Boolean | false |
| -------header | 自定义头部 | Boolean | false |
| -------slotName | 自定义插槽 | String | - |
| -------buttons | 表格操作按钮 | Arrary|Function(row)=>Arrary | - |
| buttons | 表格操作按钮 | Arrary | - |
| buttonsPosition | 表格操作按钮位置 |left&right |right|
| -------content | 按钮文字 | String | - |
| -------link | 是否是文本按钮 | Boolean |false |
| -------type | 按钮类型 | string | 同elementui button |
| -------onClick | 点击事件 | Function(row) | - |
| -------hide | 是否显示隐藏 | (row)=>boolean&Boolean | - |
| -------其他 |其余属性参考elementui button
| path | 后端返回 list 的 路径 | String | data.rows |
| totalPath | 后端返回数据的 total 路径 | String | data.total |
| pageNum | 后端接口需要的分页参数 当前第几页 | String | pageNum |
| pageSize | 后端接口需要的分页参数 每页多少条 | String | pageSize |
| currentPage | 默认显示第几页 | Number | 1 |
| currentPageSize | 默认显示每页多少条 | Number | 10 |
| searchSize | 表格搜索条件按钮大小 | String 'medium,small,mini' | '' |
| labelPosition | 表格搜索按钮位置 | String 'left,top,right' | 'left' |
| layout | 分页展示种类 同 Pagination 的属性 layout | String | 'prev, pager, next, jumper, ->, total' |
| pageSizes | 分页切换的数目 同 Pagination 的属性 pageSizes | Arrary | [5,10,20,30] |
| index | 开启关闭索引 | Object%%Blooean | true |
| pagination | 开启关闭分页| Blooean | true |
| paginationPosition | 分页的位置| left,center,right | right |
|parseData|格式化后端数据|Function|-|
|searchData|自定义查询条件|Object|-|
|showSearch|展开筛选条件|Boolean|false|
|loadlist|是否自动加载数据|Boolean|true|

### 3、events 其他事件按照 el-table 直接使用（如 sort-change 排序事件）

### 4、Methods 方法 全局属性 参考 el-table 直接使用

| 事件名   | 说明                               | 参数 |
| :------- | :--------------------------------- | :--- |
| tableRef | 获取 table 参考获取 table 属性页面 | -    |
| refresh  | 刷新列表数据                       | -    |
| params   | 获取查询条件                       | -    |
