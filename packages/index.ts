

import TableList from "./TableList";
import { useTable } from "./TableList/comps/useTable";
import TableLists from "./TableLists";
import Ups from "./Up";

import { useTables } from "./TableLists/comps/useTables";

import { App } from "vue";
const chris = {
  useTable,
  useTables
};
// 按需引入
export { TableList,Ups, chris };

const component = [TableList,TableLists,Ups];

const install = {
  install(App: App) {
    component.forEach((item) => {
      App.component(item.name, item);
    });
  },
};

export default install;
