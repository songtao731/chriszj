declare const TableLists: (((props: Record<string, any> & {}) => any) & (new () => {
    $slots: Partial<Record<any, (_: any) => any>> & {
        topheader?(_: {}): any;
        search?(_: {}): any;
        empty?(_: {}): any;
        append?(_: {}): any;
        centerheader?(_: {}): any;
        header?(_: any): any;
        footer?(_: {}): any;
    };
}) & import("vue").Plugin) & Record<string, any>;
export default TableLists;
