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
          :file="{ ...file, loadProgress }"
          @remove="handleRemove(file)"
          @download="downFn(file)"
        ></Picprew>
      </div>
    </template>
    <template #tip>
      <div v-if="props.tip" v-html="props.tip"></div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { Plus } from "@element-plus/icons-vue";
import Picprew from "./Picprew.vue";

import { ElProgress, UploadFile } from "element-plus";
import { uploadProps } from "./upload";
import { handleDownload } from "../../utils/index";

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
const uploadVideoProcess = (event: any) => {
  loadProgress.value = parseInt(event.percent); // 动态获取文件上传进度
};

//上传Ref
const pictureUpload = ref();

//删除
const handleRemove = (file: UploadFile) => {
  pictureUpload.value.handleRemove(file);
};

const downFn = (file: UploadFile) => {
  handleDownload(file);
};
</script>

<style scoped lang="scss">
.el-upload-list--picture-card {
  display: none !important;
}
.chris-prew {
  :deep(.el-upload-list--picture-card .el-upload-list__item) {
    overflow: inherit;
  }
}
</style>
