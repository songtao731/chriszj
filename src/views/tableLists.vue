<template>
  <TableLists v-bind="bind2" border ref="tabRef" @tabClick="tabClick">
  </TableLists>
</template>
<script setup lang="ts">
import { chris, TableList, TableLists, Tupload } from "../../packages";
//import { chris, TableList, TableLists, Tupload } from "../../lib/chris-ui.mjs";

//import { chris, TableLists } from "chriszj";
import { useRoute, useRouter } from "vue-router";
import { useMockList } from "@/api";

import { computed, ref } from "vue";
const route = useRoute();
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
const arr = ref([]);
const request = (params) => {
  console.log(params, "9999");
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(tableData);
    }, 200);
  });
};
const request2 = (params) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      arr.value = [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ];
      reslove(arr);
    }, 3000);
  });
};
request2();

const activeName = ref("all");

const tabRef = ref();

const tabClick = (val) => {
  activeName.value = val.activeValue;
};

const bind = computed(() => {
  return chris.useTables({
    tabs: {
      activeValue: activeName.value,
      tabsList: [
        { label: "待审核", value: "all" },
        { label: "审核中", value: "historyPass" },
        { label: "已审核", value: "unavailable" },
      ],
      isRoute: true,
    },
    table: (row) => {
      return {
        request: (params) => useMockList({ ...params, approveListType: row }),
        column: 4,
        hideLoading: false,
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
              console.log(
                "获取成功",
                tabRef.value.tableRef[
                  route.query.routeName || activeName.value
                ].refresh(),
                tabRef.value.tableRef
              );
            },
          },
        ],
        columns: [
          {
            type: "selection",
          },
          {
            label: "姓名",
            prop: "grantCreditNo",
            filter: "input",
            align: "left",
          },

          {
            label: "地址",
            prop: "address",
            filter: "input",
          },
          {
            label: "性别",
            prop: "sex",
            filter: {
              type: "select",
              select: {
                options: arr.value,
              },
            },
            dictData: arr.value,
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
                  type: "primary",
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
                  disabled:
                    Array.isArray(row.children) && !!row.children.length,
                },
              ];
            },
          },
        ],
      };
    },
  });
});

enum Status {
  ALL = "all",
  AVAILABLE = "available",
  UNAVAILABLE = "unavailable",
}
const bind2 = computed(() => {
  return chris.useTables({
    tabs: {
      activeValue: activeName.value,
      tabsList: [
        { label: "全部", value: Status.ALL },
        { label: "可用授信", value: Status.AVAILABLE },
        { label: "不可用授信", value: Status.UNAVAILABLE },
      ],
    },
    table: (row) => {
      return {
        request: (params) => useMockList({ ...params, tabsType: row }),
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
              console.log(
                "获取成功",
                tabRef.value.tableRef[
                  route.query.routeName || activeName.value
                ].refresh(),
                tabRef.value.tableRef
              );
            },
          },
        ],

        columns: [
          {
            label: "授信编号",
            prop: "approveTime",
            fixed: "left",
            minWidth: 150,
            formatType: "date",
          },
          {
            label: "授信名称",
            prop: "approveTime",
            fixed: "left",
            minWidth: 150,
            filter: "input",
          },
          {
            label: "授信名称",
            prop: "name",
            fixed: "left",
            minWidth: 150,
            filter: "input",
          },
          {
            label: "授信名称",
            prop: "name",
            fixed: "left",
            minWidth: 150,
            filter: "input",
          },

          {
            label: "授信额度(元)",
            prop: "amount",
            minWidth: 120,
            formatType: "price",
            filter: {
              label: "授信额度",
              type: "inputrange",
              columns: [
                {
                  prop: "amountMin",
                },
                {
                  prop: "amountMax",
                },
              ],
            },
          },
          {
            label: "授信额度2(元)",
            prop: "amount2",
            minWidth: 120,
            formatType: "price",
            filter: {
              label: "授信额度",
              type: "inputrange",
              columns: [
                {
                  prop: "amountMin",
                },
                {
                  prop: "amountMax",
                },
              ],
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
                  type: "primary",
                  disabled: row.menuType === 2,
                  click(row) {
                    console.log(1, row);
                  },
                },
              ];
            },
          },
        ],
      };
    },
  });
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
