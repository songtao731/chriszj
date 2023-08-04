declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
        type: import("vue").PropType<Omit<import("./Button").ButtonProps, "onClick">[] | undefined>;
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
    renderHeader: import("vue").PropType<(data: {
        column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
        $index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    sortable: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    sortMethod: import("vue").PropType<(a: any, b: any) => number>;
    sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnKey: StringConstructor;
    align: StringConstructor;
    headerAlign: StringConstructor;
    showOverflowTooltip: {
        type: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        default: undefined;
    };
    fixed: (StringConstructor | BooleanConstructor)[];
    formatter: import("vue").PropType<(row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    selectable: import("vue").PropType<(row: any, index: number) => boolean>;
    reserveSelection: BooleanConstructor;
    filterMethod: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<any>>;
    filteredValue: import("vue").PropType<string[]>;
    filters: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").Filters>;
    filterPlacement: StringConstructor;
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    index: import("vue").PropType<number | ((index: number) => number)>;
    sortOrders: {
        type: import("vue").PropType<("ascending" | "descending" | null)[]>;
        default: () => (string | null)[];
        validator: (val: ("ascending" | "descending" | null)[]) => boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<Omit<import("./Button").ButtonProps, "onClick">[] | undefined>;
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
    renderHeader: import("vue").PropType<(data: {
        column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>;
        $index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    sortable: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    sortMethod: import("vue").PropType<(a: any, b: any) => number>;
    sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnKey: StringConstructor;
    align: StringConstructor;
    headerAlign: StringConstructor;
    showOverflowTooltip: {
        type: import("vue").PropType<boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined>;
        default: undefined;
    };
    fixed: (StringConstructor | BooleanConstructor)[];
    formatter: import("vue").PropType<(row: any, column: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<any>, cellValue: any, index: number) => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    selectable: import("vue").PropType<(row: any, index: number) => boolean>;
    reserveSelection: BooleanConstructor;
    filterMethod: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").FilterMethods<any>>;
    filteredValue: import("vue").PropType<string[]>;
    filters: import("vue").PropType<import("element-plus/es/components/table/src/table-column/defaults").Filters>;
    filterPlacement: StringConstructor;
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    index: import("vue").PropType<number | ((index: number) => number)>;
    sortOrders: {
        type: import("vue").PropType<("ascending" | "descending" | null)[]>;
        default: () => (string | null)[];
        validator: (val: ("ascending" | "descending" | null)[]) => boolean;
    };
}>>, {
    type: string;
    buttons: Omit<import("./Button").ButtonProps, "onClick">[] | undefined;
    prop: string;
    width: string | number;
    minWidth: string | number;
    sortable: string | boolean;
    resizable: boolean;
    showOverflowTooltip: boolean | Partial<Pick<import("element-plus").ElTooltipProps, "showArrow" | "effect" | "enterable" | "popperClass" | "offset" | "placement" | "popperOptions" | "showAfter" | "hideAfter">> | undefined;
    reserveSelection: boolean;
    filterMultiple: boolean;
    sortOrders: ("ascending" | "descending" | null)[];
    formatType: string;
    slotName: string;
    header: boolean;
    dictData: unknown[] | Record<string, any>;
    filter: string | Record<string, any>;
    hide: boolean;
}, {}>, {
    header?(_: any): any;
    default?(_: any): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
