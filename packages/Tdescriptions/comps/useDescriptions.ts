import { ComputedRef } from "vue";
import { FormatValueType } from "../../TableList/comps/TableColumnItem";

export type direction = "vertical" | "horizontal";
export type size = "large" | "default" | "small";
export type align = "left" | "center" | "right";
export type type = "space" | "prew";
export type prew = {
  width?: string;
  height?: string;
  showName?: boolean;
};

export type desItem = {
  //标签文本
  label?: string;
  //值
  value?: any;
  //后端接收的值
  prop?: string;
  //列的数量 1
  span?: number;
  width?: string | number;
  minWidth?: string | number;
  align?: align;
  labelAlign?: align;
  className?: string;
  labelClassName?: string;
  //快捷格式化数据
  formatType?: FormatValueType;
  //字典或者枚举
  dictData?: { [key: string]: any }[] | ComputedRef<any>;
  //配置字典后者枚举的 参数 默认 label value children
  dictOptions?: { label?: string; value?: string; children?: string };
  //显示隐藏
  hide?: boolean;
  //自己格式化数据展示
  formatter?: (data: any) => any;
  //type 占位符和图片模式
  type?: string;
  //当图片时 设置宽高
  prew?: prew;
  //图片预览的宽 高 对齐方式
  slotName?: string;
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
  //是否有边框
  border?: boolean;
  //一行展示几个 3
  column?: number;
  // //展示方向
  direction?: direction;
  // //尺寸大小
  size?: size;
  //操作区域右上
  extra?: string;
  dataList: desItem[];
}

export const useDescriptions = (args: Args) => {
  return args;
};
