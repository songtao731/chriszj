<template>
  <Tform v-bind="bind">
    <template #title> 我是传 </template>
    <template #buttons>
      <el-button type="primary">Operation</el-button>
      <el-button type="primary">Operation</el-button>
    </template>
  </Tform>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { chris, Tform } from "../../packages/index";

let aa :any= ref();
setTimeout(() => {
  aa.value= [
    {
      label: "姓名速速速度:",
      prop: "name",
      type: "input",
    },
    {
      label: "年龄是库斯库斯看:",
      prop: "age",
      type: "input",
      span: "1",
    },
    {
      label: "身高:",
      prop: "hi",
      type: "input",
    },
    {
      label: "体总:",
      prop: "hi",
      type: "input",
    },
  ];
}, 100);

const bind = chris.useForm({
  title: "测试表单",
  direction: "horizonta",
  column: "1",

  dataList:aa,
});
</script>
