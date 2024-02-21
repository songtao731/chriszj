<template>
  <div
    class="chris-buttons"
    v-if="buttonList?.length"
    :style="'text-align:' + props.buttonsPosition"
  >
    <ElButton
      type="primary"
      v-bind="item"
      v-for="(item, index) in buttonList"
      :key="item.content"
    >
      {{ item.content }}
    </ElButton>
  </div>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
import { NewTableCtx } from "./TableNew";

import { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  buttons: Array as PropType<NewTableCtx["buttons"]>,
  buttonsPosition: String as PropType<NewTableCtx["buttonsPosition"]>,
});

const buttonList = computed(() => {
  return Array.isArray(props.buttons) && props.buttons.filter((el) => !el.hide);
});
</script>
<script lang="ts">
export default {
  name: "Buttons",
};
</script>

<style scoped lang="scss">
.chris-buttons {
  text-align: right;
  margin: 10px 0;
}
</style>
