<template>
  <Tdescriptions v-bind="bind" ref="desRef"> </Tdescriptions>
</template>

<script lang="ts" setup>
import { chris, Tdescriptions } from "chriszj";

import { computed, ref } from "vue";



const obj = ref();
const desRef = ref();


setTimeout(() => {

  obj.value = {
    endRow: "张三",
    nextPage: 0,
    name: "是",
    total: 27,
    tree: 0,
    age: 20,
  };
}, 100);
const ishide = ref(false);

const bind = computed(() => {
  return chris.useDescriptions({
    // request: () => entertainApplicationAddList({ a: 1 }),
    request: obj.value,

    parseData: (el) => {
      return {
        ...el,
        imgs: [
          {
            name: "food.jpeg",
            url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
          {
            url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          },
          {
            url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.pdf",
          },
        ],
      };
    },
    column: 2,
    border: true,

    dataList: [
      {
        label: "函数",
        prop: "total",
        formatData(data) {
          return data.total * 2 || "--";
        },
      },

      {
        label: "数据",
        value: "12321321.22",
        formatType: "priceChinese",
        span: 3,
      },
      {
        slotName: "cc",
        prop: "age",
        formatData(data) {
          return data.age + 0.1;
        },
      },
      {
        label:'金钱',
        value:282882.26,
        formatType:'price'
      },{
        label:"时分秒",
        value:1693977501756,
        formatType:'dateTime'
      },
      {
        label:"时分",
        value:1693977501756,
        formatType:'date',
        span:3
      },
      {
        label:'图片(默认宽高146),这里传了120',
        type:'prew',
        prop:'imgs',
        prew:{
          width:'120px',
          height:"120px"
        }
      }
    ],
  });
});
</script>
<style scoped></style>
