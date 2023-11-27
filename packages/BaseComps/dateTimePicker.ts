import { Component,Ref } from "vue";

export interface DateTimePickerPorps {
  readonly?: boolean;
  disabled?: boolean;
  ref?:any

  size?: "large" | "default" | "small";
  editable?: boolean;
  clearable?: boolean;
  placeholder?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  timeArrowControl?:boolean
  type?:
    | "year"
    | "month"
    | "date"
    | "week"
    | "datetime"
    | "datetimerange"
    | "daterange"
  format?: string;
  popperClass?: string;
  rangeSeparator?: string;
  defaultValue?: Date | [Date, Date];
  defaultTime?: Date | [Date, Date];
  valueFormat?: string;
  id?: string | [string, string];
  name?: string;
  unlinkPanels?: boolean;
  prefixIcon?: string | Component;
  clearIcon?: string | Component;
  validateEvent?: boolean;
  disabledDate?: () => void;
  shortcuts?: Array<{ text: string; value: Date | Function }>;
  cellClassName?: (Date: Date) => void;
  teleported?: boolean;
  onChange?: <T>(val: T) => void;
  onFocus?: <T>(val: T) => void;
  onBlur?: <T>(val: T) => void;
  onCalendarChange?: (date: [Date, Date]) => void;
  onVisibleChange?: (x: boolean) => void;

  onClear?: () => void;
}
