<template>
  <Tdescriptions v-bind="bind" ref="desRef">
  </Tdescriptions>

<p>
  打印组件本身对象,回吐回来的值
</p>
<p>
  {{ desRef }}
</p>
</template>

<script lang="ts" setup>
import { chris, Tdescriptions } from "chriszj";
import { computed, onMounted, ref } from "vue";
const desRef = ref();
const objData = {
  data: {
    rows: {
      endRow: "张三",
      nextPage: 0,
      name: "是",
      total: 27,
      dataTime: 2021-11-11,
      age: 20
    }
  }
};
const request = (params) => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(objData)
    }, 100);
  })
}

const bind = computed(() => {
  return chris.useDescriptions({
    request: () => request({ a: 1 }),
    //path的默认值data, 本条数据模拟的返回格式是data:{rows:xx} 所以修改path为data.rows
    path:"data.rows",
    //一行展示几个
    column: 4,
    border: true,

    dataList: [
      {
        label: "姓名",
        prop: "name",
      },
      {
        label: "金钱",
        prop: "age",

      },
      {
        label: "时间",
        prop: "dataTime",
      },
      {
        type: "space",
        label:"占位符,不用填写label"
      },
      {
        label: "数据",
        //value也可以重新赋值,前提不传入prop
        value: "12321321.22",

     
    
      }
    ],
  });
});
onMounted(()=>{

  console.log(desRef)
})

</script>
<style scoped></style>
