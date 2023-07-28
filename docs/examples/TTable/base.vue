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
  index:{             //不传会走默认值'序号'
      label:"测试索引",
      width:'200'
  },
  columns: [
    {
      label: "姓名",
      prop: "name",
    },
    {
      label: "日期",
      prop: "date",
    },
    {
      label:'地址',
      prop:'address'
    }
  ],
});

 
</script>
