import { InputPorps } from "./input";
import { SelectPorps } from "./select";
import {ButtonProps} from "./buttons"
import { DatePickerPorps } from "./datePicker";
import { DateTimePickerPorps } from "./dateTimePicker";
import { CascaderBaseProps } from "./cascader";



export interface MainPackage {
  input: InputPorps;
  select:SelectPorps
  button:ButtonProps
  date:DatePickerPorps
  dateTime:DateTimePickerPorps
  cascader:CascaderBaseProps

}
