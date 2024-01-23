<template>
  <el-button @click="dialogChange"> 点击 </el-button>
  <el-dialog
    v-model="dialogVisible"
    title="知识库搜索设置"
    width="800px"
    :before-close="handleClose"
    :destroy-on-close="true"
    :close-on-click-modal="false"
  >
    <Tform v-bind="bind" ref="formRef">
      <template #buttons>
        <el-button type="primary" @click="addFn">新增搜索设置</el-button>
      </template>
      <template #btn="{ scope }">
        <el-button @click="delFn(scope)" type="primary"> 删除 </el-button>
      </template>
    </Tform>
  </el-dialog>
  <el-dialog
    v-model="dialogVisible2"
    title="选择知识库"
    width="600px"
    :before-close="handleClose2"
    :destroy-on-close="true"
    :close-on-click-modal="false"
  >
    <Tform v-bind="bind" ref="formRef"> </Tform>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
//import { chris, Tform } from "chriszj";
import { chris, Tform } from "../../packages/index";

import { domain } from "chriszj/Tform/comp/useForm";

//弹窗启动 弹框1
const dialogVisible = ref(false);
const dialogVisible2 = ref(false);

//弹框1关闭前的操作
const handleClose = () => {
  dialogVisible.value = false;
  // domainsArr.value = [];

  console.log(domainsArr, "domains");
};
//弹框2关闭前的操作

const handleClose2 = () => {
  dialogVisible2.value = false;
};
const dialogChange = () => {
  dialogVisible.value = true;
};
const formRef = ref();
const bind = computed(() => {
  return chris.useForm({
    edit: true,
    dataList: [
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
          console.log(
            formRef.value.form.formData,
            "formdata",
            formRef.value.form.formRef.validate
          );
          formRef.value.form.formRef.validate((valid) => {
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
    ],
    buttonsAlign: "right",
  });
});

const options = ref();
setTimeout(() => {
  options.value = [
    {
      lable: 1,
      value: "1",
    },
    {
      lable: 2,
      value: "2",
    },
    {
      lable: 3,
      value: "3",
    },
  ];
  options.value.forEach((ele) => {
    addFn();
  });

  console.log(bind, "999999");
}, 100);

const domainsArr = ref<domain[]>([]);
const addFn = () => {
  domainsArr.value.push({
    item: [
      {
        label: "触发条件",
        prop: "a",
        type: "select",
        rules: chris.rulesFn().required(true, "请输入测试1"),
        select: {
          options: options.value,
        },
      },
      {
        slotName: "btn",
        type: "custom",
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
        type: "space",
      },
    ],
    chriskey: Math.random(),
  });
};
const delFn = (val) => {
  domainsArr.value.splice(val.index, 1);
};
</script>

<style lang="scss" scoped></style>
