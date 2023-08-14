import { UploadFile } from "element-plus";
declare const _default: import("vue").DefineComponent<{
    file: {
        type: import("vue").PropType<UploadFile & {
            loadProgress: number;
        }>;
        required: true;
    };
    fileList: {
        type: import("vue").PropType<{
            url: string;
        }[]>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("remove" | "download")[], "remove" | "download", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    file: {
        type: import("vue").PropType<UploadFile & {
            loadProgress: number;
        }>;
        required: true;
    };
    fileList: {
        type: import("vue").PropType<{
            url: string;
        }[]>;
    };
}>> & {
    onRemove?: ((...args: any[]) => any) | undefined;
    onDownload?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
