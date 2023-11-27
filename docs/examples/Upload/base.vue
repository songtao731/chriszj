<template>

  <Tupload :action="url" :headers="headers" v-model:file-list="fileList" >

  </Tupload>

  <ElButton @click="searchFn"> 查看文件</ElButton>

</template>
<script></script>

<script setup lang="ts">
 import {Tupload } from "chriszj";
import { UploadUserFile } from "element-plus/es/components/upload/src/upload";
import { ref } from "vue";

const url =
  "https://petstore-demo.apifox.com/pet";

const headers = {
  "X-Usertoken": sessionStorage.token,
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

const searchFn = () => {
  console.log(fileList.value);
};



</script>
