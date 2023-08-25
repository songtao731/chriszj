declare const Tupload: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            type?: string | undefined;
            disabled?: boolean | undefined;
            data?: Record<string, any> | undefined;
            name?: string | undefined;
            onChange?: ((uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | undefined;
            onError?: ((error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | undefined;
            onProgress?: ((evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | undefined;
            multiple?: boolean | undefined;
            onRemove?: ((uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | undefined;
            beforeUpload?: ((rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>) | undefined;
            onPreview?: ((uploadFile: import("element-plus").UploadFile) => void) | undefined;
            onSuccess?: ((response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | undefined;
            onExceed?: ((files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | undefined;
            action?: string | undefined;
            method?: string | undefined;
            drag?: boolean | undefined;
            withCredentials?: boolean | undefined;
            showFileList?: boolean | undefined;
            accept?: string | undefined;
            autoUpload?: boolean | undefined;
            fileList?: import("element-plus").UploadUserFile[] | undefined;
            listType?: "text" | "picture" | "picture-card" | undefined;
            httpRequest?: import("element-plus").UploadRequestHandler | undefined;
            readonly size?: number | undefined;
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
            readonly beforeRemove?: ((uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>) | undefined;
            readonly headers?: Record<string, any> | Headers | undefined;
            readonly limit?: number | undefined;
            "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
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
        $emit: (event: "update:fileList", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            beforeUpload: {
                type: import("vue").PropType<(rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>>;
                default: () => void;
            };
            beforeRemove: {
                type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
            };
            onRemove: {
                type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
                default: () => void;
            };
            onChange: {
                type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
                default: () => void;
            };
            onPreview: {
                type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile) => void>;
                default: () => void;
            };
            onSuccess: {
                type: import("vue").PropType<(response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
                default: () => void;
            };
            onProgress: {
                type: import("vue").PropType<(evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
                default: () => void;
            };
            onError: {
                type: import("vue").PropType<(error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
                default: () => void;
            };
            onExceed: {
                type: import("vue").PropType<(files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void>;
                default: () => void;
            };
            action: {
                type: StringConstructor;
                default: string;
            };
            headers: {
                type: import("vue").PropType<Record<string, any> | Headers>;
            };
            method: {
                type: StringConstructor;
                default: string;
            };
            data: {
                type: ObjectConstructor;
                default: () => import("element-plus/es/utils").Mutable<{}>;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            drag: {
                type: BooleanConstructor;
                default: boolean;
            };
            withCredentials: BooleanConstructor;
            showFileList: {
                type: BooleanConstructor;
                default: boolean;
            };
            accept: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            autoUpload: {
                type: BooleanConstructor;
                default: boolean;
            };
            fileList: {
                type: import("vue").PropType<import("element-plus").UploadUserFile[]>;
                default: () => [];
            };
            listType: {
                type: import("vue").PropType<"text" | "picture" | "picture-card">;
                default: string;
            };
            httpRequest: {
                type: import("vue").PropType<import("element-plus").UploadRequestHandler>;
                default: import("element-plus").UploadRequestHandler;
            };
            disabled: BooleanConstructor;
            limit: NumberConstructor;
            size: NumberConstructor;
        }>> & {
            "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
        }, {
            pictureCardRef: import("vue").Ref<any>;
            fileList: import("vue").WritableComputedRef<import("element-plus").UploadUserFile[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:fileList"[], string, {
            type: string;
            disabled: boolean;
            data: Record<string, any>;
            name: string;
            onChange: (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
            onError: (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
            onProgress: (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
            multiple: boolean;
            onRemove: (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
            beforeUpload: (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>;
            onPreview: (uploadFile: import("element-plus").UploadFile) => void;
            onSuccess: (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
            onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
            action: string;
            method: string;
            drag: boolean;
            withCredentials: boolean;
            showFileList: boolean;
            accept: string;
            autoUpload: boolean;
            fileList: import("element-plus").UploadUserFile[];
            listType: "text" | "picture" | "picture-card";
            httpRequest: import("element-plus").UploadRequestHandler;
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
        beforeUpload: {
            type: import("vue").PropType<(rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>>;
            default: () => void;
        };
        beforeRemove: {
            type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
        };
        onRemove: {
            type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
            default: () => void;
        };
        onChange: {
            type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
            default: () => void;
        };
        onPreview: {
            type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile) => void>;
            default: () => void;
        };
        onSuccess: {
            type: import("vue").PropType<(response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
            default: () => void;
        };
        onProgress: {
            type: import("vue").PropType<(evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
            default: () => void;
        };
        onError: {
            type: import("vue").PropType<(error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
            default: () => void;
        };
        onExceed: {
            type: import("vue").PropType<(files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void>;
            default: () => void;
        };
        action: {
            type: StringConstructor;
            default: string;
        };
        headers: {
            type: import("vue").PropType<Record<string, any> | Headers>;
        };
        method: {
            type: StringConstructor;
            default: string;
        };
        data: {
            type: ObjectConstructor;
            default: () => import("element-plus/es/utils").Mutable<{}>;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        drag: {
            type: BooleanConstructor;
            default: boolean;
        };
        withCredentials: BooleanConstructor;
        showFileList: {
            type: BooleanConstructor;
            default: boolean;
        };
        accept: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        autoUpload: {
            type: BooleanConstructor;
            default: boolean;
        };
        fileList: {
            type: import("vue").PropType<import("element-plus").UploadUserFile[]>;
            default: () => [];
        };
        listType: {
            type: import("vue").PropType<"text" | "picture" | "picture-card">;
            default: string;
        };
        httpRequest: {
            type: import("vue").PropType<import("element-plus").UploadRequestHandler>;
            default: import("element-plus").UploadRequestHandler;
        };
        disabled: BooleanConstructor;
        limit: NumberConstructor;
        size: NumberConstructor;
    }>> & {
        "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        pictureCardRef: import("vue").Ref<any>;
        fileList: import("vue").WritableComputedRef<import("element-plus").UploadUserFile[]>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    beforeUpload: {
        type: import("vue").PropType<(rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>>;
        default: () => void;
    };
    beforeRemove: {
        type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
    };
    onRemove: {
        type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onChange: {
        type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onPreview: {
        type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile) => void>;
        default: () => void;
    };
    onSuccess: {
        type: import("vue").PropType<(response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onProgress: {
        type: import("vue").PropType<(evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onError: {
        type: import("vue").PropType<(error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void>;
        default: () => void;
    };
    onExceed: {
        type: import("vue").PropType<(files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void>;
        default: () => void;
    };
    action: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: import("vue").PropType<Record<string, any> | Headers>;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => import("element-plus/es/utils").Mutable<{}>;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    fileList: {
        type: import("vue").PropType<import("element-plus").UploadUserFile[]>;
        default: () => [];
    };
    listType: {
        type: import("vue").PropType<"text" | "picture" | "picture-card">;
        default: string;
    };
    httpRequest: {
        type: import("vue").PropType<import("element-plus").UploadRequestHandler>;
        default: import("element-plus").UploadRequestHandler;
    };
    disabled: BooleanConstructor;
    limit: NumberConstructor;
    size: NumberConstructor;
}>> & {
    "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
}, {
    pictureCardRef: import("vue").Ref<any>;
    fileList: import("vue").WritableComputedRef<import("element-plus").UploadUserFile[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:fileList"[], "update:fileList", {
    type: string;
    disabled: boolean;
    data: Record<string, any>;
    name: string;
    onChange: (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onError: (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onProgress: (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    multiple: boolean;
    onRemove: (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    beforeUpload: (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | Blob | File | null | undefined>;
    onPreview: (uploadFile: import("element-plus").UploadFile) => void;
    onSuccess: (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
    action: string;
    method: string;
    drag: boolean;
    withCredentials: boolean;
    showFileList: boolean;
    accept: string;
    autoUpload: boolean;
    fileList: import("element-plus").UploadUserFile[];
    listType: "text" | "picture" | "picture-card";
    httpRequest: import("element-plus").UploadRequestHandler;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        file?(_: {}): any;
        tip?(_: {}): any;
        trigger?(_: {}): any;
    };
}) & import("vue").Plugin) & Record<string, any>;
export default Tupload;
