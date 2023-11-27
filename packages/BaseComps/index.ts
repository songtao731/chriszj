import { InputPorps } from "./input";
import { SelectPorps } from "./select";
import { ButtonProps } from "./buttons";
import { DatePickerPorps } from "./datePicker";
import { CascaderBaseProps } from "./cascader";
import { CheckBoxProps } from "./checkBox";
import { RadioProps } from "./radio";
import { RateProps } from "./rate";
import { UploadBaseProps } from "./upload";
import { SwitchProps } from "./switch";
import { SliderProps } from "./slider";
import { InputNumberPorps } from "./inputNumber";





export interface MainPackage {
  input: InputPorps;
  select: SelectPorps;
  button: ButtonProps;
  date: DatePickerPorps;
  cascader: CascaderBaseProps;
  checkbox: CheckBoxProps;
  radio: RadioProps;
  rate: RateProps;
  upload:UploadBaseProps
  switch:SwitchProps
  slider:SliderProps
  inputNumber:InputNumberPorps
}
