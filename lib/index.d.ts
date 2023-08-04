import TableList from "./TableList";
import Ups from "./Up";
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
            tabPosition?: "left" | "top" | "right" | "bottom" | undefined;
            stretch?: boolean | undefined;
            beforeLeave?: (() => true) | undefined;
            tabsList: {
                label: string;
                value: string | number;
            }[];
        };
        table: (parms: any) => import("./TableList").Args;
    };
};
export { TableList, Ups, chris };
declare const install: {
    install(App: App<any>): void;
};
export default install;
