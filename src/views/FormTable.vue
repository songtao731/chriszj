<template>
  <div class="">
    <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
      <el-table
        ref="tableBox"
        :data="formData"
        :row-style="{ height: '70px' }"
        :cell-style="{ padding: '0px' }"
      >
        <el-table-column type="selection" min-width="60"> </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          min-width="60"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="scenicArea"
          label="景区"
          min-width="70"
          align="center"
        >
          <template #default="scope">
            <el-form-item
              :prop="'formData.' + scope.$index + '.scenicArea'"
              :rules="rules.scenicArea"
            >
              <el-input
                v-model="scope.row.scenicArea"
                maxlength="200"
                oninput="if(value.length > 200) value=value.slice(0, 200)"
                placeholder="请输入"
              >
              </el-input>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <el-row style="margin-top: 50px">
      <el-col :span="24">
        <el-button type="primary" @click="submit">保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// const formData = ref({
//   name: '',
//   age: '',
//   tableData: [
//     { index: 0, province: '河南', city: '', scenicArea: '' },
//     { index: 1, province: '北京', city: '', scenicArea: '' },
//     { index: 2, province: '广州', city: '', scenicArea: '' }
//   ]
// });
const formData = ref([
  { index: 0, province: "河南", city: "", scenicArea: "" },
  { index: 1, province: "北京", city: "", scenicArea: "" },
  { index: 2, province: "广州", city: "", scenicArea: "" },
]);

const rules = ref({
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
  province: [{ required: true, message: "请输入省份", trigger: "blur" }],
  city: [{ required: true, message: "请输入城市", trigger: "blur" }],
  scenicArea: [{ required: true, message: "请输入景区", trigger: "blur" }],
});

const submit = () => {};
</script>

<style lang="scss" scoped></style>
