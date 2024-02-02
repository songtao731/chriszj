import { UploadFile } from "element-plus";
import { PropType } from "vue";
import { definePropType } from "../../../node_modules/element-plus/es/utils";

export const newImagePrew = {
  file: {
    type: definePropType<UploadFile & { loadProgress: number }>(Object),
  },
  fileList: {
    type: Array as PropType<{ name?: string; url: string }[]>,
    default: () => [],
  },
  width: {
    type: String,
    default: "146px",
  },
  height: {
    type: String,
    default: "146px",
  },
  showName: {
    type: Boolean,
    default: true,
  },
};
