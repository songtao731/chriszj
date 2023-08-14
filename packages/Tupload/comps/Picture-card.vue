<template>
  <el-upload
    v-bind="props"
    ref="pictureUpload"
    v-model:fileList="fileList"
    :on-progress="uploadVideoProcess"
    class="chris-prew"
  >
    <el-icon><Plus /></el-icon>
    <template #file="{ file }">
      <div>
        <Picprew
          :file="{...file,loadProgress}"
          @remove="handleRemove(file)"
          @download="handleDownload(file)"
        ></Picprew>
      </div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { Plus } from "@element-plus/icons-vue";
import Picprew from "./picprew.vue";

import { UploadFile } from "element-plus";
import { uploadProps } from "./upload";

const props = defineProps(uploadProps);
const emit = defineEmits(["update:fileList"]);

//上传的数据
const fileList = computed({
  get() {
    return props.fileList;
  },
  set(value) {
    emit("update:fileList", value);
  },
});
const loadProgress = ref(0);
const uploadVideoProcess = (event:any) => {
  loadProgress.value = parseInt(event.percent); // 动态获取文件上传进度
};

//上传Ref
const pictureUpload = ref();

//删除
const handleRemove = (file: UploadFile) => {
  pictureUpload.value.handleRemove(file);
};

const handleDownload = (file: UploadFile) => {
  const link = document.createElement("a");
  link.target = "_blank";
  // 将生成的 url 设置为 a.href 属性 （file.downloadUrl 属性也是一个链接，是一个自定义的链接）
  link.href = file.url || "";
  // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
  link.download = file.name || "图片";
  //触发相应事件
  link.click();
  //移除a标签
  link.remove();
};
</script>

<style scoped lang="scss">
.el-upload-list--picture-card{
    display: none !important;
  }
.chris-prew{
  :deep(.el-upload-list--picture-card .el-upload-list__item){
    overflow: inherit;
  }


}
</style>
