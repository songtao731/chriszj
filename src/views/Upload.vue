<template>


<Tupload>

</Tupload>

  <ElButton @click="aa"> aa </ElButton>

<TableList>
  
</TableList>
</template>

<script setup lang="ts">

import { ref } from "vue";
import Tupload from "../../packages/Tupload/index";

import {
  UploadUserFile
} from "element-plus";




const url =
  "https://gateway-uat.zhidabl.com" + "/finance-file/fast/file/upload";

const headers = {
  "X-Usertoken": sessionStorage.token,
};

const handlePreview = (files: File[], uploadFiles: UploadUserFile[]) => {
console.log(uploadFiles,files)

};
const fileList = ref<UploadUserFile[]>([]);
setTimeout(() => {
  fileList.value = [
    {
      name: "food.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      name: "food2.jpeg",
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
  ];
}, 1000);
const uploadRef = ref();
const aa = () => {
  console.log(fileList.value);
};
</script>
