<template>
  <TableList
    v-bind="bind"
    ref="oneTable"
    @selection-change="handleSelectionChange"
    highlight-current-row
    @current-change="handleCurrentChange"
  >
  </TableList>
</template>

<script setup lang="ts">
import { chris } from "chriszj";
//实际使用是 import { chris } from "chriszj";
import { ref, computed } from "vue";

const tableData = {
  rows: [
    {
      date: "2016-05-02",
      date2: "2016-05-02",
      date3: "2016-05-02",
      date4: "2016-05-02",

      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      sex: "1",
    },
    {
      date: "2016-05-04",
      date2: "2016-05-02",
      date3: "2016-05-02",
      date4: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄",
      sex: "2",
    },
    {
      date: "2016-05-01",
      date2: "2016-05-02",
      date3: "2016-05-02",
      date4: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄",
      sex: "1",
    },
  ],
  total: 3,
  code: 200,
};

const data2 = ref();

const fn = () => {
  setTimeout(() => {
    data2.value = [
      {
        value: "zhinan",
        label: "指南",
        children: [
          {
            value: "layout",
            label: "Layout 布局",
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
    ];
  }, 30);
};
fn();
const request = (params) => {
  console.log(params);
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(tableData);
    }, 100);
  });
};
const oneTable = ref();
const bind = chris.useTable({
  request: (params) => request({ ...params, a: 1 }),
  buttons: [
    {
      type: "primary",
      content: "新增后刷新列表",
      onClick: () => {
        oneTable.value.refresh();

        console.log("刷新成功");
      },
    },
    {
      content: "获取查询条件",
      onClick: () => {
        console.log("获取成功", oneTable.value.params.newFormData);
      },
    },
    {
      type: "success",
      content: "清空多选",
      onClick: () => {
        console.log("清空成功", oneTable.value.tableRef.clearSelection());
      },
    },
  ],

  columns: [
    {
      type: "selection",
    },
    {
      label: "姓名简写",
      prop: "name",
      filter: "input",
    },
    {
      label: "地址",
      prop: "address",
      filter: {
        type: "input",
        prop: "newaddress",
      },
    },

    {
      label: "日期",
      prop: "date",
      filter: {
        type: "date",
        placeholder: "生活日期",
      },
    },
    {
      label: "操作",
      buttons: [
        {
          type: "primary",
          content: "单选",
          onClick(row) {
            console.log(row, "22");
          },
        },
      ],
    },
  ],
});
//单选
let currentRow = ref();
const handleCurrentChange = (val) => {
  console.log(val, "我是单选");
  currentRow.value = val;
};
const multipleSelection = ref([]);
const handleSelectionChange = (val) => {
  console.log(val, "我是多选");
  multipleSelection.value = val;
};
</script>
