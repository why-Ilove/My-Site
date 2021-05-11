<template>
  <div>
    <h1>Icon 图标组件</h1>
    <div class="test-container">
      <div class="item" v-for="t in types" :key="t">
        <Icon :type="t" />
      <label>{{ t }}</label>
    </div>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}
.icon-container {
  display: block;
}
</style>