import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import { PropType, Ref } from "vue";
import { ComputedRef } from "vue";
import { ButtonProps } from "./Button";
import { MainPackage } from "../../BaseComps/index";
export type FormatValueType = "price" | "priceChinese" | "date" | "dateTime";
export type FilterType =
  | "input"
  | "select"
  | "date"
  | "cascader"
  | "inputrange"
  | "checkBox"
  | "radio"
  | "rate"
  | "switch"
  | "slider"
  | "space"
  | "custom";

export interface EventFilter {
  type?: FilterType;
  input?: MainPackage["input"];
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
  //开关
  switch?: MainPackage["switch"];
  //滑块
  slider?: MainPackage["slider"];
}
export interface Filter {
  label?: string;
  prop?: string | string[];
  placeholder?: string | string[];
  type?: FilterType;
  slotName?: string;
  value?: any;

  options?:
    | {
        label: string;
        value: string;
        children?: { label: string; value: string }[];
      }[]
    | ComputedRef<any>
    | Ref<any>;
  showAllLevels?: boolean;
  hide?: boolean;
  deepHide?: boolean;
  rules?: any;
  input?: MainPackage["input"];
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
  //开关
  switch?: MainPackage["switch"];
  //滑块
  slider?: MainPackage["slider"];

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
    },
  ];
}

//原有的TableColumnCtx和新添加的cloumn 合并
interface CustomType {
  formatType?: FormatValueType;
  slotName?: string;
  header?: boolean;
  dictData?:
    | {
        label: string;
        value: string | number;
        options?: { label: string; value: string };
      }[]
    | ComputedRef<any>
    | Ref<any>;
  dictOptions?: { label?: string; value?: string; children?: string };

  filter?: string | Filter;
  value?: string | number | (string | number)[] | boolean;
  hide?: boolean;
  buttons?: ButtonProps[] | ((row) => any[]);
  type?: "selection" | "index" | "expand" | "input" | "select";
  rules?: any;
  event?: EventFilter;
}
//自定义添加属性
export const CustomType = {
  //格式化数据
  formatType: {
    type: String,
    default: "",
  },
  //插槽
  slotName: {
    type: String,
    default: "",
  },
  //表格每一列的头部插槽
  header: {
    type: Boolean,
    default: false,
  },
  dictData: {
    type: [Object, Array],
    default: [],
  },
  dictOptions: {
    type: Object,
  },
  filter: {
    type: [String, Object],
    default: "input",
  },
  hide: {
    type: Boolean,
    default: false,
  },
  buttons: {
    type: Array as PropType<CustomType["buttons"]>,
    default: [],
  },
  event: {
    type: Object,
    default: {},
  },
};

export interface NewTableColumn<T>
  extends CustomType,
    Partial<TableColumnCtx<T>> {}
