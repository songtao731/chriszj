<template>
  <div class="chris-tables">
    <slot name="topheader"> </slot>

    <Tabs v-bind="tabsProps" @changeTabs="tabChangeFn">

    </Tabs>

    <div v-for="(item) in tabsProps.tabsList" :key="item">
      <TableList v-bind="tableProps" v-on="tableEvents" v-if="item.value === activeName" @resetFn="resetFn"
        :ref="(ref) => setRef(ref, item.value)">
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

        <template v-for="item in tableProps?.columns" #[item.slotName]="scope">
          <slot :name="item.slotName" v-bind="scope" />
          <slot name="header" v-bind="scope" />
        </template>

        <template #footer>
          <slot name="footer"> </slot>
        </template>
      </TableList>

    </div>

    <!-- <el-tabs v-bind="tabsProps" v-model="activeName" @tabChange="tabChangeFn">
      <el-tab-pane v-for="(item, index) in tabsProps.tabsList" :key="item" :label="item.label" :name="item.value">
        <TableList v-bind="tableProps" v-on="tableEvents" v-if="item.value === activeName" @resetFn="resetFn"
          :ref="(ref) => setRef(ref, item.value)">
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

          <template v-for="item in tableProps?.columns" #[item.slotName]="scope">
            <slot :name="item.slotName" v-bind="scope" />
            <slot name="header" v-bind="scope" />
          </template>

          <template #footer>
            <slot name="footer"> </slot>
          </template>
        </TableList>
      </el-tab-pane>
    </el-tabs> -->
  </div>
</template>
<script setup lang="ts">
import Tabs from "./Tabs.vue";
import { vepTableEmits, TableProps } from "../../TableList/comps/Table";
import  { TabsProps, tabsRefs } from "./TabsProps";
import { TableLists } from "./Tables";

import { ComputedRef, watchEffect } from "vue";

import { computed, ref, defineExpose } from "vue";
import TableList from "../../TableList/comps/index.vue";
import { useRoute, useRouter } from 'vue-router'




const props = defineProps({ ...TableLists, ...TableProps,...TabsProps});




const tabsProps: ComputedRef = computed(() => {
  return props.tabs
});
const tablePropsFn: ComputedRef = computed(() => {
  return props.table;
});


const route = useRoute()
const router = useRouter()
//点击加载 route,用于列表页点击进详情页 后返回


const tabChangeFn = (val: any) => {

  activeName.value=val.activeValue
  
  if (tabsProps.value.isRoute) {
    router.replace({
      path: route.path,
      query: {
        ...route.query,
        routeName: val.value
      }
    })
  }
  emit('tabClick',val)

}

//表格所有事件
const emit = defineEmits({ ...vepTableEmits, resetFn: () => true,tabClick :(row)=>row});
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

//给tabs初始化值
const getAcitveName = () => {
  let value
  //开启 只有当开启isRoute并且已经点击过 tabs
  if (tabsProps.value.isRoute && route.query.routeName) {
    value = route.query.routeName
  } else {
    value = tabsProps.value.activeValue
  }
  return value
}
const activeName = ref(getAcitveName());

const tableProps = ref();

const tabsRefs: tabsRefs = ref({});
//清空查询条件
const resetFn = () => {
  emit("resetFn");
};
watchEffect(() => {
  tableProps.value = { ...props, ...tablePropsFn.value(activeName.value) };
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
  name: 'TableLists'
};
</script>

<style scoped lang="scss">

</style>
