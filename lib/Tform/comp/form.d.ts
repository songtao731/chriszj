import type { ExtractPropTypes, PropType } from "vue";
import type { FormItemProp } from "./form-item";
declare const formMetaProps: {
    readonly size: {
        readonly type: PropType<import("element-plus/es/utils/vue/props/types").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
};
export declare const formProps: {
    /**
     * @description Data of form component.
     */
    model: ObjectConstructor;
    /**
     * @description Validation rules of form.
     */
    rules: {
        type: PropType<Partial<Record<string, import("element-plus/es/utils/typescript").Arrayable<import("./types").FormItemRule>>>>;
    };
    /**
     * @description Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.
     */
    labelPosition: {
        type: PropType<"top" | "left" | "right">;
        default: string;
    };
    /**
     * @description Position of asterisk.
     */
    requireAsteriskPosition: {
        type: PropType<"left" | "right">;
        default: string;
    };
    /**
     * @description Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.
     */
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * @description Suffix of the label.
     */
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description Whether the form is inline.
     */
    inline: BooleanConstructor;
    /**
     * @description Whether to display the error message inline with the form item.
     */
    inlineMessage: BooleanConstructor;
    /**
     * @description Whether to display an icon indicating the validation result.
     */
    statusIcon: BooleanConstructor;
    /**
     * @description Whether to show the error message.
     */
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description Whether to trigger validation when the `rules` prop is changed.
     */
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description Whether to hide required fields should have a red asterisk (star) beside their labels.
     */
    hideRequiredAsterisk: BooleanConstructor;
    /**
     * @description When validation fails, scroll to the first error form entry.
     */
    scrollToError: BooleanConstructor;
    /**
     * @description When validation fails, it scrolls to the first error item based on the scrollIntoView option.
     */
    scrollIntoViewOptions: {
        type: (BooleanConstructor | ObjectConstructor)[];
    };
    request: (ObjectConstructor | FunctionConstructor)[];
    parseData: FunctionConstructor;
    path: StringConstructor;
    title: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: PropType<import("./useForm").dataItem[]>;
        default: () => never[];
    };
    size: {
        type: PropType<import("./useForm").size>;
        default: string;
    }; /**
     * @description Control the size of components in this form.
     */
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    closePlaceholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttons: {
        type: PropType<import("../../BaseComps/buttons").ButtonProps[]>;
        default: () => never[];
    };
    buttonsAlign: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
};
export type FormProps = ExtractPropTypes<typeof formProps>;
export type FormMetaProps = ExtractPropTypes<typeof formMetaProps>;
export declare const formEmits: {
    validate: (prop: FormItemProp, isValid: boolean, message: string) => boolean;
};
export type FormEmits = typeof formEmits;
export {};
