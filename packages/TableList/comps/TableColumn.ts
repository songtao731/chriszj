// @ts-nocheck
import type { ComponentInternalInstance, PropType, Ref, VNode } from 'vue'
import type { DefaultRow, Table } from './Table'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
//自定义添加的属性
import { CustomType } from "./TableColumnItem";



type CI<T> = { column: TableColumnCtx<T>; $index: number }

type Filters = {
  text: string
  value: string
}[]

type FilterMethods<T> = (value, row: T, column: TableColumnCtx<T>) => void

type ValueOf<T> = T[keyof T]



interface TableColumn<T> extends ComponentInternalInstance {
  vnode: {
    vParent: TableColumn<T> | Table<T>
  } & VNode
  vParent: TableColumn<T> | Table<T>
  columnId: string
  columnConfig: Ref<Partial<TableColumnCtx<T>>>
}

export type { Filters, FilterMethods, TableColumnCtx, TableColumn, ValueOf }

export default {
  type: {
    type: String,
    default: 'default',
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: {
    type:String,
    default:''
  },
  width: {
    type: [String, Number],
    default: '',
  },
  minWidth: {
    type: [String, Number],
    default: '',
  },
  renderHeader: Function as PropType<
    TableColumnCtx<DefaultRow>['renderHeader']
  >,
  sortable: {
    type: [Boolean, String],
    default: false,
  },
  sortMethod: Function as PropType<TableColumnCtx<DefaultRow>['sortMethod']>,
  sortBy: [String, Function, Array] as PropType<
    TableColumnCtx<DefaultRow>['sortBy']
  >,
  resizable: {
    type: Boolean,
    default: true,
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object] as PropType<
      TableColumnCtx<DefaultRow>['showOverflowTooltip']
    >,
    default: undefined,
  },
  fixed: [Boolean, String],
  formatter: Function as PropType<TableColumnCtx<DefaultRow>['formatter']>,
  selectable: Function as PropType<TableColumnCtx<DefaultRow>['selectable']>,
  reserveSelection: Boolean,
  filterMethod: Function as PropType<
    TableColumnCtx<DefaultRow>['filterMethod']
  >,
  filteredValue: Array as PropType<TableColumnCtx<DefaultRow>['filteredValue']>,
  filters: Array as PropType<TableColumnCtx<DefaultRow>['filters']>,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true,
  },
  index: [Number, Function] as PropType<TableColumnCtx<DefaultRow>['index']>,
  sortOrders: {
    type: Array as PropType<TableColumnCtx<DefaultRow>['sortOrders']>,
    default: () => {
      return ['ascending', 'descending', null]
    },
    validator: (val: TableColumnCtx<unknown>['sortOrders']) => {
      return val.every((order: string) =>
        ['ascending', 'descending', null].includes(order)
      )
    },
  },
  ...CustomType
}