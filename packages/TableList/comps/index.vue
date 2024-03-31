<template>
  <div class="chris-table">
    <!-- 顶部插槽 -->
    <slot name="topheader"> </slot>

    <!-- <Search ref="searchRef" :filter="filterList" :searchSize="props.searchSize" :labelPosition="props.labelPosition"
      :searchData="props.searchData" @getParams="getParams" @resetFn="resetFn">
      <template #search>
        <slot name="search"> </slot>
      </template>
    </Search> -->
    <div class="mb-5 font-bold text-[16px]" v-if="props.title">
      {{ props.title }}
    </div>
    <Search2
      ref="searchRef"
      :labelWidth="props.labelWidth"
      :filter="columnsFilter"
      :size="props.size"
      v-if="columnsFilter && columnsFilter.length"
      :labelPosition="props.labelPosition"
      :gutter="props.gutter"
      :column="props.column"
      @getParams="getParams"
      @resetFn="resetFn"
    >
      <template
        v-for="items in columnsFilter"
        #[items?.filter?.slotName]="{ scope }"
      >
        <slot :name="items?.filter && items.filter?.slotName" :scope="scope" />
      </template>
    </Search2>
    <!-- 表格查询条件和表格之间的插槽 -->
    <slot name="centerheader"> </slot>

    <!-- 右上插槽 -->
    <Buttons :buttons="buttonsGet" :buttonsPosition="props.buttonsPosition">
    </Buttons>
    <!-- {{ formData.dataList }} -->
    <ElForm ref="formRef" :model="formData">
      <ElTable
        v-bind="props"
        :data="formData.dataList"
        style="width: 100%"
        v-on="tableEvents"
        ref="tableRef"
      >
        <template #empty>
          <slot name="empty"> 暂无数据 </slot>
        </template>
        <template #append>
          <slot name="append"></slot>
        </template>
        <ElTableColumn
          align="center"
          type="index"
          :index="indexMethod"
          :label="typeof props.index === 'object' && props.index.label"
          :width="typeof props.index === 'object' && props.index.width"
          v-if="
            typeof props.index === 'boolean' ? props.index : !props.index.hide
          "
        >
        </ElTableColumn>
        <ElTableColumn
          v-for="(item, index) in columnsFilter"
          :key="item.label"
          align="center"
          v-bind="item"
        >
          <template #header="scope" v-if="item.header">
            <slot v-bind="scope" name="header" />
          </template>
          <template #default="scope">
            <slot v-bind="scope" :name="item.slotName" v-if="item.slotName">
            </slot>
            <TableColumnTsx
              v-if="
                !item.slotName && !item.type && !item.formatter && !item.event
              "
              :data="scope?.row"
              :column="item"
            >
            </TableColumnTsx>
            <FormColumnTsx
              v-if="item.event"
              :data="scope"
              :column="item"
              :dataList="dataList"
            >
            </FormColumnTsx>
          </template>
        </ElTableColumn>
      </ElTable>
    </ElForm>
    <Pagination
      v-show="total > 0 && props.pagination"
      :total="total"
      @getPage="getPage"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :pageSizes="props.pageSizes"
      ref="pagination"
      :layout="props.layout"
      class="pb-5"
      :style="'justify-content:' + props.paginationPosition"
    />
    <slot name="footer"> </slot>
  </div>
</template>
<script setup lang="ts">
import { ElForm, ElLoading, ElTable } from "element-plus";
import {
  computed,
  ref,
  onMounted,
  unref,
  defineExpose,
  watchEffect,
} from "vue";
// import TableColumn from "./TableColumn.vue";
// import Search from "./SearchTsx";
import Search2 from "./SearchTsx2";
import Pagination from "./Pagination";
import Buttons from "./Buttons.vue";
import { vepTableEmits, TableProps } from "./Table";
import { getPath, getTotalPath } from "../utils/index";

import TableColumnTsx from "./TableColumnTsx";
import FormColumnTsx from "./FormColumnTsx";

//表格所有事件
const emit = defineEmits({
  ...vepTableEmits,
  resetFn: () => true,
  getSearchData: (data) => data,
});
//表格属性
const props = defineProps(TableProps);

// const { columns } = toRefs(props);
const columnsFilter = computed(
  () =>
    props.columns?.filter((el) => {
      return !unref(el.hide);
    })
);
//控制展示显示隐藏 某些列

// const filterColumns = columns?.value?.filter((el) => !el.hide);

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

const currentPage = ref(props.currentPage);
const pageSize = ref(props.currentPageSize);

//初始化数目
const total = ref(0);
//初始化获取数据格式
let path = props.path || "rows";
//初始化获取total的位置
let totalPath = props.totalPath || "total";

const formData = ref({
  dataList: [],
});

//表格的数据
const dataList = ref([]);
watchEffect(() => {
  if (!props.request) {
    dataList.value = props.data;
    formData.value.dataList = dataList.value;
  }
});
//右上角按钮动态传参
const buttonsGet = computed(() => {
  return props.buttons;
});

const getDataList = async (data?: any) => {
  let loading = null;
  if (!props.hideLoading) {
    loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
  }

  const params = {
    ...data,
    [usePageNum]: currentPage.value,
    [usePageSize]: pageSize.value,
  };
  if (props.request) {
    const res = await props.request!(params)
      .then((res: any) => {
        return res;
      })
      .finally(() => {
        if (loading) {
          loading.close();
        }
      });

    dataList.value = getPath(res, path);
    total.value = getTotalPath(res, totalPath);
    //格式化后端代码
    if (props.parseData) {
      dataList.value = props.parseData(dataList.value);
    }
    formData.value.dataList = dataList.value;
  } else {
    emit("getSearchData", params);
  }
};

//获取筛选条件
// type NewFilter = Filter;
// const filterList = ref<NewFilter[]>([]);
//当列不存在的时候筛选条件也 取消

//分页组件Ref
const pagination = ref();
//点击查询 查询事件  第一次加载数据也是这里
//只触发第一次
let isFirstPage = true;
const getParams = (data: any) => {
  //点击查询回到第一页
  currentPage.value = 1;
  //如果外部传入显示第几页
  if (props.currentPage && isFirstPage) {
    currentPage.value = props.currentPage;
    pageSize.value = props.currentPageSize;
    isFirstPage = false;
  }
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
//初始化表格校验

onMounted(() => {
  // 在这里可以加判断 第一次进页面 不加载数据,暂时不处理这个逻辑
  props.request && searchRef.value.getParams(searchRef.value.formData);
});
const tableRef = ref();
const formRef = ref();

//清空查询条件
const resetFn = () => {
  emit("resetFn");
};
defineExpose({
  tableRef,
  formRef,
  refresh: (data) => {
    getParams({ ...searchRef.value.newFormData, ...data });
  },
  params: searchRef,
  resetFn,
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
  :deep(.el-table th.el-table__cell) {
    background: #f8f8f8;
    color: #606266;
  }
}
</style>
