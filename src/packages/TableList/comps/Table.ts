import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import type { ElTooltipProps } from "@element-plus";

import { NewTableColumn } from "./TableColumnItem";
import { NewTable } from "./TableNew";
import type { NewTableCtx } from "./TableNew";

type ComponentSize = "large" | "default" | "small";

import type {
  CSSProperties,
  ComponentInternalInstance,
  PropType,
  Ref,
  VNode,
} from "vue";

export type DefaultRow = any;

interface TableRefs {
  tableWrapper: HTMLElement;
  headerWrapper: HTMLElement;
  footerWrapper: HTMLElement;
  fixedBodyWrapper: HTMLElement;
  rightFixedBodyWrapper: HTMLElement;
  bodyWrapper: HTMLElement;
  appendWrapper: HTMLElement;
  [key: string]: any;
}

interface TableState {
  isGroup: Ref<boolean>;
  resizeState: Ref<{
    width: any;
    height: any;
  }>;
  doLayout: () => void;
  debouncedUpdateLayout: () => void;
}
type Layout = "fixed" | "auto";

type RIS<T> = { row: T; $index: number; store: Store<T>; expanded: boolean };
type RenderExpanded<T> = ({
  row,
  $index,
  store,
  expanded: boolean,
}: RIS<T>) => VNode;

interface Table<T> extends ComponentInternalInstance {
  $ready: boolean;
  renderExpanded: RenderExpanded<T>;
  layout: TableLayout<T>;
  refs: TableRefs;
  tableId: string;
  state: TableState;
}

type SummaryMethod<T> = (data: {
  columns: TableColumnCtx<T>[];
  data: T[];
}) => string[];
type ColumnCls<T> = string | ((data: { row: T; rowIndex: number }) => string);
type ColumnStyle<T> =
  | CSSProperties
  | ((data: { row: T; rowIndex: number }) => CSSProperties);
type CellCls<T> =
  | string
  | ((data: {
      row: T;
      rowIndex: number;
      column: TableColumnCtx<T>;
      columnIndex: number;
    }) => string);
type CellStyle<T> =
  | CSSProperties
  | ((data: {
      row: T;
      rowIndex: number;
      column: TableColumnCtx<T>;
      columnIndex: number;
    }) => CSSProperties);

interface Sort {
  prop: string;
  order: "ascending" | "descending";
  init?: any;
  silent?: any;
}

type TableOverflowTooltipOptions = Partial<
  Pick<
    ElTooltipProps,
    | "effect"
    | "enterable"
    | "hideAfter"
    | "offset"
    | "placement"
    | "popperClass"
    | "popperOptions"
    | "showAfter"
    | "showArrow"
    // | 'transition'
  >
>;
interface TreeNode {
  expanded?: boolean;
  loading?: boolean;
  noLazyChildren?: boolean;
  indent?: number;
  level?: number;
  display?: boolean;
}

export interface TableProps<T> {
  data: T[];
  columns: Array<NewTableColumn<any>>;
  size?: ComponentSize;
  width?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  fit?: boolean;
  stripe?: boolean;
  border?: boolean;
  rowKey?: string | ((row: T) => string);
  context?: Table<T>;
  showHeader?: boolean;
  showSummary?: boolean;
  sumText?: string;
  summaryMethod?: SummaryMethod<T>;
  rowClassName?: ColumnCls<T>;
  rowStyle?: ColumnStyle<T>;
  cellClassName?: CellCls<T>;
  cellStyle?: CellStyle<T>;
  headerRowClassName?: ColumnCls<T>;
  headerRowStyle?: ColumnStyle<T>;
  headerCellClassName?: CellCls<T>;
  headerCellStyle?: CellStyle<T>;
  highlightCurrentRow?: boolean;
  currentRowKey?: string | number;
  emptyText?: string;
  expandRowKeys?: any[];
  defaultExpandAll?: boolean;
  defaultSort?: Sort;
  tooltipEffect?: string;
  tooltipOptions?: TableOverflowTooltipOptions;
  spanMethod?: (data: {
    row: T;
    rowIndex: number;
    column: TableColumnCtx<T>;
    columnIndex: number;
  }) =>
    | number[]
    | {
        rowspan: number;
        colspan: number;
      }
    | undefined;
  selectOnIndeterminate?: boolean;
  indent?: number;
  treeProps?: {
    hasChildren?: string;
    children?: string;
  };
  lazy?: boolean;
  load?: (row: T, treeNode: TreeNode, resolve: (data: T[]) => void) => void;
  className?: string;
  style?: CSSProperties;
  tableLayout?: Layout;
  scrollbarAlwaysOn?: boolean;
  flexible?: boolean;
  showOverflowTooltip?: boolean | TableOverflowTooltipOptions;
}

