<template>
  <div id="background">
    <nav id="header-nav">
      <router-link class="header-nav-item" to="/Information" tag="div">学生信息查询</router-link>
      <router-link class="header-nav-item" to="/MemberManage" tag="div">党员管理</router-link>
      <router-link class="header-nav-item" to="/VolunteerAduit" tag="div">志愿时审核</router-link>
      <router-link class="header-nav-item" to="/MemberManage" tag="div">权限管理</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "SideNav"
  }
</script>

<style scoped>
  #background {
    width: 100%;
    background-color: salmon;

  }
  #header-nav {
    margin: 1px auto;
    width: 1200px;
    height: 35px;
    display: flex;
    border-right: 1px solid black;
  }
  .header-nav-item {
    flex: 1;
    font-size: 1.4em;
    border-left: 1px solid black;
    cursor: pointer;
    color: white;
    text-align: center;
  }
  .header-nav-item:hover {
    border-bottom: 3px solid yellow;
  }
</style>