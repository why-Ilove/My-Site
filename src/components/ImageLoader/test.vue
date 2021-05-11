<template>
  <div>
    <h1>ImageLoader 渐进式图片组件</h1>
    <div class="test-container">
      <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        :duration="3000"
        @load="handleLoaded"
      />
    </div>
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("ImageLoader组件load事件触发，图片加载完成...");
    },
  },
};
</script>

<style scoped>
h1{
  display: flex;
  justify-content: center;
}
.test-container {
  width: 500px;
  height: 360px;
  border: 1px solid;
  margin: 0 auto;
}
</style>