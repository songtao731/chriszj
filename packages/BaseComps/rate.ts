import { Component ,Ref} from "vue";


export interface RateProps {
  max?: number;
  disabled?: boolean;
  ref?:any

  size?: "large" | "default" | "small";
  allowHalf?:boolean
  lowThreshold?:number
  highThreshold?:number
  colors?:string[] | Record<number, string>
  voidColor?:string
  disabledVoidColor?:string
  icons?:string[] | Component[] | Record<number, string | Component>
  voidIcon?:string|Component
  disabledVoidIcon?:string|Component
  showText?:boolean
  showScore?:boolean
  textColor?:string
  texts?:string[]
  scoreTemplate?:string
  clearable?:boolean
  label?:string
  id?: string;
  onChange?: <T>(val: T) => void;
  onClear?: () => void;
}
