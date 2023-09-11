import { ComputedRef } from "vue";
import { FormatValueType } from "../../TableList/comps/TableColumnItem";
export type direction = "vertical" | "horizontal";
export type size = "large" | "default" | "small";
export type align = "left" | "center" | "right";
export type type = "space" | "prew";
export type prew = {
    width?: string;
    height?: string;
};
export type desItem = {
    label?: string;
    value?: any;
    prop?: string;
    span?: number;
    width?: string | number;
    minWidth?: string | number;
    align?: align;
    labelAlign?: align;
    className?: string;
    labelClassName?: string;
    formatType?: FormatValueType;
    dictData?: {
        [key: string]: any;
    }[] | ComputedRef<any>;
    dictOptions?: {
        label?: string;
        value?: string;
        children?: string;
    };
    hide?: boolean;
    formatData?: (data: any) => any;
    type?: string;
    prew?: prew;
    slotName?: string;
};
export interface Args {
    request?: ((...arg: any[]) => Promise<any>) | {
        [key: string]: any;
    };
    parseData?: (data: any) => any;
    path?: string;
    title?: string;
    border?: boolean;
    column?: number;
    direction?: direction;
    size?: size;
    extra?: string;
    dataList: desItem[];
}
export declare const useDescriptions: (args: Args) => Args;
