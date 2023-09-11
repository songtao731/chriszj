<template>
  <div class="about">
    <TableList v-bind="bind" ref="oneTable" show-summary :summaryMethod="getSummaries">
      <template #topheader> 最上部</template>
      <template #centerheader> 中间 </template>
      <template #footer> 尾部 </template>

      <template #append> </template>


      <template #header="scope">
        <span style="color: red">
          {{ scope.$index }}
        </span>
      </template>
      <template #age="scope">
        <span style="color: red">
          {{ scope.row.promoter }}
        </span>
      </template>
      <template #zds="{ scope }">
        <el-select v-model="scope.dd" placeholder="请选择活动区域" @change="getForm" clearable class="w-full">
          <el-option v-for="item in data3" :key="item" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>
    </TableList>

    <!-- <TableList v-bind="bind2" @resetFn="resetFn"> </TableList> -->
  </div>
</template>

<script setup lang="ts">
import { chris, TableList, TableLists, Tupload } from "../../packages";

import { ref, computed, reactive } from "vue";
import {
  entertainApplicationAddList,

} from "@/api/index";

const oneTable = ref();
const ruleForm = ref({
  region: "",
  region2: "",
  region3: "",
});
const data12 = ref();
const getForm = (val) => {
  console.log(val, 123);
  ruleForm.value.region2 = "";

  setTimeout(() => {
    data12.value = [
      { label: "前端2", value: "1" },
      { label: "后端3", value: "2" },
      { label: "运维3", value: "3" },
    ];
  }, 2000);
};


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
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
  },
];

// travelReimbursementAddList({
//   pageNum: 1,
//   pageSize: 10,
// });

const data = ref();
const data2 = ref();
const data3 = ref()

const fn = () => {
  setTimeout(() => {
    data.value = [
      { label2: "前端", value2: "1" },
      { label2: "后端", value2: "2" },
      { label2: "运维", value2: "3" },
    ];
    data2.value = [
      {
        value: "zhinan",
        label: "指南",
        children: [
          {
            value: "layout",
            label: "Layout 布局",
            children: [
              {
                label: "测试",
                value: 'ceshi'
              }
            ]
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
    data3.value = [
      { label: "前端", value: "1" },
      { label: "后端", value: "2" },
      { label: "运维", value: "3" },
    ];
  }, 30);
};
fn();
const marks = reactive({
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
})

const isShow = ref(true)
const isShow2 = ref(false)

const bind = computed(() => {
  console.log('我变了')
  return chris.useTable({
    request: (params) => entertainApplicationAddList({ ...params }),
    path: 'data.list',
    totalPath: 'data.total',
    pageNum: "pageIndex",
    labelWidth: '100px',
    buttons: [
      {
        type: "primary",
        content: "新增",
        onClick: () => {
          //   oneTable.value.tableRef.refresh()

          console.log("操作成功", oneTable.value.refresh());
        },
      },
      {
        type: "success",
        content: "删除",
        onClick: () => {
          console.log("删除操作成功");
        },
      },
    ],

    columns: [
      {
        type: "selection",
        width: "200px",
      },
      {
        label: "输入框",
        prop: 'input',
        filter: 'input',
        value: "输入"
      },
      {
        label: "姓名",
        prop: "id",
        formatter(row, column, cellValue, index) {
          return cellValue + index;
        },
        hide: isShow2.value,

        filter: {
          type: "input",
          prop: "processNo",
          label: "姓名:",
          hide: isShow.value,

          input: {
            showWordLimit: true,
            maxlength: 10,
            suffixIcon: "Calendar",
            onChange(data) {
              console.log(11, data)
            }
          }

        },
        value: '33'

      },
      {
        label: "枚举",
        prop: "status",
        dictData: computed(() => data.value),
        dictOptions: {
          value: "id",
          label: "name",
        },
        value: "1",
        filter: {
          type: "select",
          select: {
            options: computed(() => data.value),
            dictOptions: {
              value: "value2",
              label: "label2",
            },
            onChange(val) {
              isShow.value = val == '2' ? true : false
              isShow2.value = val == '2' ? false : true


              console.log(isShow2.value)
            }
          },

        },
      },
      {
        label: "树形是上课时开始看看是",
        prop: "promoter",
        value: ["zhinan", "typography"],
        filter: {
          type: "cascader",
          prop: ["one", 'two', 'three'],
          cascader: {
            options: computed(() => data2.value),
            props: {
            }
          }
        },
      },
      {
        label: "日期",
        prop: "date",
        filter: {
          type: "date",
          date: {
            type: 'date'
          }
        },
        formatType: 'date',
        value: '2022-11-11'
      },
      {
        label: "日期范围",
        prop: "date",
        width: "120",
        formatType: 'dateTime',
        value: ['2022-11-11', '2022-11-15'],
        filter: {
          type: 'date',
          prop: ['sdate', 'edate'],
          date: {
            type: "daterange",
          }

        },
      },
      {
        label: "千分位上",
        prop: "updateTime",
        formatter(row, column, cellValue, index) {
          return cellValue && cellValue.split(" ")[0];
        },
        filter: {
          type: 'inputrange',
          columns: [
            {
              prop: "min",
              placeholder: "请输入最小值",
              input: {

              },

            },
            {
              prop: "max",
              input: {},
            },
          ],
        },
      },
      {
        label: "日期时间",
        prop: "datetime",
        formatType: "dateTime",
        filter: {
          type: "date",
          prop: 'dataTieme',
          date: {
            type: "datetime",
          }
        },
      },
      {
        label: "日期时间范围",
        prop: "datetimerange",
        formatType: "dateTime",
        filter: {
          type: "date",
          prop: ['mindatetimerange', 'ebddatetimerange'],
          date: {
            type: "datetimerange"
          }
        },
      },
      {
        label: "多选",
        prop: "checkbox",
        value: ['1', '3'],
        filter: {
          type: "checkBox",
          label: "测试数组",
          prop: 'check',
          hide: isShow.value,

          checkBox: {

            options: [
              {
                label2: "前端",
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
            ]
          },
        },
      },
      {
        label: '单选',
        prop: 'radio',
        value: '1',
        filter: {
          type: 'radio',
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
              console.log(1)
            }
          }
        }
      },
      {
        label: '星星',
        prop: 'xingxing',
        filter: {
          type: 'rate',

        },
        value: 3
      },
      {
        label: '开关',
        prop: 'switch',
        filter: {
          type: 'switch'
        },
        value: true
      },
      {
        label: '数值',
        prop: 'slider',
        filter: {
          type: 'slider',
          prop: "minslider,maxslider",
          slider: {
            range: true,
            marks: marks
          }
        },
        value: [30, 50]
      },
      {

        label: "自定义查询",
        prop: "processNo2",

        filter: {
          type: "custom",
          slotName: 'zds',

        }
      },

    ],
  })
})

let currentRow = ref();


console.log(bind, "使用组件的页面", data, oneTable);



const getSummaries = (param) => {
  const { columns, data } = param;
  const sums: string[] = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = "Total Cost";
      return;
    }
    const values = data.map((item) => Number(item[column.property]));
    if (!values.every((value) => Number.isNaN(value))) {
      sums[index] = `$ ${values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!Number.isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0)}`;
    } else {
      sums[index] = "--";
    }
  });

  return sums;
};

console.log(oneTable, "oneTable");
</script>

<style>
/* @media (min-width: 1024px) {

} */
.about {
  /* display: flex;
    align-items: center; */
}
</style>
