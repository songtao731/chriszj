
import { ButtonProps } from './Button'
import { PropType } from "vue";
import { Args } from "./useTable";



export type NewTableCtx = Args

export const NewTable = {
  request: Function,
  parseData: Function,
  path: String,
  toTalPath: String,
  pageNum: String,
  pageSize: String,
  searchSize: {
    type: String,
    default: ''
  },
  labelPosition: {
    type: String,
    default: 'right'
  },
  index: {
    type: [Boolean, Object],
    default: {
      label: '序号',
      width: 55,
      hide: false
    }
  },
  buttons: Array as PropType<NewTableCtx["buttons"]>,
  pagination: {
    type: Boolean,
    default: true
  },
  searchData: Object,
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  pageSizes:{
    type:Array,
    default:[5,10,20,30]
  }

}