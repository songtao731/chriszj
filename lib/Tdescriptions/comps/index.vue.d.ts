declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
    request: (ObjectConstructor | FunctionConstructor)[];
    parseData: FunctionConstructor;
    path: StringConstructor;
    dataList: {
        type: import("vue").PropType<import("./useDescriptions").desItem[]>;
        default: () => never[];
    };
}, {
    data: import("vue").Ref<{
        [key: string]: any;
    }>;
    res: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
    request: (ObjectConstructor | FunctionConstructor)[];
    parseData: FunctionConstructor;
    path: StringConstructor;
    dataList: {
        type: import("vue").PropType<import("./useDescriptions").desItem[]>;
        default: () => never[];
    };
}>>, {
    border: boolean;
    title: string;
    column: number;
    dataList: import("./useDescriptions").desItem[];
    direction: "horizontal" | "vertical";
    extra: string;
}, {}>, Partial<Record<string, (_: {}) => any>> & Partial<Record<string, (_: {
    scope: {
        resData: {
            [key: string]: any;
        };
        value: any;
    };
}) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
