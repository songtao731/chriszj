<template>
  <div class="container">
    <div class="item ac">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item ac">Item 3</div>
    <div class="item h-200">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
    <div class="item">Item 7</div>
    <div class="item">Item 8</div>
    <div class="item">Item 9</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
body {
  font-family: Arial, sans-serif;
}

.container {
  width: 420px;
}

.item {
  background-color: #f0f0f0;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
  float: left;
  width: 200px;
  height: 100px;
  &.ac {
    height: 200px;
  }
}
</style>
