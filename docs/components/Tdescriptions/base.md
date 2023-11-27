# Tdescriptions
详情页的展示

### 基础用法
:::demo
Tdescriptions/base
:::

### 插槽
:::demo 传入slotName 可以用scope接收处理好的格式化数据
Tdescriptions/slot
:::

### 格式化数据
:::demo 传入parseData|formatter|formatType('price',  'priceChinese'  ,'date',  'dateTime')
Tdescriptions/format
:::

### 传入接口
:::demo 传入后端接口
Tdescriptions/request
:::


| 参数 | 说明 | 类型 | 默认值 |
| :---------------------- | :----------------------------------------------------------------------------- | :----------- | :-------- |
| useDescriptions | 数据对象 | Function |  |
| title | 标题 | string | '' |
|extra| 右上区域|string|''
|border|标题|string|''
|direction|排列方向|"vertical" ,"horizontal"|vertical
|size|尺寸大小|"large" ,"default" ,"small"|default
|column| 每行显示几列|number|3|
| request | 传入后台接口 展示数据 | Array,Object | - |
|parseData|格式化数据|Function | -|
|path|后端接口的返回路径|String|data|
| --dataList | 表单内数据 | Array | [] |
| -------label | 标签内容 | String | - |
| -------prop | 参数名(后端需要的字段) | String | - |
| -------type | 类型 |  "space" 占位符, "prew" 展示图片; | - |
| -------hide|是否隐藏|Boolean|false
| -------width|宽度|string,number|-
| -------minWidth|最小宽度|string,number|-
| -------value|回显值|string,number|''在prop不存在的情况下生效
| -------span|占几份|number|1
| -------align|内容对齐方式|"left" , "center" , "right"|left
| -------labelAlign|标签对齐方式|"left" , "center" , "right"|left
| -------className|内容class|string|''
| -------labelClassName|标签class|sring|''|
| -------formatType|快捷格式化数据| 'price' , 'priceChinese' , 'date'  , 'dateTime'|-|
| -------dictData|处理枚举|object|-|
| -------dictOptions|枚举的默认参数| label?: string; value?: string; children?: string |默认
| -------formatter|自己格式化数据展示|function(data)=>any|-|
| -------slotName|插槽明|string|-|


### 插槽

| 插槽名             | 说明                         | 参数 |
| :----------------- | :--------------------------- | :--- |
| title     | 左上角标题自定义| -    |
| extra          | 右上角自定义             | -    |
|label|Descriptions Item插槽
  

### 获取Ref.
 tForm.value当前使用页面自己定义的,

| ref             | 说明                         |
| :----------------- | :--------------------------- | 
| desRef   | 看request demo打印

