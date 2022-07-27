<template>
  <div id="app">
    <HeaderBar ShowBottomBar />
    <OpenOrderSearch />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import OpenOrderSearch from "../components/OpenOrderSearch.vue";

export default {
  name: "OpenOrder",
  components: {
    HeaderBar,
    OpenOrderSearch,
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  /* background-color: #F7F5F7; */
  /* background-color: red; */
  margin: 0;
  padding: 0;
}
</style>
