declare const Tform: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean | undefined;
            size?: import("./comp/useForm").size | undefined;
            border?: boolean | undefined;
            buttons?: import("../BaseComps/buttons").ButtonProps[] | undefined;
            title?: string | undefined;
            column?: string | number | undefined;
            labelPosition?: "top" | "left" | "right" | undefined;
            gutter?: number | undefined;
            labelWidth?: string | number | undefined;
            requireAsteriskPosition?: "left" | "right" | undefined;
            labelSuffix?: string | undefined;
            inline?: boolean | undefined;
            inlineMessage?: boolean | undefined;
            statusIcon?: boolean | undefined;
            showMessage?: boolean | undefined;
            validateOnRuleChange?: boolean | undefined;
            hideRequiredAsterisk?: boolean | undefined;
            scrollToError?: boolean | undefined;
            dataList?: import("./comp/useForm").dataItem[] | undefined;
            closePlaceholder?: boolean | undefined;
            buttonsAlign?: string | undefined;
            ref?: import("vue").VNodeRef | undefined;
            key?: string | number | symbol | undefined;
            style?: unknown;
            readonly path?: string | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: string | undefined;
            readonly model?: Record<string, any> | undefined;
            readonly rules?: Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./comp/types").FormItemRule>>> | undefined;
            readonly scrollIntoViewOptions?: boolean | Record<string, any> | undefined;
            readonly request?: Function | Record<string, any> | undefined;
            readonly parseData?: Function | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            model: ObjectConstructor;
            rules: {
                type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./comp/types").FormItemRule>>>>;
            };
            labelPosition: {
                type: import("vue").PropType<"top" | "left" | "right">;
                default: string;
            };
            requireAsteriskPosition: {
                type: import("vue").PropType<"left" | "right">;
                default: string;
            };
            labelWidth: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            labelSuffix: {
                type: StringConstructor;
                default: string;
            };
            inline: BooleanConstructor;
            inlineMessage: BooleanConstructor;
            statusIcon: BooleanConstructor;
            showMessage: {
                type: BooleanConstructor;
                default: boolean;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideRequiredAsterisk: BooleanConstructor;
            scrollToError: BooleanConstructor;
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
                type: import("vue").PropType<import("./comp/useForm").dataItem[]>;
                default: () => never[];
            };
            size: {
                type: import("vue").PropType<import("./comp/useForm").size>;
                default: string;
            };
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
                type: import("vue").PropType<import("../BaseComps/buttons").ButtonProps[]>;
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
        }>>, {
            form: import("vue").Ref<any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            size: import("./comp/useForm").size;
            border: boolean;
            buttons: import("../BaseComps/buttons").ButtonProps[];
            title: string;
            column: string | number;
            labelPosition: "top" | "left" | "right";
            gutter: number;
            labelWidth: string | number;
            requireAsteriskPosition: "left" | "right";
            labelSuffix: string;
            inline: boolean;
            inlineMessage: boolean;
            statusIcon: boolean;
            showMessage: boolean;
            validateOnRuleChange: boolean;
            hideRequiredAsterisk: boolean;
            scrollToError: boolean;
            dataList: import("./comp/useForm").dataItem[];
            closePlaceholder: boolean;
            buttonsAlign: string;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        model: ObjectConstructor;
        rules: {
            type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./comp/types").FormItemRule>>>>;
        };
        labelPosition: {
            type: import("vue").PropType<"top" | "left" | "right">;
            default: string;
        };
        requireAsteriskPosition: {
            type: import("vue").PropType<"left" | "right">;
            default: string;
        };
        labelWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        labelSuffix: {
            type: StringConstructor;
            default: string;
        };
        inline: BooleanConstructor;
        inlineMessage: BooleanConstructor;
        statusIcon: BooleanConstructor;
        showMessage: {
            type: BooleanConstructor;
            default: boolean;
        };
        validateOnRuleChange: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideRequiredAsterisk: BooleanConstructor;
        scrollToError: BooleanConstructor;
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
            type: import("vue").PropType<import("./comp/useForm").dataItem[]>;
            default: () => never[];
        };
        size: {
            type: import("vue").PropType<import("./comp/useForm").size>;
            default: string;
        };
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
            type: import("vue").PropType<import("../BaseComps/buttons").ButtonProps[]>;
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
    }>> & import("vue").ShallowUnwrapRef<{
        form: import("vue").Ref<any>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    model: ObjectConstructor;
    rules: {
        type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./comp/types").FormItemRule>>>>;
    };
    labelPosition: {
        type: import("vue").PropType<"top" | "left" | "right">;
        default: string;
    };
    requireAsteriskPosition: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    labelSuffix: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
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
        type: import("vue").PropType<import("./comp/useForm").dataItem[]>;
        default: () => never[];
    };
    size: {
        type: import("vue").PropType<import("./comp/useForm").size>;
        default: string;
    };
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
        type: import("vue").PropType<import("../BaseComps/buttons").ButtonProps[]>;
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
}>>, {
    form: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    size: import("./comp/useForm").size;
    border: boolean;
    buttons: import("../BaseComps/buttons").ButtonProps[];
    title: string;
    column: string | number;
    labelPosition: "top" | "left" | "right";
    gutter: number;
    labelWidth: string | number;
    requireAsteriskPosition: "left" | "right";
    labelSuffix: string;
    inline: boolean;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: boolean;
    validateOnRuleChange: boolean;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
    dataList: import("./comp/useForm").dataItem[];
    closePlaceholder: boolean;
    buttonsAlign: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: {
        scope: any;
    }) => any>> & {
        title?(_: {}): any;
        buttons?(_: {}): any;
        footer?(_: {}): any;
    };
}) & import("vue").Plugin) & Record<string, any>;
export default Tform;
