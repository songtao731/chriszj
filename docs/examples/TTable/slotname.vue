<template>
  <TableList v-bind="bind"> 

      <template #zdy="scope">
        <span style="color:blue">
          {{ scope.row.address }}
        </span>
      </template>
  
  </TableList>
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
      prop:'address',
      slotName:'zdy'
    }
  ],
});

 
</script>
