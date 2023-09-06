<template>
  <Tdescriptions v-bind="bind" ref="desRef">
    <template #title> 插槽title </template>
    <template #extra>
      <ElButton> 我是插槽按钮 </ElButton>
    </template>

    <template #cc="{ scope }">
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon :style="iconStyle">
              <user />
            </el-icon>
            年龄
          </div>
        </template>
        {{ scope.value }}
      </el-descriptions-item>
    </template>

    <template #tree="{ scope }">
      <el-descriptions-item label="树">{{ scope.value }}</el-descriptions-item>
    </template>
  </Tdescriptions>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";
import { chris, Tdescriptions } from "chriszj";

import { computed, ref } from "vue";


const aa = ref()
const bb = ref()
const obj = ref()
const desRef = ref()
setTimeout(() => {
  aa.value = [{
    label: '男',
    value: 1,

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
          name: '松树',
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
  obj.value = {
    endRow: '上海市宝山区长江南路12号楼801室',
    nextPage: 1,
    name: '是',
    money: 2299,
    dataTime: 1693881180824,
    total: 18,
    tree: 12,
    age: 18

  }

}, 100)

const bind = computed(() => {
  return chris.useDescriptions({
    request: obj.value,
    border: true,
    dataList: [
      {
        label: '地区',
        prop: 'endRow',

      }
      , {
        label: '树',
        prop: 'tree',
        dictData: bb.value,
        dictOptions: {
          value: 'id',
          label: 'name'
        },
        slotName: 'tree'
      },
      {
        slotName: 'cc',
        prop: 'age',
        formatData(data) {
          return data.age + 0.1
        },


      }


    ]


  })
});




</script>
<style scoped></style>
