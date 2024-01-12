<template>
  <TableLists v-bind="bind" ref="tabRef" @tabClick="tabClick"> </TableLists>
</template>
<script setup lang="ts">
// import { chris, TableList, TableLists, Tupload } from "../../packages";
import { chris, TableList, TableLists, Tupload } from "../../lib/chris-ui.mjs";

// import { chris, TableLists } from "chriszj";
import { useRoute, useRouter } from "vue-router";

import { ref } from "vue";

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
const request = (params) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(tableData);
    }, 2000);
  });
};

const activeName = ref("1");

const tabRef = ref();

const tabClick = (val) => {
  console.log(val, "tab", activeName.value);
};

const bind = chris.useTables({
  tabs: {
    activeValue: activeName.value,
    tabsList: [
      { label: "待审核", value: "1" },
      { label: "审核中", value: "2" },
      { label: "已审核", value: "3" },
    ],
    isRoute: true,
  },
  table: (row) => {
    return {
      request: (params) => request({ ...params, state: row }),
      buttons: [
        {
          type: "primary",
          content: "清空全选",
          onClick: () => {
            console.log(row, 12312);
            activeName.value = row;
            console.log(
              "操作成功",
              tabRef.value.tableRef[activeName.value].tableRef.clearSelection()
            );
            //   console.log("操作成功",tabRef.value.tableRef[activeName.value].refresh());
          },
        },
        {
          type: "success",
          content: "获取每个表格的全局方法",
          onClick: () => {
            console.log("获取成功", tabRef.value.tableRef[activeName.value]);
          },
        },
      ],
      columns: [
        {
          type: "selection",
        },
        {
          label: "姓名",
          prop: "name",
          filter: "input",
        },
        {
          label: "地址",
          prop: "address",
        },
        {
          label: "操作",
          align: "center",
          fixed: "right",
          width: 240,
          buttons: () => {
            return [
              {
                content: "新增",
                icon: "icon-document-add",
                link: true,
                disabled: row.menuType === 2,
                click: () => true,
              },
              {
                content: "编辑",
                icon: "icon-edit",
                link: true,
              },
              {
                content: "删除",
                icon: "icon-delete",
                link: true,
                disabled: Array.isArray(row.children) && !!row.children.length,
              },
            ];
          },
        },
      ],
    };
  },
});
</script>
