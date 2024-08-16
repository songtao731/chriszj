import { Ref } from "vue";

export type RadioItem = {
  label?: string | number;
  disabled?: boolean;
  name?: string;
  value?: string | number;
  border?: boolean;
  size?: "large" | "default" | "small";
  [key: string]: any;
};

export interface RadioProps {
  label?: string;
  ref?: any;
  disabled?: boolean;

  size?: "large" | "default" | "small";
  textColor?: string;
  fill?: string;
  validateEvent?: boolean;
  options: RadioItem[];
  name?: string;
  id?: string;
  dictOptions?: { label?: string; value?: string; children?: string };
  onChange?: <T>(val: T) => void;
  onClear?: () => void;
}
