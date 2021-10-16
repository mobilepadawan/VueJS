var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Coders!',
        a: 21,
        b: 3,
        usuario: ''
    },
    methods: {
        imprimirEnConsola() {
            console.log('Hola, coders!')
        },
        calculoMatematico() {
            return this.a * this.b
        },
        nombreDeUsuario() {
            salvarUsuario = prompt("Ingrese su nombre:")
            this.usuario = salvarUsuario
            console.log(this.usuario)
        }
    },
    computed: {
        duplicar() {
            this.imprimirEnConsola()
            return this.a * 2
        }
    }
 })