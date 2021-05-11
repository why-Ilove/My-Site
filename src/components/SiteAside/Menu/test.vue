<template>
  <div>
    <h1>Menu 左侧上组件</h1>
    <div class="test-container">
      <Menu />
    </div>
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
h1 {
  display: flex;
  justify-content: center;
}
.test-container {
  width: 400px;
  height: 600px;
  border: 1px solid red;
  background: #000;
  margin: 0 auto;
}
</style>
