<template>
  <el-descriptions v-bind="props" class="chris-desc">
    <el-descriptions-item v-for="item in props.dataList" :span="item.span">
      <DescItem :data="item"> </DescItem>
    </el-descriptions-item>

    <template #extra>
      <slot name="extra"> </slot>
    </template>
  </el-descriptions>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, inject } from "vue";

import { newForm } from "./newForm";
import { formProps } from "./form";

import DescItem from "./form-itemTsx";
const props = defineProps(formProps);
</script>

<style lang="scss" scoped>
.chris-desc {
  width: 100%;
  :deep(.el-form-item) {
    width: calc(100% - 20px);
  }
}
</style>
