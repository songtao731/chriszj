export interface TabsProps {
  tabs: {
    activeValue: string | number;
    tabsList: { label: string; value: string | number }[];
    isRoute?: boolean;
  };
}
const tabsListItem:{label:string,value:string}[]=[]
export const TabsziProps = {
  activeValue: {
    type: [String, Number],
    default: "",
  },
  tabsList: {
    type: Array,
    default: tabsListItem,
  },
  isRoute: {
    type: Boolean,
    default: false,
  },
};

export const TabsProps = {
  tabs: {
    type: Object,
    default:TabsziProps,
  },
};

export interface tabsRefs {
  [key: string]: any;
}
