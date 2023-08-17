export type dataItem = {
    label: string;
    prop: string;
    type: string;
    value?: any;
};
export type direction = "vertical" | "horizonta";
export type size = "large" | "default" | "small";
export interface Args {
    title?: string;
    dataList: dataItem[];
    border?: boolean;
    column?: number;
    direction?: direction;
    size?: size;
    extra?: string;
}
export declare const useForm: (args: Args) => Args;
