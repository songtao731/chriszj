import { PropType } from "vue";
import { dataItem, size } from "./useForm";
export declare const newForm: {
    title: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: PropType<dataItem[]>;
        default: () => never[];
    };
    size: {
        type: PropType<size>;
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
        type: PropType<import("../../BaseComps/buttons").ButtonProps[]>;
        default: () => never[];
    };
    buttonsAlign: {
        type: StringConstructor;
        default: string;
    };
};
