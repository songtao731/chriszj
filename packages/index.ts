import TableList from "./TableList";
import TableLists from "./TableLists";
import Tupload from "./Tupload";
import Timgs from "./Timgs";
import Tform from "./Tform";
import Tupload2 from "./Tupload/comps/extend";


import { useTable } from "./TableList/comps/useTable";
import { useTables } from "./TableLists/comps/useTables";
import { useForm } from "./Tform/comp/useForm";
import { rulesFn } from "./utils/index";

import { App, createApp } from "vue";
const chris = {
  useTable,
  useTables,
  useForm,
  rulesFn,
};
// 按需引入
export { TableList, TableLists, Tupload, Timgs, Tform, chris ,Tupload2};

const component = [TableList, TableLists, Tupload, Timgs, Tform,Tupload2];

const install = {
  install(App: App) {
    component.forEach((item) => {
      App.component(item.name, item);
    });
  },
};

export default install;
