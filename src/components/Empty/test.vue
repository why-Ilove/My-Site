<template>
  <div>
    <h1>Empty 无数据组件</h1>
    <div class="test-container">
      <Empty />
    </div>
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
h1 {
  display: flex;
  justify-content: center;
}
.test-container {
  width: 500px;
  height: 360px;
  border: 1px solid;
  margin: 0 auto;
  position: relative;
}
</style>