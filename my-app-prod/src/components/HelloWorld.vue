<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Si buscas una guía de cómo configurar / personalizar este proyecto,<br>
      Visita la documentación oficial de Vue-JS:
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Documentación de Vue-CLI</a>.
    </p>
    <h3>Links útiles</h3>
    <ul>
      <li><a href="https://plataforma.coderhouse.com/" target="_blank" rel="noopener">Plataforma Coderhouse</a></li>
      <li><a href="https://www.coderhouse.com/online/vue-js" target="_blank" rel="noopener">Curso de Vue-JS</a></li>
    </ul>
    <h3>Página oficial de Vue-JS</h3>
    <ul>
      <li><a href="https://vuejs.org/" target="_blank" rel="noopener">Vue JS</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Foros</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">En Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">Noticias</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
