<template>
  <Tupload v-model:file-list="fileList" list-type="text" :action="url">

  
  </Tupload> 

  <Timgs :file-list="fileList2" width="100px" height="100px"></Timgs>
 <!-- <Timgs :file-list="fileList2"> </Timgs>


  <el-button text @click="outerVisible = true">
    open the outer Dialog
  </el-button>

  <el-dialog v-model="outerVisible" title="Outer Dialog">
    <template #default>
      <el-dialog
        v-model="innerVisible"
        width="30%"
        title="Inner Dialog"
        append-to-body
      />
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="innerVisible = true">
          open the inner Dialog
        </el-button>
      </div>
    </template>
  </el-dialog>  -->

<ElButton @click="aa"> aa </ElButton>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tupload,Timgs} from "../../packages/index";

import { UploadUserFile } from "element-plus";

const url =
  "/api/gateway/financial/pay/collectionList/claim/list";

const headers = {
  "X-Usertoken": sessionStorage.token,
};

const handlePreview = (files: File[], uploadFiles: UploadUserFile[]) => {
  console.log(uploadFiles, files);
};
const fileList = ref<UploadUserFile[]>([]);
const fileList2 = ref<{ url: string; name?: string }[]>([]);

setTimeout(() => {
  fileList.value = [
    {
      name: "food.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      name: "",
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
  ];
}, 1000);
setTimeout(() => {
  fileList2.value = [
    {
      name: "food.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.pdf",
    },
  ];
}, 1000);
const uploadRef = ref();
const aa = () => {
  console.log(fileList.value);
};
const outerVisible = ref(false);
const innerVisible = ref(false);
console.log(99)
</script>
