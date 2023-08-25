import { UploadFile } from "element-plus";
export declare const handleDownload: (file: Partial<UploadFile>) => void;
interface RuleRequired {
    required: boolean;
}
interface RuleLength {
    min: number;
    max: number;
}
interface RulePattern {
    pattern: string | RegExp;
}
interface RuleBase {
    /** 错误提示 */
    message?: string;
    /**
     * @default 'blur'
     */
    trigger?: "change" | "blur" | "click" | "focus";
}
interface RuleCalidator {
    validator: () => void;
}
export type RuleObject = RuleBase & (RuleRequired | RuleLength | RulePattern | RuleCalidator);
export declare class RuleCreater {
    rules: RuleObject[];
    required(required: boolean, message: string, trigger?: RuleBase["trigger"]): this;
    range(min: number, max: number, message: string, trigger?: RuleBase["trigger"]): this;
    pattern(pattern: string | RegExp, message: string, trigger?: RuleBase["trigger"]): this;
    validator(validator: any, trigger?: RuleBase["trigger"]): this;
}
export declare const rulesFn: () => {
    rules: RuleObject[];
    required(required: boolean, message?: string, trigger?: RuleBase["trigger"]): any;
    range(min: number, max: number, message: string, trigger?: RuleBase["trigger"]): any;
    pattern(pattern: string | RegExp, message: string, trigger?: RuleBase["trigger"]): any;
    validator(validator: any, trigger?: RuleBase["trigger"]): any;
};
export {};
