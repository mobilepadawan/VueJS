<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<Suspense>
    <template #default>
        <MiComponente />
    </template>
    <template #fallback>
        Loading...
    </template>
</Suspense>

<template>
    <h1>Título principal</h1>
    <p>Vue 3 ya no exige DIVs para contenernos!</p>
    <h2>Vue 3</h2>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

export default {
  name: 'MyComponent',
   async setup () {
    const result = await fetch(URL)
     return {
       result
    }
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

