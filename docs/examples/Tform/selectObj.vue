<template>
  <Tform v-bind="bind" ref="tForm"> </Tform>
</template>
<script></script>

<script setup lang="ts">
import { chris, Tform } from "chriszj";
import { ref, computed } from "vue";

const tForm = ref()

const isHide = ref(false)
const bind = chris.useForm({
  dataList: [
    {
      type: "select",
      prop: "select",
      label: "性别:",
      value: {
        label: "女",
        value: "2",
        id: 2
      },
      select: {
        options: [
          {
            label: "男",
            value: "1",
            id: 1
          },
          {
            label: "女",
            value: "2",
            id: 2
          },
        ],
        values: true,
        valueKey: "id",

        onChange(val) {
          console.log(val)
        },
      },
    }
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
