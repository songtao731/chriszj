import { Awaitable } from "@vueuse/core";
import {
  UploadFile,
  UploadFiles,
  UploadProgressEvent,
  UploadRawFile,
  UploadRequestOptions,
  UploadUserFile,
} from "element-plus";
import { UploadAjaxError } from "element-plus/es/components/upload/src/ajax";
import { Ref } from "vue";

export interface UploadBaseProps {
  action: string;
  method?: string;
  data?: Record<string, string | Blob | [string | Blob, string]>;
  filename?: string;
  file?: UploadRawFile;
  headers?: Headers | Record<string, string | number | null | undefined>;
  multiple?: boolean;
  name?: string;
  showFileList?: boolean;
  drag?: boolean;
  accept?: string;
  withCredentials?: boolean;
  ref?: any;
  tip?: string;
  onPreview?: (uploadFile: UploadFile) => void;
  onRemove?: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;

  onError?: (
    error: Error,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void;
  onProgress?: (
    evt: UploadProgressEvent,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void;
  onSuccess?: (
    response: any,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void;
  onChange?: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
  onExceed?: (files: File[], uploadFiles: UploadUserFile[]) => void;
  beforeUpload?: (
    rawFile: UploadRawFile
  ) => Awaitable<void | undefined | null | boolean | File | Blob>;
  beforeRemove?: (
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => Awaitable<boolean>;
  listType?: "text" | "picture" | "picture-card";
  autoUpload?: boolean;
  httpRequest?: (
    options: UploadRequestOptions
  ) => XMLHttpRequest | Promise<unknown>;
  disabled?: boolean;
  limit?: number;
  fileList?: UploadUserFile[];
  buttonTest?: string;
  slotText?: string;
}
