<template>
  <Card class="card">
    <template #header>
      <div class="flex justify-between">
        <span>电池详情</span>
        <el-button> 返回 </el-button>
      </div>
    </template>
    1
    <el-input-number v-model="a" @change="aa"> </el-input-number>
  </Card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Card } from "../../packages/index";

const a = ref();
const aa = () => {
  console.log(typeof a.value);
};
</script>

<style lang="scss" scoped></style>
