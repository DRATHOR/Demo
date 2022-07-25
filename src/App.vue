<template>
  <div id="app">
    <HeaderBar />
    <OpenOrderSearch/>
    <!-- <CustomerSearch/> -->
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
// import CustomerSearch from './components/CustomerSearch.vue';
import OpenOrderSearch from './components/OpenOrderSearch.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    OpenOrderSearch,
    
    
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
