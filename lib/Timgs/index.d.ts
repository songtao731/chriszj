declare const Timgs: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            width?: string | undefined;
            height?: string | undefined;
            fit?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown> | undefined;
            lazy?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            src?: string | undefined;
            previewSrcList?: string[] | undefined;
            initialIndex?: number | undefined;
            infinite?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            closeOnPressEscape?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
            zoomRate?: number | undefined;
            hideOnClickModal?: boolean | undefined;
            previewTeleported?: boolean | undefined;
            fileList?: {
                name?: string | undefined;
                url: string;
            }[] | undefined;
            ref?: import("vue").VNodeRef | undefined;
            readonly loading?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown> | undefined;
            key?: string | number | symbol | undefined;
            style?: unknown;
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
            readonly zIndex?: number | undefined;
            readonly scrollContainer?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>;
            readonly file?: (import("element-plus").UploadFile & {
                loadProgress: number;
            }) | undefined;
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
            hideOnClickModal: BooleanConstructor;
            src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            fit: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown, "fill", boolean>;
            loading: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            lazy: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            scrollContainer: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            previewSrcList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
            previewTeleported: BooleanConstructor;
            zIndex: {
                readonly type: import("vue").PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
            infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zoomRate: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
            file: {
                readonly type: import("vue").PropType<import("element-plus").UploadFile & {
                    loadProgress: number;
                }>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => {
                name?: string | undefined;
                url: string;
            }[]) | (() => {
                name?: string | undefined;
                url: string;
            }[]) | ((new (...args: any[]) => {
                name?: string | undefined;
                url: string;
            }[]) | (() => {
                name?: string | undefined;
                url: string;
            }[]))[], unknown, unknown, () => never[], boolean>;
            width: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
            height: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            width: string;
            height: string;
            fit: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown>;
            lazy: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            src: string;
            previewSrcList: string[];
            initialIndex: number;
            infinite: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            closeOnPressEscape: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            zoomRate: number;
            hideOnClickModal: boolean;
            previewTeleported: boolean;
            fileList: {
                name?: string | undefined;
                url: string;
            }[];
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
        hideOnClickModal: BooleanConstructor;
        src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        fit: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown, "fill", boolean>;
        loading: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        lazy: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        scrollContainer: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        previewSrcList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
        previewTeleported: BooleanConstructor;
        zIndex: {
            readonly type: import("vue").PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
        infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        zoomRate: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
        file: {
            readonly type: import("vue").PropType<import("element-plus").UploadFile & {
                loadProgress: number;
            }>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => {
            name?: string | undefined;
            url: string;
        }[]) | (() => {
            name?: string | undefined;
            url: string;
        }[]) | ((new (...args: any[]) => {
            name?: string | undefined;
            url: string;
        }[]) | (() => {
            name?: string | undefined;
            url: string;
        }[]))[], unknown, unknown, () => never[], boolean>;
        width: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
        height: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    hideOnClickModal: BooleanConstructor;
    src: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    fit: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown, "fill", boolean>;
    loading: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    lazy: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    scrollContainer: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    previewTeleported: BooleanConstructor;
    zIndex: {
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 4, boolean>;
    infinite: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    file: {
        readonly type: import("vue").PropType<import("element-plus").UploadFile & {
            loadProgress: number;
        }>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => {
        name?: string | undefined;
        url: string;
    }[]) | (() => {
        name?: string | undefined;
        url: string;
    }[]) | ((new (...args: any[]) => {
        name?: string | undefined;
        url: string;
    }[]) | (() => {
        name?: string | undefined;
        url: string;
    }[]))[], unknown, unknown, () => never[], boolean>;
    width: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    height: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    width: string;
    height: string;
    fit: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "none" | "fill" | "contain" | "cover" | "scale-down", unknown>;
    lazy: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    src: string;
    previewSrcList: string[];
    initialIndex: number;
    infinite: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    zoomRate: number;
    hideOnClickModal: boolean;
    previewTeleported: boolean;
    fileList: {
        name?: string | undefined;
        url: string;
    }[];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin) & Record<string, any>;
export default Timgs;
