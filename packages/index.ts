import TableList from "./TableList";
import TableLists from "./TableLists";
import Tupload from "./Tupload";
import Timgs from "./Timgs";
import Tform from "./Tform";


import { useTable } from "./TableList/comps/useTable";
import { useTables } from "./TableLists/comps/useTables";
import { useForm } from "./Tform/comp/useForm";
import { rulesFn } from "./utils/index";

import './tailwind.css';
import './preflight.css'

import { App, createApp } from "vue";
const chris = {
  useTable,
  useTables,
  useForm,
  rulesFn,
};
// 按需引入
export { TableList, TableLists, Tupload, Timgs, Tform, chris };

const component = [TableList, TableLists, Tupload, Timgs, Tform];

const install = {
  install(App: App) {
    component.forEach((item) => {
      App.component(item.name, item);
    });
  },
};

export default install;
