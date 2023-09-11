import { PropType } from "vue";
import { Args } from "./useTable";
export type NewTableCtx = Args;
export declare const NewTable: {
    request: FunctionConstructor;
    column: {
        type: NumberConstructor;
        default: number;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
    };
    parseData: FunctionConstructor;
    path: StringConstructor;
    totalPath: StringConstructor;
    pageNum: StringConstructor;
    pageSize: StringConstructor;
    size: {
        type: StringConstructor;
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
    };
    index: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: {
            label: string;
            width: number;
            hide: boolean;
        };
    };
    buttons: PropType<import("./Button").ButtonProps[] | undefined>;
    pagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchData: ObjectConstructor;
    layout: {
        type: StringConstructor;
        default: string;
    };
    pageSizes: {
        type: ArrayConstructor;
        default: number[];
    };
};
