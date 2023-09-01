
import { PropType } from "vue";
import { desItem } from "./useDescriptions";

export const newDes= {
  request: [Object,Function],
  parseData: Function,
  path: String,
  dataList: {
    type: Array as PropType<desItem[]>,
    default: () => [],
  }
};
