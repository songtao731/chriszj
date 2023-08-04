import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
import { PropType } from "vue";
import { ComputedRef } from 'vue';
import { ButtonProps } from "./Button";
export type FormatValueType = 'price' | 'priceChinese' | 'date' | 'dateTime';
export type FilterType = 'input' | 'select' | 'date' | 'dateRange' | 'dateTime' | 'dateTimeRange' | 'cascader' | 'inputrange';
export interface Filter {
    label?: string;
    prop?: string | string[];
    placeholder?: string | string[];
    type?: FilterType;
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
    filter?: string | Filter;
    value?: string | number | (string | number)[];
    hide?: boolean;
    buttons?: Omit<ButtonProps, 'onClick'>[];
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
    filter: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    hide: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttons: {
        type: PropType<Omit<ButtonProps, "onClick">[] | undefined>;
        default: never[];
    };
};
export interface NewTableColumn<T> extends CustomType, Partial<TableColumnCtx<T>> {
}
export {};
