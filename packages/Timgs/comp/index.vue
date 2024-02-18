<template>
  <div
    v-for="(item, index) in srcList"
    :key="item.url"
    :style="`width:${props.width}`"
    class="flex mr-3 items-start"
  >
    <div
      class="flex flex-col items-center flex-shrink-0 min-h-[160px] overflow-hidden relative"
    >
      <el-image
        v-bind="props"
        :src="getUrl(item).url"
        :preview-src-list="newImgList"
        ref="imgPrew"
        @click="!getUrl(item).isImg && downFn(item)"
        :style="`width:${props.width};height:${props.height}`"
        :initial-index="index"
        class="border border-solid border-inherit"
      >
      </el-image>

      <div
        v-if="item.name && props.showName"
        class="text-sm mt-2 h-6 text-center break-words truncate cursor-pointer tooltip"
        :style="`width:${props.width}`"
        @click="downFn(item)"
        :data-name="item.name"
      >
        {{ item.name }}
      </div>
      <div v-else class="text-sm mt-2 h-6"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import FileExcel from "../../Tupload/imgs/file_excel.png";
import FilePDF from "../../Tupload/imgs/file_pdf.png";
import FilePPT from "../../Tupload/imgs/file_ppt.png";
import FileWord from "../../Tupload/imgs/file_word.png";
import FileZip from "../../Tupload/imgs/file_zip.png";
import FileEmpty from "../../Tupload/imgs/file_empty.png";
import FileRar from "../../Tupload/imgs/file_rar.png";
import { imageProps } from "./imagePrew";
import { handleDownload } from "../../utils/index";
import { UploadFile } from "element-plus/es/components/upload/src/upload";

//图片Ref
const imgPrew = ref();

const props = defineProps(imageProps);

const srcList = computed(() => props.fileList);

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
const getUrl = (filename: { name?: string; url: string } | undefined) => {
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

const newImgList = computed(() => srcList.value.map((el) => el.url));

//下载
const downFn = (file: { url: string; name?: string }) => {
  handleDownload(file);
};
</script>
<script lang="ts">
export default {
  name: "Timgs",
};
</script>
<style lang="scss" scoped>
.tooltip:hover::after {
  content: attr(data-name); /* 使用data-name属性作为内容 */
  position: absolute;
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden;
  background-color: #666;
  color: white;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  z-index: 1;

  /* 调整位置使得tooltip更接近文本上方 */
  left: 0px;
  bottom: 20px;

  margin-bottom: 10px; /* 增加文本与tooltip之间的距离 */
}
</style>
