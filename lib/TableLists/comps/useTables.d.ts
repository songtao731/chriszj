import { Args } from "../../TableList/comps/useTable";
import { TabsProps } from "./TabsProps";
export interface newArg extends TabsProps {
    table: (parms: any) => Args;
}
export declare const useTables: (args: newArg) => {
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
    table: (parms: any) => Args;
};
