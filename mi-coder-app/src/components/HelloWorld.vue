<template>
  <div class="hello">
    <h1>{{ mensaje }}</h1>
    <!-- Una opción de pasaje de array -->
    <blog-post v-bind:autor="{nombre: 'Coder House', fecha: '25-10-2021'}"></blog-post>
    <!-- Otra opción de pasaje de array -->
    <blog-post post.autor="post.autor"></blog-post>
  </div>
</template>

<script>
export default {
  name: 'blogPost',
  props: {
		titulo: String,
    publicacion: String,
    autor: String,
    fecha: Date,
    commentIds: Array
  },
  mounted() {
      console.info(`El título del post es: ${this.$props.titulo}`)
      console.info(`Y su autor: ${this.$props.autor}`)
  },
	data: {
		question: '',
    answer: 'Has una pregunta para obtener tu respuesta!',
		names: [],
		nombre: '',
		apellido: '',
		nombreCompleto: ''
	},
	watch: {
    question: (newQuestion, oldQuestion)=> {
      this.answer = 'Esperando que deje de escribir...'
      this.debouncedGetAnswer()
    }
		},
		computed: {
			nombreCompleto: {
				get: ()=> {
					return 'Coder ' + 'House'
				},
				set: (nuevoValor)=> {
					this.names = nuevoValor.split(' ')
					this.nombre = names[0]
					this.apellido = names[1]
				}
			}
		},
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
.prueba {
	background-color: white;
}
</style>
