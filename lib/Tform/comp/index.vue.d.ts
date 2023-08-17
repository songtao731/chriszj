declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    model: ObjectConstructor;
    rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "top" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    dataList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./useForm").dataItem[]) | (() => import("./useForm").dataItem[]) | ((new (...args: any[]) => import("./useForm").dataItem[]) | (() => import("./useForm").dataItem[]))[], unknown, unknown, () => never[], boolean>;
    direction: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "vertical" | "horizonta") | (() => import("./useForm").direction) | ((new (...args: any[]) => "vertical" | "horizonta") | (() => import("./useForm").direction))[], unknown, unknown, string, boolean>;
    size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "default" | "small" | "large") | (() => import("./useForm").size) | ((new (...args: any[]) => "default" | "small" | "large") | (() => import("./useForm").size))[], unknown, unknown, string, boolean>;
    border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    column: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    extra: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: ObjectConstructor;
    rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "top" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
    labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    dataList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./useForm").dataItem[]) | (() => import("./useForm").dataItem[]) | ((new (...args: any[]) => import("./useForm").dataItem[]) | (() => import("./useForm").dataItem[]))[], unknown, unknown, () => never[], boolean>;
    direction: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "vertical" | "horizonta") | (() => import("./useForm").direction) | ((new (...args: any[]) => "vertical" | "horizonta") | (() => import("./useForm").direction))[], unknown, unknown, string, boolean>;
    size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "default" | "small" | "large") | (() => import("./useForm").size) | ((new (...args: any[]) => "default" | "small" | "large") | (() => import("./useForm").size))[], unknown, unknown, string, boolean>;
    border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    column: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    extra: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    disabled: BooleanConstructor;
}>>, {
    size: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "default" | "small" | "large") | (() => import("./useForm").size) | ((new (...args: any[]) => "default" | "small" | "large") | (() => import("./useForm").size))[], unknown, unknown>;
    disabled: boolean;
    title: string;
    column: number;
    labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "top" | "right", unknown>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
    labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    labelSuffix: string;
    inline: boolean;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
    border: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    dataList: import("./useForm").dataItem[];
    direction: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "vertical" | "horizonta") | (() => import("./useForm").direction) | ((new (...args: any[]) => "vertical" | "horizonta") | (() => import("./useForm").direction))[], unknown, unknown>;
    extra: string;
}, {}>, {
    extra?(_: {}): any;
    title?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
