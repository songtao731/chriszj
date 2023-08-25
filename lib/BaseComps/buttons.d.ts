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
    hidden?: boolean;
    click?: (scope: any) => void;
}
export declare const ButtonTypeProps: {
    size: StringConstructor;
    type: StringConstructor;
    disabled: BooleanConstructor;
    icon: import("@vue/runtime-core").PropType<string | Component<any, any, any, import("@vue/runtime-core").ComputedOptions, import("@vue/runtime-core").MethodOptions>>;
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
        type: import("@vue/runtime-core").PropType<string | Component<any, any, any, import("@vue/runtime-core").ComputedOptions, import("@vue/runtime-core").MethodOptions>>;
        default: () => import("@vue/runtime-core").DefineComponent<{}, {}, {}, import("@vue/runtime-core").ComputedOptions, import("@vue/runtime-core").MethodOptions, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, {}, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<import("@vue/runtime-core").ExtractPropTypes<{}>>, {}>;
    };
    autofocus: BooleanConstructor;
    autoInsertSpaces: BooleanConstructor;
    tag: {
        type: import("@vue/runtime-core").PropType<string | Component>;
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
    hidden: BooleanConstructor;
    click: FunctionConstructor;
};
