import { UploadFile } from "element-plus/es/components/upload/src/upload";
declare const _default: import("vue").DefineComponent<{
    hideOnClickModal: BooleanConstructor;
    src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown, "fill", boolean>;
    loading: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    lazy: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    scrollContainer: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    previewTeleported: BooleanConstructor;
    zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
    infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    file: {
        readonly type: import("vue").PropType<UploadFile & {
            loadProgress: number;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => {
        name?: string | undefined;
        url: string;
    }[]) | (() => {
        name?: string | undefined;
        url: string;
    }[]) | ((new (...args: any[]) => {
        name?: string | undefined;
        url: string;
    }[]) | (() => {
        name?: string | undefined;
        url: string;
    }[]))[], unknown, unknown, () => never[], boolean>;
    width: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    height: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    hideOnClickModal: BooleanConstructor;
    src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown, "fill", boolean>;
    loading: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    lazy: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    scrollContainer: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    previewTeleported: BooleanConstructor;
    zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
    infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    file: {
        readonly type: import("vue").PropType<UploadFile & {
            loadProgress: number;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => {
        name?: string | undefined;
        url: string;
    }[]) | (() => {
        name?: string | undefined;
        url: string;
    }[]) | ((new (...args: any[]) => {
        name?: string | undefined;
        url: string;
    }[]) | (() => {
        name?: string | undefined;
        url: string;
    }[]))[], unknown, unknown, () => never[], boolean>;
    width: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    height: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
}>>, {
    width: string;
    height: string;
    fit: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown>;
    lazy: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    src: string;
    previewSrcList: string[];
    initialIndex: number;
    infinite: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    zoomRate: number;
    hideOnClickModal: boolean;
    previewTeleported: boolean;
    fileList: {
        name?: string | undefined;
        url: string;
    }[];
}, {}>;
export default _default;
