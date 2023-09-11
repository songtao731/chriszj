import TableList from "./TableList";
import TableLists from "./TableLists";
import Tupload from "./Tupload";
import Timgs from "./Timgs";
import Tform from "./Tform";
import Tdescriptions from "./Tdescriptions";
import { App } from "vue";
declare const chris: {
    useTable: (args: import("./TableList").Args) => import("./TableList").Args;
    useTables: (args: import("./TableLists/comps/useTables").newArg) => {
        tabs: {
            type?: string | undefined;
            activeName: string | number;
            closable?: boolean | undefined;
            addable?: boolean | undefined;
            modelValue?: string | number | undefined;
            editable?: boolean | undefined;
            tabPosition?: "top" | "bottom" | "left" | "right" | undefined;
            stretch?: boolean | undefined;
            beforeLeave?: (() => true) | undefined;
            tabsList: {
                label: string;
                value: string | number;
            }[];
        };
        table: (parms: any) => import("./TableList").Args;
    };
    useForm: (args: import("./Tform/comp/useForm").Args) => import("./Tform/comp/useForm").Args;
    useDescriptions: (args: import("./Tdescriptions/comps/useDescriptions").Args) => import("./Tdescriptions/comps/useDescriptions").Args;
    rulesFn: () => {
        rules: import("./utils/index").RuleObject[];
        required(required: boolean, message?: string | undefined, trigger?: "click" | "focus" | "blur" | "change" | undefined): any;
        range(min: number, max: number, message: string, trigger?: "click" | "focus" | "blur" | "change" | undefined): any;
        pattern(pattern: string | RegExp, message: string, trigger?: "click" | "focus" | "blur" | "change" | undefined): any;
        validator(validator: any, trigger?: "click" | "focus" | "blur" | "change" | undefined): any;
    };
};
export { TableList, TableLists, Tupload, Timgs, Tform, Tdescriptions, chris };
declare const install: {
    install(App: App<any>): void;
};
export default install;
