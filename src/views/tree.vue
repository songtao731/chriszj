<template>
  <Card>
    <TableList v-bind="bind" tooltip-effect="light"></TableList>

    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="800px"
      :before-close="handleClose"
      :destroy-on-close="true"
      :close-on-click-modal="false"
    >
      <Tform v-bind="bind2" ref="tForm"> </Tform>
    </el-dialog>
  </Card>
  <div></div>
</template>

<script lang="ts" setup>
import router from "../../../router";
//import { chris, TableList, Tform } from "chriszj";
import { chris, Tform } from "../../packages/index";

import { listRole } from "@/api";
import { ref, computed } from "vue";
import { UploadProps, ElMessage, ElMessageBox } from "element-plus";
//弹框 显示隐藏
const dialogVisible = ref(false);
//Form的 id
const tForm = ref();
//弹框的标题
const title = ref("新增广告位");
//弹框关闭前的操作
const handleClose = () => {
  dialogVisible.value = false;
};
//列表
const bind = chris.useTable({
  request: (params) => listRole({ ...params, a: 1 }),
  buttons: [
    {
      type: "primary",
      content: "新增",
      onClick: () => {
        title.value = "新增广告位";
        dialogVisible.value = true;
        cc.value = {};
      },
    },
  ],

  columns: [
    {
      label: "企业名称",
      prop: "roleName",
      filter: {
        type: "select",
        options: [],
      },
    },
    {
      label: "景点名称",
      prop: "remark",
      filter: {
        type: "select",
        options: [],
      },
    },
    {
      label: "位置",
      prop: "address",
      filter: {
        type: "select",
        options: [],
      },
    },
    {
      label: "状态",
      prop: "address",
      filter: {
        type: "select",
        options: [],
      },
    },
    {
      label: "图片尺寸",
      prop: "address",
    },
    {
      label: "广告图片",
      prop: "address",
    },
    {
      label: "创建人",
      prop: "address",
    },
    {
      label: "创建时间",
      prop: "address",
    },
    {
      label: "编辑人",
      prop: "address",
    },
    {
      label: "编辑时间",
      prop: "address",
    },
    {
      label: "操作",
      width: "170",
      buttons: [
        {
          content: "查看",
          link: true,
          type: "primary",
          click(rows) {
            title.value = "查看广告位";
            dialogVisible.value = true;
          },
        },
        {
          content: "编辑",
          link: true,
          type: "primary",
          click(rows) {
            title.value = "编辑广告位";
            dialogVisible.value = true;
            setTimeout(() => {
              cc.value = {
                sex2: "sskksksk",
                sex: "时刻开始看看书",
                input: "",
                skks: "",
                sl: "",
                input2: "888",
              };
            }, 100);
          },
        },
        {
          content: "删除",
          type: "primary",
          link: true,
          click(row) {
            ElMessageBox.confirm("确认删除要删除广告位吗？", "删除", {
              confirmButtonText: "确认",
              cancelButtonText: "取消",
              closeOnClickModal: false,
              type: "warning",
            }).then(() => {
              ElMessage({
                type: "success",
                message: "删除成功",
              });
            });
          },
        },
      ],
    },
  ],
});

const cc = ref({});

// const request = (params) => {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove(cc);
//     }, 100);
//   });
// };

//弹框的表单

const checkUpload = (rule: any, value: any, callback: any) => {
  if (!value.length) {
    callback(new Error("请上传"));
  } else {
    callback();
  }
};
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (!/image\/[png|jpg|jpeg]/.test(rawFile.type)) {
    ElMessage.error("紧支持JPG,PNG,JPEG");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 10) {
    ElMessage.error("图片不能超过10MB!");
    return false;
  }
  return true;
};

const isSee = () => {
  return /查看/.test(title.value);
};
const bind2 = computed(() => {
  return chris.useForm({
    request: computed(() => cc.value),
    labelWidth: "94px",
    dataList: [
      {
        type: "span",
        prop: "input",
        label: "企业名称",
        rules: isSee() ? [] : chris.rulesFn().required(true, "请选择企业名称"),
        select: {
          options: [],
        },
      },

      {
        type: isSee() ? "span" : "select",
        prop: "input3",
        label: "景区名称",
        rules: isSee() ? [] : chris.rulesFn().required(true, "请选择景区名称"),
        select: {
          options: [],
        },
      },
      {
        type: isSee() ? "span" : "select",
        prop: "input2",
        label: "位置",
        select: {
          options: [],
        },
      },
      {
        type: isSee() ? "span" : "select",
        prop: "input2",
        label: "状态",
        rules: isSee() ? [] : chris.rulesFn().required(true, "请选择景状态"),
        select: {
          options: [],
        },
      },

      {
        label: "图片尺寸",
        prop: "sex",
        type: isSee() ? "span" : "input",
      },
      {
        type: "space",
      },
      {
        label: "推荐位图片",
        type: isSee() ? "prew" : "upload",
        prop: "upload",
        span: 2,
        upload: {
          action:
            "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
          limit: 1,
          beforeUpload: beforeAvatarUpload,
        },
        rules: isSee()
          ? []
          : chris.rulesFn().required(true, "请上传").validator(checkUpload),
      },
      {
        type: isSee() ? "span" : "select",
        prop: "input2",
        label: "跳转地址",
        select: {
          options: [],
        },
      },
    ],

    buttons: [
      {
        content: "关闭",
        onClick() {
          dialogVisible.value = false;
        },
      },
      {
        content: "保存",
        type: "primary",
        onClick() {
          tForm.value.form.formRef.validate((valid) => {
            console.log(valid);
            if (valid) {
              console.log("submit!");
            }
          });
        },
      },
    ],
    buttonsAlign: "right",
  });
});
</script>

<style lang="scss" scoped></style>
