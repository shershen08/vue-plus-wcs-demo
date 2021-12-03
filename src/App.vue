<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>The time is:</h1>

    current-time:
  <current-time></current-time>

<br><br>current-time-vue:
  <current-time-vue/>

  <br>
  <br>

  <wc-sortable-table  :value="tableData"></wc-sortable-table>
</template>

<script>

// scores - https://custom-elements-everywhere.com/libraries/vue/results/results.html

//import HelloWorld from './components/HelloWorld.vue'

// from https://v3.vuejs.org/guide/web-components.html#definecustomelement
import './current-time';
import './enable-wc-vue';

// from https://github.com/vanillawc
import '@vanillawc/wc-sortable-table/index';

export default {
  name: 'App',
  components: {
  //  HelloWorld
  },
  data: () => ({
    tableData: [
  ["header1", "header2", "header3", "header4", "header5"],
  ["AA", "BB", "CC", "DD", "EE"],
  ["BB", "CC", "DD", "EE", "AA"],
  ["CC", "DD", "EE", "AA", "BB"],
  ["DD", "EE", "AA", "BB", "CC"],
  ["EE", "AA", "BB", "CC", "DD"]
]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
