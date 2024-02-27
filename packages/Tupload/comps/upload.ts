import {
  UploadHooks,
  UploadProgressEvent,
  UploadRawFile,
  UploadRequestHandler,
  UploadUserFile,
} from "element-plus";
import {
  ajaxUpload,
  UploadAjaxError,
} from "element-plus/es/components/upload/src/ajax";
import { PropType } from "vue";
import {
  definePropType,
  mutable,
  NOOP,
} from "../../../node_modules/element-plus/es/utils";

export interface UploadBaseProps {
  action: string;
  method: string;
  data: Record<string, string | Blob | [string | Blob, string]>;
  filename: string;
  file: UploadRawFile;
  headers: Headers | Record<string, string | number | null | undefined>;
  onError: (evt: UploadAjaxError) => void;
  onProgress: (evt: UploadProgressEvent) => void;
  onSuccess: (response: any) => void;
  withCredentials: boolean;
  buttonTest: string;
  slotText: string;
  tip: string;
}

export const uploadBaseProps = {
  action: {
    type: String,
    default: "#",
  },
  headers: {
    type: definePropType<Headers | Record<string, any>>(Object),
  },
  method: {
    type: String,
    default: "post",
  },
  data: {
    type: Object,
    default: () => mutable({} as const),
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "file",
  },
  drag: {
    type: Boolean,
    default: false,
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "select",
  },

  autoUpload: {
    type: Boolean,
    default: true,
  },
  fileList: {
    type: definePropType<UploadUserFile[]>(Array),
    default: () => mutable([] as const),
  },
  listType: {
    type: String as PropType<"text" | "picture" | "picture-card">,
    default: "picture-card",
  },
  httpRequest: {
    type: definePropType<UploadRequestHandler>(Function),
    default: ajaxUpload,
  },
  disabled: Boolean,
  limit: Number,
  size: Number,
  buttonTest: {
    type: String,
    default: "上传",
  },
  slotText: String,
  tip: String,
};

export const uploadProps = {
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType<UploadHooks["beforeUpload"]>(Function),
    default: NOOP,
  },
  beforeRemove: {
    type: definePropType<UploadHooks["beforeRemove"]>(Function),
  },
  onRemove: {
    type: definePropType<UploadHooks["onRemove"]>(Function),
    default: NOOP,
  },
  onChange: {
    type: definePropType<UploadHooks["onChange"]>(Function),
    default: NOOP,
  },
  onPreview: {
    type: definePropType<UploadHooks["onPreview"]>(Function),
    default: NOOP,
  },
  onSuccess: {
    type: definePropType<UploadHooks["onSuccess"]>(Function),
    default: NOOP,
  },
  onProgress: {
    type: definePropType<UploadHooks["onProgress"]>(Function),
    default: NOOP,
  },
  onError: {
    type: definePropType<UploadHooks["onError"]>(Function),
    default: NOOP,
  },
  onExceed: {
    type: definePropType<UploadHooks["onExceed"]>(Function),
    default: NOOP,
  },
  class: String,
};
