import { ButtonProps } from './Button';
import { PropType } from "vue";
import { Args } from "./useTable";
export type NewTableCtx = Args;
export declare const NewTable: {
    request: FunctionConstructor;
    parseData: FunctionConstructor;
    path: StringConstructor;
    toTalPath: StringConstructor;
    pageNum: StringConstructor;
    pageSize: StringConstructor;
    searchSize: {
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
    buttons: PropType<ButtonProps[] | undefined>;
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
