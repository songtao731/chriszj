<template>
  <Tform v-bind="bind" ref="tForm">
    <template #buttons>
      <el-button type="primary" @click="addFn">添加</el-button>
    </template>
    <template #btn="{ scope }">
      <el-button @click="btbfn(scope)">
        删除
      </el-button>
    </template>

  </Tform>
</template>
<script></script>

<script setup lang="ts">
import { chris, Tform } from "chriszj";
import { ref, computed } from "vue";
import { domain } from "chriszj/Tform/comp/useForm";

const tForm = ref()

const startRef = ref();
const getStartRef = (el) => {
  startRef.value = el;
};

const domainsArr = ref<domain[]>([
  {
    item: [{
      label: "测试1",
      prop: "a",
      type: "input",
      value: '',
      rules: chris.rulesFn().required(true, '请输入测试1'),
    }, {
      label: '日期',
      type: 'date',
      prop: 'daterange',
      rules: chris.rulesFn().required(true, '请输入日期'),
      date: {
        type: 'daterange'
      }

    }, {
      slotName: 'btn',
      type: 'custom',
      span: 3

    }],
    chriskey: Math.random()
  }
])
const bind = computed(() => {


  return chris.useForm({
    dataList: [
      {
        label: "动态校验",
        prop: "size",
        type: "input",
        class: "inss",
        value: 22,
        span: 3
      },
      {
        type: 'domains',
        keys: 'getdomains',
        domains: domainsArr.value,

      }
    ],
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

        }
      }


    ],
    buttonsAlign: 'right'
  })
})
const addFn = () => {

  domainsArr.value.push({
    item: [{
      label: "测试1",
      prop: "a",
      type: "input",
      value: '',
      rules: chris.rulesFn().required(true, '请输入测试1'),
    }, {
      label: '日期',
      type: 'date',
      prop: 'daterange',
      rules: chris.rulesFn().required(true, '请输入日期'),
      date: {
        type: 'daterange'
      }

    }, {
      slotName: 'btn',
      type: 'custom',
      span: 3

    },],
    chriskey: Math.random()
  })

}

const btbfn = (val) => {
  console.log(val)
  domainsArr.value.splice(val.index, 1)
}

</script>
