import { PropType } from "vue";
export declare const descriptionProps: {
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never>>;
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
        type: PropType<import("./useDescriptions").desItem[]>;
        default: () => never[];
    };
};
