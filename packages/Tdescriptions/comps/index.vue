
<template>
  <ElDescriptions v-bind="props">
    <template v-for="(item, index) in slots" :key="index" #[item]>
      <slot :name="item">
      </slot>
    </template>
    <ElDescriptionsItem v-for="(item, index) in dscItemList" :key="index" v-bind="item">
      <DesItemValue :item="item" :formData="formData"></DesItemValue>
    </ElDescriptionsItem>
  </ElDescriptions>
</template>

<script lang="ts" setup>
import { ref, computed, unref, useSlots, reactive, watch, onMounted } from "vue";
import { descriptionProps } from "./descriptions";
import { ElDescriptions, ElDescriptionsItem } from "element-plus";
import { getPath } from "../../utils/index";

import DesItemValue from "./DesItemValue";
import { watchEffect } from "vue";
//处理插槽
const props = defineProps(descriptionProps);
const slot = useSlots();
const slots = ref<string[]>([])
slots.value = Object.keys(slot).map(el => el)

const formData: any = reactive({});




const dscItemList = computed(() => props.dataList)
const requestObj = computed(() => props.request)

watchEffect(() => {

})

//初始化数据 对象的
// const requestObj = computed(() => unref(props.request));
watch(requestObj, (newObj: { [key: string]: any }) => {
  if (typeof newObj === "object") {
    Object.keys(formData).forEach((el) => {
      if (newObj[el]) {
        formData[el] = newObj[el];
      }
    });
  }
});

//初始化函数的
let path = props.path || "data";
const getDataList = async () => {
  let objData: { [key: string]: any } = {};
  if (typeof requestObj.value === "function") {
    const res = await requestObj.value();
    objData = getPath(res, path);
    Object.keys(formData).forEach((el) => {
      if (objData[el]) {
        formData[el] = objData[el];
      }
    });

    //格式化函数的情况
    if (props.parseData) {
      objData = props.parseData(formData);
      Object.keys(objData).forEach((el) => {
        formData[el] = objData[el];
      });
    }
  }
};

//获取屏幕可视化宽度
onMounted(() => {
  dscItemList.value.forEach(el => {
    if (el.prop) {
      formData[el.prop] = ''
    }
  })
  if (typeof requestObj.value === "function") {
    requestObj && getDataList();
  }

  // 在这里可以加判断 第一次进页面 不加载数据,暂时不处理这个逻辑
});

console.log(dscItemList, props)







</script>
<script lang="ts">
export default {
  name: "Tdescriptions",
};
</script>
./DesItemValue.Tsx