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
  pagination:false,//关闭分页
  index:false,//关闭搜因
  path:"data", //后端数据的位置
  toTalPath:'total', //后端返回total的位置
  searchSize:"small",  //搜索条件的大小'medium' | 'small' | 'mini',
  labelPosition:'top',//搜索条件的位置'left' | 'top' | 'right'
  pageNum:'zdyPageNum',  //后端要的分页参数 当前第几页   
  pageSize:'zdyPageSize', //后端要的分页参数 一页多少条
  layout:'',//分页展示多少 默认:'prev, pager, next, jumper, ->, total' 同饿了么组件Pagination layout
  pageSizes:[5,20],//切换分页  同饿了么组件Pagination pageSizes
  columns: [
    {
      label: "姓名",
      prop: "name",
      filter:'input'
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
