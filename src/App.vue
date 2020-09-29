<template>
  <div id="app">
    <transaction></transaction>

  </div>
</template>

<script>
  import Transaction from './components/Transaction.vue';

  export default {
    components: {
      transaction: Transaction
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
