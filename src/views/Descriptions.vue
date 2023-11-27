<template>
  <Tdescriptions v-bind="bind" ref="desRef">
    <template #title> 插槽title </template>
    <template #extra>
      <ElButton @click="ishide = !ishide"> 我是插槽按钮 </ElButton>
    </template>
    <template #cc="{ scope }">
      <el-descriptions-item>
        <template #label>
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          年龄
        </template>
        {{ scope.resData.age }}
      </el-descriptions-item>
    </template>
    <template #tree="{ scope }">
      <el-descriptions-item label="树">{{ scope.value }}</el-descriptions-item>
    </template>
  </Tdescriptions>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";
import { chris, Tdescriptions } from "../../packages";

import { entertainApplicationAddList } from "@/api/index";
import { computed, ref } from "vue";
import { blob } from "stream/consumers";
import { User } from "@element-plus/icons-vue";

const aa = ref();
const bb = ref();
const obj = ref();
const desRef = ref();
const size = ref("");
const iconStyle = computed(() => {
  const marginMap = {
    large: "8px",
    default: "6px",
    small: "4px",
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  };
});
setTimeout(() => {
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
  bb.value = [
    {
      id: 1,
      name: 1,
      children: [
        {
          id: 11,
          name: 11,
          children: [
            {
              id: 13,
              name: 22,
              children: null,
            },
          ],
        },
        {
          id: 0,
          name: "ss",
          children: [
            {
              id: 14,
              name: 14,
              children: null,
            },
          ],
        },
      ],
    },
  ];
  obj.value = {
    endRow:
      "三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三张三",
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
      console.log(el, 9999);
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

    dataList: [
      {
        label: "姓名",
        prop: "endRow",
        labelClassName: "aa",
        className: "bb",
      },
      {
        label: "性别",
        value: "1",
        prop: "nextPage",
        dictData: aa.value,
        dictOptions: {
          label: "label2",
          value: "value2",
        },
        labelClassName: "aa",
        className: "bb",
      },
      {
        label: "金钱",
        prop: "money",
        formatType: "price",
        labelClassName: "aa",
        className: "bb",
      },
      {
        label: "金钱大写",
        prop: "money",
        formatType: "priceChinese",
        hide: desRef.value?.data?.pages === 8,
        labelClassName: "aa",
        className: "bb",
      },
      {
        label: "时间",
        prop: "dataTime",
        formatType: "dateTime",
      },
      {
        label: "函数",
        prop: "total",
        formatter(data) {
          return data.total * 3 || "--";
        },
      },
      {
        label: "树",
        prop: "tree",
        dictData: bb.value,
        dictOptions: {
          value: "id",
          label: "name",
        },
        slotName: "tree",
      },
      {
        type: "space",
      },

      {
        label: "数据",
        value: "12321321.22",
        formatType: "priceChinese",
        span: 3,
      },
      {
        label: "文件",
        prop: "imgs",
        type: "prew",
        prew: {
          width: "100px",
          height: "100px",
        },
        hide: ishide.value,
        span: 3,
      },
      {
        slotName: "cc",
        prop: "age",
        formatter(data) {
          return data.age + 0.1;
        },
      },
    ],
  });
});

console.log(desRef, "desRef");
</script>
<style scoped>
:deep(.aa) {
  width: 200px;
  display: inline-block;
}
:deep(.bb) {
  width: 50%;
}
</style>
