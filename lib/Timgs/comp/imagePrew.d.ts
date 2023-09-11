import type { ExtractPropTypes } from "vue";
export declare const imageProps: {
    readonly hideOnClickModal: BooleanConstructor;
    readonly src: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly fit: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown, "fill", boolean>;
    readonly loading: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/vue/props/types").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly lazy: import("element-plus/es/utils/vue/props/types").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly scrollContainer: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/vue/props/types").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly previewSrcList: import("element-plus/es/utils/vue/props/types").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    readonly previewTeleported: BooleanConstructor;
    readonly zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly initialIndex: import("element-plus/es/utils/vue/props/types").EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
    readonly infinite: import("element-plus/es/utils/vue/props/types").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly closeOnPressEscape: import("element-plus/es/utils/vue/props/types").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly zoomRate: import("element-plus/es/utils/vue/props/types").EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    readonly file: {
        readonly type: import("vue").PropType<import("element-plus").UploadFile & {
            loadProgress: number;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly fileList: import("element-plus/es/utils/vue/props/types").EpPropFinalized<(new (...args: any[]) => {
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
    readonly width: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    readonly height: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
};
export type ImageProps = ExtractPropTypes<typeof imageProps>;
export declare const imageEmits: {
    load: (evt: Event) => boolean;
    error: (evt: Event) => boolean;
    switch: (val: number) => boolean;
    close: () => boolean;
    show: () => boolean;
};
export type ImageEmits = typeof imageEmits;
