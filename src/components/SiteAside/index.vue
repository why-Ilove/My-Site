<template>
  <div class="site-aside-container">
    <Avatar
      url="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2549164742,691092989&fm=26&gp=0.jpg"
    />
    <h1 class="title">HI，我是哈士奇</h1>
    <Menu />
    <Contact />
    <p class="footer">ICP备11111111号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
  color: #aaa;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
