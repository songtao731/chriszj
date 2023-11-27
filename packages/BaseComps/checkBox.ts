import { Ref } from "vue";

export type CheckBoxItem = {
  label?: string | number;
  trueLabel?: string | number;
  falseLable?: string | number;
  disabled?: boolean;
  name?: string;
  checked?: boolean;
  value?: string | number;
  border?: boolean;
  indeterminate?: boolean;

  validateEvent?: boolean;
  tabindex?: string | number;
  id?: string;
  controls?: string;
  [key:string]:any
};

export interface CheckBoxProps {
  label?: string;
  disabled?: boolean;
  size?: "large" | "default" | "small";
  min?: number;
  max?: number;
  textColor?: string;
  fill?: string;
  tag?: string;
  validateEvent?: boolean;
  options: CheckBoxItem[];
  dictOptions?:{label?:string,value?:string,children?:string}

  ref?:any

  onChange?: <T>(val: T) => void;
  onClear?: () => void;
}
