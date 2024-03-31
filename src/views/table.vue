<template>
  <Card>
    <TableList
      v-bind="bind"
      ref="oneTable"
      show-summary
      :summaryMethod="getSummaries"
      @getSearchData="aa"
      @resetFn="resetFn"
    >
      <template #footer>
        <el-button @click="formBtn"> 校验 </el-button>
      </template>

      <template #append> </template>

      <template #header="{ column, $index }">
        <span style="color: red" v-if="$index === 19">
          {{ column.label }}
        </span>
        <span style="color: red" v-if="$index === 20">
          {{ column.label }}
        </span>
      </template>
      <template #age="scope">
        <span style="color: red">
          {{ scope.row.contractAmount }}
        </span>
      </template>
      <template #zds2="scope">
        <span style="color: rgb(0, 94, 255)">
          {{ scope.row.contractAmount }}
        </span>
      </template>
      <template #zds="{ scope }">
        <el-select
          v-model="scope.dd"
          placeholder="请选择活动区域"
          @change="getForm"
          clearable
          class="w-full"
        >
          <el-option
            v-for="item in data3"
            :key="item"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
    </TableList>
  </Card>

  <!-- <TableList v-bind="bind2" @resetFn="resetFn"> </TableList> -->
</template>

<script setup lang="ts">
import { chris, TableList, Card } from "../../packages";
//import { chris, TableList } from "chriszj";

import { ref, computed, reactive } from "vue";

import { ElButton } from "element-plus";
import { useMockList } from "@/api";
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

const tableData = ref([
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    reg: "",
    sel: "",
    contractAmount: "22",
    sex: "1",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 弄",
    reg: "收款",
    sel: "",
    contractAmount: "33",
    sex: "2",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 弄",
    reg: "",
    contractAmount: "44",
    sex: "3",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 弄",
    reg: "",
    contractAmount: "55",
    sex: "4",
  },
]);

// travelReimbursementAddList({
//   pageNum: 1,
//   pageSize: 10,
// });

const data = ref();
const data2 = ref();
const data3 = ref();

const fn = () => {
  setTimeout(() => {
    data.value = [
      { label2: "前端", value2: "1", disabled: true },
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
                value: "ceshi",
              },
            ],
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
  0: "0°C",
  8: "8°C",
  37: "37°C",
  50: {
    style: {
      color: "#1989FA",
    },
    label: "50%",
  },
});

const isShow = ref(false);
const isShow2 = ref(false);
let num = ref(100);

