<template>
  <TableList v-bind="bind"> </TableList>
</template>

<script setup lang="ts">
import { chris } from "chriszj";
//实际使用是 import { chris } from "chriszj";
import { ref, computed } from "vue";

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
const bind = chris.useTable({
  request: (params) => request({ ...params, a: 1 }),
  columns: [
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
        select: {
          options: [
            { label: "男", value: "1" },
            { label: "女", value: "2" },
          ],
        },
      },
    },
    {
      label: "树形多级",
      prop: "tree",
      filter: {
        type: "cascader",
        cascader: {
          options: computed(() => data2.value),
        },
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
        type: "date",
        prop: ["minTime", "maxTime"],
        date: {
          type: "daterange",
        },
      },
    },
    {
      label: "日期时间",
      prop: "date3",
      filter: {
        type: "date",
        date: {
          type: "datetime",
        },
      },
    },
    {
      label: "日期时间范围",
      prop: "date4",
      filter: {
        type: "date",
        prop: ["minTimeRange", "maxTimeRange"],
        date: {
          type: "datetimerange",
        },
      },
    },
    {
      label: "多选",
      prop: "checkbox",
      filter: {
        type: "checkBox",
        checkBox: {
          options: [
            {
              label: "前端",
              value: "1",
            },
            {
              label: "后端",
              value: "2",
            },
            {
              label: "测试",
              value: "3",
            },
          ],
        },
      },
    },
    {
      label: "单选",
      prop: "radio",
      filter: {
        type: "radio",
        radio: {
          options: [
            {
              label: "金融",
              value: "1",
            },
            {
              label: "It",
              value: "2",
            },
            {
              label: "教育",
              value: "3",
            },
          ],
          onChange() {
            console.log(1);
          },
        },
      },
    },
    {
      label: "星星",
      prop: "xingxing",
      filter: {
        type: "rate",
      },
    },
    {
      label: "开关",
      prop: "switch",
      filter: {
        type: "switch",
      },
    },
    {
      label: "数值",
      prop: "slider",
      filter: {
        type: "slider",
      },
    },
    {
      label: "范围",
      prop: "updateTime",
      filter: {
        type: "inputrange",
        columns: [
          {
            prop: "min",
            placeholder: "请输入最小值",
            input: {},
          },
          {
            prop: "max",
            input: {},
          },
        ],
      },
    },
  ],
});
</script>
