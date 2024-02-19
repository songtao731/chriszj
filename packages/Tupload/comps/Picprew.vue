<template>
  <el-image
    :zoom-rate="1.2"
    :initial-index="4"
    fit="fill"
    :src="url"
    :preview-src-list="srcList"
    ref="imgPrew"
  >
  </el-image>
  <span class="el-upload-list__item-actions">
    <span
      class="el-upload-list__item-preview"
      @click="handlePictureCardPreview"
      v-if="getUrl(props.file).isImg"
    >
      <el-icon><zoom-in /></el-icon>
    </span>
    <span class="el-upload-list__item-delete" @click="handleDownload">
      <el-icon><Download /></el-icon>
    </span>
    <span class="el-upload-list__item-delete" @click="handleRemove">
      <el-icon><Delete /></el-icon>
    </span>
  </span>

  <el-progress
    v-if="percentage && percentage > 0 && upLoadStatus !== 'success'"
    :percentage="percentage"
    :show-text="false"
    :indeterminate="false"
    class="chris-upload-progress"
  />
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { Delete, Download, ZoomIn } from "@element-plus/icons-vue";
import FileExcel from "../imgs/file_excel.png";
import FilePDF from "../imgs/file_pdf.png";
import FilePPT from "../imgs/file_ppt.png";
import FileWord from "../imgs/file_word.png";
import FileZip from "../imgs/file_zip.png";
import FileEmpty from "../imgs/file_empty.png";
import FileRar from "../imgs/file_rar.png";

import { UploadFile } from "element-plus";

const url = ref("");
const srcList = ref<string[]>([]);
//图片Ref
const imgPrew = ref();

const props = defineProps(["file"]);

const emit = defineEmits(["remove", "download"]);

//图片预览的触发事件
const handlePictureCardPreview = () => {
  imgPrew.value.$el.children[0].click();
};
//上传的进度条
const percentage = computed(() => {
  return props.file && props.file.percentage;
});
//上传状态
const upLoadStatus = computed(() => {
  return props.file && props.file.status;
});

srcList.value.push((props.file && props.file.url) || "");

//上传的文件类型
const FileIconMapping: { [key: string]: string } = {
  empty: FileEmpty,
  excel: FileExcel,
  pdf: FilePDF,
  ppt: FilePPT,
  word: FileWord,
  zip: FileZip,
  docx: FileWord,
  xlsx: FileExcel,
  rar: FileRar,
};
//获取文件类型
const getUrl = (
  filename: (UploadFile & { loadProgress: number }) | undefined
) => {
  let url = "";
  let urlType = "";
  let isImg = false;
  if (filename) {
    if (/blob:/.test(filename.url || "")) {
      urlType = (filename.name && filename.name.split(".").pop()) || "";

      if (/png|jpg|jpeg|bmp/gi.test(urlType)) {
        url = filename.url || "";
        isImg = true;
      } else {
        url = FileIconMapping[urlType];
      }
    } else if (/https?:/.test(filename.url || "")) {
      urlType = (filename.url && filename.url.split(".").pop()) || "";
      if (/png|jpg|jpeg|bmp/gi.test(urlType)) {
        url = filename.url || "";
        isImg = true;
      } else {
        url = FileIconMapping[urlType];
      }
    }
  }

  return { url, isImg };
};

url.value = getUrl(props.file).url;

//删除
const handleRemove = () => {
  emit("remove");
};
//下载
const handleDownload = () => {
  emit("download");
};
</script>

<style lang="scss" scoped>
.el-image {
  width: 146px;
  height: 146px;
}
.chris-upload-progress {
  top: 150px;
  width: 100%;
}
</style>
