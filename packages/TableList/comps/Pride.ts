export interface TreeNode {
  expanded?: boolean;
  loading?: boolean;
  noLazyChildren?: boolean;
  indent?: number;
  level?: number;
  display?: boolean;
}

export interface Sort {
  prop: string;
  order: "ascending" | "descending";
  init?: any;
  silent?: any;
}