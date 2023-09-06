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
            <el-icon>
              <user />
            </el-icon>
            插槽年龄
          </div>
        </template>
        {{ scope.value }}
      </el-descriptions-item>
    </template>

    <template #tree="{ scope }">
      <el-descriptions-item label="插槽树">{{ scope.value }}</el-descriptions-item>
    </template>
  </Tdescriptions>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";
import { chris, Tdescriptions } from "chriszj";

import { computed, ref } from "vue";


const bb = ref()
const obj = ref()
const desRef = ref()
setTimeout(() => {

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


      }


    ]


  })
});




</script>
<style scoped></style>
