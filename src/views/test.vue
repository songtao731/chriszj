<template>
  <TableList v-bind="bind"> </TableList>
</template>

<script setup lang="ts">
import { entertainApplicationAddList } from "@/api/index";
import { ElMessageBox } from "element-plus";
import { reactive, ref } from "vue";

//import { chris, TableList } from "../../packages";
import { chris, TableList } from "chriszj";

// 表格数据
const tableData = ref([]);

const bind = chris.useTable({
  request: (params) => entertainApplicationAddList(params),
  columns: [
    {
      label: "名称",
      prop: "name",
    },
    {
      label: "备注",
      prop: "remark",
    },
    {
      label: "创建时间",
      prop: "createTime",
    },
    {
      label: "操作",
      buttons: (row) => {
        return [
          {
            content: "编辑",
            link: true,
          },
          {
            content: "删除",
            link: true,
          },
        ];
      },
    },
  ],
});
</script>

<style lang="scss" scoped></style>
