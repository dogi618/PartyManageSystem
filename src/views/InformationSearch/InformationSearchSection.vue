<template>
  <section class="search-info">
    <div v-for="item in data" class="search-info-item">
      <span>{{item}}：</span>
      <select>
        <option>2017</option>
      </select>
    </div>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: "InformationSearchSection",
    props: {
      data: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  span,select {
    font-size: 1.2em;
  }
  select {
    width: 60%;
  }
  option {
    text-overflow: ellipsis;
  }
  button {
    margin-bottom: 10px;
    border: 1px solid salmon;
    background-color: rgba(8,20,7,0.19);
    flex: 1;
  }
  .search-info {
    height: 40px;
    display: flex;
  }
  .search-info-item {
    flex: 2;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
  }
</style>