<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
    <h2>{{ $store.state.nombreDelCurso }}</h2>
    <br><br>
    <button @click="cambioNombre">CAMBIAR CURSO</button>
  </div>
</template>

<script>
export default {
name: 'HelloWorld',
      methods: {
        cambioNombre: ()=> {
          this.$store.dispatch('cambiarNombreDelCurso')
        }
      }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
