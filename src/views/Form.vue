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
  <!-- <Tform v-bind="bind2" ref="tForm2">
    <template #title> </template>
    <template #buttons>
      <el-button type="primary">Operation</el-button>
      <el-button type="primary">Operation</el-button>
    </template>
    <template #zdy="{ scope }">
      <ElInput v-model.number="scope.pages" placeholder="Please input">
      </ElInput>
    </template>
  </Tform> -->
</template>



<script setup lang="ts">

import { computed, reactive, Ref, ref, toRef } from "vue";
import { chris, Tform } from "../../packages/index";
//import { chris, Tform } from "chriszj";
//import { chris, Tform } from "../../lib/chris-ui.mjs";


import { dataItem } from "../../packages/Tform/comp/useForm";

import { entertainApplicationAddList } from "@/api/index";
import { ElLoading, ElInput } from "element-plus";
import { resolve } from "path";

const url =
  "https://gateway-uat.zhidabl.com" + "/finance-file/fast/file/upload";
const tForm = ref();
let bb: any = ref([]);
let dd: any = ref([]);


setTimeout(() => {
  bb.value = [
    { label: "男", value: "1", id: 1 },
    { label: "女", value: "0", id: 2 },
  ];
  dd.value='111'
  // ishide.value=true
}, 10);

let aa: Ref<dataItem[]> = ref([]);
const cc = ref();

const isHide = ref<boolean>(false);
setTimeout(() => {
  cc.value = {
    size: 1,
    startRow: "1",
    pages: "99",
    check: [],
    radio: '1',
    rate: 1,
    nextPage:"身高2米",
    upload: [
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      },
      {
        url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        name: '2.jpg'
      },
      {
        url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.pdf",
        name: '3.png'
      }
    ],
  };
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
  } else if (value !== tForm.value.form.formData.min) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};
const checkRate = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("请选择评分"));
  } else {
    callback();
  }
};
const checkUpload = (rule: any, value: any, callback: any) => {

  console.log(value, 'upload')
  if (!value.length) {
    callback(new Error("请上传"));
  } else {
    callback();
  }
};

let id = 0;

const startRef = ref();
const getStartRef = (el) => {
  startRef.value = el;
};

const bind = computed(() => {
  console.log("我变了");

  return chris.useForm({
    request: cc.value,
    // request: (params) => entertainApplicationAddList({ a: 1 }),
    parseData: (value) => {
      return {
        ...value,
      };
    },
    title: "测试表单",
    column: 3,
    labelWidth: "140px",
    dataList: [
      {
        label: "re",
        prop: "re",
        type: "input",
        required: true,
      },
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
          .required(true, "请输入年龄")
          .validator(checkAge),
      },

      {
        label: "性别:",
        prop: "startRow",
        type: "select",
        select: {
          options: bb.value,
          filterable: true,
          onChange(x) {
            isHide.value = x == 1 ? true : false
          },
        },
        rules: chris.rulesFn().required(true, "请选择性别", 'change'),

      },
      {
        type: "space",
      },

      {
        label: "身高:",
        prop: "nextPage",
        type: "input",
        rules: chris
          .rulesFn()
          .range(0, 2, "请输入2到5位", "blur")
          .required(true, "请输入身高"),
        deepHide: isHide.value,
        value:'222'
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
        label: "daterange:",
        prop: "daterange",
        type: "date",
        rules: chris.rulesFn().required(true, "请输入日期时间"),
        date: {
          type: "daterange",
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
        label: "行业",
        type: "radio",
        prop: "radio",
        rules: chris.rulesFn().required(true, "请选择行业"),
        value:'1',
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
        type: "rate",
        prop: "rate",
        rules: chris.rulesFn().required(true, "请打分").validator(checkRate),
        rate: {
          texts: ["oops", "disappointed", "normal", "good", "great"],
          showText: true,
          allowHalf: true,
          onChange(val) {

          },
        },
      },
      {
        label: "上传",
        type: "upload",
        prop: "upload",
        rules:chris.rulesFn().required(true,'请上传').validator(checkUpload),
        ref: startRef,

        upload: {
          action: "/api/gateway/financial/pay/collectionList/claim/list",
          headers: {
            token: sessionStorage.token,
          },

          onChange() {
            startRef.value.validate();
          },
        },
      },
      {
        label: "开关",
        prop: "switch",
        rules: chris.rulesFn().required(true),
        type: "switch",

        hide: isHide.value,

        switch: {
          onChange(val) { },
          activeValue: "22",
          inactiveValue: "8",
        },
      },
      {
        label: "滑块",
        prop: "slider",
        rules: chris.rulesFn().required(true),
        type: "slider",
        value: [30, 70],

        slider: {
          onChange(val) {
            console.log(val);
          },
          class: "slider-demo-block",
          range: true,
          marks: {
            0: "0°C",
            8: "8°C",
            37: "37°C",
            50: {
              style: {
                color: "#1989FA",
              },
              label: "50%",
            },
          },
        },
      },
      {
        type: "range",
        label: "range",
        required: true,
        columns: [
          {
            prop: "min",
            rules: chris.rulesFn().required(true, "最小值"),
            placeholder: "请输入最小值22",
            value: 11,
            input: {

            },

          },
          {
            prop: "max",
            rules: chris.rulesFn().required(true, "最大值"),
            placeholder: "请输入最大值",
            input: {},
          },
        ],
      },
    ],
    // dataList: aa.value,
    statusIcon: true,
    buttons: [
      {
        content: "提交",
        type: "primary",
        onClick() {

          console.log(
            tForm.value.form.formData,
            "formdata",
            tForm.value.form.formRef.validate
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
        },
      },
      {
        content: "重置",
        type: "success",
        onClick() {
          tForm.value.form.formRef.resetFields();


          console.log(tForm.value.form, 'ss', tForm.value.form.formData)
        },
      },
    ],
  });
});

const bind2 = computed(() => {

  return chris.useForm({
    title: "11",
    dataList: [{
      type: 'input',
      prop: 'input',
      label: "测试",
      rules: chris.rulesFn().required(true, '请输入')


    }],
    buttons: [
      {
        type: 'primary',
        content: '点击',
        onClick(scope) {

        },
      }
    ]

  })
})
</script>
<style scoped lang="scss"></style>
