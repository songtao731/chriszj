import { Component, Ref } from "vue";

export interface DatePickerPorps {
  readonly?: boolean;
  disabled?: boolean;
  size?: "large" | "default" | "small";
  editable?: boolean;
  clearable?: boolean;
  placeholder?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  type?:
    | "year"
    | "month"
    | "date"
    | "dates"
    | "week"
    | "datetime"
    | "datetimerange"
    | "daterange"
    | "monthrange";
  format?: string;
  popperClass?: string;
  popperOptions?: object;
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
  ref?:any

  onChange?: <T>(val: T) => void;
  onFocus?: <T>(val: T) => void;
  onBlur?: <T>(val: T) => void;
  onCalendarChange?: (date: [Date, Date]) => void;
  onPanelChange?: <T, X, Z>(date: T, mode: X, view: Z) => void;
  onVisibleChange?: (x: boolean) => void;

  onClear?: () => void;
}
