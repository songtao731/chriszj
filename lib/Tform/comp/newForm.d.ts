import { PropType } from "vue";
import { dataItem, direction, size } from "./useForm";
export declare const newForm: {
    title: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: PropType<dataItem[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<direction>;
        default: string;
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
        type: NumberConstructor;
        default: number;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
};
