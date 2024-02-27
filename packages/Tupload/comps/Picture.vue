<template>
  <el-upload
    v-bind="props"
    ref="pictureUpload"
    v-model:fileList="fileList"
    :on-progress="uploadVideoProcess"
    class="chris-prew"
    list-type="picture"
  >
    <slot> </slot>
    <slot name="file"> </slot> <slot name="tip"> </slot>
    <slot name="trigger"> </slot>
    <template #tip>
      <div v-if="props.tip" v-html="props.tip"></div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";

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
const uploadVideoProcess = (event: any) => {
  loadProgress.value = parseInt(event.percent); // 动态获取文件上传进度
};

//上传Ref
const pictureUpload = ref();
</script>

<style scoped lang="scss">
:deep(.el-upload.el-upload--text) {
  display: block;
}
</style>
