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

<template v-slot:name="name"> {{ usuario.nombre }} {{ usuario.apellido }} 
  ...
</template>

<base-layout>
  <template slot="header">
    <h1>Aquí podría ir un título de página</h1>
  </template>

  <p>Un párrafo para el contenido principal.</p>
  <p>Y otro más.</p>

  <template slot="footer">
    <p>Aquí va alguna información de contacto</p>
  </template>
</base-layout>

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
       let transformedMsg = msg |> uppercase |> reverse |> pluralize
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