//下面是表格的基础属性

export const TableProps = {
  data: {
    type: Array as PropType<DefaultRow[]>,
    default: () => [],
  },
  ref: String,
  columns: Array<NewTableColumn<any>>,
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true,
  },
  stripe: Boolean,
  border: {
    type: Boolean,
    default: true,
  },
  rowKey: [String, Function] as PropType<TableProps<DefaultRow>["rowKey"]>,
  showHeader: {
    type: Boolean,
    default: true,
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function as PropType<TableProps<DefaultRow>["summaryMethod"]>,
  rowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>["rowClassName"]
  >,
  rowStyle: [Object, Function] as PropType<TableProps<DefaultRow>["rowStyle"]>,
  cellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>["cellClassName"]
  >,
  cellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>["cellStyle"]
  >,
  headerRowClassName: [String, Function] as PropType<
    TableProps<DefaultRow>["headerRowClassName"]
  >,
  headerRowStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>["headerRowStyle"]
  >,
  headerCellClassName: [String, Function] as PropType<
    TableProps<DefaultRow>["headerCellClassName"]
  >,
  headerCellStyle: [Object, Function] as PropType<
    TableProps<DefaultRow>["headerCellStyle"]
  >,
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array as PropType<TableProps<DefaultRow>["expandRowKeys"]>,
  defaultExpandAll: Boolean,
  defaultSort: Object as PropType<TableProps<DefaultRow>["defaultSort"]>,
  tooltipEffect: String,
  tooltipOptions: Object as PropType<TableProps<DefaultRow>["tooltipOptions"]>,
  spanMethod: Function as PropType<TableProps<DefaultRow>["spanMethod"]>,
  selectOnIndeterminate: {
    type: Boolean,
    default: true,
  },
  indent: {
    type: Number,
    default: 16,
  },
  treeProps: {
    type: Object as PropType<TableProps<DefaultRow>["treeProps"]>,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children",
      };
    },
  },
  lazy: Boolean,
  load: Function as PropType<TableProps<DefaultRow>["load"]>,
  style: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  className: {
    type: String,
    default: "",
  },
  tableLayout: {
    type: String as PropType<Layout>,
    default: "fixed",
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false,
  },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object] as PropType<
    TableProps<DefaultRow>["showOverflowTooltip"]
  >,
  ...NewTable,
};
//上面是表格的基础属性

//  下面是 表格的操作事件
export const vepTableEmits = {
  select: (selection: any[], row: any) => true,
  selectAll: (selection: any[]) => true,
  selectionChange: (selection: any[]) => true,
  cellMouseEnter: (
    row: any,
    column: TableColumnCtx<any>,
    cell: HTMLTableCellElement,
    ev: MouseEvent
  ) => true,
  cellMouseLeave: (
    row: any,
    column: TableColumnCtx<any>,
    cell: HTMLTableCellElement,
    ev: MouseEvent
  ) => true,
  cellContextmenu: (
    row: any,
    column: TableColumnCtx<any>,
    cell: HTMLTableCellElement,
    ev: Event
  ) => true,
  cellClick: (
    row: any,
    column: TableColumnCtx<any>,
    cell: HTMLTableCellElement,
    ev: Event
  ) => true,
  cellDblclick: (
    row: any,
    column: TableColumnCtx<any>,
    cell: HTMLTableCellElement,
    ev: Event
  ) => true,
  rowClick: (row: any, column: TableColumnCtx<any>, ev: Event) => true,
  rowContextmenu: (row: any, column: TableColumnCtx<any>, ev: Event) => true,
  rowDblclick: (row: any, column: TableColumnCtx<any>, ev: Event) => true,
  headerClick: (column: TableColumnCtx<any>, ev: Event) => true,
  headerContextmenu: (column: TableColumnCtx<any>, ev: Event) => true,
  sortChange: (prop: { column: TableColumnCtx<any>; prop: any; order: any }) =>
    true,
  filterChange: (filters: any) => true,
  currentChange: (currentRow: any, oldCurrentRow: any) => true,
  headerDragend: (
    newWidth: number,
    oldWidth: number,
    column: TableColumnCtx<any>,
    ev: Event
  ) => true,
  expandChange: (row: any, expanded: boolean | any[]) => true,
  query: (options: {
    pageNum: number;
    pageSize: number;
    total: number;
    dataList: any[];
    filterForm: any;
  }) => true,
};
