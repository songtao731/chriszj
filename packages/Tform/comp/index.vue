<template>
  <div class=" w-full">
    <div class=" flex justify-between mb-[20px]">
      <div class=" text-[16px]">
        <slot name="title">
          {{ props.title }}
        </slot>
      </div>
      <div class="Tform-button">
        <slot name="buttons"> </slot>
      </div>
    </div>
    <FormDesc v-bind="props" ref="formRef">
      <template v-for="items in dataList" #[items.slotName]="{ scope }">
        <slot :name="items.slotName" :scope="scope" v-if="items.slotName" />
      </template>
    </FormDesc>

    <slot name="footer">

    </slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, unref } from "vue";
import FormDesc from "./form-itemTsx";
import { formProps } from "./form";

const props = defineProps(formProps);
const formRef = ref();
const dataList = computed(() => {
  const propDataList = unref(props.dataList);
  if (propDataList.length) {
    return propDataList.filter((el) => el.slotName);
  }
});


defineExpose({
  form: formRef,
});
</script>

<script lang="ts">
export default {
  name: "Tform",
};
</script>

<style lang="scss" scoped>
// .Tform {
//   width: 100%;
//   .Tform-header {
//     display: flex;
//     justify-content: space-between;
//     .Tform-title {
//       font-size: 16px;
//       font-weight: 700;
//     }
//   }
//   :deep(.el-form-item),
//   :deep(.el-select) {
//     width: 100%;
//   }
// }
</style>
