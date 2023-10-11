
import { PropType } from "vue";
import { Args } from "./useTable";



export type NewTableCtx = Args

export const NewTable = {
  request: Function,
  column:{
    type:Number,
    default:0
  },
  gutter:{
    type:Number,
    default:20
  },
  labelWidth:{
    type:[String,Number]

  },
  parseData: Function,
  path: String,
  totalPath: String,
  pageNum: String,
  pageSize: String,
  size: {
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
  },
  currentPage:{
    type:Number,
    default:1
  },
  currentPageSize:{
    type:Number,
    default:10
  }

}