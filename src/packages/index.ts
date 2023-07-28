import TableList from "./TableList/TableList.vue";
import {useTable} from "./TableList/comps/useTable";

import { App } from "vue";
// 按需引入
export { TableList,useTable };

const component = [TableList];

const install = {
	install(App:App) {
		component.forEach((item) => {
			App.component(item.name, item);
		});
	},
};

export default install;

