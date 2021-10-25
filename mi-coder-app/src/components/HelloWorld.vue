<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    error: Number,
		mensaje: String,
		icono: String,
		fechaError: Date
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
.prueba {
	background-color: white;
}
</style>
