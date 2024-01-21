<template>
  <TableList v-bind="bind" @resetFn="resetFn" ref="oneTable">
    <template #footer>
      <el-button @click="formBtn"> 校验 </el-button>
    </template>
  </TableList>
</template>

<script setup lang="ts">
import { chris } from "chriszj";
//实际使用是 import { chris } from "chriszj";
import { ref, computed } from "vue";

const data2 = ref([
  {
    value: "zhinan",
    label: "指南",
    children: [
      {
        value: "layout",
        label: "Layout 布局",
        children: [
          {
            label: "测试",
            value: "ceshi",
          },
        ],
      },
      {
        value: "color",
        label: "Color 色彩",
      },
      {
        value: "typography",
        label: "Typography 字体",
      },
      {
        value: "icon",
        label: "Icon 图标",
      },
      {
        value: "button",
        label: "Button 按钮",
      },
    ],
  },
]);
//模拟表格的数据
const tableData = {
  data: {
    rows: [
      {
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
        sex: "1",
      },
      {
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
        sex: "2",
      },
      {
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
        sex: "1",
      },
    ],
    total: 3,
  },
  code: 200,
};
//自定义查询条件
const ruleForm = ref({
  region: "",
  region2: "",
});
//模拟第一个选择框 异步获取数据
const data = ref();

data.value = [
  { label: "前端", value: "1" },
  { label: "后端", value: "2" },
  { label: "运维", value: "3" },
];

//重置查询条件
const resetFn = () => {
  Object.keys(ruleForm.value).forEach((el: any) => {
    ruleForm.value[el] = "";
  });
};

//模拟后端接口
const request = (params) => {
  console.log(params);
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(tableData);
    }, 100);
  });
};
const bind = chris.useTable({
  request: (params) => request({ ...params, a: 1 }),
  searchData: ruleForm,
  pagination: false,
  path: "data.rows",
  columns: [
    {
      label: "姓名简写",
      prop: "name",
      filter: "input",
    },
    {
      label: "校验",
      prop: "reg",
      rules: chris
        .rulesFn()
        .required(true, "请输入")
        .pattern(/^\d{3}$/, "大口大口"),
      width: "300px",
      event: {
        type: "input",
        input: {
          onChange(v) {
            console.log(v, 999888);
          },
        },
      },
    },
    {
      label: "下拉",
      prop: "sel",
      rules: chris.rulesFn().required(true, "请选择", "change"),
      width: "300px",
      event: {
        type: "select",
        select: {
          onChange(v) {
            console.log(v, 999888);
          },
          options: data.value,
        },
      },
    },
    {
      label: "日期",
      prop: "date",
      rules: chris.rulesFn().required(true, "请选择"),
      width: "300px",
      event: {
        type: "date",
        date: {
          onChange(v) {
            console.log(v, 999888);
          },
        },
      },
    },
    {
      label: "次级",
      prop: "tree",
      rules: chris.rulesFn().required(true, "请选择", "change"),
      width: "300px",
      event: {
        type: "cascader",
        cascader: {
          onChange(v) {
            console.log(v, 999888);
          },
          options: data2.value,
        },
      },
    },
    {
      label: "开关",
      prop: "switch",
      width: "300px",
      event: {
        type: "switch",
        switch: {
          onChange(v) {
            console.log(v, 999888);
          },
        },
      },
    },
  ],
});
const oneTable = ref();

const formBtn = async () => {
  await oneTable.value.formRef.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
