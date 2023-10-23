declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    model: ObjectConstructor;
    rules: {
        type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./types").FormItemRule>>>>;
    };
    labelPosition: {
        type: import("vue").PropType<"top" | "left" | "right">;
        default: string;
    };
    requireAsteriskPosition: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        type: (BooleanConstructor | ObjectConstructor)[];
    };
    request: (ObjectConstructor | FunctionConstructor)[];
    edit: {
        type: BooleanConstructor;
        default: boolean;
    };
    parseData: FunctionConstructor;
    path: StringConstructor;
    title: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: import("vue").PropType<import("./useForm").dataItem[]>;
        default: () => never[];
    };
    size: {
        type: import("vue").PropType<import("./useForm").size>;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    closePlaceholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttons: {
        type: import("vue").PropType<import("../../BaseComps/buttons").ButtonProps[]>;
        default: () => never[];
    };
    buttonsAlign: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
}, {
    form: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: ObjectConstructor;
    rules: {
        type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./types").FormItemRule>>>>;
    };
    labelPosition: {
        type: import("vue").PropType<"top" | "left" | "right">;
        default: string;
    };
    requireAsteriskPosition: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        type: (BooleanConstructor | ObjectConstructor)[];
    };
    request: (ObjectConstructor | FunctionConstructor)[];
    edit: {
        type: BooleanConstructor;
        default: boolean;
    };
    parseData: FunctionConstructor;
    path: StringConstructor;
    title: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: import("vue").PropType<import("./useForm").dataItem[]>;
        default: () => never[];
    };
    size: {
        type: import("vue").PropType<import("./useForm").size>;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    closePlaceholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttons: {
        type: import("vue").PropType<import("../../BaseComps/buttons").ButtonProps[]>;
        default: () => never[];
    };
    buttonsAlign: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
}>>, {
    disabled: boolean;
    size: import("./useForm").size;
    border: boolean;
    buttons: import("../../BaseComps/buttons").ButtonProps[];
    title: string;
    column: string | number;
    labelPosition: "top" | "left" | "right";
    gutter: number;
    labelWidth: string | number;
    requireAsteriskPosition: "left" | "right";
    labelSuffix: string;
    inline: boolean;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: boolean;
    validateOnRuleChange: boolean;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
    dataList: import("./useForm").dataItem[];
    edit: boolean;
    closePlaceholder: boolean;
    buttonsAlign: string;
}, {}>, Partial<Record<string, (_: {
    scope: any;
}) => any>> & Partial<Record<any, (_: {
    scope: any;
}) => any>> & {
    title?(_: {}): any;
    buttons?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
