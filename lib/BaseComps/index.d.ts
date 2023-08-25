import { InputPorps } from "./input";
import { SelectPorps } from "./select";
import { ButtonProps } from "./buttons";
import { DatePickerPorps } from "./datePicker";
import { CascaderBaseProps } from "./cascader";
import { CheckBoxProps } from "./checkBox";
import { RadioProps } from "./radio";
import { RateProps } from "./rate";
import { UploadBaseProps } from "./upload";
export interface MainPackage {
    input: InputPorps;
    select: SelectPorps;
    button: ButtonProps;
    date: DatePickerPorps;
    cascader: CascaderBaseProps;
    checkbox: CheckBoxProps;
    radio: RadioProps;
    rate: RateProps;
    upload: UploadBaseProps;
}
