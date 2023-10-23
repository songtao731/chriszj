export type TabPaneName = string | number;
export interface TabsProps {
    tabs: {
        activeValue: string | number;
        tabsList: {
            label: string;
            value: string | number;
            color: string;
            backgroundColor: string;
        }[];
        isRoute?: boolean;
        size?: "large" | "default" | "small";
    };
}
export declare const TabsProps: {
    tabs: {
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
    };
};
export interface tabsRefs {
    [key: string]: any;
}
