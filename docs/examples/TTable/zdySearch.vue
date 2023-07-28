<template>
  <TableList v-bind="bind" @resetFn="resetFn">
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
</template>

<script setup lang="ts">
import { useTable } from "chriszj/chris-ui.mjs";

import { ref, computed } from "vue";
//模拟表格的数据
const tableData = {
  data: {
    rows: [
      {
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
        sex: "1",
      },
      {
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
        sex: "2",
      },
      {
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
        sex: "1",
      },
    ],
    total: 3,
  },
  code: 200,
};
//自定义查询条件
const ruleForm = ref({
  region: "",
  region2: "",
});
//模拟第一个选择框 异步获取数据
const data=ref()
setTimeout(()=>{
  data.value = [
      { label: "前端", value: "1" },
      { label: "后端", value: "2" },
      { label: "运维", value: "3" },
    ];
},300)

const data12 = ref();
//模拟异步获取第二个选择框数据
const getForm = (val) => {
  console.log(val);
  ruleForm.value.region2 = "";

  setTimeout(() => {
    data12.value = [
      { label: "前端2", value: "1" },
      { label: "后端3", value: "2" },
      { label: "运维3", value: "3" },
    ];
  }, 2000);
};


//重置查询条件
const resetFn = () => {
  Object.keys(ruleForm.value).forEach((el: any) => {
    ruleForm.value[el] = "";
  });
};

//模拟后端接口
const request = (params) => {
  console.log(params);
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(tableData);
    }, 100);
  });
};
const bind = useTable({
  request: (params) => request({ ...params, a: 1 }),
  searchData: ruleForm,
  columns: [
    {
      label: "姓名简写",
      prop: "name",
      filter: "input",
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
    }
  ],
});

 
</script>
