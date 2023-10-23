import { MainPackage } from "../../BaseComps/index";
import { PropType } from "vue";
import { dataItem, size } from "./useForm";

export const newForm = {
  request: [Object,Function],
  edit:{  
    type:Boolean,
    default:false

  },
  parseData: Function,

  path: String,

  title: {
    type: String,
    default: "",
  },
  dataList: {
    type: Array as PropType<dataItem[]>,
    default: () => [],
  },
  size: {
    type: String as PropType<size>,
    default: "default",
  },
  border: {
    type: Boolean,
    default: false,
  },
  column: {
    type: [Number, String],
    default: 2,
  },
  gutter: {
    type: Number,
    default: 0,
  },
  closePlaceholder: {
    type: Boolean,
    default: false,
  },
  buttons: {
    type: Array as PropType<MainPackage["button"][]>,
    default: () => [],
  },
  buttonsAlign: {
    type: String,
    default: "center",
  },
  class: {
    type: String,
  }
};
