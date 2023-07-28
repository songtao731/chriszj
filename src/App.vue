<template>
  <TableList v-bind="bind"> </TableList>

</template>

<script setup lang="ts">
import { useTable } from "chriszj";

const data = [
  {
    name: "开始看",
    age: "33",
    price: 1000221,
    date: "1689065097440",
    dateTime: "1689065097440",
    emun: "1",
  },
  { name: "算了算了了", age: "29", price: 8382.272, emun: "2" },
  { name: "金额", age: "29", price: 0, emun: "3" },
];


const bind = useTable({
  data: data,
  columns: [
  {
      label: "身价",
      prop: "requestId",
      formatType: "priceChinese",
      filter: {
        type: "dateRange",
        prop: ["sTime", "eTime"],
      },
    },
    {
      label: "日期送水",
      prop: "date",
      width: "120",
      filter: "input",
    },
  ]
});

 
</script>
