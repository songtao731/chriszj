import { NewTableColumn } from './TableColumnItem';
import { ButtonProps } from './Button';
export interface Args {
    request?: ((...arg: any[]) => Promise<any>);
    columns: Partial<NewTableColumn<any>>[];
    data?: any[];
    path?: string;
    totalPath?: string;
    searchSize?: 'medium' | 'small' | 'mini';
    labelPosition?: 'left' | 'top' | 'right';
    parseData?: ((row: any) => {
        rows: any[];
    });
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
}
export declare const useTable: (args: Args) => Args;
