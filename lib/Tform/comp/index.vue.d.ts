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
    labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "110px", boolean>;
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
    size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./useForm").size))[], unknown, unknown, string, boolean>;
    border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    column: import("element-plus/es/utils").EpPropFinalized<(StringConstructor | NumberConstructor)[], unknown, unknown, number, boolean>;
    gutter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    closePlaceholder: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    buttons: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("../../BaseComps/buttons").ButtonProps[]) | (() => import("../../BaseComps/buttons").ButtonProps[]) | ((new (...args: any[]) => import("../../BaseComps/buttons").ButtonProps[]) | (() => import("../../BaseComps/buttons").ButtonProps[]))[], unknown, unknown, () => never[], boolean>;
    buttonsAlign: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    disabled: BooleanConstructor;
}, {
    form: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: ObjectConstructor;
    rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "top" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "110px", boolean>;
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
    size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./useForm").size))[], unknown, unknown, string, boolean>;
    border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    column: import("element-plus/es/utils").EpPropFinalized<(StringConstructor | NumberConstructor)[], unknown, unknown, number, boolean>;
    gutter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    closePlaceholder: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    buttons: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("../../BaseComps/buttons").ButtonProps[]) | (() => import("../../BaseComps/buttons").ButtonProps[]) | ((new (...args: any[]) => import("../../BaseComps/buttons").ButtonProps[]) | (() => import("../../BaseComps/buttons").ButtonProps[]))[], unknown, unknown, () => never[], boolean>;
    buttonsAlign: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    disabled: BooleanConstructor;
}>>, {
    size: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./useForm").size))[], unknown, unknown>;
    disabled: boolean;
    buttons: import("../../BaseComps/buttons").ButtonProps[];
    title: string;
    column: import("element-plus/es/utils").EpPropMergeType<(StringConstructor | NumberConstructor)[], unknown, unknown>;
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
    gutter: number;
    closePlaceholder: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    buttonsAlign: string;
}, {}>, Partial<Record<string, (_: {
    scope: any;
}) => any>> & {
    title?(_: {}): any;
    buttons?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
