import { Ref } from "vue";

export type RadioItem = {
  label?: string | number;
  disabled?: boolean;
  name?: string;
  value?: string | number;
  border?: boolean;
  size?:'large' | 'default' | 'small'

};

export interface RadioProps {
  label?: string;
  ref?:any
  disabled?: boolean;

  size?: "large" | "default" | "small";
  textColor?: string;
  fill?: string;
  validateEvent?: boolean;
  options: RadioItem[];
  name?: string;
  id?: string;
  onChange?: <T>(val: T) => void;
  onClear?: () => void;
  
}
