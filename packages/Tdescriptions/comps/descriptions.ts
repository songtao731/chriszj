import { useSizeProp } from "element-plus";
import { PropType } from "vue";
import { newDes } from "./newDescriptions";

export const descriptionProps = {
  ...newDes,
  border: {
    type: Boolean,
    default: true,
  },
  column: {
    type: Number,
    default: 3,
  },
  direction: {
    type:String as PropType<"vertical" | "horizontal" >,
    default: "horizontal",
  },

  size: useSizeProp,
  title: {
    type: String,
    default: "",
  },
  extra: {
    type: String,
    default: "",
  },
}
