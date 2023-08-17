<template>
  <div class="Tform">
    <div class="Tform-header">
      <div class="Tform-title">
   
         

        <slot name="title">
          {{ props.title }}
        </slot>
      </div>
      <div class="Tform-button">
        <slot name="buttons"> </slot>
      </div>
    </div>
    <FormDesc v-bind="props">

    </FormDesc>

  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, provide } from "vue";
import FormDesc from "./form-itemTsx";
import { formProps } from "./form";
import { newForm } from "./newForm";

const props = defineProps(formProps);

console.log(props, 12312);
// const form = computed(() => {
//   const obj: { [key: string]: any } = {};
//   props.dataList.forEach((el) => {
//     obj[el.prop] = el.value;
//   });
//   return obj;
// });


const rules = reactive({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
  ],
});
// provide(
//   "dataList",
//   computed(() => props.dataList)
// );
</script>

<script lang="ts">
export default {
  name: "Tform",
};
</script>

<style lang="scss" scoped>
.Tform {
  width: 100%;
  .Tform-header {
    display: flex;
    justify-content: space-between;
    .Tform-title {
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
