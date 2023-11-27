

type size = "large" | "default" | "small";
type controlsPosition = "" | "right";

export interface InputNumberPorps {
  disabled?: boolean;
  size?: size;
  readonly?: boolean;
  max?:  number;
  min?: number;
  step?:  number;
  stepStrictly?: boolean;
  precision?: number;
  controls?: boolean;
  controlsPosition?: controlsPosition;
  name?: string;
  label?: string;
  validateEvent?: boolean;
  inputStyle?: string;
  ref?: any;
  placeholder?: string;
  valueOnClear?: number | null | 'min' | 'max';
  onChange?: <T>(data: T) => void;
  onFocus?: <T>(data: T) => void;
  onBlur?: <T>(data: T) => void;
  onClear?: () => void;
}
