<template>
  <PictureCard
    v-if="props.listType === 'picture-card'"
    v-bind="props"
    :on-exceed="onExceed"
    :before-upload="beforeUpload"
    :on-success="onSuccess"
    ref="pictureCardRef"
    v-model:fileList="fileList"
  >
  </PictureCard>
  <PicturText
    v-if="props.listType === 'text'"
    v-bind="props"
    :on-exceed="onExceed"
    :before-upload="beforeAvatarUpload"
    :on-success="onSuccess"
    ref="pictureCardRef"
    v-model:fileList="fileList"
    class="w-full"
  >
    <slot>
      <el-button type="primary" class="min-w-[6em]" v-if="!props.slotText">{{
        props.buttonTest
      }}</el-button>
      <span v-else v-html="props.slotText"> </span>
    </slot>
    <slot name="file"> </slot>
    <slot name="tip"> </slot>
    <slot name="trigger"> </slot>
  </PicturText>
  <PictureUpload
    v-if="props.listType === 'picture'"
    v-bind="props"
    :on-exceed="onExceed"
    :before-upload="beforeAvatarUpload"
    :on-success="onSuccess"
    ref="pictureCardRef"
    v-model:fileList="fileList"
    class="w-full"
  >
    <slot>
      <el-button type="primary" class="min-w-[6em]" v-if="!props.slotText">{{
        props.buttonTest
      }}</el-button>
      <span v-else v-html="props.slotText"> </span>
    </slot>
    <slot name="file"> </slot>
    <slot name="tip"> </slot>
    <slot name="trigger"> </slot>
  </PictureUpload>
</template>
<script lang="ts" setup>
import PictureCard from "./Picture-card.vue";
import PicturText from "./Text.vue";
import PictureUpload from "./Picture.vue";

import { uploadProps } from "./upload";

import { ref, computed } from "vue";
import {
  ElMessage,
  UploadFile,
  UploadProps,
  UploadUserFile,
} from "element-plus";
const props = defineProps(uploadProps);

const emit = defineEmits(["update:fileList"]);

const pictureCardRef = ref();

//上传的数据
const fileList = computed({
  get() {
    return props.fileList;
  },
  set(value) {
    emit("update:fileList", value);
  },
});

const onSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFile[]
) => {
  if (props.onSuccess.length) {
    return props.onSuccess(response, uploadFile, uploadFiles);
  } else {
    fileList.value = uploadFiles;
  }
};
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (props.beforeUpload.length) {
    return props.beforeUpload(rawFile);
  } else {
    if (props.accept && rawFile.type !== props.accept) {
      ElMessage.error(`请上传${props.accept}的格式`);
      return false;
    } else if (props.size && rawFile.size / 1024 / 1024 > props.size) {
      ElMessage.error(`文件大小超过 ${props.size}MB!`);
      return false;
    }
    return true;
  }
};

const onExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  if (props.onExceed.length) {
    return props.onExceed(files, uploadFiles);
  } else {
    ElMessage.error("已超出文件上传数量");
  }
};

defineExpose({
  pictureCardRef,
  fileList,
});
</script>
<script lang="ts">
export default {
  name: "Tupload",
};
</script>
