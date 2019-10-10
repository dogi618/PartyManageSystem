<template>
  <div id="root-div">
    <header-info></header-info>
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderInfo from "./components/HeaderInfo";
  import HeaderNav from "./components/HeaderNav";
  export default {
    name: 'App',
   components: {
      HeaderInfo,
      HeaderNav
   }
  }
</script>

<style>
  #root-div {
    height: 100%;
  }
</style>
