export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text' | '';
export interface ButtonProps {
    size?: 'medium' | 'small' | 'mini';
    type?: ButtonType;
    disabled?: boolean;
    icon?: string;
    plain?: boolean;
    link?: boolean;
    round?: boolean;
    circle?: boolean;
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
    icon: StringConstructor;
    plain: BooleanConstructor;
    link: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    color: StringConstructor;
    dark: BooleanConstructor;
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
