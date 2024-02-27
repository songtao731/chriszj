<template>
  <Tform v-bind="bind" ref="tForm"> </Tform>
</template>
<script></script>

<script setup lang="ts">
import { chris, Tform } from "chriszj";
import { ref } from "vue";

const tForm = ref();

const bind = chris.useForm({
  title: "表单",
  column: 3,
  dataList: [
    {
      type: "input",
      prop: "input",
      label: "输入框",
      required: true,
    },
    {
      type: "select",
      prop: "select",
      label: "选择框",
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
          console.log(val);
        },
      },
    },
    {
      type: "space",
    },
    {
      type: "date",
      label: "日期",
      prop: "date",
    },
    {
      type: "date",
      label: "日期范围",
      prop: "dateTime",
      date: {
        type: "daterange",
        startPlaceholder: "请输入起始日期",
        endPlaceholder: "请输入结束日期",
      },
    },
    {
      type: "cascader",
      label: "次级联动",
      prop: "cascader",
      cascader: {
        options: [
          {
            value: "resource",
            label: "Resource",
            children: [
              {
                value: "axure",
                label: "Axure Components",
              },
              {
                value: "sketch",
                label: "Sketch Templates",
              },
              {
                value: "docs",
                label: "Design Documentation",
              },
            ],
          },
        ],
      },
    },
    {
      type: "radio",
      label: "单选",
      prop: "radio",
      radio: {
        options: [
          {
            label: "前端",
            value: "1",
          },
          {
            label: "后端",
            value: "2",
          },
          {
            label: "测试",
            value: "3",
            disabled: true,
          },
        ],
      },
      value: "2",
    },
    {
      type: "checkBox",
      label: "多选",
      prop: "checkbox",
      checkBox: {
        options: [
          {
            label: "前端",
            value: "1",
          },
          {
            label: "后端",
            value: "2",
          },
          {
            label: "测试",
            value: "3",
          },
        ],
      },
    },
    {
      type: "rate",
      label: "打分",
      prop: "rate",
      rate: {
        texts: ["oops", "disappointed", "normal", "good", "great"],
        showText: true,
        allowHalf: true,
        onChange(val) {
          console.log(1);
        },
      },
    },
    {
      label: "开关",
      prop: "switch",
      type: "switch",
      value: "1",
      switch: {
        onChange(val) {
          console.log(val);
        },
        activeValue: "100",
        inactiveValue: "8",
      },
    },
    {
      label: "滑块",
      prop: "slider",
      type: "slider",
      value: 20,
      slider: {
        onChange(val) {
          console.log(val);
        },
      },
    },
    {
      type: "range",
      label: "range",
      columns: [
        {
          prop: "min",
          placeholder: "请输入最小值",
        },
        {
          prop: "max",
          placeholder: "请输入最大值",
        },
      ],
    },
    {
      type: "input",
      label: "备注:",
      prop: "remark",
      input: {
        type: "textarea",
      },
      span: 3,
    },
    {
      label: "上传",
      type: "upload",
      prop: "upload",
      upload: {
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
        tip: "<span>请穿入xxx</span>",
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
  ],
});
</script>
