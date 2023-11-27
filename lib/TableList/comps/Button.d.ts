import { Component } from "@vue/runtime-dom";
export type ButtonType = "default" | "primary" | "success" | "warning" | "info" | "danger" | "text" | "";
export interface ButtonProps {
    size?: "large" | "default" | "small";
    type?: ButtonType;
    disabled?: boolean;
    nativeType?: "button" | "submit" | "reset";
    plain?: boolean;
    text?: boolean;
    bg?: boolean;
    link?: boolean;
    loading?: boolean;
    round?: boolean;
    circle?: boolean;
    loadingIcon?: string | Component;
    icon?: string | Component;
    autofocus?: boolean;
    autoInsertSpaces?: boolean;
    tag?: string | Component;
    color?: string;
    dark?: boolean;
    /**
     * 按钮内容
     */
    content: string;
    /**
     * 点击事件
     */
    onClick: (scope: any) => void;
    /**
     * 是否隐藏
     */
    hide?: boolean | ((scope: any) => boolean);
}
export declare const ButtonTypeProps: {
    size: StringConstructor;
    type: StringConstructor;
    disabled: BooleanConstructor;
    icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
    plain: BooleanConstructor;
    link: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
    nativeType: {
        type: StringConstructor;
        values: readonly ["button", "submit", "reset"];
        default: string;
    };
    text: BooleanConstructor;
    bg: BooleanConstructor;
    loading: BooleanConstructor;
    loadingIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: () => import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    autofocus: BooleanConstructor;
    autoInsertSpaces: BooleanConstructor;
    tag: {
        type: import("vue").PropType<any>;
        default: string;
    };
    /**
     * 按钮内容
     */
    content: StringConstructor;
    /**
     * 点击事件
     */
    onClick: FunctionConstructor;
    /**
     * 是否隐藏
     */
    hidden: (BooleanConstructor | FunctionConstructor)[];
};
