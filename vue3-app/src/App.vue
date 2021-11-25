<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<<<<<<< HEAD
=======
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

>>>>>>> fe46b57084f6eca7c43ea90179e48229202d89e9
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
<<<<<<< HEAD
=======

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
>>>>>>> fe46b57084f6eca7c43ea90179e48229202d89e9
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
<<<<<<< HEAD
=======

>>>>>>> fe46b57084f6eca7c43ea90179e48229202d89e9
