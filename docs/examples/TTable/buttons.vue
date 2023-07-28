<template>
  <TableList v-bind="bind"> </TableList>
</template>

<script setup lang="ts">
import { useTable } from "chriszj/chris-ui.mjs";


const tableData = [
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
  },
];

const bind = useTable({
  data: tableData,
  buttons: [
    {
      type: "primary",
      content: "新增",
      onClick: () => {
        console.log("操作成功");
      },
    },
    {
      type: "success",
      content: "删除",
      onClick: () => {
        console.log("删除成功");
      },
    },
  ],
  columns: [
    {
      label: "姓名",
      prop: "name",
    },
    {
      label: "隐藏了右侧的地址",
      prop: "date",
    },
    {
      label: "地址",
      prop: "address",
    },
    {
      label: "操作",
      buttons: [
        {
          content: "新增",
          link: true,
          type: "primary",
          click(rows) {
            console.log(rows, "新增");
          },
        },
        {
          content: "删除",
          type: "success",
          click(row) {
            console.log("删除", row);
          },
        },
      ],
    },
  ],
});

 
</script>
