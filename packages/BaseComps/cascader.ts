import { CascaderNode, CascaderProps, CascaderValue } from "element-plus";

export interface CascaderBaseProps {
  options?: Record<string, unknown>[];
  props?: CascaderProps;
  size?: "large" | "default" | "small";
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  showAllLevels?: boolean;
  collapseTags?: boolean;
  collapseTagsTooltip?: boolean;
  separator?: string;
  filterable?: boolean;
  filterMethod?: (node: CascaderNode, keyword: string) => boolean;
  debounce?: number;
  beforeFilter?: (value: string) => boolean;
  popperClass?: string;
  teleported?: boolean;
  popperAppendToBody?: boolean;
  tagType?: "success" | "info" | "warning" | "danger";
  validateEvent?: boolean;
  onChange?: <T>(val: T) => void;
  onFocus?: <T>(val: T) => void;
  onBlur?: <T>(val: T) => void;
  onExpandChange?: (value: CascaderValue) => void;
  onVisibleChange?: (value: boolean) => void;
  onRemoveTag?: (value: CascaderNode["valueByOption"]) => void;

  onClear?: () => void;
}