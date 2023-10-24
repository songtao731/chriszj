<template>
  <div class="chris-buttons pt-[20px] px-5" v-if="buttonList?.length" :style="'text-align:'+props.buttonsPosition">
    <ElButton type="primary" v-bind="item"  v-for="(item, index) in buttonList" :key="index">
      {{ item.content }}
    </ElButton>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
import { NewTableCtx } from "./TableNew";

import { PropType } from "vue";


const props = defineProps({ buttons: Array as PropType<NewTableCtx["buttons"]>,buttonsPosition: String as PropType<NewTableCtx["buttonsPosition"]> });

const buttonList = props.buttons;

</script>

<style scoped lang="scss">
.chris-buttons{
  text-align: right;
  margin-bottom: 20px;
}

</style>
