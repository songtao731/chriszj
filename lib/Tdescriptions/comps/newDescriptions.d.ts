import { PropType } from "vue";
import { desItem } from "./useDescriptions";
export declare const newDes: {
    request: (ObjectConstructor | FunctionConstructor)[];
    parseData: FunctionConstructor;
    path: StringConstructor;
    dataList: {
        type: PropType<desItem[]>;
        default: () => never[];
    };
};
