<template>
  <TableList v-bind="bind"> </TableList>
</template>

<script setup lang="ts">
import { useTable } from "chriszj/chris-ui.mjs";

import { ref, computed } from "vue";

const tableData = {
  data: {
    rows: [
      {

        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
        sex: "1",
        job: "1",
        money:'1202020',
        time:'1690440269140'

      },
      {

        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
        sex: "2",
        job: "2",
        money:'3122324',
        time:'1690430269140'



      },
      {
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
        sex: "1",
        job: "2",
        money:'545202023',
        time:'1690442269140'



      },
    ],
    total: 3,
  },
  code: 200,
};

const data2 = ref();
const data = ref();

const fn = () => {
  setTimeout(() => {
    data.value = [
      { label: "前端", value: "1" },
      { label: "后端", value: "2" },
    ];
  }, 300);
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
const bind = useTable({
  request: (params) => request({ ...params, a: 1 }),
  columns: [
    {
      label: "姓名简写",
      prop: "name",
      filter: "input",
      formatter(row, column, cellValue, index) {
        //就是饿了么组件的方法
        return cellValue + index;
      },
    },
    {
      label: "下拉选择",
      prop: "sex",
      filter: {
        type: "select",
        options: [
          { label: "男", value: "1" },
          { label: "女", value: "2" },
        ],
      },
      dictData: [
        { label: "男", value: "1" },
        { label: "女", value: "2" },
      ],
    },
    {
      label: "异步数据",
      prop: "job",
      filter: {
        type: "select",
        options:computed(()=>data.value),
      },
      dictData: computed(()=>data.value),
    },
    {
      label: "金钱",
      prop: "money",
      formatType:'price'
    },
    {
      label: "金钱(汉字)",
      prop: "money",
      formatType:'priceChinese'
    },
    {
      label: "格式化日期",
      prop: "time",
      formatType:'date'
    },
    {
      label: "格式化日期时间",
      prop: "time",
      formatType:'dateTime'
    }
  ],
});

 
</script>
