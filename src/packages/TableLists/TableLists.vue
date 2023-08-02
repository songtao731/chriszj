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
          <template #search>
            <slot name="search"> </slot>
          </template>
          <template #empty>
            <slot name="empty"></slot>
          </template>
          <template #append>
            <slot name="append"></slot>
          </template>
          <template #centerheader>
            <slot name="centerheader"> </slot>
          </template>

          <template
            v-for="item in tableProps?.columns"
            #[item.slotName]="scope"
          >
            <slot :name="item.slotName" v-bind="scope" />
            <slot name="header" v-bind="scope" />
          </template>

          <template #footer>
            <slot name="footer"> </slot>
          </template>
        </TableList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts" name="TableLists">
import { vepTableEmits, TableProps } from "../TableList/comps/Table";
import { TabsProps } from "./comps/TabsProps";
import { TableLists } from "./comps/Tables";

import { ComputedRef, mergeProps, watchEffect } from "vue";

import { computed, ref, onMounted, toRefs, unref, defineExpose } from "vue";
import TableList from "../TableList/TableList.vue";


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

const tableProps = ref({});

interface tabsRefs {
  [key: string]: any;
}
const tabsRefs: tabsRefs = ref({});
//清空查询条件
const resetFn = () => {
  emit("resetFn");
};
watchEffect(() => {
  tableProps.value = tablePropsFn.value(activeName.value);
  resetFn();
});

const setRef = (ref: any, name: any) => {
  tabsRefs.value[name] = ref;
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
  padding: 20px;
}
</style>
