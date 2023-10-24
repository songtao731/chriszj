export interface TabsProps {
    tabs: {
        activeValue: string | number;
        tabsList: {
            label: string;
            value: string | number;
        }[];
        isRoute?: boolean;
    };
}
export declare const TabsziProps: {
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
};
export declare const TabsProps: {
    tabs: {
        type: ObjectConstructor;
        default: {
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
        };
    };
};
export interface tabsRefs {
    [key: string]: any;
}
