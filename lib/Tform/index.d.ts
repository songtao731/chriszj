declare const Tform: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            size?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size))[], unknown, unknown> | undefined;
            disabled?: boolean | undefined;
            buttons?: import("../BaseComps/buttons").ButtonProps[] | undefined;
            title?: string | undefined;
            column?: import("element-plus/es/utils").EpPropMergeType<(StringConstructor | NumberConstructor)[], unknown, unknown> | undefined;
            labelPosition?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "top" | "right", unknown> | undefined;
            requireAsteriskPosition?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown> | undefined;
            labelWidth?: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
            labelSuffix?: string | undefined;
            inline?: boolean | undefined;
            inlineMessage?: boolean | undefined;
            statusIcon?: boolean | undefined;
            showMessage?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            validateOnRuleChange?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            hideRequiredAsterisk?: boolean | undefined;
            scrollToError?: boolean | undefined;
            border?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            dataList?: import("./comp/useForm").dataItem[] | undefined;
            gutter?: number | undefined;
            closePlaceholder?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            buttonsAlign?: string | undefined;
            key?: string | number | symbol | undefined;
            style?: unknown;
            ref?: import("vue").VNodeRef | undefined;
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
            class?: unknown;
            readonly model?: Record<string, any> | undefined;
            readonly rules?: Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./comp/types").FormItemRule>>> | undefined;
            readonly scrollIntoViewOptions?: import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown> | undefined;
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
                readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./comp/types").FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "top" | "right", unknown, "right", boolean>;
            requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "110px", boolean>;
            labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            inline: BooleanConstructor;
            inlineMessage: BooleanConstructor;
            statusIcon: BooleanConstructor;
            showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            hideRequiredAsterisk: BooleanConstructor;
            scrollToError: BooleanConstructor;
            scrollIntoViewOptions: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            dataList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./comp/useForm").dataItem[]) | (() => import("./comp/useForm").dataItem[]) | ((new (...args: any[]) => import("./comp/useForm").dataItem[]) | (() => import("./comp/useForm").dataItem[]))[], unknown, unknown, () => never[], boolean>;
            size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size))[], unknown, unknown, string, boolean>;
            border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            column: import("element-plus/es/utils").EpPropFinalized<(StringConstructor | NumberConstructor)[], unknown, unknown, number, boolean>;
            gutter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            closePlaceholder: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            buttons: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("../BaseComps/buttons").ButtonProps[]) | (() => import("../BaseComps/buttons").ButtonProps[]) | ((new (...args: any[]) => import("../BaseComps/buttons").ButtonProps[]) | (() => import("../BaseComps/buttons").ButtonProps[]))[], unknown, unknown, () => never[], boolean>;
            buttonsAlign: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            disabled: BooleanConstructor;
        }>>, {
            form: import("vue").Ref<any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            size: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size))[], unknown, unknown>;
            disabled: boolean;
            buttons: import("../BaseComps/buttons").ButtonProps[];
            title: string;
            column: import("element-plus/es/utils").EpPropMergeType<(StringConstructor | NumberConstructor)[], unknown, unknown>;
            labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "top" | "right", unknown>;
            requireAsteriskPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            labelSuffix: string;
            inline: boolean;
            inlineMessage: boolean;
            statusIcon: boolean;
            showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            hideRequiredAsterisk: boolean;
            scrollToError: boolean;
            border: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            dataList: import("./comp/useForm").dataItem[];
            gutter: number;
            closePlaceholder: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
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
            readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./comp/types").FormItemRule>>>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "top" | "right", unknown, "right", boolean>;
        requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
        labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "110px", boolean>;
        labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        inline: BooleanConstructor;
        inlineMessage: BooleanConstructor;
        statusIcon: BooleanConstructor;
        showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        hideRequiredAsterisk: BooleanConstructor;
        scrollToError: BooleanConstructor;
        scrollIntoViewOptions: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
        dataList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./comp/useForm").dataItem[]) | (() => import("./comp/useForm").dataItem[]) | ((new (...args: any[]) => import("./comp/useForm").dataItem[]) | (() => import("./comp/useForm").dataItem[]))[], unknown, unknown, () => never[], boolean>;
        size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size))[], unknown, unknown, string, boolean>;
        border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        column: import("element-plus/es/utils").EpPropFinalized<(StringConstructor | NumberConstructor)[], unknown, unknown, number, boolean>;
        gutter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        closePlaceholder: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        buttons: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("../BaseComps/buttons").ButtonProps[]) | (() => import("../BaseComps/buttons").ButtonProps[]) | ((new (...args: any[]) => import("../BaseComps/buttons").ButtonProps[]) | (() => import("../BaseComps/buttons").ButtonProps[]))[], unknown, unknown, () => never[], boolean>;
        buttonsAlign: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
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
        readonly type: import("vue").PropType<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("./comp/types").FormItemRule>>>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "top" | "right", unknown, "right", boolean>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
    labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "110px", boolean>;
    labelSuffix: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    inline: BooleanConstructor;
    inlineMessage: BooleanConstructor;
    statusIcon: BooleanConstructor;
    showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    validateOnRuleChange: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    hideRequiredAsterisk: BooleanConstructor;
    scrollToError: BooleanConstructor;
    scrollIntoViewOptions: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    dataList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("./comp/useForm").dataItem[]) | (() => import("./comp/useForm").dataItem[]) | ((new (...args: any[]) => import("./comp/useForm").dataItem[]) | (() => import("./comp/useForm").dataItem[]))[], unknown, unknown, () => never[], boolean>;
    size: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size))[], unknown, unknown, string, boolean>;
    border: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    column: import("element-plus/es/utils").EpPropFinalized<(StringConstructor | NumberConstructor)[], unknown, unknown, number, boolean>;
    gutter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    closePlaceholder: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    buttons: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("../BaseComps/buttons").ButtonProps[]) | (() => import("../BaseComps/buttons").ButtonProps[]) | ((new (...args: any[]) => import("../BaseComps/buttons").ButtonProps[]) | (() => import("../BaseComps/buttons").ButtonProps[]))[], unknown, unknown, () => never[], boolean>;
    buttonsAlign: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    disabled: BooleanConstructor;
}>>, {
    form: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size) | ((new (...args: any[]) => "default" | "large" | "small") | (() => import("./comp/useForm").size))[], unknown, unknown>;
    disabled: boolean;
    buttons: import("../BaseComps/buttons").ButtonProps[];
    title: string;
    column: import("element-plus/es/utils").EpPropMergeType<(StringConstructor | NumberConstructor)[], unknown, unknown>;
    labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "top" | "right", unknown>;
    requireAsteriskPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "left" | "right", unknown>;
    labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    labelSuffix: string;
    inline: boolean;
    inlineMessage: boolean;
    statusIcon: boolean;
    showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    validateOnRuleChange: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    hideRequiredAsterisk: boolean;
    scrollToError: boolean;
    border: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    dataList: import("./comp/useForm").dataItem[];
    gutter: number;
    closePlaceholder: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    buttonsAlign: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: {
        scope: any;
    }) => any>> & {
        title?(_: {}): any;
        buttons?(_: {}): any;
    };
}) & import("vue").Plugin) & Record<string, any>;
export default Tform;
