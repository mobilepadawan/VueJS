<template>
  <div class="saludo">
    <h1>{{ mensaje }}</h1>
    <!-- Una opción de pasaje de array -->
    <blog-post v-bind:autor="{nombre: 'Coder House', fecha: '25-10-2021'}"></blog-post>
    <!-- Otra opción de pasaje de array -->
    <blog-post post.autor="post.autor" v-bind="$attrs">
      ...
    </blog-post>
    <base-input ref="usernameInput">
      <input ref="input">
    </base-input>
    <div>
      <h1 slot="header">Encabezado principal</h1>
      <p>Párrafo para la sección Main</p>
      <p slot="footer">Información del contacto...</p>
    </div>
    <div class="container">
      <header>
        <h1>Encabezado principal</h1>
      </header>
      <main>
        <p>{{ mensaje | capitalize }}</p>
        <p slot="footer">Información del contacto...</p>
      </main>
      <footer>
        <p v-bind:id="upperize">Información del contacto...</p>
      </footer>
    </div>
  </div>
</template>


<script>

Vue.filter('formatId', (value)=> {
  if (!value) return 0
  return value.toFixed(2)
})

export default {
  filters: {
    capitalize: (value)=> {
      if (!value) return ''
      value = value.toString()
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }
  },
  name: 'blogPost',
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
      this.$data.answer = 'Esperando que deje de escribir...'
      console.log(`La pregunta que formula, es: ${this.$data.question}`)
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
		methods: {
			enviarEvento() {
				this.$emit('miEventoPersonalizado')
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
