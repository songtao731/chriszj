import TableList from "./TableList/comps/index.vue";
import TableLists from "./TableLists/comps/index.vue";
import Ups from "./Up/comps/index.vue";
declare module 'vue' {
    interface GlobalComponents {
        TableList: typeof TableList;
        TableLists: typeof TableLists;
        Ups: typeof Ups;
    }
}
