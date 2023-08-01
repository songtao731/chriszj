<template>
<div class="chris-tables">
  <slot name="topheader"> </slot>

<el-tabs v-bind="tabsProps" v-model="activeName">
  <el-tab-pane
    v-for="(item, index) in tabsProps.tabsList"
    :key="index"
    :label="item.label"
    :name="item.value"
  >
    <TableList
      v-bind="tableProps"
      v-on="tableEvents"
      v-if="item.value === activeName"
      @resetFn="resetFn"
      :ref="(ref) => setRef(ref, item.value)"
    >
      <template #centerheader>
        <slot name="centerheader"> </slot>
      </template>

      <template #footer>
        <slot name="footer"> </slot>
      </template>
    </TableList>
  </el-tab-pane>
</el-tabs>
</div>
</template>
<script setup lang="ts">
import { vepTableEmits, TableProps } from "../TableList/comps/Table";
import { TabsProps } from "./comps/TabsProps";
import { TableLists } from "./comps/Tables";

import { ComputedRef, mergeProps, watchEffect, nextTick } from "vue";

import { computed, ref, onMounted, toRefs, unref, defineExpose } from "vue";
import TableList from "../TableList/TableList.vue";
import { AnyAaaaRecord } from "dns";

const props = defineProps({ ...TableLists, ...TabsProps });

const tabsProps: ComputedRef = computed(() => {
  return mergeProps(props.tabs, {
    type: "border-card",
    closable: false,
    addable: false,
    editable: false,
    stretch: false,
  });
});
const tablePropsFn: ComputedRef = computed(() => {
  return props.table;
});

//表格所有事件
const emit = defineEmits({ ...vepTableEmits, resetFn: () => {} });
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
const activeName = ref(tabsProps.value.activeName);

const tableProps = ref([]);

interface tabsRefs {
  [key: string]: any;
}
const tabsRefs: tabsRefs = ref({});
watchEffect(() => {
  tableProps.value = tablePropsFn.value(activeName.value);
});

const setRef = (ref: any, name: any) => {
  tabsRefs.value[name] = ref;
};

//清空查询条件
const resetFn = () => {
  emit("resetFn");
};
defineExpose({
  tableRef: tabsRefs,
});
</script>
<script lang="ts">
export default {
  name: "TableLists",
};
</script>

<style scoped lang="scss">
.chris-tables {
  padding:  20px;
}
</style>
