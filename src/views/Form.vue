<template>
  <Tform v-bind="bind" ref="tForm" class="aa">
    <template #title> </template>
    <template #buttons>
      <el-button type="primary">Operation</el-button>
      <el-button type="primary">Operation</el-button>
    </template>
    <template #zdy="{ scope }">
      <ElInput v-model.number="scope.pages" placeholder="Please input">
      </ElInput>
    </template>
  </Tform>
</template>

<script setup lang="ts">
import { ElInput } from "element-plus";
import { computed, reactive, Ref, ref, toRef } from "vue";
import { chris, Tform } from "../../packages/index";
import { dataItem } from "../../packages/Tform/comp/useForm";

import { entertainApplicationAddList } from "@/api/index";



const url =
  "https://gateway-uat.zhidabl.com" + "/finance-file/fast/file/upload";
const tForm = ref();
let bb: any = ref([]);

setTimeout(() => {
  bb.value = [
    { label: "男", value: "1", id: 1 },
    { label: "女", value: "0", id: 2 },
  ];
  // ishide.value=true
}, 2000);

let aa: Ref<dataItem[]> = ref([]);

const isHide = ref<boolean>(false);
setTimeout(() => {
  aa.value = [
    {
      label: "姓名速速速度:",
      prop: "name",
      type: "input",
      input: {
        showWordLimit: true,
        maxlength: 10,
        suffixIcon: "Calendar",
        showPassword: true,
      },
      rules: chris.rulesFn().required(true, "琴行输入年龄").validator(checkAge),
    },

    {
      label: "性别:",
      prop: "sex",
      type: "select",
      options: bb.value,
      select: {
        onChange: (val) => {
          console.log(val);
          isHide.value = val == 1 ? true : false;
        },
        values: true,
        valueKey: "id",
      },
    },
    {
      type: "space",
    },
    {
      label: "身高:",
      prop: "hi",
      type: "input",
      rules: chris.rulesFn().range(0,1, "送水").required(true, "ss"),
      hide: isHide,
    },
    {
      label: "体总:",
      prop: "pass",
      type: "input",
      rules: chris.rulesFn().validator(validatePass),
    },
    {
      label: "收入:",
      prop: "checkPass",
      type: "input",
      rules: chris.rulesFn().validator(validatePass2),
    },
    {
      label: "自定义输入框:",
      prop: "inputValue",
      slotName: "zdy",
      type: "custom",
      rules: chris.rulesFn().required(true, "ss"),
    },
    {
      label: "Date:",
      prop: "date",
      type: "date",
      rules: chris.rulesFn().required(true, "请输入日期"),
      date: {
        type: "daterange",
        startPlaceholder: "1",
        endPlaceholder: "2",
      },
    },
  ];
}, 100);

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the age"));
  }

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
    callback(new Error("请输入体重"));
  } else {
    if (!tForm.value.form.formData.checkPass) {
      if (!tForm.value.form) return;
      tForm.value.form.formRef.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("Please input the password again"));
  } else if (value !== tForm.value.form.formData.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};
const checkRate = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("请选择评分"));
  }
}
const checkUpload = (rule: any, value: any, callback: any) => {
  if (!value.length) {
    callback(new Error("请上传"));
  }
}

