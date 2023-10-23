export type TabPaneName = string | number;

export interface TabsProps {
  tabs: {
    activeValue: string | number;
    tabsList: {
      label: string;
      value: string | number;
      color: string;
      backgroundColor: string;
    }[];
    isRoute?: boolean;
    size?: "large" | "default" | "small";
  };
}

export const TabsProps = {
  tabs: {
    activeValue: {
      type: [String, Number],
      default: "",
    },
    tabsList: {
      type: Array,
      default: [],
    },
    isRoute: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
    },
  },
};
export interface tabsRefs {
  [key: string]: any;
}
