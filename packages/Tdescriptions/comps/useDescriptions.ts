import { ComputedRef } from "vue";
import { FormatValueType } from "../../TableList/comps/TableColumnItem";

export type direction = "vertical" | "horizontal";
export type size = "large" | "default" | "small";
export type align = "left" | "center" | "right" 



export type  desItem={
  //标签文本
  label:string
  //值
  value?:any
  //后端接收的值
  prop?:string
  //列的数量 1
  span?:number
  width?:string|number
  align?:align
  labelAlign?:align
  className?:string
  labelClassName?:string
  formatType?: FormatValueType
  dictData?: { label: string, value: string | number, options?: { label: string, value: string } }[] | ComputedRef<any>,
  dictOptions?:{label?:string,value?:string}



}



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
  border?:boolean;
  //一行展示几个 3
   column?:number
  // //展示方向
   direction?:direction
  // //尺寸大小
  size?:size
  //操作区域右上
  extra?:string
  dataList:desItem[]

}

export const useDescriptions = (args: Args) => {
  return args;
};