const bind = computed(() => {
  return chris.useTable({
    request: (params) => useMockList({ ...params }),
    // data: tableData.value,
    labelWidth: "100px",
    labelPosition: "right",
    hideLoading: true,
    buttons: [
      {
        type: "primary",
        content: "新增",
        onClick: () => {
          //   oneTable.value.tableRef.refresh()
          tableData.value.push({
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
            reg: "收款",
            sel: "",
            contractAmount: (num.value += 10),
          });

          console.log("操作成功");
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
    buttonsPosition: "left",
    columns: [
      {
        type: "selection",
        width: "200px",
      },
      {
        label: "id",
        prop: "id",
      },
      {
        label: "性别",
        prop: "sex",
        dictData: [
          { label: "男", value: 1 },
          { label: "女", value: 2 },
          { label: "女2", value: 3 },
        ],
      },
      {
        label: "输入框",
        prop: "input",
        filter: "input",
        value: "输入",
        slotName: "age",
      },
      {
        label: "姓名",
        prop: "name",
        formatter(row, column, cellValue, index) {
          return cellValue + index;
        },

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
              console.log(11, data);
            },
          },
        },
      },
      {
        label: "枚举",
        prop: "status",
        dictData: data.value,
        dictOptions: {
          value: "id",
          label: "name",
        },
        value: "1",
        filter: {
          type: "select",
          select: {
            options: data.value,
            dictOptions: {
              value: "value2",
              label: "label2",
            },
            onChange(val) {
              isShow.value = val == "2" ? true : false;

              console.log("slecs", isShow.value);
            },
          },
        },
      },
      {
        label: "树形是上课时开始看看是",
        prop: "promoter",
        value: ["zhinan", "typography"],
        hide: isShow.value,
        filter: {
          type: "cascader",
          prop: ["one", "two", "three"],
          hide: isShow.value,

          cascader: {
            options: computed(() => data2.value),
            props: {},
          },
        },
      },
      {
        label: "日期",
        prop: "date333ll",
        value: "2021-11-22",
        filter: {
          type: "date",
          prop: "kkk",
          hide: isShow.value,

          date: {
            type: "date",
          },
        },
      },
      {
        label: "日期范围",
        prop: "date2",
        width: "120",
        formatType: "dateTime",
        value: ["2022-11-11", "2022-11-15"],
        filter: {
          type: "date",
          prop: ["sdate", "edate"],
          hide: isShow.value,

          date: {
            type: "daterange",
          },
        },
      },
      {
        label: "日期时间",
        prop: "datetime",
        value: "2023-11",
        filter: {
          type: "date",
          prop: "dataTieme",
          hide: isShow.value,

          date: {
            type: "datetime",
          },
        },
      },
      {
        label: "日期时间范围",
        prop: "datetimerange222",
        formatType: "dateTime",
        filter: {
          type: "date",
          prop: ["mindatetimerange", "ebddatetimerange"],
          date: {
            type: "datetimerange",
            format: "YYYY-MM-DD HH:mm:ss",
          },
        },
      },
      {
        label: "范围",
        prop: "updateTime",
        formatter(row, column, cellValue, index) {
          return cellValue && cellValue.split(" ")[0];
        },
        filter: {
          type: "inputrange",
          value: [1, 2],
          columns: [
            {
              prop: "min",
              placeholder: "请输入最小值",
              value: "2",

              input: {},
            },
            {
              prop: "max",
              value: "88",
              input: {},
            },
          ],
        },
      },

      {
        label: "多选",
        prop: "checkbox",
        value: ["1", "3"],

        filter: {
          type: "checkBox",
          label: "测试数组",
          prop: "check",
          hide: isShow.value,

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
        prop: "county",

        value: "1",
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
        value: 3,
      },
      {
        label: "开关",
        prop: "switch",
        filter: {
          hide: isShow.value,

          type: "switch",
        },
        value: true,
      },
      {
        label: "数值",
        prop: "slider",
        filter: {
          type: "slider",
          prop: "minslider,maxslider",
          slider: {
            range: true,
            marks: marks,
          },
        },
        value: [30, 50],
      },
      {
        label: "校验",
        prop: "reg",
        rules: chris
          .rulesFn()
          .required(true, "请输入")
          .pattern(/^\d{3}$/, "大口大口"),
        width: "300px",
        event: {
          type: "input",
          input: {
            onChange(v) {
              console.log(v, 999888);
            },
          },
        },
      },
      {
        label: "下拉",
        prop: "sel",
        rules: chris.rulesFn().required(true, "请选择", "change"),
        width: "300px",
        event: {
          type: "select",
          select: {
            onChange(v) {
              console.log(v, 999888);
            },
            options: data.value,
            dictOptions: {
              value: "value2",
              label: "label2",
            },
          },
        },
      },
      {
        label: "日期",
        prop: "date",
        rules: chris.rulesFn().required(true, "请选择"),
        width: "300px",
        event: {
          type: "date",
          date: {
            onChange(v) {
              console.log(v, 999888);
            },
          },
        },
      },
      {
        label: "次级",
        prop: "tree",
        rules: chris.rulesFn().required(true, "请选择", "change"),
        width: "300px",
        header: true,
        event: {
          type: "cascader",
          cascader: {
            onChange(v) {
              console.log(v, 999888);
            },
            options: data2.value,
          },
        },
      },
      {
        label: "开关",
        prop: "switch",
        width: "300px",
        header: true,
        event: {
          type: "switch",
          switch: {
            onChange(v) {
              console.log(v, 999888);
            },
          },
        },
      },
      {
        label: "自定义查询",
        prop: "processNo2",
        slotName: "zds2",
        filter: {
          type: "custom",
          slotName: "zds",
        },
      },
      {
        label: "操作",
        width: "200px",
        buttons: [
          {
            content: "删除",
            link: false,
            hide(scope) {
              return scope.contractAmount === "33";
            },
            onClick(scope) {
              tableData.value = tableData.value.filter(
                (el) => el.contractAmount !== scope.contractAmount
              );
              console.log(tableData, "kk", scope);
            },
          },
        ],
      },
    ],
  });
});

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

const formBtn = async () => {
  oneTable.value.refresh({ ksksksksssss: 2222 });
  await oneTable.value.formRef.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const aa = (data) => {
  console.log(data);
};

const resetFn = () => {
  console.log(1);
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
