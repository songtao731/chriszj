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
  onChange?: <T>(val: T) => void;
  onClear?: () => void;
}
