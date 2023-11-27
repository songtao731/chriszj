<template>
  <div v-for="(item, index) in srcList" :key="index" class="inline-block relative mr-[10px] border border-solid border-inherit overflow-hidden rounded-sm" :style="`width:${props.width};height:${props.height}`">
    <el-image
      v-bind="props"
      :src="getUrl(item).url"
      :preview-src-list="getImgList(index, item)"
      ref="imgPrew"
      @click="!getUrl(item).isImg && downFn(item)"
      :style="`width:${props.width};height:${props.height}`"
   
    >
    </el-image>
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

const newImgList = computed(() =>
  srcList.value.filter((el) => getUrl(el).isImg).map((el) => el.url)
);

const getImgList = (index, item) => {
  if (getUrl(item).isImg) {
    let arr = [];
    let i = 0;
    for (i; i < newImgList.value.length; i++) {
      arr.push(newImgList.value[i + index]);
      if (i + index >= newImgList.value.length - 1) {
        index = 0 - (i + 1);
      }
    }
 
    return arr;
  }
};

//下载
const downFn = (file: {url:string,name?:string}) => {
  handleDownload(file)
};
</script>
<script lang="ts" >

export default {
  name: "Timgs",
};
</script>

