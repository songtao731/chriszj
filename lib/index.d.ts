import TableList from "./TableList";
import TableLists from "./TableLists";
import Tupload from "./Tupload";
import Timgs from "./Timgs";
import Tform from "./Tform";
import Tdescriptions from "./Tdescriptions";
import Card from "./Card";
import { App } from "vue";
declare const chris: {
    useTable: (args: import("./TableList").Args) => import("./TableList").Args;
    useTables: (args: import("./TableLists/comps/useTables").newArg) => {
        tabs: {
            activeValue: string | number;
            tabsList: {
                label: string;
                value: string | number;
            }[];
            isRoute?: boolean | undefined;
        };
        table: (parms: any) => import("./TableList").Args;
    };
    useForm: (args: import("./Tform/comp/useForm").Args) => import("./Tform/comp/useForm").Args;
    useDescriptions: (args: import("./Tdescriptions/comps/useDescriptions").Args) => import("./Tdescriptions/comps/useDescriptions").Args;
    rulesFn: () => {
        rules: import("./utils/index").RuleObject[];
        required(required: boolean, message?: string | undefined, trigger?: "focus" | "click" | "blur" | "change" | undefined): any;
        range(min: number, max: number, message: string, trigger?: "focus" | "click" | "blur" | "change" | undefined): any;
        pattern(pattern: string | RegExp, message: string, trigger?: "focus" | "click" | "blur" | "change" | undefined): any;
        validator(validator: any, trigger?: "focus" | "click" | "blur" | "change" | undefined): any;
    };
};
export { TableList, TableLists, Tupload, Timgs, Tform, Tdescriptions, Card, chris };
declare const install: {
    install(App: App<any>): void;
};
export default install;
