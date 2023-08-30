import type { CSSProperties ,Ref} from 'vue'

interface Mark {
  style: CSSProperties
  label: string
}

type Marks = Record<number, Mark | string>

export interface SliderProps {
  disabled?: boolean;
  min?:number
  max?:number
  step?:number
  showInput?:boolean
  showInputControls?:boolean
  size?: "large" | "default" | "small";
  inputSize?: "large" | "default" | "small";
  showStops?:boolean
  showTooltip?:boolean
  formatTooltip?:(val:any) => any
  range?:boolean
  vertical?:boolean
  height?:string
  label?:string
  rangeStartLabel?:string
  rangeEndLabel?:string
  formatValueText?:(val:any) => any
  debounce?:number
  tooltipClass?:string
  placement?:'top'|'top-start'|'top-end'|'bottom'|'bottom-start'|'bottom-end'|'left'|'left-start'|'left-end'|'right'|'right-start'|'right-end'
  marks?:Marks
  validateEvent?:boolean
  class?:string
  ref?:any


  onChange?: <T>(val: T) => void;
  onInput?: <T>(val: T) => void;

  onClear?: () => void;
}
