declare const TableList: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            border?: boolean | undefined;
            index?: boolean | Record<string, any> | undefined;
            className?: string | undefined;
            buttonsPosition?: string | undefined;
            data?: any[] | undefined;
            style?: import("vue").CSSProperties | undefined;
            treeProps?: {
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined;
            column?: number | undefined;
            labelPosition?: string | undefined;
            gutter?: number | undefined;
            emptyText?: string | undefined;
            pagination?: boolean | undefined;
            layout?: string | undefined;
            pageSizes?: unknown[] | undefined;
            currentPage?: number | undefined;
            currentPageSize?: number | undefined;
            fit?: boolean | undefined;
            stripe?: boolean | undefined;
            showHeader?: boolean | undefined;
            showSummary?: boolean | undefined;
            highlightCurrentRow?: boolean | undefined;
            defaultExpandAll?: boolean | undefined;
            selectOnIndeterminate?: boolean | undefined;
            indent?: number | undefined;
            lazy?: boolean | undefined;
            tableLayout?: ("fixed" | "auto") | undefined;
            scrollbarAlwaysOn?: boolean | undefined;
            flexible?: boolean | undefined;
            ref?: ((string | Function) & import("vue").VNodeRef) | undefined;
            readonly size?: string | undefined;
            readonly buttons?: import("./comps/Button").ButtonProps[] | undefined;
            readonly width?: string | number | undefined;
            readonly showOverflowTooltip?: boolean | Partial<Pick<import("element-plus").ElTooltipProps, "effect" | "popperClass" | "placement" | "showArrow" | "enterable" | "offset" | "popperOptions" | "showAfter" | "hideAfter">> | undefined;
            readonly columns?: import("./comps/TableColumnItem").NewTableColumn<any>[] | undefined;
            key?: string | number | symbol | undefined;
            readonly title?: string | undefined;
            readonly path?: string | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            onSelect?: ((selection: any[], row: any) => any) | undefined;
            readonly rowKey?: string | ((row: any) => string) | undefined;
            readonly summaryMethod?: ((data: {
                columns: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>[];
                data: any[];
            }) => string[]) | undefined;
            readonly rowClassName?: (string | ((data: {
                row: any;
                rowIndex: number;
            }) => string)) | undefined;
            readonly rowStyle?: (import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
            }) => import("vue").CSSProperties)) | undefined;
            readonly cellClassName?: (string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string)) | undefined;
            readonly cellStyle?: (import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties)) | undefined;
            readonly headerRowClassName?: (string | ((data: {
                row: any;
                rowIndex: number;
            }) => string)) | undefined;
            readonly headerRowStyle?: (import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
            }) => import("vue").CSSProperties)) | undefined;
            readonly headerCellClassName?: (string | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => string)) | undefined;
            readonly headerCellStyle?: (import("vue").CSSProperties | ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => import("vue").CSSProperties)) | undefined;
            readonly expandRowKeys?: any[] | undefined;
            readonly defaultSort?: import("./comps/Pride").Sort | undefined;
            readonly tooltipOptions?: Partial<Pick<import("element-plus").ElTooltipProps, "effect" | "popperClass" | "placement" | "showArrow" | "enterable" | "offset" | "popperOptions" | "showAfter" | "hideAfter">> | undefined;
            readonly spanMethod?: ((data: {
                row: any;
                rowIndex: number;
                column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
                columnIndex: number;
            }) => number[] | {
                rowspan: number;
                colspan: number;
            } | undefined) | undefined;
            readonly load?: ((row: any, treeNode: import("./comps/Pride").TreeNode, resolve: (data: any[]) => void) => void) | undefined;
            readonly searchData?: Record<string, any> | undefined;
            readonly labelWidth?: string | number | undefined;
            onResetFn?: (() => any) | undefined;
            onExpandChange?: ((row: any, expanded: boolean | any[]) => any) | undefined;
            readonly height?: string | number | undefined;
            readonly pageSize?: string | undefined;
            readonly request?: Function | undefined;
            readonly parseData?: Function | undefined;
            readonly totalPath?: string | undefined;
            readonly pageNum?: string | undefined;
            readonly maxHeight?: string | number | undefined;
            readonly sumText?: string | undefined;
            readonly currentRowKey?: string | number | undefined;
            readonly tooltipEffect?: string | undefined;
            onQuery?: ((options: {
                pageNum: number;
                pageSize: number;
                total: number;
                dataList: any[];
                filterForm: any;
            }) => any) | undefined;
            onGetSearchData?: ((data: any) => any) | undefined;
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
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "select", selection: any[], row: any) => void) & ((event: "resetFn") => void) & ((event: "query", options: {
            pageNum: number;
            pageSize: number;
            total: number;
            dataList: any[];
            filterForm: any;
        }) => void) & ((event: "getSearchData", data: any) => void) & ((event: "selectAll", selection: any[]) => void) & ((event: "selectionChange", selection: any[]) => void) & ((event: "cellMouseEnter", row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: MouseEvent) => void) & ((event: "cellMouseLeave", row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: MouseEvent) => void) & ((event: "cellContextmenu", row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => void) & ((event: "cellClick", row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => void) & ((event: "cellDblclick", row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cell: HTMLTableCellElement, ev: Event) => void) & ((event: "rowClick", row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => void) & ((event: "rowContextmenu", row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => void) & ((event: "rowDblclick", row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => void) & ((event: "headerClick", column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => void) & ((event: "headerContextmenu", column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => void) & ((event: "sortChange", prop: {
            column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
            prop: any;
            order: any;
        }) => void) & ((event: "filterChange", filters: any) => void) & ((event: "currentChange", currentRow: any, oldCurrentRow: any) => void) & ((event: "headerDragend", newWidth: number, oldWidth: number, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, ev: Event) => void) & ((event: "expandChange", row: any, expanded: boolean | any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            request: FunctionConstructor;
            title: StringConstructor;
            column: {
                type: NumberConstructor;
                default: number;
            };
            gutter: {
                type: NumberConstructor;
                default: number;
            };
            labelWidth: {
                type: (StringConstructor | NumberConstructor)[];
            };
            parseData: FunctionConstructor;
            path: StringConstructor;
            totalPath: StringConstructor;
            pageNum: StringConstructor;
            pageSize: StringConstructor;
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
            buttons: import("vue").PropType<import("./comps/Button").ButtonProps[] | undefined>;
            buttonsPosition: {
                type: StringConstructor;
                default: string;
            };
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
            currentPage: {
                type: NumberConstructor;
                default: number;
            };
            currentPageSize: {
                type: NumberConstructor;
                default: number;
            };
            data: {
                type: import("vue").PropType<any[]>;
                default: () => never[];
            };
            ref: (StringConstructor | FunctionConstructor)[];
            columns: {
                (arrayLength: number): import("./comps/TableColumnItem").NewTableColumn<any>[];
                (...items: import("./comps/TableColumnItem").NewTableColumn<any>[]): import("./comps/TableColumnItem").NewTableColumn<any>[];
                new (arrayLength: number): import("./comps/TableColumnItem").NewTableColumn<any>[];
                new (...items: import("./comps/TableColumnItem").NewTableColumn<any>[]): import("./comps/TableColumnItem").NewTableColumn<any>[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            size: StringConstructor;
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
            emptyText: {
                type: StringConstructor;
                default: string;
            };
            expandRowKeys: import("vue").PropType<any[] | undefined>;
            defaultExpandAll: BooleanConstructor;
            defaultSort: import("vue").PropType<import("./comps/Pride").Sort | undefined>;
            tooltipEffect: StringConstructor;
            tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "effect" | "popperClass" | "placement" | "showArrow" | "enterable" | "offset" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
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
            load: import("vue").PropType<((row: any, treeNode: import("./comps/Pride").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
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
            showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "effect" | "popperClass" | "placement" | "showArrow" | "enterable" | "offset" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
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
            onGetSearchData?: ((data: any) => any) | undefined;
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
            tableRef: import("vue").Ref<any>;
            formRef: import("vue").Ref<any>;
            refresh: (data: any) => void;
            params: import("vue").Ref<any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            resetFn: () => true;
            getSearchData: (data: any) => any;
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
        }, string, {
            border: boolean;
            index: boolean | Record<string, any>;
            className: string;
            buttonsPosition: string;
            data: any[];
            style: import("vue").CSSProperties;
            treeProps: {
                hasChildren?: string | undefined;
                children?: string | undefined;
            } | undefined;
            column: number;
            labelPosition: string;
            gutter: number;
            emptyText: string;
            pagination: boolean;
            layout: string;
            pageSizes: unknown[];
            currentPage: number;
            currentPageSize: number;
            fit: boolean;
            stripe: boolean;
            showHeader: boolean;
            showSummary: boolean;
            highlightCurrentRow: boolean;
            defaultExpandAll: boolean;
            selectOnIndeterminate: boolean;
            indent: number;
            lazy: boolean;
            tableLayout: "fixed" | "auto";
            scrollbarAlwaysOn: boolean;
            flexible: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T_5 extends string | ((...args: any) => any)>(source: T_5, cb: T_5 extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        request: FunctionConstructor;
        title: StringConstructor;
        column: {
            type: NumberConstructor;
            default: number;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        labelWidth: {
            type: (StringConstructor | NumberConstructor)[];
        };
        parseData: FunctionConstructor;
        path: StringConstructor;
        totalPath: StringConstructor;
        pageNum: StringConstructor;
        pageSize: StringConstructor;
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
        buttons: import("vue").PropType<import("./comps/Button").ButtonProps[] | undefined>;
        buttonsPosition: {
            type: StringConstructor;
            default: string;
        };
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
        currentPage: {
            type: NumberConstructor;
            default: number;
        };
        currentPageSize: {
            type: NumberConstructor;
            default: number;
        };
        data: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        ref: (StringConstructor | FunctionConstructor)[];
        columns: {
            (arrayLength: number): import("./comps/TableColumnItem").NewTableColumn<any>[];
            (...items: import("./comps/TableColumnItem").NewTableColumn<any>[]): import("./comps/TableColumnItem").NewTableColumn<any>[];
            new (arrayLength: number): import("./comps/TableColumnItem").NewTableColumn<any>[];
            new (...items: import("./comps/TableColumnItem").NewTableColumn<any>[]): import("./comps/TableColumnItem").NewTableColumn<any>[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        size: StringConstructor;
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
        emptyText: {
            type: StringConstructor;
            default: string;
        };
        expandRowKeys: import("vue").PropType<any[] | undefined>;
        defaultExpandAll: BooleanConstructor;
        defaultSort: import("vue").PropType<import("./comps/Pride").Sort | undefined>;
        tooltipEffect: StringConstructor;
        tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "effect" | "popperClass" | "placement" | "showArrow" | "enterable" | "offset" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
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
        load: import("vue").PropType<((row: any, treeNode: import("./comps/Pride").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
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
        showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "effect" | "popperClass" | "placement" | "showArrow" | "enterable" | "offset" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
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
        onGetSearchData?: ((data: any) => any) | undefined;
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
    } & import("vue").ShallowUnwrapRef<{
        tableRef: import("vue").Ref<any>;
        formRef: import("vue").Ref<any>;
        refresh: (data: any) => void;
        params: import("vue").Ref<any>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    request: FunctionConstructor;
    title: StringConstructor;
    column: {
        type: NumberConstructor;
        default: number;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
    };
    parseData: FunctionConstructor;
    path: StringConstructor;
    totalPath: StringConstructor;
    pageNum: StringConstructor;
    pageSize: StringConstructor;
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
    buttons: import("vue").PropType<import("./comps/Button").ButtonProps[] | undefined>;
    buttonsPosition: {
        type: StringConstructor;
        default: string;
    };
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
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    currentPageSize: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    ref: (StringConstructor | FunctionConstructor)[];
    columns: {
        (arrayLength: number): import("./comps/TableColumnItem").NewTableColumn<any>[];
        (...items: import("./comps/TableColumnItem").NewTableColumn<any>[]): import("./comps/TableColumnItem").NewTableColumn<any>[];
        new (arrayLength: number): import("./comps/TableColumnItem").NewTableColumn<any>[];
        new (...items: import("./comps/TableColumnItem").NewTableColumn<any>[]): import("./comps/TableColumnItem").NewTableColumn<any>[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    size: StringConstructor;
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
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    expandRowKeys: import("vue").PropType<any[] | undefined>;
    defaultExpandAll: BooleanConstructor;
    defaultSort: import("vue").PropType<import("./comps/Pride").Sort | undefined>;
    tooltipEffect: StringConstructor;
    tooltipOptions: import("vue").PropType<Partial<Pick<import("element-plus").ElTooltipProps, "effect" | "popperClass" | "placement" | "showArrow" | "enterable" | "offset" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
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
    load: import("vue").PropType<((row: any, treeNode: import("./comps/Pride").TreeNode, resolve: (data: any[]) => void) => void) | undefined>;
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
    showOverflowTooltip: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "effect" | "popperClass" | "placement" | "showArrow" | "enterable" | "offset" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
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
    onGetSearchData?: ((data: any) => any) | undefined;
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
    tableRef: import("vue").Ref<any>;
    formRef: import("vue").Ref<any>;
    refresh: (data: any) => void;
    params: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    resetFn: () => true;
    getSearchData: (data: any) => any;
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
}, string, {
    border: boolean;
    index: boolean | Record<string, any>;
    className: string;
    buttonsPosition: string;
    data: any[];
    style: import("vue").CSSProperties;
    treeProps: {
        hasChildren?: string | undefined;
        children?: string | undefined;
    } | undefined;
    column: number;
    labelPosition: string;
    gutter: number;
    emptyText: string;
    pagination: boolean;
    layout: string;
    pageSizes: unknown[];
    currentPage: number;
    currentPageSize: number;
    fit: boolean;
    stripe: boolean;
    showHeader: boolean;
    showSummary: boolean;
    highlightCurrentRow: boolean;
    defaultExpandAll: boolean;
    selectOnIndeterminate: boolean;
    indent: number;
    lazy: boolean;
    tableLayout: "fixed" | "auto";
    scrollbarAlwaysOn: boolean;
    flexible: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Partial<Record<any, (_: {
        scope: any;
    }) => any>> & Partial<Record<string, (_: any) => any>> & {
        topheader?(_: {}): any;
        centerheader?(_: {}): any;
        empty?(_: {}): any;
        append?(_: {}): any;
        header?(_: any): any;
        footer?(_: {}): any;
    };
}) & import("vue").Plugin) & Record<string, any>;
export default TableList;
export * from './comps/Button';
export * from './comps/Pagination';
export * from './comps/Table';
export * from './comps/TableColumn';
export * from './comps/TableColumnItem';
export * from './comps/TableNew';
export * from './comps/useTable';
