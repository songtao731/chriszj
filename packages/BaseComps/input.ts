import { Component } from "@vue/runtime-dom";

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
  onChange?: <T>(x: T) => void;
  onFocus?: <T>(x: T) => void;
  onBlur?: <T>(x: T) => void;
  onInput?: <T>(x: T) => void;
  onClear?: () => void;
}
