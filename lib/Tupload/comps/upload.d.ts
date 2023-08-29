import { UploadProgressEvent, UploadRawFile, UploadRequestHandler, UploadUserFile } from "element-plus";
import { UploadAjaxError } from "element-plus/es/components/upload/src/ajax";
import { PropType } from "vue";
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
export declare const uploadBaseProps: {
    action: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: PropType<Record<string, any> | Headers>;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => import("element-plus/es/utils/typescript").Mutable<{}>;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    fileList: {
        type: PropType<UploadUserFile[]>;
        default: () => [];
    };
    listType: {
        type: PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
    httpRequest: {
        type: PropType<UploadRequestHandler>;
        default: UploadRequestHandler;
    };
    disabled: BooleanConstructor;
    limit: NumberConstructor;
    size: NumberConstructor;
};
export declare const uploadProps: {
    beforeUpload: {
        type: PropType<(rawFile: UploadRawFile) => import("element-plus/es/utils/typescript").Awaitable<boolean | void | Blob | File | null | undefined>>;
        default: () => void;
    };
    beforeRemove: {
        type: PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils/typescript").Awaitable<boolean>>;
    };
    onRemove: {
        type: PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onChange: {
        type: PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onPreview: {
        type: PropType<(uploadFile: import("element-plus").UploadFile) => void>;
        default: () => void;
    };
    onSuccess: {
        type: PropType<(response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onProgress: {
        type: PropType<(evt: UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onError: {
        type: PropType<(error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onExceed: {
        type: PropType<(files: File[], uploadFiles: UploadUserFile[]) => void>;
        default: () => void;
    };
    class: StringConstructor;
    action: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: PropType<Record<string, any> | Headers>;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => import("element-plus/es/utils/typescript").Mutable<{}>;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    fileList: {
        type: PropType<UploadUserFile[]>;
        default: () => [];
    };
    listType: {
        type: PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
    httpRequest: {
        type: PropType<UploadRequestHandler>;
        default: UploadRequestHandler;
    };
    disabled: BooleanConstructor;
    limit: NumberConstructor;
    size: NumberConstructor;
};
