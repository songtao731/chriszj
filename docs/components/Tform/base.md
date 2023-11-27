# Tform表单
表单数据的提交 回显.打开f12可以查看console的内容

### 基础用法
:::demo
Tform/base
:::

### 表单校验
:::demo rules参数 调用chris.rulesFn().required()|pattern()三个参数1:是否必填|正则,2:错误提示,3:触发方式'.validator()自定义校验
Tform/rules
:::

### 操作表单 控制显示隐藏
:::demo 用computed传入useForm 通过hide或者deepHide来控制
Tform/isHide
:::

### select组件 返回整个对象
:::demo 设置values:true,valueKey设置key值 例如'id',回显要传入同样的对象
Tform/selectObj
:::

### 表单回显
:::demo 设置request 传入后端接口或者对象{}
Tform/data
:::

### 自定义组件 插槽
传入slotName
type设置成custom
:::demo 添加slotName来设置组件插槽
Tform/zdy
:::

### 动态校验
传入keys 后端接收的数组的key值
type设置成domains
:::demo 添加slotName来设置组件插槽
Tform/domains
:::
### 动态校验回显
传入keys 后端接收的数组的key值  edit设置成true
type设置成domains
:::demo 添加slotName来设置组件插槽
Tform/domainsEdit
:::

### 数据回显 用于详情页
:::demo type传入span 具体看demo
Tform/formvalue
:::







| 参数 | 说明 | 类型 | 默认值 |
| :---------------------- | :----------------------------------------------------------------------------- | :----------- | :-------- |
| useForm | 表单数据对象 | Function |  |
| title | 表单的标题 | string | '' |
|column| 每行显示几列|number|2|
|span|当前占几格|number|1|
|gutter|栅格布局,每一列的间隙|Number|20|
| request | 传入后台接口 展示数据 | Array,Object | - |
|parseData|格式化数据|Function | -|
|rules|表单校验|Function|-|
|value|设置默认值|-|-
|hide|隐藏(不清空数据)|Boolean|false|
|deepHide|隐藏(清空数据)|Boolean|false|
| --dataList | 表单内数据 | Array | [] |
| -------label | 标签内容 | String | - |
| -------prop | 参数名(后端需要的字段) | String | - |
| -------formatType|快捷格式化数据| 'price' , 'priceChinese' , 'date'  , 'dateTime'|-|
| -------dictData|处理枚举|object|-|
| -------dictOptions|枚举的默认参数| label?: string; value?: string; children?: string |默认
| -------formatter|自己格式化数据展示|function(data)=>any|-|
| -------type | 类型 |  "input",'inputNumber',"select", "space", "custom", "date", "cascader", "checkBox", "radio", "rate", "upload", "switch", "slider","span","prew", "range"; | - |
| -------"input","inputNumber", "select", "space", "custom", "date", "cascader", "checkBox", "radio", "rate" , "upload", "switch", "slider", "range| 各个组件下的属性 | Object |  参考ELmemnetUi各个组件的属性方法
| -------columns|当type=range下使用|参考demo|
|labelPosition|标签的位置|"left" , "right" ,"top" | right |
|size|表单的尺寸大小|"large" , "default" , "small" | default |
|closePlaceholder|关闭所有placeholder提示|Boolean|false|
|labelWidth|所有标签的宽度|Sting|110px|
|statusIcon|是否在输入框中显示校验结果反馈图标|Boolean|false|
|hideRequiredAsterisk|是否隐藏必填字段标签旁边的红色星号。|Boolean|false
|labelSuffix|表单域标签的后缀|String|""|
|requireAsteriskPosition|星号的位置|left.right|left|
|validateOnRuleChange|rules|Boolean|true|
|disabled|是否集体禁用|Boolean|false|
|scrollToError|当校验失败时，滚动到第一个错误表单项|Boolean|false|
|scrollIntoViewOptions|参考elmementui文档|
|buttons|操作提交按钮|Arrary|
|buttonsAlign|操作提交按钮的位置|"left" ,"center" ,"right"|'center'
|ref|Function|获取每一列的ref|const startRef = ref();const getStartRef = (el) =>startRef.value = el|


### 插槽

| 插槽名             | 说明                         | 参数 |
| :----------------- | :--------------------------- | :--- |
| title     | 左上角标题自定义| -    |
| buttons          | 右上角按钮集合                | -    |
| footer | 最下方自定义     

### 获取Ref.
 tForm.value当前使用页面自己定义的,

| ref             | 说明                         |
| :----------------- | :--------------------------- | 
| form.formRef     | tForm.value.form.formRef.resetFields():重置表单|
|form.formData|表单的数据,tForm.value.form.formData,获取当前表单的数据|
