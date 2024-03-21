<template>
  <!-- <Tform v-bind="bind" ref="tForm" class="aa">
    <template #title> </template>
    <template #buttons>
      <el-button type="primary" @click="add">Operation</el-button>
      <el-button type="primary">Operation</el-button>
    </template>
    <template #zdy="{ scope }">
      <ElInput v-model.number="scope.pages" placeholder="Please input">
      </ElInput>
    </template>

    <template #btn="{ scope }">
      <el-button @click="btbfn(scope)"> 点击 </el-button>
    </template>
  </Tform>
  <Tform v-bind="bind2" ref="tForm2">
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
  <span @click="title = '编辑'">编辑 </span>
  <span @click="title = '查看'">查看 </span>

  <Tform v-bind="bind5" ref="tForm"> </Tform>
</template>

<script setup lang="ts">
import { computed, reactive, Ref, ref, toRef } from "vue";
import { chris, Tform } from "../../packages/index";
//import { chris, Tform } from "chriszj";
//import { chris, Tform } from "../../lib/chris-ui.mjs";

import {
  dataItem,
  domain,
  NewDataItem,
} from "../../packages/Tform/comp/useForm";

import { entertainApplicationAddList } from "@/api/index";
import { ElLoading, ElInput } from "element-plus";

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
  dd.value = "111";
  // ishide.value=true
}, 10);

let key = ref(0);
let aa = ref<domain[]>([
  {
    item: [
      {
        label: "测试1",
        prop: "a",
        type: "input",
        rules: chris.rulesFn().required(true, "请输入测试12"),
      },

      {
        label: "测试2",
        prop: "b",
        type: "select",
        select: {
          options: computed(() => bb.value),
          filterable: true,
        },
        rules: chris.rulesFn().required(true, "请选择测试12", "change"),
      },
      {
        label: "日期",
        type: "date",
        prop: "daterange",
        date: {
          type: "daterange",
        },
      },

      {
        type: "range",
        label: "range",
        columns: [
          {
            prop: "min",
            rules: chris.rulesFn().required(true, "最小值"),
            placeholder: "请输入最小值22",
            input: {
              type: "text",
            },
          },
          {
            prop: "max",
            rules: chris.rulesFn().required(true, "最大值"),
            value: "22",
            placeholder: "请输入最大值",
            input: {},
          },
        ],
      },
      {
        label: "次级联动:",
        type: "cascader",
        prop: "cascader",
        rules: chris.rulesFn().required(true, "请选择联级", "change"),
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
        label: "上传22",
        type: "upload",
        prop: "upload",
        required: true,
        value: [],
        upload: {
          action: "http://118.184.183.199:9141/system/file/upload",
          headers: {
            token: sessionStorage.token,
          },
          disabled: true,

          onChange() {
            startRef.value.validate();
          },
        },
      },
      {
        label: "行业",
        type: "radio",
        prop: "radio",
        rules: chris.rulesFn().required(true, "请选择行业"),
        value: "1",
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
        rules: chris.rulesFn().required(true, "请打分"),
        rate: {
          texts: ["oops", "disappointed", "normal", "good", "great"],
          showText: true,
          allowHalf: true,
          onChange(val) {},
        },
      },
      {
        label: "数字",
        type: "inputNumber",
        prop: "inputNumber",
        rules: chris.rulesFn().required(true, "请输入数字"),
      },

      {
        slotName: "btn",
        type: "custom",
        span: 3,
      },
    ],
    chriskey: 238837,
  },
]);
const cc = ref();

