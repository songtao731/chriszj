import { NewTableColumn } from './TableColumnItem'


import { ButtonProps } from './Button'
export interface Args {
  //请求接口
  request?: ((...arg: any[]) => Promise<any>);
  //每一列传入的数据 
  columns: Partial<NewTableColumn<any>>[],
  //传入写死的表格数据
  data?: any[],
  //后台返回的数据地址      //默认是data.rows
  path?: string,
  //后台返回的tottal地址    //默认是data.total                   
  toTalPath?: string,
  //搜索条件的大小
  searchSize?: 'medium' | 'small' | 'mini',
  //搜索条件的位置
  labelPosition?: 'left' | 'top' | 'right'
  //格式化后台返回的数据
  parseData?: ((row: any) => {
    rows: any[]
  })
  //后台分页 默认就是pageNum|pageSize
  pageNum?: string,
  pageSize?: string,
  //索引 是不是展示  默认展示
  index?: {
    label?: string,
    width?: string | number,
    hide?: boolean
  } | boolean
  //右上角按钮
  buttons?: ButtonProps[],
  //分页
  pagination?: boolean,
  //额外添加查询条件
  searchData?: object
  //分页显示控制
  layout?:string
  //分页控制切换多少条
  pageSizes?:number[]

}


export const useTable = (args: Args) => {


  return args
}
