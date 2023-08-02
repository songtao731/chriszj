import TableList from "./TableList/TableList.vue";
import {useTable} from "./TableList/comps/useTable";
import TableLists from "./TableLists/TableLists.vue";
import {useTables} from "./TableLists/comps/useTables";


import { App } from "vue";

const chris={
	useTable,
	useTables
}
// 按需引入
export { TableList,TableLists,chris };

const component = [TableList,TableLists];


const install = {
	install(App:App) {
		component.forEach((item) => {
			App.component(item.name, item);
		});
	},
};

export default install;

