<template>
  <div id="app">
    <HeaderBar/>
    <CustomerSearch/>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import CustomerSearch from './components/CustomerSearch.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    CustomerSearch
}
}
</script>

<style>
#app{
  font-family: 'Open Sans', sans-serif;
  /* background-color: #F7F5F7; */
  /* background-color: red; */
  margin: 0;
  padding:0;
}
</style>
