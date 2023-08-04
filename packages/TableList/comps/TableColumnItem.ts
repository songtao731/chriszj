import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
import {  PropType} from "vue";
import { ComputedRef } from 'vue'
import { ButtonProps } from "./Button";
export type FormatValueType = 'price' | 'priceChinese' | 'date'  | 'dateTime'
export type FilterType = 'input' | 'select' | 'date' | 'dateRange' | 'dateTime' | 'dateTimeRange' | 'cascader' | 'inputrange'


export interface Filter {
  label?: string,
  prop?: string | string[],
  placeholder?: string | string[],
  type?: FilterType,
  options?: { label: string, value: string, children?: { label: string, value: string }[] }[] | ComputedRef<any>,
  showAllLevels?: boolean,
  hide?:boolean
}

//原有的TableColumnCtx和新添加的cloumn 合并
interface CustomType {
  formatType?: FormatValueType,
  slotName?: string,
  header?: boolean,
  dictData?: { label: string, value: string | number, options?: { label: string, value: string } }[] | ComputedRef<any>,
  filter?: string | Filter,
  value?: string | number | (string | number)[]
  hide?: boolean
  buttons?:Omit<ButtonProps,'onClick'>[]


}
//自定义添加属性
export const CustomType = {
  //格式化数据
  formatType: {
    type: String,
    default: ''
  },
  //插槽
  slotName: {
    type: String,
    default: ''
  },
  //表格每一列的头部插槽
  header: {
    type: Boolean,
    default: false
  },
  dictData: {
    type: [Object, Array],
    default: []
  },
  filter: {
    type: [String, Object],
    default: 'input'
  },
  hide: {
    type: Boolean,
    default: false
  },
  buttons:{
    type:Array as PropType<CustomType["buttons"]>,
    default:[]
  }



}



export interface NewTableColumn<T> extends CustomType, Partial<TableColumnCtx<T>> { }

