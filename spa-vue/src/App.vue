<template>
  <div id="app">
<<<<<<< HEAD
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
    <div id="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/contacto">Contacto</router-link>
      <router-link to="/ayuda">Ayuda</router-link>
    </div>  
    <img alt="CH logo" src="./assets/logo.jpg" >
    <HelloWorld msg="Bienvenido a tu SPA"/>
    <router-view/>
>>>>>>> cb2a876c97880abcd4dab4208a0a7c288886f002
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
