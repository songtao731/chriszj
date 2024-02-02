import { UploadFile } from "element-plus";

export const handleDownload = (file: Partial<UploadFile>) => {
  const link = document.createElement("a");
  // link.target = "_blank";
  // 将生成的 url 设置为 a.href 属性 （file.downloadUrl 属性也是一个链接，是一个自定义的链接）
  link.href = file.url || "";
  // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
  link.download = file.name || "图片";
  //触发相应事件
  link.click();
  //移除a标签
  link.remove();
};

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
export type RuleObject = RuleBase &
  (RuleRequired | RuleLength | RulePattern | RuleCalidator);
export class RuleCreater {
  rules: RuleObject[] = [];
  required(
    required: boolean,
    message: string,
    trigger: RuleBase["trigger"] = "blur"
  ) {
    this.rules.push({
      required,
      message,
      trigger,
    });
    return this;
  }
  range(
    min: number,
    max: number,
    message: string,
    trigger: RuleBase["trigger"] = "blur"
  ) {
    this.rules.push({
      min,
      max,
      message,
      trigger,
    });
    return this;
  }
  pattern(
    pattern: string | RegExp,
    message: string,
    trigger: RuleBase["trigger"] = "blur"
  ) {
    this.rules.push({
      pattern: pattern,
      message,
      trigger,
    });
    return this;
  }
  validator(validator: any, trigger: RuleBase["trigger"] = "blur") {
    this.rules.push({
      validator,
      trigger,
    });
    return this;
  }
}
export const rulesFn = function () {
  const rules: RuleObject[] = [];
  const _self = {
    rules,
    required(
      required: boolean,
      message?: string,
      trigger: RuleBase["trigger"] = "blur"
    ) {
      rules.push({
        required,
        message,
        trigger,
      });
      return _self;
    },
    range(
      min: number,
      max: number,
      message: string,
      trigger: RuleBase["trigger"] = "blur"
    ) {
      rules.push({
        min,
        max,
        message,
        trigger,
      });
      return _self;
    },
    pattern(
      pattern: string | RegExp,
      message: string,
      trigger: RuleBase["trigger"] = "blur"
    ) {
      rules.push({
        pattern: pattern,
        message,
        trigger,
      });
      return _self;
    },
    validator(validator: any, trigger: RuleBase["trigger"] = "blur") {
      rules.push({
        validator,
        trigger,
      });
      return _self;
    },
  };
  return _self;
};

//动态获取后台返回路径的方法

export const getPath = (value: any, path: string) => {
  if (!value) {
    return {};
  }
  const arr = path.split(".");

  arr.forEach((el: any) => {
    value = value[el];
  });

  if (value === null) {
    value = {};
  }
  return value;
};
export const getTotalPath = (value: any, path: string) => {
  if (!value) {
    return 0;
  }
  const arr = path.split(".");

  arr.forEach((el: any) => {
    value = value[el];
  });

  return value;
};

//初始化参数
export const labelEnum = (dictOptions?: {
  label?: string;
  value?: string;
  children?: string;
}) => {
  const { useDictLabel, useDictValue, useDictChildren } = {
    useDictLabel: dictOptions?.label || "label",
    useDictValue: dictOptions?.value || "value",
    useDictChildren: dictOptions?.children || "children",
  };
  return {
    useDictLabel,
    useDictValue,
    useDictChildren,
  };
};

//筛选出枚举
export const searchTree = (
  tree: any[],
  id: string | number,
  options: {
    useDictLabel: string;
    useDictValue: string;
    useDictChildren: string;
  }
) => {
  let res: { [key: string]: any } = {};
  let state = false;
  if (id === "--") return;
  const { useDictValue, useDictChildren } = options;
  function readTree(tree: any[], id: string | number) {
    if (state) return;
    for (let i = 0; i < tree.length; i++) {
      if (tree[i][useDictValue] == id) {
        state = true;
        res = tree[i];
      } else {
        if (tree[i][useDictChildren] != null) {
          readTree(tree[i][useDictChildren], id);
        }
      }
    }
  }
  readTree(tree, id);

  return res;
};
