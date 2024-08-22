<template>
  <div class="container">
    <Tform v-bind="bind" ref="tForm" class="aa"> </Tform>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, Ref, ref, toRef } from "vue";
import { chris, Tform } from "../../packages/index";

const formData = ref();
const bind = computed(() => {
  return chris.useForm({
    request: formData.value,
    dataList: [
      {
        type: "input",
        prop: "input",
        label: "年龄(自定义)",
        rules: chris.rulesFn().required(true, "请输入年龄"),
        placeholder: "222",
      },
      {
        prop: "radio",
        label: "定制产品名",
        type: "radio",
        radio: {
          options: [
            {
              label: "好",
              value: "1",
            },
            {
              label: "坏",
              value: "2",
            },
          ],
        },
      },
      {
        label: "多选",
        prop: "a",
        type: "checkBox",
        checkBox: {
          options: [
            {
              label: "好",
              value: "1",
            },
            {
              label: "坏",
              value: "2",
            },
          ],
        },
      },
      {
        // type: isSee() ? "span" : "input",
        type: "input",
        prop: "number",
        label: "数字(正则)",
        rules: chris.rulesFn().pattern(/^\d{4}$/, "请输入四位数字"),
        input: {
          placeholder: "请输入四位数字",
        },
        hide: formData.value.show === 1,
      },
      {
        label: "地址",
        prop: "address",
        type: "select",
        select: {
          onChange(val) {
            console.log(val, 123);
          },
          options: [],
        },
      },
      {
        label: "性别",
        prop: "sex",
        type: "select",
        select: {
          options: [
            {
              label: "我是value",
              value: "1",
            },
            {
              label: "我是value2",
              value: "2",
              disabled: true,
            },
          ],
          onChange(x) {},
        },
      },
    ],

    buttons: [
      {
        content: "提交",
        type: "primary",
        onClick() {
          console.log(tForm.value.form.formData);
        },
      },
      {
        content: "关闭",
        type: "primary",
        hide: true,
        hidden: true,
        onClick() {
          console.log(tForm.value.form.formData);
        },
      },
    ],
    buttonsAlign: "right",
  });
});
</script>

<style lang="scss" scoped>
body {
  font-family: Arial, sans-serif;
}

.container {
  width: 420px;
}

.item {
  background-color: #f0f0f0;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
  float: left;
  width: 200px;
  height: 100px;
  &.ac {
    height: 200px;
  }
}
</style>
