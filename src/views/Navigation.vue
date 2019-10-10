<template>
  <div id="navigation">
    <div class="nav">
      <router-link class="nav-item" to="/Information" tag="div">学生信息查询</router-link>
      <router-link class="nav-item" to="/MemberManage" tag="div">党员管理</router-link>
    </div>
    <div class="nav">
      <router-link class="nav-item" to="/VolunteerAduit" tag="div">志愿时审核</router-link>
      <router-link class="nav-item" to="/MemberManage" tag="div">权限管理</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    components: {
    }
  }
</script>

<style scoped>
  #navigation {
    margin-top: 50px;
    height: 800px;
  }
  .nav {
    display: flex;
    height: 50%;
  }
  .nav-item {
    flex: 1;
    font-size: 3em;
    padding-top: 2.3em;
    margin: 50px;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    border-radius: 5%;
    background-color: rgba(158,57,112,0.17);
  }
  /*.nav-item>div {*/
  /*  width: inherit;*/
  /*  height: inherit;*/
  /*  margin: 30px;*/
  /*  background-color: rgba(158,57,112,0.17);*/
  /*}*/
</style>