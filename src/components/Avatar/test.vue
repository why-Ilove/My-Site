<template>
  <div>
    <h1>Avatar 图像组件</h1>
    <Avatar class="test-container"
      url="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2549164742,691092989&fm=26&gp=0.jpg"
    />
    <Avatar class="test-container" :size="200"
      url="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1699514142,4045541005&fm=26&gp=0.jpg"
    />
    <Avatar class="test-container" :size="250"
      url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1114%2F0H320120Z3%2F200H3120Z3-3-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619233198&t=0698a65759b154985961e2c0992437f7"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Avatar,
  },
};
</script>

<style>
h1 {
  display: flex;
  justify-content: center;
}
.test-container{
  margin: 10px auto;
}
</style>