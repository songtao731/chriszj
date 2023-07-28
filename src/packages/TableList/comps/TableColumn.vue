<template>
  <ElTableColumn v-bind="props">
    <!-- 头部插槽 -->
    <template #header="scope" v-if="props.header">
      <slot v-bind="scope" name="header" />
    </template>

    <!-- 默认 -->
    <template #default="scope">
      <!-- 自定义模板 -->
      <slot v-bind="scope" v-if="props.slotName"> </slot>
      <!-- 格式化值的模板 -->
      <TableColumn
        v-if="!props.slotName&&props.type==='default'&&!props.formatter"
        :data="scope?.row"
        :column="props"
      ></TableColumn>
    </template>
  </ElTableColumn>
</template>
<script setup lang="ts">
import TableColumnProps from "./TableColumn";
import TableColumn from "./TableColumnTsx";

const props = defineProps(TableColumnProps);

</script>

<style scoped></style>
