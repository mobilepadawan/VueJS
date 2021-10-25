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
    answer: 'Has una pregunta para obtener tu respuesta!'
	},
	watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Esperando que deje de escribir...'
      this.debouncedGetAnswer()
    },
		methods: {
			getAnswer:  function () {
				if (this.question.indexOf('?') === -1) {
					this.answer = 'Las preguntas contienen signo de interrogación. ;-)'
					return
				}
				this.answer = 'Pensando...'
				var vm = this
				axios.get('https://yesno.wtf/api')
					.then(function (response) {
						vm.answer = _.capitalize(response.data.answer)
					})
					.catch(function (error) {
						vm.answer = `¡Error! La API no respondió: ${error}`
					})
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
