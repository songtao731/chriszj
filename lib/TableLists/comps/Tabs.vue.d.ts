declare const _default: import("vue").DefineComponent<{
    activeValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabsList: {
        type: ArrayConstructor;
        default: never[];
    };
    isRoute: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "changeTabs"[], "changeTabs", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activeValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabsList: {
        type: ArrayConstructor;
        default: never[];
    };
    isRoute: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChangeTabs?: ((...args: any[]) => any) | undefined;
}, {
    size: string;
    activeValue: string | number;
    tabsList: unknown[];
    isRoute: boolean;
}, {}>;
export default _default;
