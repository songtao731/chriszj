<template>
  <TableLists
    v-bind="bind"
    border
    ref="tabRef"
    :row-class-name="tableRowClassName"
    @tabClick="tabClick"
  >
  </TableLists>
</template>
<script setup lang="ts">
import { chris, TableList, TableLists, Tupload } from "../../packages";
//import { chris, TableList, TableLists, Tupload } from "../../lib/chris-ui.mjs";

//import { chris, TableLists } from "chriszj";
import { useRoute, useRouter } from "vue-router";
import { useMockList } from "@/api";

import { ref } from "vue";
const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};

const tableData = {
  data: {
    rows: [
      {
        date: "2016-05-02",
        date2: "2016-05-02",
        date3: "2016-05-02",
        date4: "2016-05-02",

        name: "2.155",
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
        sex: 2,
      },
      {
        date: "2016-05-01",
        date2: "2016-05-02",
        date3: "2016-05-02",
        date4: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
        sex: 1,
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
    }, 200);
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
      { label: "审核中", value: "kk" },
      { label: "已审核", value: "3" },
    ],
    isRoute: true,
  },
  table: (row) => {
    return {
      request: (params) => request({ ...params, state: row }),
      path: "data.rows",
      column: 2,
      buttons: [
        {
          type: "primary",
          content: "清空全选",
          onClick: () => {
            activeName.value = row;
            console.log(
              "操作成功",
              tabRef.value.tableRef[activeName.value].refresh,
              tabRef.value
            );
            tabRef.value.tableRef[activeName.value].refresh();
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
          align: "left",
          formatType: "price",
        },
        {
          label: "地址",
          prop: "address",
          filter: "input",
          dictData: ref([{ label: "男", value: "1" }]),
        },
        {
          label: "性别",
          prop: "sex",
          filter: {
            type: "select",
            select: {
              options: ref([{ label: "男", value: "1" }]),
            },
          },
          dictData: ref([
            { label2: "男", value: 1 },
            { label2: "女", value: 2 },
          ]).value,
          dictOptions: {
            label: "label2",
          },
        },

        {
          label: "操作",
          fixed: "right",
          width: 240,
          buttons: (el) => {
            return [
              {
                content: "新增",
                icon: "icon-document-add",
                link: true,
                disabled: row.menuType === 2,
                click(row) {
                  console.log(1, row);
                },
              },
              {
                content: "编辑",
                icon: "icon-edit",
                link: true,
                onClick(row) {
                  console.log(2, row);
                },
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
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
