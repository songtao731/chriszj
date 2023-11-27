<template>
  <ElDescriptions v-bind="props">
    <template v-for="(item, index) in slots" :key="index" #[item]>
      <slot :name="item"> </slot>
    </template>
    <div v-for="(item, index) in dscItemList" :key="index">

      <ElDescriptionsItem v-bind="item" v-if="!item.slotName" :className="props.border
        ? item.className
        : `inline-block  align-middle ` +item.className
        ">
        <DesItemValue :item="item" :formData="formData" :resData="resData"></DesItemValue>
      </ElDescriptionsItem>
      <div v-else>
        <slot :name="item.slotName" :scope="{ resData, value: parseValue(formData, item, resData) }">
        </slot>
      </div>
    </div>
  </ElDescriptions>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  useSlots,
  reactive,
  watch,
  onMounted,
} from "vue";
import { descriptionProps } from "./descriptions";
import { ElDescriptions, ElDescriptionsItem } from "element-plus";
import { getPath } from "../../utils/index";
import { parseValue } from "../untils/index";

import DesItemValue from "./DesItemValue";
import { watchEffect } from "vue";
//处理插槽
const props = defineProps(descriptionProps);
const slot = useSlots();
const slots = ref<string[]>([]);
slots.value = Object.keys(slot).map((el) => el);

const formData: any = reactive({});

const dscItemList = computed(() => props.dataList.filter((el) => !el.hide));

const requestObj = computed(() => props.request);

watchEffect(() => {
  //处理占位符的背景色
  dscItemList.value.forEach((el) => {
    if (el.type === "space") {
      el.className = "[--el-descriptions-table-border:border-0]";
      el.labelClassName =
        "[--el-descriptions-table-border:border-0] [--el-descriptions-item-bordered-label-background:#fff]";
    }
  });
});

//传入的数据
let resData = ref<{ [key: string]: any }>({});

//初始化数据 对象的
// const requestObj = computed(() => unref(props.request));
watch(requestObj, (newObj: { [key: string]: any }) => {


  if (typeof newObj === "object") {
    resData.value = newObj;

    Object.keys(formData).forEach((el) => {
      if (newObj[el] || newObj[el] == 0) {
        formData[el] = newObj[el];
      }
    });

    //格式化函数的情况
    if (props.parseData) {
      let objData: { [key: string]: any } = {};
      objData = props.parseData(formData);
      Object.keys(objData).forEach((el) => {
        formData[el] = objData[el];
      });
    }

  }

});

//初始化函数的
let path = props.path || "data";

let res = ref();
const getDataList = async () => {
  if (typeof requestObj.value === "function") {
    res.value = await requestObj.value();
    resData.value = getPath(res.value, path);
    Object.keys(formData).forEach((el) => {
      if (resData.value[el] || resData.value[el] === 0) {

        formData[el] = resData.value[el];
      }
    });
    //格式化函数的情况
    if (props.parseData) {
      let objData: { [key: string]: any } = {};
      objData = props.parseData(formData);
      Object.keys(objData).forEach((el) => {
        formData[el] = objData[el];
      });
    }
  }
};

//获取屏幕可视化宽度
onMounted(() => {
  dscItemList.value.forEach((el) => {
    if (el.prop) {
      formData[el.prop] = "";
    }
  });
  if (typeof requestObj.value === "function") {
    requestObj && getDataList();
  }
  if (typeof requestObj.value === "object") {
    resData.value = requestObj.value;
    Object.keys(formData).forEach((el) => {
      if (typeof requestObj.value === "object" && requestObj.value[el]) {
        formData[el] = requestObj.value[el];
      }
    });
    //格式化函数的情况
    if (props.parseData) {
      let objData: { [key: string]: any } = {};
      objData = props.parseData(formData);
      Object.keys(objData).forEach((el) => {
        formData[el] = objData[el];
      });
    }

  }

  // 在这里可以加判断 第一次进页面 不加载数据,暂时不处理这个逻辑
});

defineExpose({
  data: resData,
  res,
});
</script>
<script lang="ts">
export default {
  name: "Tdescriptions",
};
</script>
