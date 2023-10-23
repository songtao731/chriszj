export type direction = "vertical" | "horizonta";
export type size = "large" | "default" | "small";
export type column = "1" | "2" | "3" | "4";
export type typeEnum = "input" | "select" | "space" | "custom" | "date" | "cascader" | "checkBox" | "radio" | "rate" | "upload" | "switch" | "slider" | "range" | "domains";
export type NewDataItem = {
    ref?: Ref<any>;
    label?: string;
    prop?: string;
    type: typeEnum;
    value?: any;
    span?: column | number;
    nospan?: number;
    labelWidth?: string | number;
    required?: boolean;
    placeholder?: string;
    showPlaceholder?: boolean;
    hide?: boolean | Ref<boolean>;
    deepHide?: boolean | Ref<boolean>;
    rules?: any;
    slotName?: string;
    class?: string;
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
    input?: MainPackage["input"];
    select?: MainPackage["select"];
    date?: MainPackage["date"];
    cascader?: MainPackage["cascader"];
    checkBox?: MainPackage["checkbox"];
    radio?: MainPackage["radio"];
    rate?: MainPackage["rate"];
    upload?: MainPackage["upload"];
    switch?: MainPackage["switch"];
    slider?: MainPackage["slider"];
};
export type domain = {
    item: NewDataItem[];
    chriskey: string | number;
};
import { MainPackage } from "../../BaseComps/index";
import { Ref } from "vue";
export type dataItem = {
    ref?: Ref<any>;
    label?: string;
    prop?: string;
    type: typeEnum;
    value?: any;
    domains?: domain[];
    keys?: string;
    title?: string;
    chriskey?: string | number;
    span?: column | number;
    nospan?: number;
    labelWidth?: string | number;
    required?: boolean;
    placeholder?: string;
    showPlaceholder?: boolean;
    hide?: boolean | Ref<boolean>;
    deepHide?: boolean | Ref<boolean>;
    rules?: any;
    slotName?: string;
    class?: string;
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
    input?: MainPackage["input"];
    select?: MainPackage["select"];
    date?: MainPackage["date"];
    cascader?: MainPackage["cascader"];
    checkBox?: MainPackage["checkbox"];
    radio?: MainPackage["radio"];
    rate?: MainPackage["rate"];
    upload?: MainPackage["upload"];
    switch?: MainPackage["switch"];
    slider?: MainPackage["slider"];
};
export interface Args {
    request?: ((...arg: any[]) => Promise<any>) | {
        [key: string]: any;
    };
    edit?: boolean;
    parseData?: (data: any) => any;
    path?: string;
    title?: string;
    dataList: dataItem[];
    column?: column | number;
    labelPosition?: "left" | "right" | "top";
    size?: size;
    gutter?: number;
    closePlaceholder?: boolean;
    labelWidth?: string;
    statusIcon?: boolean;
    hideRequiredAsterisk?: boolean;
    labelSuffix?: string;
    requireAsteriskPosition?: "left" | "right";
    validateOnRuleChange?: boolean;
    disabled?: boolean;
    scrollToError?: boolean;
    scrollIntoViewOptions?: any;
    buttons?: MainPackage["button"][];
    buttonsAlign?: "left" | "center" | "right";
}
export declare const useForm: (args: Args) => Args;
