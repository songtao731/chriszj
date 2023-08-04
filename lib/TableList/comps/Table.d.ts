import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import { NewTableColumn } from "./TableColumnItem";
import { Sort, TreeNode } from "./Pride";
type ComponentSize = "large" | "default" | "small";
import type { CSSProperties, ComponentInternalInstance, PropType, Ref, VNode } from "vue";
import TableLayout from "element-plus/es/components/table/src/table-layout";
import { Store } from "element-plus/es/components/table/src/store";
import { ElTooltipProps } from "element-plus/es/components";
export type DefaultRow = any;
interface TableRefs {
    tableWrapper: HTMLElement;
    headerWrapper: HTMLElement;
    footerWrapper: HTMLElement;
    fixedBodyWrapper: HTMLElement;
    rightFixedBodyWrapper: HTMLElement;
    bodyWrapper: HTMLElement;
    appendWrapper: HTMLElement;
    [key: string]: any;
}
interface TableState {
    isGroup: Ref<boolean>;
    resizeState: Ref<{
        width: any;
        height: any;
    }>;
    doLayout: () => void;
    debouncedUpdateLayout: () => void;
}
type Layout = "fixed" | "auto";
type RIS<T> = {
    row: T;
    $index: number;
    store: Store<T>;
    expanded: boolean;
};
type RenderExpanded<T> = ({ row, $index, store, expanded, }: RIS<T>) => VNode;
interface Table<T> extends ComponentInternalInstance {
    $ready: boolean;
    renderExpanded: RenderExpanded<T>;
    layout: TableLayout<T>;
    refs: TableRefs;
    tableId: string;
    state: TableState;
}
type SummaryMethod<T> = (data: {
    columns: TableColumnCtx<T>[];
    data: T[];
}) => string[];
type ColumnCls<T> = string | ((data: {
    row: T;
    rowIndex: number;
}) => string);
type ColumnStyle<T> = CSSProperties | ((data: {
    row: T;
    rowIndex: number;
}) => CSSProperties);
type CellCls<T> = string | ((data: {
    row: T;
    rowIndex: number;
    column: TableColumnCtx<T>;
    columnIndex: number;
}) => string);
type CellStyle<T> = CSSProperties | ((data: {
    row: T;
    rowIndex: number;
    column: TableColumnCtx<T>;
    columnIndex: number;
}) => CSSProperties);
type TableOverflowTooltipOptions = Partial<Pick<ElTooltipProps, "effect" | "enterable" | "hideAfter" | "offset" | "placement" | "popperClass" | "popperOptions" | "showAfter" | "showArrow">>;
export interface TableProps<T> {
    data: T[];
    columns: Array<NewTableColumn<any>>;
    size?: ComponentSize;
    width?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    fit?: boolean;
    stripe?: boolean;
    border?: boolean;
    rowKey?: string | ((row: T) => string);
    context?: Table<T>;
    showHeader?: boolean;
    showSummary?: boolean;
    sumText?: string;
    summaryMethod?: SummaryMethod<T>;
    rowClassName?: ColumnCls<T>;
    rowStyle?: ColumnStyle<T>;
    cellClassName?: CellCls<T>;
    cellStyle?: CellStyle<T>;
    headerRowClassName?: ColumnCls<T>;
    headerRowStyle?: ColumnStyle<T>;
    headerCellClassName?: CellCls<T>;
    headerCellStyle?: CellStyle<T>;
    highlightCurrentRow?: boolean;
    currentRowKey?: string | number;
    emptyText?: string;
    expandRowKeys?: any[];
    defaultExpandAll?: boolean;
    defaultSort?: Sort;
    tooltipEffect?: string;
    tooltipOptions?: TableOverflowTooltipOptions;
    spanMethod?: (data: {
        row: T;
        rowIndex: number;
        column: TableColumnCtx<T>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    } | undefined;
    selectOnIndeterminate?: boolean;
    indent?: number;
    treeProps?: {
        hasChildren?: string;
        children?: string;
    };
    lazy?: boolean;
    load?: (row: T, treeNode: TreeNode, resolve: (data: T[]) => void) => void;
    className?: string;
    style?: CSSProperties;
    tableLayout?: Layout;
    scrollbarAlwaysOn?: boolean;
    flexible?: boolean;
    showOverflowTooltip?: boolean | TableOverflowTooltipOptions;
}
export declare const TableProps: {
    request: FunctionConstructor;
    parseData: FunctionConstructor;
    path: StringConstructor;
    toTalPath: StringConstructor;
    pageNum: StringConstructor;
    pageSize: StringConstructor;
    searchSize: {
        type: StringConstructor;
        default: string;
    };
    labelPosition: {
        type: StringConstructor;
        default: string;
    };
    index: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: {
            label: string;
            width: number;
            hide: boolean;
        };
    };
    buttons: PropType<import("./Button").ButtonProps[] | undefined>;
    pagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchData: ObjectConstructor;
    layout: {
        type: StringConstructor;
        default: string;
    };
    pageSizes: {
        type: ArrayConstructor;
        default: number[];
    };
    data: {
        type: PropType<any[]>;
        default: () => never[];
    };
    ref: (StringConstructor | FunctionConstructor)[];
    columns: {
        (arrayLength: number): NewTableColumn<any>[];
        (...items: NewTableColumn<any>[]): NewTableColumn<any>[];
        new (arrayLength: number): NewTableColumn<any>[];
        new (...items: NewTableColumn<any>[]): NewTableColumn<any>[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    size: PropType<ComponentSize | undefined>;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    fit: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowKey: PropType<string | ((row: any) => string) | undefined>;
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSummary: BooleanConstructor;
    sumText: StringConstructor;
    summaryMethod: PropType<SummaryMethod<any> | undefined>;
    rowClassName: PropType<ColumnCls<any> | undefined>;
    rowStyle: PropType<ColumnStyle<any> | undefined>;
    cellClassName: PropType<CellCls<any> | undefined>;
    cellStyle: PropType<CellStyle<any> | undefined>;
    headerRowClassName: PropType<ColumnCls<any> | undefined>;
    headerRowStyle: PropType<ColumnStyle<any> | undefined>;
    headerCellClassName: PropType<CellCls<any> | undefined>;
    headerCellStyle: PropType<CellStyle<any> | undefined>;
    highlightCurrentRow: BooleanConstructor;
    currentRowKey: (StringConstructor | NumberConstructor)[];
    emptyText: StringConstructor;
    expandRowKeys: PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: PropType<Sort | undefined>;
    tooltipEffect: StringConstructor;
    tooltipOptions: PropType<Partial<Pick<ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
    spanMethod: PropType<((data: {
        row: any;
        rowIndex: number;
        column: TableColumnCtx<any>;
        columnIndex: number;
    }) => number[] | {
        rowspan: number;
        colspan: number;
    } | undefined) | undefined>;
    selectOnIndeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    treeProps: {
        type: PropType<{
            hasChildren?: string | undefined;
            children?: string | undefined;
        } | undefined>;
        default: () => {
            hasChildren: string;
            children: string;
        };
    };
    lazy: BooleanConstructor;
    load: PropType<((row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
    style: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    tableLayout: {
        type: PropType<Layout>;
        default: string;
    };
    scrollbarAlwaysOn: {
        type: BooleanConstructor;
        default: boolean;
    };
    flexible: BooleanConstructor;
    showOverflowTooltip: PropType<boolean | Partial<Pick<ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
};
export declare const vepTableEmits: {
    select: (selection: any[], row: any) => boolean;
    selectAll: (selection: any[]) => boolean;
    selectionChange: (selection: any[]) => boolean;
    cellMouseEnter: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, ev: MouseEvent) => boolean;
    cellMouseLeave: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, ev: MouseEvent) => boolean;
    cellContextmenu: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => boolean;
    cellClick: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => boolean;
    cellDblclick: (row: any, column: TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => boolean;
    rowClick: (row: any, column: TableColumnCtx<any>, ev: Event) => boolean;
    rowContextmenu: (row: any, column: TableColumnCtx<any>, ev: Event) => boolean;
    rowDblclick: (row: any, column: TableColumnCtx<any>, ev: Event) => boolean;
    headerClick: (column: TableColumnCtx<any>, ev: Event) => boolean;
    headerContextmenu: (column: TableColumnCtx<any>, ev: Event) => boolean;
    sortChange: (prop: {
        column: TableColumnCtx<any>;
        prop: any;
        order: any;
    }) => boolean;
    filterChange: (filters: any) => boolean;
    currentChange: (currentRow: any, oldCurrentRow: any) => boolean;
    headerDragend: (newWidth: number, oldWidth: number, column: TableColumnCtx<any>, ev: Event) => boolean;
    expandChange: (row: any, expanded: boolean | any[]) => boolean;
    query: (options: {
        pageNum: number;
        pageSize: number;
        total: number;
        dataList: any[];
        filterForm: any;
    }) => boolean;
};
export {};
