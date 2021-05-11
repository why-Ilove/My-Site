<template>
  <div>
    <h1>SiteAside 左侧导航栏组件</h1>
    <div class="test-container">
      <SiteAside />
    </div>
  </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style>
h1 {
  display: flex;
  justify-content: center;
}
.test-container {
  width: 250px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
