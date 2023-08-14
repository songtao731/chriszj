declare const _default: import("vue").DefineComponent<Readonly<{
    total?: any;
    layout?: any;
    pageSizes?: any;
    currentPage?: any;
}>, {
    handleCurrentChange: (val: number) => void;
    handleSizeChange: (val: number) => void;
    pageSize: import("vue").Ref<number>;
    currentPage: import("vue").Ref<number>;
    props: import("@vue/shared").LooseRequired<{
        readonly total?: any;
        readonly layout?: any;
        readonly pageSizes?: any;
        readonly currentPage?: any;
        readonly onGetPage?: ((...args: any[]) => any) | undefined;
    } & {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "getPage"[], "getPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    total?: any;
    layout?: any;
    pageSizes?: any;
    currentPage?: any;
}>>> & {
    onGetPage?: ((...args: any[]) => any) | undefined;
}, {
    readonly total?: any;
    readonly layout?: any;
    readonly pageSizes?: any;
    readonly currentPage?: any;
}, {}>;
export default _default;
