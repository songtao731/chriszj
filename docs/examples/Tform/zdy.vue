<template>
  <Tform v-bind="bind" ref="tForm"> </Tform>
</template>
<script></script>

<script setup lang="ts">
import { chris, Tform } from "chriszj";
import { ref, computed } from "vue";

const tForm = ref()

const startRef = ref();
const getStartRef = (el) => {
  startRef.value = el;
};
const bind = chris.useForm({
  dataList: [
    {
      label: "姓名速速速度:",
      prop: "size",
      type: "input",
      class: "inss",
      value: 22,

      input: {
        showWordLimit: true,
        maxlength: 10,
        suffixIcon: "Calendar",
        ref: getStartRef,
      },
    },
  ],
  buttons: [
    {

      content: "提交",
      type: "primary",
      onClick() {
        console.log(
          tForm.value.form.formData,
        );

      }
    }


  ],
  buttonsAlign: 'right'
});

</script>
