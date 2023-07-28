<template>
  <TableList v-bind="bind"> </TableList>
</template>

<script setup lang="ts">
import { useTable } from "chriszj/chris-ui.mjs";

const tableData = {
  data: {
    rows: [
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
    ],
    total:3
  },
  code:200
};
const request=(params)=>{
console.log(params)
 return new Promise((reslove,reject)=>{
  setTimeout(() => {
    reslove(tableData)
  }, 100);
})
}
const bind = useTable({
  request:(params)=>request({...params,a:1}),
  //模拟给后端传递参数 分页默认值是pageNum,pageSize
  //这里打印出的是 {pageNum: 1, pageSize: 10, a: 1}
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
      label: "地址",
      prop: "address",
    },
  ],
});

 
</script>
