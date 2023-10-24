import { Args } from "../../TableList/comps/useTable";
import { TabsProps } from "./TabsProps";
export interface newArg extends TabsProps {
    table: (parms: any) => Args;
}
export declare const useTables: (args: newArg) => {
    tabs: {
        activeValue: string | number;
        tabsList: {
            label: string;
            value: string | number;
        }[];
        isRoute?: boolean | undefined;
    };
    table: (parms: any) => Args;
};
