<template>
  <Tdescriptions v-bind="bind" ref="desRef">
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
import { blob } from "stream/consumers";

const aa = ref()
const bb = ref()
const obj=ref()
const desRef = ref()
setTimeout(() => {
  aa.value = [{
    label2: '男',
    value2: 1,

  },
  {
    label2: "女",
    value2: 2
  }]
  bb.value = [
    {
      id: 1,
      name: 1,
      children: [
        {
          id: 11,
          name: 11,
          children: [
            {
              id: 13,
              name: 22,
              children: null
            }
          ]
        },
        {
          id: 12,
          name: 'ss',
          children: [
            {
              id: 14,
              name: 14,
              children: null
            }
          ]
        }
      ]
    }
  ]
  obj.value={
    endRow:'张三',
    nextPage:1

  }

}, 2000)

const bind = computed(() => {
  return chris.useDescriptions({
    // request: () => entertainApplicationAddList({ a: 1 }),
    // parseData: (el) => {

    //   return {
    //     ...el,
    //     money: 72828928,
    //     dataTime: '1693551168433',
    //     tree: 12

    //   }
    // },
    request:obj.value,
    column: 3,
    border: true,
    dataList: [
      {
        label: '姓名',
        value: '张三',
        prop: 'endRow',

      },
      {
        label: '性别',
        value: '1',
        prop: "nextPage",
        dictData: aa.value,
        dictOptions: {
          label: 'label2',
          value: 'value2'
        }
      },
      {
        label: '金钱',
        prop: 'money',
        formatType: 'price',
      },
      {
        label: '金钱大写',
        prop: 'money',
        formatType: 'priceChinese',
        width: '25%',
        hide: desRef.value?.data?.pages === 8
      },
      {
        label: '时间',
        prop: "dataTime",
        formatType: "dateTime"
      },
      {
        label: '函数',
        prop: 'total',
        formatData(data) {
          return data.total * 2||'--'
        },
      }, {
        label: '树',
        prop: 'tree',
        dictData: bb.value,
        dictOptions: {
          value: 'id',
          label: 'name'
        }
      },
      {
        space: true
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
