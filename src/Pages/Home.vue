<template>
  <div id="app">
    <HeaderBar />
    <OpenOrderSearchHome />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import OpenOrderSearchHome from "../components/OpenOrderSearchHome.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    OpenOrderSearchHome,
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
