<template>
  <Tform v-bind="bind" ref="tForm">
    <template #title> </template>
    <template #buttons>
      <el-button type="primary">Operation</el-button>
      <el-button type="primary">Operation</el-button>
    </template>
    <template #zdy="{ scope }">
      <el-input v-model.number="scope.inputValue" placeholder="Please input" />
    </template>
  </Tform>
  <el-input type="textarea" v-model="cc" :focus="dd" :showWordLimit="true">
  </el-input>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { chris, Tform } from "../../packages/index";
import { dataItem } from "../../packages/Tform/comp/useForm";
const tForm = ref();
let bb: any = ref([]);
let cc = ref("");
const dd = (a, b) => {
  console.log(a, b);
};
const ishide = ref(false);

const getVal = (val) => {
  console.log(val, 21313);
};

const formData = reactive({
  input: "",
});

setTimeout(() => {
  bb.value = [
    { label: "男", value: "1" },
    { label: "女", value: "2" },
  ];
  ishide.value=true
}, 1);

let aa = ref<dataItem[]>([]);

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
      rules: new chris.RuleCreater()
        .required(true, "琴行输入年龄")
        .validator(checkAge),
    },

    {
      label: "性别:",
      prop: "sex",
      type: "select",
      options: bb.value,
      select: {
        onChange: (val) => {
          console.log(val);
          ishide.value = val == 1 ? true : false;
        },
      },
    },
    {
      type: "space",
    },
    {
      label: "身高:",
      prop: "hi",
      type: "input",
      hide: ishide.value,
      rules: new chris.RuleCreater().range(1, 2, "送水").required(true, "ss"),
    },
    {
      label: "体总:",
      prop: "pass",
      type: "input",
      rules: new chris.RuleCreater().validator(validatePass),
    },
    {
      label: "收入:",
      prop: "checkPass",
      type: "input",
      rules: new chris.RuleCreater().validator(validatePass2),
    },
    {
      label: "自定义输入框:",
      prop: "inputValue",
      slotName: "zdy",
      type: "custom",
      rules: new chris.RuleCreater().required(true, "ss"),
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
    callback(new Error("Please input the password"));
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

const bind = computed(() => {
  console.log('我变了')
  return chris.useForm({
    title: "测试表单",
    column: 3,
    // dataList: [
    //   {
    //     label: "姓名速速速度:",
    //     prop: "name",
    //     type: "input",
    //     value:'zhangsan',

    //     input: {
    //       showWordLimit: true,
    //       maxlength: 10,
    //       suffixIcon: "Calendar",
    //       showPassword: true,
    //     },
    //     rules: new chris.RuleCreater()
    //       .required(true, "琴行输入年龄")
    //       .validator(checkAge),

    //   },

    //   {
    //     label: "性别:",
    //     prop: "sex",
    //     type: "select",
    //     options: bb.value,
    //     select: {
    //       onChange: (val) => {
    //         console.log(val);
    //         ishide.value = val == 1 ? true : false;
    //       },
    //     },
    //   },
    //   {
    //     type: "space",
    //   },
    //   {
    //     label: "身高:",
    //     prop: "hi",
    //     type: "input",
    //     hide: ishide.value,
    //     rules: new chris.RuleCreater().range(1, 2, "送水").required(true, "ss"),
    //   },
    //   {
    //     label: "体总:",
    //     prop: "pass",
    //     type: "input",
    //     rules: new chris.RuleCreater().validator(validatePass),
    //   },
    //   {
    //     label: "收入:",
    //     prop: "checkPass",
    //     type: "input",
    //     rules: new chris.RuleCreater().validator(validatePass2),
    //   },
    //   {
    //     label: "自定义输入框:",
    //     prop: "inputValue",
    //     slotName: "zdy",
    //     type: "custom",
    //     rules: new chris.RuleCreater().required(true, "ss"),
    //   },
    // ],
    dataList:aa.value,
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
