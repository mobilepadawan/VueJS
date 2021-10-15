var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Coders!',
        a: 21,
        b: 3
    },
    methods: {
        imprimirEnConsola() {
            console.log('Hola, coders!')
        },
        calculoMatematico() {
            return this.a * this.b
        }
    
    },
    computed: {

    }
 })
 