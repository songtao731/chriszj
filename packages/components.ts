import TableList from "./TableList/comps/index.vue";
import TableLists from "./TableLists/comps/index.vue";
import Tupload from "./Tupload/comps/index.vue";


declare module 'vue' {
  export interface GlobalComponents {
    TableList: typeof TableList,
    TableLists: typeof TableLists 
    Tupload: typeof Tupload 

  }
}
