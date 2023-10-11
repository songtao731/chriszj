import { NewTableColumn } from "./TableColumnItem";
import { ButtonProps } from "./Button";
export interface Args {
    request?: (...arg: any[]) => Promise<any>;
    columns: Partial<NewTableColumn<any>>[];
    column?: number;
    gutter?: number;
    labelWidth?: string | number;
    data?: any[];
    path?: string;
    totalPath?: string;
    size?: '' | 'large' | 'default' | 'small';
    labelPosition?: "left" | "top" | "right";
    parseData?: (row: any) => {
        rows: any[];
    };
    pageNum?: string;
    pageSize?: string;
    index?: {
        label?: string;
        width?: string | number;
        hide?: boolean;
    } | boolean;
    buttons?: ButtonProps[];
    pagination?: boolean;
    searchData?: object;
    layout?: string;
    pageSizes?: number[];
    currentPage?: number;
    currentPageSize?: number;
}
export declare const useTable: (args: Args) => Args;