let id = 0;
const bind = computed(() => {
  console.log("我变了");
  return chris.useForm({
    request: (params) => entertainApplicationAddList({ ...params }),
    title: "测试表单",
    column: "3",
    labelWidth: "140px",
    dataList: [
      {
        label: "姓名速速速度:",
        prop: "size",
        type: "input",
        class: "inss",

        input: {
          showWordLimit: true,
          maxlength: 10,
          suffixIcon: "Calendar",
        },
        rules: chris
          .rulesFn()
          .required(true, "琴行输入年龄")
          .validator(checkAge),
      },

      {
        label: "性别:",
        prop: "startRow",
        type: "select",
        options: bb.value,
        select: {
          onChange: (val) => {
            console.log(val);
            isHide.value = val == 1 ? true : false;
          },
          filterable: true,
        },
        rules: chris.rulesFn().required(true, "请选择性别"),
      },
      {
        type: "space",
      },
      {
        label: "身高:",
        prop: "nextPage",
        type: "input",
        rules: chris.rulesFn().range(0, 2, "请输入2到5位",'blur').required(true, "请输入身高"),
        value: '1'
      },
      {
        label: "体总:",
        prop: "pass",
        type: "input",
        rules: chris.rulesFn().validator(validatePass).required(true),
      },
      {
        label: "收入:",
        prop: "checkPass",
        type: "input",
        rules: chris.rulesFn().validator(validatePass2),
      },
      {
        label: "自定义输入框:",
        prop: "pages",
        slotName: "zdy",
        type: "custom",
        rules: chris.rulesFn().required(true),
      },
      {
        label: "Date:",
        prop: "date",
        type: "date",
        rules: chris.rulesFn().required(true, "请输入日期"),
        value:"2021-11-11",

        date: {
          type: "date",
        },
      },
      {
        label: "DateTime:",
        prop: "dateTime",
        type: "date",
        rules: chris.rulesFn().required(true, "请输入日期时间"),
        date: {
          type: "datetimerange",
        },
      },
      {
        label: "次级联动:",
        type: "cascader",
        prop: "cascader",
        rules: chris.rulesFn().required(true, "请选择联级"),
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
          filterable: true,
          onChange(val) {
            console.log(val);
          },
        },
      },
      {
        label: "职业",
        type: "checkBox",
        prop: "check",
        rules: chris.rulesFn().required(true, "请选择职业"),
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
        label: "行业",
        type: "radio",
        prop: "radio",
        value: "1",
        rules: chris.rulesFn().required(true, "请选择行业"),
        radio: {
          options: [
            {
              label: "金融",
              value: "1",
            },
            {
              label: "It",
              value: "2",
            },
            {
              label: "教育",
              value: "3",
            },
          ],
        },
      },
      {
        label: "评分",
        type: 'rate',
        prop: 'rate',
        rules: chris.rulesFn().required(true, '请打分').validator(checkRate),
        rate: {
          texts: ['oops', 'disappointed', 'normal', 'good', 'great'],
          showText: true,
          allowHalf: true,
          onChange(val) {
            console.log(val, 'ra')
          }
        }
      },
      {
        label: "上传",
        type: 'upload',
        prop: 'upload',
        rules: chris.rulesFn().validator(checkUpload).required(true),
        upload: {
          action: '/api/gateway/financial/pay/collectionList/claim/list',
          headers: {
            "token": sessionStorage.token,
          },


        }

      },
      {
        label: '开关',
        prop: 'switch',
        rules: chris.rulesFn().required(true),
        type: 'switch',
        value: '100',
        switch: {
          onChange(val) {

            console.log(val)
          },
          activeValue: '100',
          inactiveValue: '8',


        }

      },
      {
        label: '滑块',
        prop: 'slider',
        rules: chris.rulesFn().required(true),
        type: 'slider',
        value: [30, 70],
        class: "bb",
        slider: {
          onChange(val) {

            console.log(val)
          },
          class: 'slider-demo-block',
          range: true,
          marks: {
            0: '0°C',
            8: '8°C',
            37: '37°C',
            50: {
              style: {
                color: '#1989FA',
              },
              label: '50%',
            },
          }


        }

      }

    ],
    // dataList: aa.value,
    statusIcon: true,
    buttons: [
      {
        content: "提交",
        type: "primary",
        onClick() {
          console.log(tForm.value.form.formData, "formdata");
          tForm.value.form.formRef.validate((valid) => {
            if (valid) {
              console.log("submit!");
            } else {
              console.log("error submit!");
              return false;
            }
          });
        },
      },
      {
        content: "重置",
        type: "success",
        onClick() {
          tForm.value.form.formRef.resetFields();
        },
      },
    ],
  });
});
</script>
<style scoped lang="scss"></style>