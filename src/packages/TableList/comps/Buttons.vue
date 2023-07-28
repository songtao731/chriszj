<template>
  <div class="chris-buttons">
    <ElButton type="primary" v-bind="item"  v-for="(item, index) in buttonList" :key="index">
      {{ item.content }}
    </ElButton>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
import { NewTableCtx } from "./TableNew";

import { PropType } from "vue";


const props = defineProps({ buttons: Array as PropType<NewTableCtx["buttons"]> });

const buttonList = props.buttons;

</script>

<style scoped lang="scss">
.chris-buttons{
  text-align: right;
}

</style>
