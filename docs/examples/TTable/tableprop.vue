<template>
  <TableList v-bind="bind" ref="oneTable"> </TableList>
</template>

<script setup lang="ts">
import { useTable } from "chriszj/chris-ui.mjs";

import { ref, computed } from "vue";

const tableData = {
  data: {
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
  },
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
const  oneTable=ref()
const bind = useTable({
  request: (params) => request({ ...params, a: 1 }),
  buttons: [
    {
      type: "primary",
      content: "新增后刷新列表",
      onClick: () => {
        oneTable.value.refresh()

        console.log("刷新成功");
      },
    },
    {
      type: "primary",
      content: "获取查询条件",
      onClick: () => {
        console.log("获取成功", oneTable.value.params.newFormData);
      },
    },
  ],



  columns: [
    {
      type:'selection'
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
      label: "下拉选择",
      prop: "sex",
      filter: {
        type: "select",
        options: [
          { label: "男", value: "1" },
          { label: "女", value: "2" },
        ],
      },
    },
    {
      label: "树形多级",
      prop: "tree",
      filter: {
        type: "cascader",
        options: computed(() => data2.value),
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
      label: "日期范围",
      prop: "date2",
      filter: {
        type: "dateRange",
        prop: ["minTime", "maxTime"],
      },
    },
    {
      label: "日期时间",
      prop: "date3",
      filter: {
        type: "dateTime",
      },
    },
    {
      label: "日期时间范围",
      prop: "date4",
      filter: {
        type: "dateTimeRange",
        prop: ["minTimeRange", "maxTimeRange"],
      },
    },
    {
      label: "数值范围",
      prop: "date",
      filter: {
        type: "inputrange",
        prop: ["minNumber", "maxNumber"],
      },
    },
  ],
});

 
</script>
