<template>
  <nav>
    <div class="left">
      <img src="" alt="Logo照片">
      <h3>党务管理系统</h3>
    </div>
    <div class="right">
      <span>切换用户</span>
      <span>{{user}}</span>
      <span>退出</span>
    </div>
  </nav>

</template>

<script>
  export default {
    name: "HeaderNav",
    props: {
      user: {
        type: String,
        default: '用户名'
      }
    },
  }
</script>

<style scoped>
  nav {
    height: 50px;
    display: flex;
    border-bottom: 1px solid rgba(23,8,22,0.71);
  }
  .left {
    flex: 1;
    padding-left: 10px;
  }
  .right {
    flex: 1;
    padding-right: 20px;
    padding-top: 1em;
    text-align: right;
  }
  span {
    margin-left: 1em;
    cursor: pointer;
  }
  h3 {
    margin: 15px 0 0 1em;
    display: inline-block;
  }
</style>