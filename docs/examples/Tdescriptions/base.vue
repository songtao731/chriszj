<template>
  <Tdescriptions v-bind="bind" ref="desRef">
  </Tdescriptions>
</template>

<script lang="ts" setup>
import { chris, Tdescriptions } from "chriszj";

import {  ref } from "vue";


const aa = ref()
const bb = ref()
const desRef = ref()

const obj = ref()

obj.value = {
  endRow: '上海市宝山区长江南路12号楼801室',
  nextPage: 1,
  name: '是',
  money: 2299,
  dataTime: 1693881180824,
  total: 18,
  tree: 12

}
aa.value = [
  {
    label: "男",
    value: 1,
  },
  {
    label: "女",
    value: 0,
  },
];

const bind = chris.useDescriptions({
  request: obj.value,
  border: true,
  dataList: [
    {
      label: '地区',
      prop: 'endRow',

    },
    {
      label: '性别',
      value: '1',
      prop: "nextPage",
      dictData: aa.value,
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
        return data.total * 2 || '--'
      },
    }, {
      label: '树',
      prop: 'tree',
      dictData: bb.value,
      dictOptions: {
        value: 'id',
        label: 'name'
      }
    }


  ]


})





</script>
<style scoped></style>
