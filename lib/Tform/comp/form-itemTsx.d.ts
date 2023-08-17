declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: import("vue").PropType<import("./useForm").dataItem[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<import("./useForm").direction>;
        default: string;
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
        type: NumberConstructor;
        default: number;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("getParams" | "resetFn")[], "getParams" | "resetFn", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: import("vue").PropType<import("./useForm").dataItem[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<import("./useForm").direction>;
        default: string;
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
        type: NumberConstructor;
        default: number;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onGetParams?: ((...args: any[]) => any) | undefined;
    onResetFn?: ((...args: any[]) => any) | undefined;
}, {
    size: import("./useForm").size;
    title: string;
    column: number;
    border: boolean;
    dataList: import("./useForm").dataItem[];
    direction: import("./useForm").direction;
    extra: string;
}, {}>;
export default _default;
