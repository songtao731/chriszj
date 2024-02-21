<template>
  <Tform v-bind="bind"> </Tform>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { chris, Tform } from "../../packages/index";

const cc = ref();
const aa = ref();
const domainsArr = ref();
setTimeout(() => {
  cc.value = {
    size: 1,
    startRow: "1",
    pages: "99",
    check: [],
    radio:
      "128828288282828828812881882888182181ssllssklkkskkskskskskkskskskskkskskksks22222212821389218321873127381273821738912738127389127381927398",
    rate: 1,
    nextPage: "身高2米",
    span: "WOSHI",
    sex: 0,
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
  aa.value = [
    {
      label2: "男",
      value2: 1,
    },
    {
      label2: "女",
      value2: 0,
    },
  ];
}, 100);

const bind = computed(() => {
  return chris.useForm({
    request: cc.value,
    column: "3",
    edit: true,
    dataList: [
      // {
      //   type: "domains",
      //   keys: "getdomains",
      //   domains: domainsArr.value,
      // },
      {
        type: "span",
        prop: "size",
        label: "size:",
      },
      {
        type: "space",
      },
      {
        type: "span",
        prop: "pages",
        label: "pages:",
      },
      {
        type: "span",
        prop: "radio",
        label: "raido",
        class: "abc",
      },
      {
        type: "span",
        prop: "nextPage",
        label: "nextPage",
      },
      {
        label: "文件",
        prop: "upload",
        type: "prew",
        prew: {
          width: "100px",
          height: "100px",
        },
        span: 3,
      },
      {
        label: "数据",
        type: "span",
        span: 3,
        prop: "span",
      },
      {
        label: "性别",
        type: "span",
        dictData: aa.value,
        prop: "sex",
        dictOptions: {
          label: "label2",
          value: "value2",
        },
      },
    ],
  });
});
</script>

<style lang="scss">
.el-form-item {
  :deep(.el-form-item__content) {
    word-break: break-all;
  }
}
</style>
