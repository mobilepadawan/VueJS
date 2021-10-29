<template>
  <div id="app">
    <img alt="CH logo" src="./assets/logo.png" class="logo-small">
    <FormularioWeb />
  </div>
</template>

<script>
import FormularioWeb from './components/FormularioWeb.vue'

export default {
  name: 'App',
  components: {
    FormularioWeb
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: smaller;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 60px;
  margin-right: 60px;
}
.logo-small {
  width: 6em;
}
</style>
