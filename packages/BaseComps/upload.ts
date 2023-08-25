import { UploadProgressEvent, UploadRawFile } from "element-plus";
import { UploadAjaxError } from "element-plus/es/components/upload/src/ajax";


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
  
}
