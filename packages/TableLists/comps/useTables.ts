import { Args } from "../../TableList/comps/useTable";
import { TabsProps } from "./TabsProps";

export interface newArg extends TabsProps {
  table: (parms: any) => Args;
}

export const useTables = (args: newArg) => {
  const news = {
    tabs: args.tabs,
    table: args.table,
  };

  return news;
};
