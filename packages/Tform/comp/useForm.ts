export type direction = "vertical" | "horizonta";
export type size = "large" | "default" | "small";
export type column = "1" | "2" | "3" | "4";
export type typeEnum =
  | "input"
  | "select"
  | "space"
  | "custom"
  | "date"
  | "cascader"
  | "checkBox"
  | "radio"
  | "rate"
  | "upload"
  | "switch"
  | "slider"
  | "range";
export type opstionsItem = {
  label: string;
  value: string;
};
import { MainPackage } from "../../BaseComps/index";
// import  { RuleCreater } from "../../utils/index";
import { ComputedRef, Ref } from "vue";

export type dataItem = {
  ref?: Ref<any>;

  //标签文本
  label?: string;
  //后端对应的参数
  prop?: string;
  //操作框的类型
  type: typeEnum;
  //数据
  value?: any;
  //占几份
  span?: column | number;
  //组件内部转成24分栅格布局
  nospan?: number;
  //标签宽度 ,默认100
  labelWidth?: string | number;
  //required 是否必填
  required?: boolean;
  placeholder?: string;
  showPlaceholder?: boolean;
  //select opstions
  options?: opstionsItem[] | ComputedRef;
  //控制显示隐藏 但不清除数据
  hide?: boolean | Ref<boolean>;
  //控制显示隐藏 清除数据
  deepHide?: boolean | Ref<boolean>;
  //校验
  rules?: any;
  //自定义
  slotName?: string;
  //外标签class
  class?: string;
  //inputrange
  columns?: [
    {
      prop: string;
      rules?: any;
      value?: any;
      placeholder?: string;
      input?: MainPackage["input"];
    },
    {
      prop: string;
      rules?: any;
      value?: any;
      placeholder?: string;
      input?: MainPackage["input"];
    }
  ];

  //input输入框的属性
  input?: MainPackage["input"];
  //select选择器的属性
  select?: MainPackage["select"];
  //日期
  date?: MainPackage["date"];
  // dateTime?:MainPackage['dateTime']
  //次级选择
  cascader?: MainPackage["cascader"];
  //多选
  checkBox?: MainPackage["checkbox"];
  //单选
  radio?: MainPackage["radio"];
  //评分
  rate?: MainPackage["rate"];
  //上传
  upload?: MainPackage["upload"];
  //开关
  switch?: MainPackage["switch"];
  //滑块
  slider?: MainPackage["slider"];
};

export interface Args {
  //请求接口
  request?: ((...arg: any[]) => Promise<any>) | { [key: string]: any };
  //格式化数据
  parseData?: (data: any) => any;
  //接口返回的数据结构 默认直接data下
  path?: string;
  //标题
  title?: string;
  //数据
  dataList: dataItem[];
  //一行显示几个 默认2
  column?: column | number;
  //
  labelPosition?: "left" | "right" | "top";
  size?: size;
  //栅格布局的间距
  gutter?: number;
  //关闭placeholder
  closePlaceholder?: boolean;
  labelWidth?: string;
  statusIcon?: boolean;
  hideRequiredAsterisk?: boolean;
  labelSuffix?: string;
  requireAsteriskPosition?: "left" | "right";
  validateOnRuleChange?: boolean;
  disabled?: boolean;
  scrollToError?: boolean;
  scrollIntoViewOptions?: any;
  //提交按钮
  buttons?: MainPackage["button"][];
  buttonsAlign?: "left" | "center" | "right";
}

export const useForm = (args: Args) => {
  return args;
};
