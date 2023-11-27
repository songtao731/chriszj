<template>
  <div class="flex border-dotted  w-full  border-b border-[#ccc] py-3">

    <div class="mr-5 py-[3px] px-[20px] cursor-pointer" :class="{ 'active': activeValue === item.value }"
      @click="changeTabs(item)" v-for="(item, index) in  tabList.tabsList " :key="index">{{
        item.label
      }}</div>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue';
import { TabsziProps } from "./TabsProps";
import { useRoute } from 'vue-router';
const emit = defineEmits(['changeTabs']);

const props = defineProps(TabsziProps);

const tabList = computed(() => props)
const activeValue = ref(tabList.value.activeValue)
const route = useRoute()

if (route.query.routeName) {
  activeValue.value = route.query.routeName
}


const changeTabs = (item) => {
  activeValue.value = item.value
  emit('changeTabs', { ...item, activeValue: activeValue.value })
}

</script>
<script lang="ts">
export default {
  name: "Tabs",
};
</script>

<style lang='scss' scoped>
.active {
  background-color: #409EFF;
  color: white;
  border-radius: 2px;
}
</style>
