<template>
  <div id="app">
    <div id="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/contacto">Contacto</router-link>
      <router-link to="/ayuda">Ayuda</router-link>
    </div>  
    <img alt="CH logo" src="./assets/logo.jpg" >
    <HelloWorld msg="Bienvenido a tu SPA"/>
    <router-view/>
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
