declare const Tdescriptions: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            border?: boolean | undefined;
            title?: string | undefined;
            column?: number | undefined;
            dataList?: import("./comps/useDescriptions").desItem[] | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            extra?: string | undefined;
            ref?: import("vue").VNodeRef | undefined;
            readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never> | undefined;
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
            class?: unknown;
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
            border: {
                type: BooleanConstructor;
                default: boolean;
            };
            column: {
                type: NumberConstructor;
                default: number;
            };
            direction: {
                type: import("vue").PropType<"horizontal" | "vertical">;
                default: string;
            };
            size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            extra: {
                type: StringConstructor;
                default: string;
            };
            request: (ObjectConstructor | FunctionConstructor)[];
            parseData: FunctionConstructor;
            path: StringConstructor;
            dataList: {
                type: import("vue").PropType<import("./comps/useDescriptions").desItem[]>;
                default: () => never[];
            };
        }>>, {
            data: import("vue").Ref<{
                [key: string]: any;
            }>;
            res: import("vue").Ref<any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            border: boolean;
            title: string;
            column: number;
            dataList: import("./comps/useDescriptions").desItem[];
            direction: "horizontal" | "vertical";
            extra: string;
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
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        column: {
            type: NumberConstructor;
            default: number;
        };
        direction: {
            type: import("vue").PropType<"horizontal" | "vertical">;
            default: string;
        };
        size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        extra: {
            type: StringConstructor;
            default: string;
        };
        request: (ObjectConstructor | FunctionConstructor)[];
        parseData: FunctionConstructor;
        path: StringConstructor;
        dataList: {
            type: import("vue").PropType<import("./comps/useDescriptions").desItem[]>;
            default: () => never[];
        };
    }>> & import("vue").ShallowUnwrapRef<{
        data: import("vue").Ref<{
            [key: string]: any;
        }>;
        res: import("vue").Ref<any>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "large" | "small", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
    request: (ObjectConstructor | FunctionConstructor)[];
    parseData: FunctionConstructor;
    path: StringConstructor;
    dataList: {
        type: import("vue").PropType<import("./comps/useDescriptions").desItem[]>;
        default: () => never[];
    };
}>>, {
    data: import("vue").Ref<{
        [key: string]: any;
    }>;
    res: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    border: boolean;
    title: string;
    column: number;
    dataList: import("./comps/useDescriptions").desItem[];
    direction: "horizontal" | "vertical";
    extra: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: {}) => any>> & Partial<Record<string, (_: {
        scope: {
            resData: {
                [key: string]: any;
            };
            value: any;
        };
    }) => any>>;
}) & import("vue").Plugin) & Record<string, any>;
export default Tdescriptions;
