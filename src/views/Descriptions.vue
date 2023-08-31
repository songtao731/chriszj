<template>
  <el-descriptions title="Customized style list" :column="3"  border>
    <el-descriptions-item
      label="Username"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
      >kooriookami</el-descriptions-item
    >
    <el-descriptions-item label="Telephone" label-align="right" 
      >18100000000</el-descriptions-item
    >
    <el-descriptions-item label="Place" label-align="right" 
      >Suzhou</el-descriptions-item
    >
    <el-descriptions-item label="Remarks" label-align="right" >
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address" label-align="right" 
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</el-descriptions-item
    >
  </el-descriptions>
</template>
<style scoped>

</style>