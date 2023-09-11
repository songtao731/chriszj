<template>
  <el-descriptions v-bind="props" :title="props.title" class="chris-desc">

  </el-descriptions>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, inject } from "vue";

import { newForm } from "./newForm";
import DescItem from "./form-itemTsx";
const props = defineProps(newForm);

</script>

<style lang="scss" scoped>
.chris-desc {
  width: 100%;
}
</style>
