<template>
  <TableLists v-bind="bind" row-key="id"> </TableLists>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { chris, TableLists } from "../../packages";
import { entertainApplicationAddList, useMockList } from "@/api/index";

//import { entertainApplicationAddList, useMockList } from "../api/index";

//实际使用是 import { chris } from "chriszj";
const tableData = [
  {
    id: 1,
    date: "2016-05-02",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 2,
    date: "2016-05-04",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    id: 3,
    date: 0,
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles",
    children: [
      {
        id: 31,
        date: "2016-05-01",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        id: 32,
        date: "2016-05-01",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles",
      },
    ],
  },
  {
    id: 4,
    date: "2016-05-03",
    name: "wangxiaohu",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const bind = computed(() => {
  return chris.useTables({
    tabs: {
      activeValue: "1",
      tabsList: [
        { label: "运营端", value: "1" },
        { label: "业务端", value: "2" },
      ],
      isRoute: true,
    },
    table: (row) => {
      return {
        request: (params) =>
          entertainApplicationAddList({ ...params, labelSign: row }),
        path: "data",

        data: [
          {
            id: 1,
            date: "2016-05-02",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles",
          },
          {
            id: 2,
            date: "2016-05-04",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles",
          },
          {
            id: 3,
            date: "2016-05-01",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles",
            children: [
              {
                id: 31,
                date: "2016-05-01",
                name: "wangxiaohu",
                address: "No. 189, Grove St, Los Angeles",
              },
              {
                id: 32,
                date: "2016-05-01",
                name: "wangxiaohu",
                address: "No. 189, Grove St, Los Angeles",
              },
            ],
          },
          {
            id: 4,
            date: "2016-05-03",
            name: 0,
            address: "No. 189, Grove St, Los Angeles",
          },
        ],
        index: false,

        columns: [
          {
            prop: "name",
            label: "名称",
            minWidth: 180,
          },
          {
            prop: "sortIndex",
            align: "center",
            label: "排序",
            width: 60,
          },
          {
            prop: "date",
            sortable: true,
          },
          {
            label: "操作",
            align: "center",
            fixed: "right",
            width: 240,
            buttons: (row) => {
              return [
                {
                  content: "新增",
                  click: (row) => {
                    console.log(row);
                  },
                  type: "primary",
                  disabled: row.name === "wangxiaohu",
                },
                {
                  content: "编辑",
                  icon: "icon-edit",
                  link: true,

                  click: () => {
                    console.log(row);
                  },
                },
                {
                  content: "删除",
                  icon: "icon-delete",
                  link: true,

                  click: (row) => {
                    console.log(row);
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
