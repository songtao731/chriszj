import { Component ,Ref} from "vue";

export interface SwitchProps {
  disabled?: boolean;
  size?: "" | "large" | "default" | "small";
  loading?: boolean;
  width?: number | string;
  inlinePrompt?: boolean;
  activeIcon?: string | Component;
  inactiveIcon?: string | Component;
  activeActionIcon?: string | Component;
  inactiveActionIcon?: string | Component;
  activeText?: string;
  inactiveText?: string;
  activeValue?: boolean | string | number;
  inactiveValue?: boolean | string | number;
  activeColor?: string;
  inactiveColor?: string;
  borderColor?: string;
  name?: string;
  validateEvent?: boolean;
  beforeChange?: () => Promise<boolean> | boolean;
  id?: string;
  tabindex?: string | number;
  ref?:any

  onChange?: <T>(val: T) => void;
  onClear?: () => void;
}