const isHide = ref<boolean>(false);
setTimeout(() => {
  cc.value = {
    size: 1,
    startRow: "1",
    pages: "99",
    check: [],
    radio: "1",
    rate: 1,
    nextPage: "身高2米",
    span: "WOSHI",
    domains: [
      {
        min: "1",
        max: "2",
      },
    ],
    range: [121, 232],
    min: 10,
    max: 20,
    upload: [
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      },
      {
        url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        name: "2.jpg",
      },
      {
        url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.pdf",
        name: "3.png",
      },
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
  console.log(value, "upload");
  if (!value.length) {
    callback(new Error("请上传"));
  } else {
    callback();
  }
};

const startRef = ref();
const getStartRef = (el) => {
  startRef.value = el;
};

const bind = computed(() => {
  return chris.useForm({
    request: cc.value,
    // request: (params) => entertainApplicationAddList({ a: 1 }),

    title: "测试表单",
    column: 2,
    labelWidth: "140px",
    dataList: [
      {
        label: "span",
        type: "span",
        prop: "span",
        formatter(row) {
          console.log(row);
          return row.span + "21";
        },
      },
      {
        label: "数字",
        type: "inputNumber",
        prop: "inputNumber",
        rules: chris.rulesFn().required(true, "请输入数字"),

        inputNumber: {
          onChange(val) {
            console.log(typeof val);
          },
          controls: false,
        },
        class: "si",
      },
      {
        label: "re",
        prop: "re",
        type: "input",
        required: true,
        dictData: ref([{ a: 1 }]),
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
        rules: chris.rulesFn().required(true, "请输入年龄").validator(checkAge),
      },
      {
        label: "下拉",
        prop: "mn",
        type: "select",
        select: {
          options: computed(() => bb.value),
          filterable: true,
        },
        rules: chris.rulesFn().required(true, "ll", "change"),
      },
      {
        type: "domains",
        keys: "domains",
        domains: aa.value,
      },

      {
        label: "行业",
        type: "radio",
        prop: "radio",
        rules: chris.rulesFn().required(true, "请选择行业"),
        value: "1",
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
          onChange(val) {},
        },
      },
      {
        label: "开关",
        prop: "switch",
        rules: chris.rulesFn().required(true),
        type: "switch",

        hide: isHide.value,

        switch: {
          onChange(val) {},
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
            value: 999,
            input: {},
          },
          {
            prop: "max",
            rules: chris.rulesFn().required(true, "最大值"),
            placeholder: "请输入最大值",
            value: "111122",
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

          console.log(tForm.value.form, "ss", tForm.value.form.formData);
        },
      },
    ],
  });
});

const bind2 = computed(() => {
  return chris.useForm({
    title: "11",
    dataList: [
      {
        type: "input",
        prop: "input",
        label: "测试",
        rules: chris.rulesFn().required(true, "请输入"),
      },
    ],
    buttons: [
      {
        type: "primary",
        content: "点击",
        onClick(scope) {},
      },
    ],
  });
});
const add = () => {
  aa.value.push({
    item: [
      {
        label: "测试1",
        prop: "a",
        type: "input",
        value: "",
        rules: chris.rulesFn().required(true, "请输入测试12"),
      },
      {
        label: "测试2",
        prop: "b",
        type: "select",
        select: {
          options: bb.value,
          filterable: true,
        },
        rules: chris.rulesFn().required(true, "请选择测试12", "change"),
      },
      {
        label: "日期",
        type: "date",
        prop: "daterange",
        date: {
          type: "daterange",
        },
      },
      {
        type: "range",
        label: "range",
        columns: [
          {
            prop: "min",
            rules: chris.rulesFn().required(true, "最小值"),
            placeholder: "请输入最小值22",
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
        label: "上传22",
        type: "upload",
        prop: "upload",
        required: true,

        upload: {
          action: "/api/gateway/financial/pay/collectionList/claim/list",
          headers: {
            token: sessionStorage.token,
          },
          disabled: true,
          onChange(val) {
            console.log(val, 8282828);
            startRef.value.validate();
          },
        },
      },
      {
        label: "行业",
        type: "radio",
        prop: "radio",
        rules: chris.rulesFn().required(true, "请选择行业"),
        value: "1",
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
        rules: chris.rulesFn().required(true, "请打分"),
        rate: {
          texts: ["oops", "disappointed", "normal", "good", "great"],
          showText: true,
          allowHalf: true,
          onChange(val) {},
        },
      },
      {
        label: "开关",
        prop: "switch",
        rules: chris.rulesFn().required(true),
        type: "switch",

        hide: isHide.value,

        switch: {
          onChange(val) {},
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
        slotName: "btn",
        type: "custom",
        span: 3,
      },
    ],
    chriskey: Math.random(),
  });
  console.log(tForm.value.form, "222", aa.value);
};
const btbfn = (val) => {
  console.log(val);
  aa.value.splice(val.index, 1);
};

const tableData = {
  input: "20",
  number: 1234,
  one: 123,
  two: 123,
  select: "2",
  radio: "2",
  checkbox: ["1", "2"],
  min: 22,
  max: 33,
  cascader: ["resource", "sketch"],
  switch: "100",
  slider: 30,
  rate: 2.5,
  remark: "我是备注",
  date: "2023-11-22",
  dateTime: ["2023-11-22", "2023-11-30"],
  show: 2,
  upload: [
    {
      name: "food.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      name: "",
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
  ],
};
const request = (params) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(tableData);
      formData.value.input = 2222;
      // formData.value = tableData;
      console.log(formData.value, "777777");
    }, 100);
  });
};
const abc = ref({ number: "ksksk" });
request();

// setTimeout(() => {
//   formData.value = {
//     input: "19",
//     number: 1234,
//     one: 123,
//     two: 123,
//     select: "2",
//     radio: "2",
//     checkbox: ["1", "2"],
//     min: 22,
//     max: 33,
//     cascader: ["resource", "sketch"],
//     switch: "100",
//     slider: 30,
//     rate: 2.5,
//     remark: "我是备注",
//     date: "2023-11-22",
//     dateTime: ["2023-11-22", "2023-11-30"],
//     show: 1,
//     upload: [
//       {
//         name: "food.jpeg",
//         url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
//       },
//       {
//         name: "",
//         url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
//       },
//     ],
//   };
// }, 1000);
const formData = ref({
  show: 0,
});
// setTimeout(() => {
//   abc.value = {
//     number: 2222,
//   };
// }, 1);

const title = ref("查看");

const isSee = () => {
  return /查看/.test(title.value);
};
const mm = ref([]);

setTimeout(() => {
  aa.value = [
    { label2: "男", value2: "1" },
    { label2: "女", value2: "2" },
  ];
}, 1000);
const bind5 = computed(() => {
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
        label: "多选",
        prop: "a",
        type: "checkBox",
        checkBox: {
          options: aa.value,
          dictOptions: {
            label: "label2",
            value: "value2",
          },
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
              value: "我是label",
            },
            {
              label: "我是value2",
              value: "我是label2",
              disabled: true,
            },
          ],
        },
      },
      {
        label: "上传",
        type: "upload",
        prop: "upload",
        upload: {
          action: "http://118.184.183.199:9141/system/file/upload",
          headers: {
            Authorization: sessionStorage.token,
          },
          multiple: true,
          fileList: [
            {
              name: "food.jpeg",
              url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
            },
            {
              name: "222",
              url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
            },
          ],

          onChange() {},
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
<style scoped lang="scss"></style>
