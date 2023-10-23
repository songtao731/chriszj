import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import { PropType } from "vue";
import { ComputedRef } from "vue";
import { ButtonProps } from "./Button";
import { MainPackage } from "../../BaseComps/index";
export type FormatValueType = "price" | "priceChinese" | "date" | "dateTime";
export type FilterType = "input" | "select" | "date" | "cascader" | "inputrange" | "checkBox" | "radio" | "rate" | "switch" | "slider" | "space" | "custom";
export interface EventFilter {
    type?: FilterType;
    input?: MainPackage["input"];
    select?: MainPackage["select"];
    date?: MainPackage["date"];
    cascader?: MainPackage["cascader"];
    checkBox?: MainPackage["checkbox"];
    radio?: MainPackage["radio"];
    rate?: MainPackage["rate"];
    switch?: MainPackage["switch"];
    slider?: MainPackage["slider"];
}
export interface Filter {
    label?: string;
    prop?: string | string[];
    placeholder?: string | string[];
    type?: FilterType;
    slotName?: string;
    value?: any;
    options?: {
        label: string;
        value: string;
        children?: {
            label: string;
            value: string;
        }[];
    }[] | ComputedRef<any>;
    showAllLevels?: boolean;
    hide?: boolean;
    deepHide?: boolean;
    rules?: any;
    input?: MainPackage["input"];
    select?: MainPackage["select"];
    date?: MainPackage["date"];
    cascader?: MainPackage["cascader"];
    checkBox?: MainPackage["checkbox"];
    radio?: MainPackage["radio"];
    rate?: MainPackage["rate"];
    switch?: MainPackage["switch"];
    slider?: MainPackage["slider"];
    columns?: [
        {
            prop: string;
            rules?: any;
            value?: any;
            placeholder?: string;
            input?: MainPackage["input"];
        },
        {
            prop: string;
            rules?: any;
            value?: any;
            placeholder?: string;
            input?: MainPackage["input"];
        }
    ];
}
interface CustomType {
    formatType?: FormatValueType;
    slotName?: string;
    header?: boolean;
    dictData?: {
        label: string;
        value: string | number;
        options?: {
            label: string;
            value: string;
        };
    }[] | ComputedRef<any>;
    dictOptions?: {
        label?: string;
        value?: string;
        children?: string;
    };
    filter?: string | Filter;
    value?: string | number | (string | number)[] | boolean;
    hide?: boolean;
    buttons?: Omit<ButtonProps, "onClick">[] | ((row: any) => any[]);
    type?: "selection" | "index" | "expand" | "input" | "select";
    rules?: any;
    event?: EventFilter;
}
export declare const CustomType: {
    formatType: {
        type: StringConstructor;
        default: string;
    };
    slotName: {
        type: StringConstructor;
        default: string;
    };
    header: {
        type: BooleanConstructor;
        default: boolean;
    };
    dictData: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default: never[];
    };
    dictOptions: {
        type: ObjectConstructor;
    };
    filter: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    hide: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttons: {
        type: PropType<Omit<ButtonProps, "onClick">[] | ((row: any) => any[]) | undefined>;
        default: never[];
    };
    event: {
        type: ObjectConstructor;
        default: {};
    };
};
export interface NewTableColumn<T> extends CustomType, Partial<TableColumnCtx<T>> {
}
export {};
