<template>
  <div class="about">
    <img :src="logo" alt="" width="100" />

    <TableList
      v-bind="bind"
      @resetFn="resetFn"
      ref="oneTable"
      show-summary
      :summaryMethod="getSummaries"
      @selection-change="handleSelectionChange"
    >
      <template #topheader> 最上部</template>
      <template #centerheader>
        <ElButton type="primary" :disabled="!aa.length"> ssssss </ElButton>
      </template>
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
      <template #search>
        <el-form-item label="活动区域" prop="region">
          <el-select
            v-model="ruleForm.region"
            placeholder="请选择活动区域"
            @change="getForm"
            clearable
          >
            <el-option
              v-for="item in data"
              :key="item"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动区域2" prop="region">
          <el-select
            v-model="ruleForm.region2"
            placeholder="请选择活动区域"
            clearable
          >
            <el-option
              v-for="item in data12"
              :key="item"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </template>
    </TableList>

    <!-- <TableList v-bind="bind2" @resetFn="resetFn"> </TableList> -->
  </div>
</template>

<script setup lang="ts">
import { chris, TableList, TableLists, Tupload } from "../../packages/index";

import { ref, computed, nextTick } from "vue";
import { listRole } from "@/api/index";
import { ElButton } from "element-plus";
import dt from "@/assets/dt.svg";
import logo from "@/assets/logo.svg";

const aa = ref([]);
const handleSelectionChange = (val) => {
  aa.value = val;

  console.log(aa.value, "aa");
};

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

const resetFn = () => {
  console.log(222);
  Object.keys(ruleForm.value).forEach((el: any) => {
    ruleForm.value[el] = "";
  });
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

const fn = () => {
  setTimeout(() => {
    data.value = [
      { label: "前端", value: "1" },
      { label: "后端", value: "2" },
      { label: "运维", value: "3" },
    ];
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

const bind = computed(() => {
  return chris.useTable({
    searchData: ruleForm,
    request: (params) => listRole({ ...params }),

    buttons: [
      {
        type: "primary",
        content: "新增",
        disabled: aa.value.length ? false : true,

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
        label: "姓名",
        prop: "id",
        formatter(row, column, cellValue, index) {
          return cellValue + index;
        },
        filter: {
          type: "input",
          placeholder: "流程编号/申请人",
          prop: "processNo",
          label: "姓名:",
          input: {
            showWordLimit: true,
            maxlength: 10,
            suffixIcon: "Calendar",
          },
        },
      },
      {
        label: "年龄送水",
        prop: "promoter",
        slotName: "age",
        sortable: true,
        value: ["zhinan", "typography"],
        filter: {
          type: "cascader",
          prop: ["one", "two", "three"],
          options: computed(() => data2.value),
        },
      },
      {
        label: "身价",
        prop: "place",

        filter: {
          type: "dateRange",
          prop: ["sTime", "eTime"],
        },
      },
      {
        label: "日期送水",
        prop: "date",
        width: "120",
        filter: "input",
      },
      {
        label: "千分位上",
        prop: "updateTime",
        formatter(row, column, cellValue, index) {
          return cellValue && cellValue.split(" ")[0];
        },
        filter: {
          prop: ["min", "max"],
          type: "inputrange",
        },
      },
      {
        label: "时间",
        prop: "applicationTime",
        formatType: "dateTime",
        filter: {
          type: "date",
          hide: true,
        },
      },
      {
        label: "枚举",
        prop: "status",
        dictData: computed(() => data.value),
        filter: {
          type: "select",
          options: computed(() => data.value),
        },
        buttons: [
          {
            content: "新增",
            link: true,
            type: "primary",
            disabled: aa.value.length ? false : true,

            click(rows) {
              console.log(rows, "新增");
            },
          },
          {
            content: "删除",
            link: true,
            type: "success",

            icon: "Delete",
            click(row) {
              console.log("删除", oneTable.value.params.newFormData);
              //  oneTable.value.tableRef.setCurrentRow(row);
            },
          },
        ],
      },
    ],
  });
});

let currentRow = ref();
const handleCurrentChange = (val) => {
  console.log(val, "kkkk");
  currentRow.value = val;
};

console.log(bind, "使用组件的页面", data, oneTable);

const tableData2 = {
  code: 200,
  total: 10,
  data: [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      time: "1690440269140",
      money: 1283218381.345,
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
  ],
};

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(tableData2);
  }, 10);
});

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
