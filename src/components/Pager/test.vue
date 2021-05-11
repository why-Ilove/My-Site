<template>
  <div>
    <h1>Pager 翻页组件</h1>
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    handlePageChange(newPage) {
      // console.log("页码改变了", newPage);
      this.current = newPage;
      console.log(`加载当前${this.current}页的数据`);
    },
  },
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
</style>