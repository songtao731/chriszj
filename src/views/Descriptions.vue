<template>
  <Tdescriptions v-bind="bind">
    <template #title> 插槽title </template>
    <template #extra>
      <ElButton> 我是插槽按钮 </ElButton>
    </template>
  </Tdescriptions>
</template>

<script lang="ts" setup>
import { ElButton, ElInput } from "element-plus";
import { chris, Tdescriptions } from "../../packages";

import { entertainApplicationAddList } from "@/api/index";
import { computed, ref } from "vue";

const aa = ref()
setTimeout(() => {
  aa.value = [{
    label: '男',
    value: 1,

  },
  {
    label: "女",
    value: 2
  }]
}, 1000)


const bind = computed(() => {
  return chris.useDescriptions({
    request: () => entertainApplicationAddList({ a: 1 }),
    dataList: [
      {
        label: '姓名',
        value: '张三',
        prop: 'endRow'
      },
      {
        label: '性别',
        value: '1',
        prop: "nextPage",
        dictData: aa.value
      }
    ]


  })
});

// const bind = chris.useDescriptions({
//   request: (params) => entertainApplicationAddList({ a: 1 }),
//   dataList: [
//     {
//       label: '姓名',
//       value: '张三',
//       prop: 'endRow'
//     },
//     {
//       label: '性别',
//       value: '1',
//       prop: "nextPage",
//       dictData:computed(()=>aa)
//     }
//   ]


// })

</script>
<style scoped></style>
