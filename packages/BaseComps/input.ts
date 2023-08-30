import { Component } from "@vue/runtime-dom";
import { Ref } from "vue";

type size = "large" | "default" | "small";
type resize = "none" | "both" | "horizontal" | "vertical";

export interface InputPorps {
  type?: string;
  maxlength?: string | number;
  minlength?: number;
  showWordLimit?: boolean;
  formatter?: (x: string | number) => string;
  parser?: (x: string) => string;
  showPassword?: boolean;
  disabled?: boolean;
  size?: size;
  prefixIcon?: string | Component;
  suffixIcon?: string | Component;
  rows?: number;
  autosize?: boolean | { minRows?: number; maxRows?: number };
  autocomplete?: string;
  name?: string;
  readonly?: boolean;
  max?: string | number;
  min?: string | number;
  step?: string | number;
  resize?: resize;
  form?: string;
  tabindex?: string;
  validateEvent?: boolean;
  inputStyle?: string ;
  ref?:any
  placeholder?:string
  onChange?: <T>(data: T) => void;
  onFocus?: <T>(data: T) => void;
  onBlur?: <T>(data: T) => void;
  onInput?: <T>(data: T) => void;
  onClear?: () => void;
}
