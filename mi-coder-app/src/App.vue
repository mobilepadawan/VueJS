<template>
  <div id="app">
    <img alt="CH logo" src="./assets/logo.png" width="160px">
    <HelloWorld msg="Bienvenidos a CODERHOUSE."/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    }
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
