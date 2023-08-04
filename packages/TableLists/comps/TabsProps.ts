export type TabPaneName = string | number;

export interface TabsProps {
  tabs: {
    type?: string;
    activeName: string | number;
    closable?: boolean;
    addable?: boolean;
    modelValue?: string | number;
    editable?: boolean;
    tabPosition?: "top" | "right" | "bottom" | "left";
    stretch?: boolean;
    beforeLeave?: () => true;
    tabsList:{label:string,value:string|number}[]
  };
}

export const TabsProps = {
  tabs: {
    type:Object,
    default: {
      type: {
        type: String,
        values: ["card", "border-card"],
        default: "border-card",
      },
      activeName: {
        type: [String, Number],
        default: "",
      },
      closable: {
        type: Boolean,
        default: false,
      },
      addable: {
        type: Boolean,
        default: false,
      },
      modelValue: {
        type: [String, Number],
      },
      editable: {
        type: Boolean,
        default: false,
      },
      tabPosition: {
        type: String,
        values: ["top", "right", "bottom", "left"],
        default: "top",
      },
      beforeLeave: {
        type: Function,
        default: () => false,
      },
      stretch: {
        type:Boolean,
        default:false
      },
    },
  },
};
