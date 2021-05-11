<template>
  <div>
    <h1>Contact 左侧下组件</h1>
    <div class="test-container">
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";
export default {
  components: {
    Contact,
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
  padding-top: 200px;
}
</style>