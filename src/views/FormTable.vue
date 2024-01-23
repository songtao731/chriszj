<template>
  <TableList v-bind="bind" ref="oneTable">
    <template #footer>
      <el-button @click="formBtn"> 校验 </el-button>
    </template>
  </TableList>
</template>

<script setup lang="ts">
import { chris, TableList } from "../../packages/index";

//实际使用是
//import { chris } from "chriszj";
//import { chris, TableList } from "../../lib/chris-ui";

import { listRole } from "@/api/index";
import { roleTypes } from "element-plus";
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
  remark: "",
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
  request: (params) => listRole({ ...params, a: 1 }),
  parseData: (data) => {
    data.forEach((ele) => {
      ele.isEdit = false;
    });
    return data;
  },
  searchData: ruleForm,
  pagination: false,
  columns: [
    {
      label: "校验",
      prop: "remark",
      width: "300px",
      filter: "input",
      rules: chris.rulesFn().required(true, "请输入"),

      event: (rows) => {
        return {
          type: "input",
          input: {
            onChange(v) {
              console.log(v, 999888);
            },
          },
        };
      },
    },
    {
      label: "校验",
      prop: "remark",
      rules: chris.rulesFn().required(true, "请输入"),
      width: "300px",
      filter: "input",
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
      label: "操作",
      width: "170",
      buttons: (rows) => {
        return [
          {
            content: "保存",
            link: true,
            type: "primary",
            click(rows) {},
            hide: !rows.isEdit,
          },
        ];
      },
    },
    // {
    //   label: "校验",
    //   prop: "updatedAt",
    //   rules: chris.rulesFn().required(true, "请输入"),
    //   width: "300px",
    //   filter: "input",
    //   event: {
    //     type: "input",
    //     input: {
    //       onChange(v) {
    //         console.log(v, 999888);
    //       },
    //       type: "textarea",
    //     },
    //   },
    // },
    // {
    //   label: "校验",
    //   prop: "createdAt",
    //   rules: chris.rulesFn().required(true, "请输入"),

    //   width: "300px",
    //   filter: "input",
    //   event: {
    //     type: "input",
    //     input: {
    //       onChange(v) {
    //         console.log(v, 999888);
    //       },
    //     },
    //   },
    // },
  ],
});
const oneTable = ref();

const formBtn = async () => {
  console.log(oneTable.value, "oneTable.value", oneTable.value.tableRef.data);
  await oneTable.value.formRef.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
