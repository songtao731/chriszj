import { Component, ComputedRef, Ref } from "vue";
import { SelectNewPorps } from "./selectNews";
export type opstionsItem = {
  [key: string]: any;
};

export interface SelectPorps extends SelectNewPorps {
  disabled?: boolean;
  multiple?: boolean;
  ref?: Ref<any>;
  //select opstions
  options?: opstionsItem[] | ComputedRef | Ref;
  dictOptions?: { label?: string; value?: string; children?: string };

  valueKey?: string;
  size?: "large" | "default" | "small";
  clearable?: boolean;
  collapseTags?: boolean;
  collapseTagsTooltip?: boolean;
  multipleLimit?: number;
  name?: string;
  effect?: "dark" | "light";
  autocomplete?: string;
  placeholder?: string;
  filterable?: boolean;
  allowCreate?: boolean;
  filterMethod?: Function;
  remote?: boolean;
  remoteMethod?: Function;
  remoteShowSuffix?: boolean;
  loading?: boolean;
  loadingText?: string;
  noMatchText?: string;
  noDataText?: string;
  popperClass?: string;
  reserveKeyword?: boolean;
  defaultFirstOption?: boolean;
  popperAppendToBody?: boolean;
  teleported?: boolean;
  persistent?: boolean;
  automaticDropdown?: boolean;
  clearIcon?: string | Component;
  fitInputWidth?: boolean;
  suffixIcon?: string | Component;
  suffixTransition?: boolean;
  tagType?: "success" | "warning" | "info" | "danger";
  validateEvent?: boolean;
  placement?:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end";
  maxCollapseTags?: number;
  onChange?: (x: any) => void;
  onFocus?: (x: any) => void;
  onBlur?: (x?: any) => void;
  onClear?: () => void;
  onVisibleChange?: (x: boolean) => void;
  onRemoveTag?: (x: any) => void;
}
