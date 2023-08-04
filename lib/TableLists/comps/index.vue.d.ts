declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tabs: {
        type: ObjectConstructor;
        default: {
            type: {
                type: StringConstructor;
                values: string[];
                default: string;
            };
            activeName: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            addable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            tabPosition: {
                type: StringConstructor;
                values: string[];
                default: string;
            };
            beforeLeave: {
                type: FunctionConstructor;
                default: () => boolean;
            };
            stretch: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
    };
    table: {
        type: ObjectConstructor;
        default: {
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
            buttons: import("vue").PropType<import("../../TableList").ButtonProps[] | undefined>;
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
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            ref: (StringConstructor | FunctionConstructor)[];
            columns: {
                (arrayLength: number): import("../../TableList").NewTableColumn<any>[];
                (...items: import("../../TableList").NewTableColumn<any>[]): import("../../TableList").NewTableColumn<any>[];
                new (arrayLength: number): import("../../TableList").NewTableColumn<any>[];
                new (...items: import("../../TableList").NewTableColumn<any>[]): import("../../TableList").NewTableColumn<any>[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            size: import("vue").PropType<("default" | "small" | "large") | undefined>;
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
            rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import("vue").PropType<((data: {
                columns: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>[];
                data: any[];
            }) => string[]) | undefined>;
            rowClassName: import("vue").PropType<(string | ((data: {
                row: any;
                rowIndex: number;
            }) => string)) | undefined>;
            rowStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
            }) => import("vue").CSSProperties)) | undefined>;
            cellClassName: import("vue").PropType<(string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string)) | undefined>;
            cellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties)) | undefined>;
            headerRowClassName: import("vue").PropType<(string | ((data: {
                row: any;
                rowIndex: number;
            }) => string)) | undefined>;
            headerRowStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
            }) => import("vue").CSSProperties)) | undefined>;
            headerCellClassName: import("vue").PropType<(string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string)) | undefined>;
            headerCellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties)) | undefined>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (StringConstructor | NumberConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import("vue").PropType<any[] | undefined>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import("vue").PropType<import("../../TableList/comps/Pride").Sort | undefined>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
            spanMethod: import("vue").PropType<((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
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
                type: import("vue").PropType<{
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined>;
                default: () => {
                    hasChildren: string;
                    children: string;
                };
            };
            lazy: BooleanConstructor;
            load: import("vue").PropType<((row: any, treeNode: import("../../TableList/comps/Pride").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import("vue").PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: {
                type: BooleanConstructor;
                default: boolean;
            };
            flexible: BooleanConstructor;
            showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        };
    };
}, {
    tableRef: tabsRefs;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    resetFn: () => void;
    select: (selection: any[], row: any) => boolean;
    selectAll: (selection: any[]) => boolean;
    selectionChange: (selection: any[]) => boolean;
    cellMouseEnter: (row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: MouseEvent) => boolean;
    cellMouseLeave: (row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: MouseEvent) => boolean;
    cellContextmenu: (row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => boolean;
    cellClick: (row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => boolean;
    cellDblclick: (row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => boolean;
    rowClick: (row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => boolean;
    rowContextmenu: (row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => boolean;
    rowDblclick: (row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => boolean;
    headerClick: (column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => boolean;
    headerContextmenu: (column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => boolean;
    sortChange: (prop: {
        column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
        prop: any;
        order: any;
    }) => boolean;
    filterChange: (filters: any) => boolean;
    currentChange: (currentRow: any, oldCurrentRow: any) => boolean;
    headerDragend: (newWidth: number, oldWidth: number, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => boolean;
    expandChange: (row: any, expanded: boolean | any[]) => boolean;
    query: (options: {
        pageNum: number;
        pageSize: number;
        total: number;
        dataList: any[];
        filterForm: any;
    }) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tabs: {
        type: ObjectConstructor;
        default: {
            type: {
                type: StringConstructor;
                values: string[];
                default: string;
            };
            activeName: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            addable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            tabPosition: {
                type: StringConstructor;
                values: string[];
                default: string;
            };
            beforeLeave: {
                type: FunctionConstructor;
                default: () => boolean;
            };
            stretch: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
    };
    table: {
        type: ObjectConstructor;
        default: {
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
            buttons: import("vue").PropType<import("../../TableList").ButtonProps[] | undefined>;
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
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            ref: (StringConstructor | FunctionConstructor)[];
            columns: {
                (arrayLength: number): import("../../TableList").NewTableColumn<any>[];
                (...items: import("../../TableList").NewTableColumn<any>[]): import("../../TableList").NewTableColumn<any>[];
                new (arrayLength: number): import("../../TableList").NewTableColumn<any>[];
                new (...items: import("../../TableList").NewTableColumn<any>[]): import("../../TableList").NewTableColumn<any>[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            size: import("vue").PropType<("default" | "small" | "large") | undefined>;
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
            rowKey: import("vue").PropType<string | ((row: any) => string) | undefined>;
            showHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSummary: BooleanConstructor;
            sumText: StringConstructor;
            summaryMethod: import("vue").PropType<((data: {
                columns: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>[];
                data: any[];
            }) => string[]) | undefined>;
            rowClassName: import("vue").PropType<(string | ((data: {
                row: any;
                rowIndex: number;
            }) => string)) | undefined>;
            rowStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
            }) => import("vue").CSSProperties)) | undefined>;
            cellClassName: import("vue").PropType<(string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string)) | undefined>;
            cellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties)) | undefined>;
            headerRowClassName: import("vue").PropType<(string | ((data: {
                row: any;
                rowIndex: number;
            }) => string)) | undefined>;
            headerRowStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
            }) => import("vue").CSSProperties)) | undefined>;
            headerCellClassName: import("vue").PropType<(string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string)) | undefined>;
            headerCellStyle: import("vue").PropType<(import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties)) | undefined>;
            highlightCurrentRow: BooleanConstructor;
            currentRowKey: (StringConstructor | NumberConstructor)[];
            emptyText: StringConstructor;
            expandRowKeys: import("vue").PropType<any[] | undefined>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import("vue").PropType<import("../../TableList/comps/Pride").Sort | undefined>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
            spanMethod: import("vue").PropType<((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
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
                type: import("vue").PropType<{
                    hasChildren?: string | undefined;
                    children?: string | undefined;
                } | undefined>;
                default: () => {
                    hasChildren: string;
                    children: string;
                };
            };
            lazy: BooleanConstructor;
            load: import("vue").PropType<((row: any, treeNode: import("../../TableList/comps/Pride").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: () => {};
            };
            className: {
                type: StringConstructor;
                default: string;
            };
            tableLayout: {
                type: import("vue").PropType<"fixed" | "auto">;
                default: string;
            };
            scrollbarAlwaysOn: {
                type: BooleanConstructor;
                default: boolean;
            };
            flexible: BooleanConstructor;
            showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        };
    };
}>> & {
    onSelect?: ((selection: any[], row: any) => any) | undefined;
    onResetFn?: (() => any) | undefined;
    onExpandChange?: ((row: any, expanded: boolean | any[]) => any) | undefined;
    onQuery?: ((options: {
        pageNum: number;
        pageSize: number;
        total: number;
        dataList: any[];
        filterForm: any;
    }) => any) | undefined;
    onSelectAll?: ((selection: any[]) => any) | undefined;
    onSelectionChange?: ((selection: any[]) => any) | undefined;
    onCellMouseEnter?: ((row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: MouseEvent) => any) | undefined;
    onCellMouseLeave?: ((row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: MouseEvent) => any) | undefined;
    onCellContextmenu?: ((row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => any) | undefined;
    onCellClick?: ((row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => any) | undefined;
    onCellDblclick?: ((row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => any) | undefined;
    onRowClick?: ((row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => any) | undefined;
    onRowContextmenu?: ((row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => any) | undefined;
    onRowDblclick?: ((row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => any) | undefined;
    onHeaderClick?: ((column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => any) | undefined;
    onHeaderContextmenu?: ((column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => any) | undefined;
    onSortChange?: ((prop: {
        column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
        prop: any;
        order: any;
    }) => any) | undefined;
    onFilterChange?: ((filters: any) => any) | undefined;
    onCurrentChange?: ((currentRow: any, oldCurrentRow: any) => any) | undefined;
    onHeaderDragend?: ((newWidth: number, oldWidth: number, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => any) | undefined;
}, {
    table: Record<string, any>;
    tabs: Record<string, any>;
}, {}>, Partial<Record<any, (_: any) => any>> & {
    topheader?(_: {}): any;
    search?(_: {}): any;
    empty?(_: {}): any;
    append?(_: {}): any;
    centerheader?(_: {}): any;
    header?(_: any): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
