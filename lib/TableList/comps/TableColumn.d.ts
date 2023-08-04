import type { ComponentInternalInstance, PropType, Ref, VNode } from 'vue';
import type { Table } from './Table';
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
type Filters = {
    text: string;
    value: string;
}[];
type FilterMethods<T> = (value: any, row: T, column: TableColumnCtx<T>) => void;
type ValueOf<T> = T[keyof T];
interface TableColumn<T> extends ComponentInternalInstance {
    vnode: {
        vParent: TableColumn<T> | Table<T>;
    } & VNode;
    vParent: TableColumn<T> | Table<T>;
    columnId: string;
    columnConfig: Ref<Partial<TableColumnCtx<T>>>;
}
export type { Filters, FilterMethods, TableColumnCtx, TableColumn, ValueOf };
declare const _default: {
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
        type: PropType<Omit<import("./Button").ButtonProps, "onClick">[] | undefined>;
        default: never[];
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    renderHeader: PropType<(data: {
        column: TableColumnCtx<any>;
        $index: number;
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    sortable: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    sortMethod: PropType<(a: any, b: any) => number>;
    sortBy: PropType<string | string[] | ((row: any, index: number) => string)>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnKey: StringConstructor;
    align: StringConstructor;
    headerAlign: StringConstructor;
    showOverflowTooltip: {
        type: PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        default: undefined;
    };
    fixed: (StringConstructor | BooleanConstructor)[];
    formatter: PropType<(row: any, column: TableColumnCtx<any>, cellValue: any, index: number) => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    selectable: PropType<(row: any, index: number) => boolean>;
    reserveSelection: BooleanConstructor;
    filterMethod: PropType<import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<any>>;
    filteredValue: PropType<string[]>;
    filters: PropType<import("element-plus/es/components/table/src/table-column/defaults").Filters>;
    filterPlacement: StringConstructor;
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    index: PropType<number | ((index: number) => number)>;
    sortOrders: {
        type: PropType<("ascending" | "descending" | null)[]>;
        default: () => (string | null)[];
        validator: (val: TableColumnCtx<unknown>['sortOrders']) => boolean;
    };
};
export default _default;
