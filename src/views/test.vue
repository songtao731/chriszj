<template>
  <div class="container">
    <el-dialog v-model="dialogVisible" title="Tips" width="1000">
      <Tform v-bind="bind" ref="tForm" class="aa">
        <template #buttons>
          <el-button type="primary" @click="addFn">添加</el-button>
        </template>
        <template #btn="{ scope }">
          <el-button @click="btbfn(scope)"> 删除 </el-button>
        </template>
      </Tform>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
    <ElButton @click="dialogVisible = true"> 点击 </ElButton>
    <ElButton @click="bc"> 回显 </ElButton>
  </div>
  <!-- <Tform v-bind="bind" ref="tForm" class="aa">
    <template #buttons>
      <el-button type="primary" @click="addFn">添加</el-button>
    </template>
    <template #btn="{ scope }">
      <el-button @click="btbfn(scope)"> 删除 </el-button>
    </template>
  </Tform> -->
</template>

<script setup lang="ts">
import { computed, reactive, Ref, ref, toRef } from "vue";
import { chris, Tform } from "../../packages/index";
import { ElButton, formatter } from "element-plus";
import { domain } from "chriszj/Tform/comp/useForm";

const formData = ref({
  select: "22",
  input2: "33",
  checkbox: ["1", "2"],
  getdomains: [
    {
      a: 1,
      daterange: ["2021-01-01", "2024-01-02"],
    },
  ],
});
const tForm = ref();
const dialogVisible = ref(false);
const options = [
  {
    label: "测试1",
    value: "1",
  },
  {
    label: "测试2",
    value: "2",
  },
];

const domainsArr = ref<domain[]>([]);
const bind = computed(() => {
  return chris.useForm({
    // request: formData.value,
    edit: true,
    dataList: [
      {
        label: "测试1",
        type: "select",
        prop: "select",
        select: {
          options: options,
          onChange(x) {
            formData.value.select = x;
          },
        },
      },
      {
        label: "深度输入框",
        prop: "input2",
        type: "input",
        deepHide: formData.value.select === "2" ? true : false,
      },
      {
        label: "日期",
        prop: "date",
        type: "date",
        date: {
          type: "daterange",
        },
        hide: formData.value.select === "2" ? true : false,
      },
      {
        label: "深度日期",
        prop: "date2",
        type: "date",
        date: {
          type: "daterange",
        },
        deepHide: formData.value.select === "2" ? true : false,
      },
      {
        label: "多选",
        prop: "checkbox",
        type: "checkBox",
        checkBox: {
          options: [
            {
              label: "1",
              value: "1",
            },
            {
              label: "2",
              value: "2",
            },
          ],
        },

        hide: formData.value.select === "2" ? true : false,
      },
      {
        label: "深度多选",
        prop: "checkbox2",
        type: "checkBox",
        checkBox: {
          options: [
            {
              label: "1",
              value: "1",
            },
            {
              label: "2",
              value: "2",
            },
          ],
        },

        deepHide: formData.value.select === "2" ? true : false,
      },
      {
        type: "domains",
        keys: "getdomains",
        domains: domainsArr.value,
      },
    ],

    buttons: [
      {
        content: "提交",
        type: "primary",
        onClick() {
          console.log(domainsArr.value);
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
const addFn = () => {
  console.log(domainsArr.value, "value");
  domainsArr.value.push({
    item: [
      {
        label: "测试1",
        prop: "a",
        type: "input",
        value: "",
        rules: chris.rulesFn().required(true, "请输入测试1"),
      },
      {
        label: "日期",
        type: "date",
        prop: "daterange",
        rules: chris.rulesFn().required(true, "请输入日期"),
        date: {
          type: "daterange",
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
};
const btbfn = (val) => {
  console.log(val);
  domainsArr.value.splice(val.index, 1);
};

const bc = () => {
  dialogVisible.value = true;
  setTimeout(() => {
    formData.value = {
      getdomains: [
        {
          a: 1,
          daterange: ["2023-01-01", "2024-01-02"],
        },
        {
          a: 2,
          daterange: ["2023-01-01", "2024-01-02"],
        },
        {
          a: 3,
          daterange: ["2021-01-01", "2024-01-02"],
        },
      ],
    };
    domainsArr.value = formData.value.getdomains.map((el) => {
      return {
        item: [
          {
            label: "测试1",
            prop: "a",
            type: "input",
            value: el.a,
            rules: chris.rulesFn().required(true, "请输入测试1"),
          },
          {
            label: "日期22",
            type: "date",
            prop: "daterange",
            rules: chris.rulesFn().required(true, "请输入日期"),
            date: {
              type: "daterange",
            },
          },
          {
            slotName: "btn",
            type: "custom",
            span: 3,
          },
        ],
        chriskey: Math.random(),
      };
    });
  }, 0);
};
</script>

<style lang="scss" scoped>
body {
  font-family: Arial, sans-serif;
}

.container {
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
