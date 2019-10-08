<template>
  <div>
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderNav from "./components/HeaderNav";
  export default {
    name: 'App',
   components: {
      HeaderNav
   }
  }
</script>

<style>

</style>
