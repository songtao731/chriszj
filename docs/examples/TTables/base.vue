<template>
  <TableLists v-bind="bind" ref="tabRef"> </TableLists>
</template>
<script setup lang="ts">
import { chris, TableLists } from "chriszj";
import { useRoute, useRouter } from "vue-router";
// import { chris,TableLists } from "../../../packages";
//实际使用是 import { chris } from "chriszj";

import { ref } from "vue";

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
const request = (params) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(tableData);
    }, 100);
  });
};

const activeName = ref("3");
const bind = chris.useTables({
  tabs: {
    activeValue: activeName.value,
    tabsList: [
      { label: "待审核", value: "1" },
      { label: "审核中", value: "2" },
      { label: "已审核", value: "3" },
    ],
  },
  table: (row) => {
    return {
      request: (params) => request({ ...params, state: row }),
      columns: [
        {
          label: "姓名",
          prop: "name",
          filter: "input",
        },
        {
          label: "地址",
          prop: "address",
        },
      ],
    };
  },
});
</script>
