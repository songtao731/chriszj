<template>
  <Tform v-bind="bind" ref="tForm"> </Tform>
</template>
<script></script>

<script setup lang="ts">
import { chris, Tform } from "chriszj";
import { ref } from "vue";

const tForm = ref()
const checkAge = (rule: any, value: any, callback: any) => {
  if (!Number.isInteger(+value)) {
    callback(new Error("Please input digits"));
  } else {
    if (value < 18) {
      callback(new Error("Age must be greater than 18"));
    } else {
      callback();
    }
  }
};
const validatePass = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("请输入联动1"));
  } else {
    if (!tForm.value.form.formData.one) {
      if (!tForm.value.form) return;
      tForm.value.form.formRef.validateField("two", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("Please input the password again"));
  } else if (value !== tForm.value.form.formData.one) {
    callback(new Error("两次值不同"));
  } else {
    callback();
  }
};

const bind = chris.useForm({
  dataList: [
    {
      type: "input",
      prop: "input",
      label: "年龄(自定义)",
      rules: chris.rulesFn().required(true, '请输入年龄', 'blur').validator(checkAge)
    },
    {
      type: "input",
      prop: "number",
      label: "数字(正则)",
      rules: chris.rulesFn().pattern(/^\d{4}$/, '请输入四位数字'),
      input: {
        placeholder: '请输入四位数字'
      }
    },
    {
      type: "input",
      prop: "one",
      label: "联动校验1",
      rules: chris.rulesFn().required(true, '请输入联动校验1').validator(validatePass)
    },
    {
      type: "input",
      prop: "two",
      label: "联动校验2",
      rules: chris.rulesFn().validator(validatePass2)

    },
    {
      type: "select",
      prop: "select",
      label: "选择框",
      rules: chris.rulesFn().required(true, '请输入文字', 'blur'),

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
          console.log(val)
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
      rules: chris.rulesFn().required(true, '选择日期', 'change')
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
        ]

      },
      value: "2",
    },
    {
      type: 'checkBox',
      label: '多选',
      prop: 'checkbox',
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
      }
    },
    {
      type: 'rate',
      label: '打分',
      prop: 'rate',
      rate: {
        texts: ["oops", "disappointed", "normal", "good", "great"],
        showText: true,
        allowHalf: true,
        onChange(val) {
          console.log(1)
        },
      }
    },
    {
      label: "开关",
      prop: "switch",
      type: "switch",
      value: "1",
      switch: {
        onChange(val) {
          console.log(val)
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
      required:true,
      columns: [
          {
            prop: "min",
            rules: chris.rulesFn().required(true, "最小值"),
            placeholder: "请输入最小值",
            input: {},
          },
          {
            prop: "max",
            rules: chris.rulesFn().required(true, "最大值"),
            placeholder: "请输入最大值",
            input: {},
          },
        ],
    },
    {
      type: 'input',
      label: '备注:',
      prop: 'remark',
      input: {
        type: 'textarea'
      },
      span: 3
    },
    {
      label: "上传",
      type: "upload",
      prop: "upload",
      upload: {
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      },
    },

  ],
  buttons: [
    {

      content: "提交",
      type: "primary",
      onClick() {
        console.log(
          tForm.value.form.formData, '表单值'
        );
        tForm.value.form.formRef.validate((valid) => {
          console.log(valid);

          if (valid) {
            console.log("submit!");
          } else {
            console.log("error submit!");
            return false;
          }
        });


      }
    }


  ]
});
</script>
