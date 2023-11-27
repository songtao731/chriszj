import Table from './comps/index.vue'
import { withInstall } from '../withInstall'

const TableList = withInstall(Table)
export default TableList


export * from './comps/Button';
export * from './comps/Pagination';
export * from './comps/Table';
export * from './comps/TableColumn';
export * from './comps/TableColumnItem';
export * from './comps/TableNew';
export * from './comps/useTable';

