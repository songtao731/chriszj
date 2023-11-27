declare const _default: import("vue").DefineComponent<{
    activeValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabsList: {
        type: ArrayConstructor;
        default: {
            label: string;
            value: string;
        }[];
    };
    isRoute: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "changeTabs"[], "changeTabs", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activeValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    tabsList: {
        type: ArrayConstructor;
        default: {
            label: string;
            value: string;
        }[];
    };
    isRoute: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChangeTabs?: ((...args: any[]) => any) | undefined;
}, {
    activeValue: string | number;
    tabsList: unknown[];
    isRoute: boolean;
}, {}>;
export default _default;
