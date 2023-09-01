export declare const TableLists: {
    table: {
        type: ObjectConstructor;
        default: {
            request: FunctionConstructor;
            parseData: FunctionConstructor;
            path: StringConstructor;
            totalPath: StringConstructor;
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
            size: import("vue").PropType<("default" | "large" | "small") | undefined>;
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
};
