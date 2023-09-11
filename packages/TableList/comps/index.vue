<template>
  <div class="chris-table">
    <slot name="topheader"> </slot>

    <!-- <Search ref="searchRef" :filter="filterList" :searchSize="props.searchSize" :labelPosition="props.labelPosition"
      :searchData="props.searchData" @getParams="getParams" @resetFn="resetFn">
      <template #search>
        <slot name="search"> </slot>
      </template>
    </Search> -->
    <Search2 ref="searchRef" :labelWidth="props.labelWidth" :filter="columnsFilter" :size="props.size" :labelPosition="props.labelPosition"
      :gutter="props.gutter" :column="props.column" @getParams="getParams" @resetFn="resetFn">
   
        <template v-for="items in filterList" #[items.filter.slotName]="{ scope }">
          <slot :name="items.filter&&items.filter.slotName" :scope="scope" />
        </template>

   


    </Search2>
    <slot name="centerheader"> </slot>

    <Buttons :buttons="props.buttons"> </Buttons>
    <ElTable :data="dataList" style="width: 100%" v-on="tableEvents" ref="tableRef">
      <template #empty>
        <slot name="empty">

          暂无数据
        </slot>
      </template>
      <template #append>
        <slot name="append"></slot>
      </template>
      <ElTableColumn type="index" :index="indexMethod" :label="typeof props.index === 'object' && props.index.label"
        :width="typeof props.index === 'object' && props.index.width" v-if="typeof props.index === 'boolean' ? props.index : !props.index.hide
          ">
      </ElTableColumn>
      <TableColumn v-for="(item, index) in columnsFilter" :key="index" v-bind="item">
        <template v-if="item.header" #header="scope">
          <slot name="header" v-bind="scope" />
        </template>
        <template v-if="item.slotName" #default="scope">
          <slot :name="item.slotName" v-bind="scope" />
        </template>
      </TableColumn>
    </ElTable>

    <Pagination v-show="total > 0 && props.pagination" :total="total" @getPage="getPage" :currentPage="currentPage"
      :pageSize="pageSize" :pageSizes="props.pageSizes" ref="pagination" :layout="props.layout" />
    <slot name="footer"> </slot>
  </div>
</template>
<script setup lang="ts">
import { ElTable } from "element-plus";
import { computed, ref, onMounted, toRefs, unref, defineExpose } from "vue";
import TableColumn from "./TableColumn.vue";
import Search from "./SearchTsx";
import Search2 from "./SearchTsx2";
import Pagination from "./Pagination";
import Buttons from "./Buttons.vue";
import type { Filter } from "./TableColumnItem";
import { vepTableEmits, TableProps } from "./Table";
import { getPath, getTotalPath } from "../utils/index";



//表格所有事件
const emit = defineEmits({ ...vepTableEmits, resetFn: () => { } });
//表格属性
const props = defineProps(TableProps);


const { columns } = toRefs(props);
const columnsFilter=computed(()=>props.columns?.filter(el=>{
  return !unref(el.hide)
}))

//控制展示显示隐藏 某些列

const filterColumns = columns?.value?.filter((el) => !el.hide);
console.log(filterColumns,'columnsFilter',columnsFilter)


const searchRef = ref();

//挂在表格属性
const tableEvents = computed(() => {
  const ons: any = {};
  for (const key of Object.keys(vepTableEmits)) {
    ons[key] = (...arg: any[]) => {
      // @ts-ignore
      emit(key, ...arg);
    };
  }
  return ons;
});

//初始分页入参
const { usePageNum, usePageSize } = {
  usePageNum: props.pageNum || "pageNum",
  usePageSize: props.pageSize || "pageSize",
};
// 初始化分页参数 给后台的值
const currentPage = ref(1);
const pageSize = ref(10);

//表格的数据
const dataList = ref<any[]>([]);
//初始化数目
const total = ref(0);
//初始化获取数据格式
let path = props.path || "data.rows";
//初始化获取total的位置
let totalPath = props.totalPath || "data.total";
dataList.value = props.data;
const getDataList = async (data?: any) => {
  const params = {
    ...data,
    [usePageNum]: currentPage.value,
    [usePageSize]: pageSize.value,
  };
  const res = await props.request!(params);

  dataList.value = getPath(res, path);

  total.value = getTotalPath(res, totalPath);


  if (props.parseData) {
    dataList.value = props.parseData(dataList.value);
  }
};

//获取筛选条件
type NewFilter = Filter;
const filterList = ref<NewFilter[]>([]);
//当列不存在的时候筛选条件也 取消


//分页组件Ref
const pagination = ref();
//点击查询 查询事件
const getParams = (data: any) => {
  currentPage.value = 1;
  getDataList(data);
};
const getPage = async (page: any) => {
  // 获取分页
  currentPage.value = page.currentPage.value;
  pageSize.value = page.pageSize.value;
  getDataList({ ...searchRef.value.newFormData });
};
//初始序号
const indexMethod = (index: number) => {
  return index + 1 + (currentPage.value - 1) * pageSize.value;
};



onMounted(() => {
  // 在这里可以加判断 第一次进页面 不加载数据,暂时不处理这个逻辑
  props.request && searchRef.value.getParams(searchRef.value.formData);
});
const tableRef = ref();

//清空查询条件
const resetFn = () => {
  emit("resetFn");
};
defineExpose({
  tableRef,
  refresh: getParams,
  params: searchRef,
});
</script>
<script lang="ts">
export default {
  name: "TableList",
};
</script>

<style scoped lang="scss">
.chris-table {
  margin: 20px 0;
  padding: 0 20px;
}
</style>
