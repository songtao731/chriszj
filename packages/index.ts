import TableList from "./TableList";
import TableLists from "./TableLists";
import Tupload from "./Tupload";

import { useTable } from "./TableList/comps/useTable";
import { useTables } from "./TableLists/comps/useTables";

import { App } from "vue";
const chris = {
  useTable,
  useTables,
};
// 按需引入
export { TableList, TableLists, Tupload, chris };

const component = [TableList, TableLists, Tupload];

const install = {
  install(App: App) {
    component.forEach((item) => {
      App.component(item.name, item);
    });
  },
};

export default install;
