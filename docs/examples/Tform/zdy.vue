<template>

  
  <Tform v-bind="bind" ref="tForm">
    <template #title>我是插槽标题 </template>
    <template #buttons>
      <el-button type="primary">我是插槽按钮</el-button>
      <el-button type="primary">Operation</el-button>
    </template>

    <template #cj="{ scope }">
      <el-input-number v-model="scope.pages" :min="1" :max="10" />

    </template>
    
  </Tform>
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
      label: "输入获取我的Ref:",
      prop: "size",
      type: "input",
      class: "inss",
      value: 22,
      input: {
        showWordLimit: true,
        maxlength: 10,
        suffixIcon: "Calendar",
        ref: getStartRef,
        onChange(data) {
            console.log(startRef,'ref')
        },
      },
    },
    {
      label: '我是插槽插进来的',
      slotName: 'cj',
      type: "custom",

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
