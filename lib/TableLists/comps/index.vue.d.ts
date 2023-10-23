declare const _default: __VLS_WithTemplateSlots<(props: Record<string, any> & {}) => any, Partial<Record<any, (_: any) => any>> & {
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
