import type { ExtractPropTypes } from 'vue';
import type { FormItemProp } from './form-item';
declare const formMetaProps: {
    readonly size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/vue/props/types").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};
export declare const formProps: {
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils/typescript").Arrayable<import("./types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly labelPosition: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, "left" | "top" | "right", unknown, "right", boolean>;
    readonly requireAsteriskPosition: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    readonly labelWidth: import("element-plus/es/utils/vue/props/types").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    readonly labelSuffix: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: import("element-plus/es/utils/vue/props/types").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly validateOnRuleChange: import("element-plus/es/utils/vue/props/types").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly hideRequiredAsterisk: BooleanConstructor;
    readonly scrollToError: BooleanConstructor;
    readonly scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/vue/props/types").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly title: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    readonly dataList: import("element-plus/es/utils/vue/props/types").EpPropFinalized<(new (...args: any[]) => import("./useForm").dataItem[]) | (() => import("./useForm").dataItem[]) | ((new (...args: any[]) => import("./useForm").dataItem[]) | (() => import("./useForm").dataItem[]))[], unknown, unknown, () => never[], boolean>;
    readonly direction: import("element-plus/es/utils/vue/props/types").EpPropFinalized<(new (...args: any[]) => "vertical" | "horizonta") | (() => import("./useForm").direction) | ((new (...args: any[]) => "vertical" | "horizonta") | (() => import("./useForm").direction))[], unknown, unknown, string, boolean>;
    readonly size: import("element-plus/es/utils/vue/props/types").EpPropFinalized<(new (...args: any[]) => "default" | "small" | "large") | (() => import("./useForm").size) | ((new (...args: any[]) => "default" | "small" | "large") | (() => import("./useForm").size))[], unknown, unknown, string, boolean>;
    readonly border: import("element-plus/es/utils/vue/props/types").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    readonly column: import("element-plus/es/utils/vue/props/types").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    readonly extra: import("element-plus/es/utils/vue/props/types").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    readonly disabled: BooleanConstructor;
};
export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormMetaProps = ExtractPropTypes<typeof formMetaProps>;
export declare const formEmits: {
    validate: (prop: FormItemProp, isValid: boolean, message: string) => boolean;
};
export type FormEmits = typeof formEmits;
export {};
