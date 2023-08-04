export type TabPaneName = string | number;
export interface TabsProps {
    tabs: {
        type?: string;
        activeName: string | number;
        closable?: boolean;
        addable?: boolean;
        modelValue?: string | number;
        editable?: boolean;
        tabPosition?: "top" | "right" | "bottom" | "left";
        stretch?: boolean;
        beforeLeave?: () => true;
        tabsList: {
            label: string;
            value: string | number;
        }[];
    };
}
export declare const TabsProps: {
    tabs: {
        type: ObjectConstructor;
        default: {
            type: {
                type: StringConstructor;
                values: string[];
                default: string;
            };
            activeName: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            addable: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            tabPosition: {
                type: StringConstructor;
                values: string[];
                default: string;
            };
            beforeLeave: {
                type: FunctionConstructor;
                default: () => boolean;
            };
            stretch: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
    };
};
