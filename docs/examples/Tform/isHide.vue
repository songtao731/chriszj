<template>
  <Tform v-bind="bind" ref="tForm"> </Tform>
</template>
<script></script>

<script setup lang="ts">
import { chris, Tform } from "chriszj";
import { ref, computed } from "vue";

const tForm = ref()

const isHide = ref(false)
const bind = computed(() => {

  return chris.useForm({
    dataList: [
      {
        type: "select",
        prop: "select",
        label: "选择男女来控制",
        span: 2,
        select: {
          options: [
            {
              label: "男",
              value: "1",
            },
            {
              label: "女",
              value: "2",
            },
          ],
          onChange(val) {
            isHide.value = val==='1'?true:false
            console.log(isHide.value)
          },
        },
      },
      {
        type:"input",
        label: "隐藏我",
        prop: "date",
        hide: isHide.value
      },
      {
        type:"input",
        label: "清空数据",
        prop: "date2",
        deepHide: isHide.value
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
    buttonsAlign:'right'
  });
})
</script>
