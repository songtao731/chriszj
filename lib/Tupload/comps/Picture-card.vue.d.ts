import { UploadFile } from "element-plus";
declare const _default: import("vue").DefineComponent<{
    beforeUpload: {
        type: import("vue").PropType<(rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>>;
        default: () => void;
    };
    beforeRemove: {
        type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
    };
    onRemove: {
        type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onChange: {
        type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onPreview: {
        type: import("vue").PropType<(uploadFile: UploadFile) => void>;
        default: () => void;
    };
    onSuccess: {
        type: import("vue").PropType<(response: any, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onProgress: {
        type: import("vue").PropType<(evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onError: {
        type: import("vue").PropType<(error: Error, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onExceed: {
        type: import("vue").PropType<(files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void>;
        default: () => void;
    };
    class: StringConstructor;
    action: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: import("vue").PropType<Headers | Record<string, any>>;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => import("element-plus/es/utils").Mutable<{}>;
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
        type: import("vue").PropType<import("element-plus").UploadUserFile[]>;
        default: () => [];
    };
    listType: {
        type: import("vue").PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
    httpRequest: {
        type: import("vue").PropType<import("element-plus").UploadRequestHandler>;
        default: import("element-plus").UploadRequestHandler;
    };
    disabled: BooleanConstructor;
    limit: NumberConstructor;
    size: NumberConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:fileList"[], "update:fileList", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    beforeUpload: {
        type: import("vue").PropType<(rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>>;
        default: () => void;
    };
    beforeRemove: {
        type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
    };
    onRemove: {
        type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onChange: {
        type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onPreview: {
        type: import("vue").PropType<(uploadFile: UploadFile) => void>;
        default: () => void;
    };
    onSuccess: {
        type: import("vue").PropType<(response: any, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onProgress: {
        type: import("vue").PropType<(evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onError: {
        type: import("vue").PropType<(error: Error, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onExceed: {
        type: import("vue").PropType<(files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void>;
        default: () => void;
    };
    class: StringConstructor;
    action: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: import("vue").PropType<Headers | Record<string, any>>;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => import("element-plus/es/utils").Mutable<{}>;
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
        type: import("vue").PropType<import("element-plus").UploadUserFile[]>;
        default: () => [];
    };
    listType: {
        type: import("vue").PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
    httpRequest: {
        type: import("vue").PropType<import("element-plus").UploadRequestHandler>;
        default: import("element-plus").UploadRequestHandler;
    };
    disabled: BooleanConstructor;
    limit: NumberConstructor;
    size: NumberConstructor;
}>> & {
    "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    multiple: boolean;
    name: string;
    onChange: (uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    type: string;
    data: Record<string, any>;
    onError: (error: Error, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onProgress: (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    fileList: import("element-plus").UploadUserFile[];
    onRemove: (uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    beforeUpload: (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>;
    onPreview: (uploadFile: UploadFile) => void;
    onSuccess: (response: any, uploadFile: UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
    action: string;
    method: string;
    drag: boolean;
    withCredentials: boolean;
    showFileList: boolean;
    accept: string;
    autoUpload: boolean;
    listType: "text" | "picture" | "picture-card";
    httpRequest: import("element-plus").UploadRequestHandler;
}, {}>;
export default _default;
