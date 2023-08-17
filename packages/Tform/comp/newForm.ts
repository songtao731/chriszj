import { PropType } from "vue";
import { dataItem, direction, size } from "./useForm";

export const newForm = {
  title: {
    type: String,
    default: "",
  },
  dataList: {
    type: Array as PropType<dataItem[]>,
    default: () => [],
  },
  direction: {
    type: String as PropType<direction>,
    default: "horizontal",
  },
  size: {
    type: String as PropType<size>,
    default: "default",
  },
  border:{
    type:Boolean,
    default:false
  },
  column:{
    type:Number,
    default:2
  },
  extra:{
    type:String,
    default:''
  }
};
