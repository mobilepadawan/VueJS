var app = new Vue({
    el: '#app',
    data: {
        mostrarDiv: false,
        estoyLogueado: true,
        userName: 'JOBS, Steve',
        totalNot: 21,
        tareas: [{id: 1, desc: "Revisar hardware faltante"},
                    {id: 2, desc: "Validar user testing"},
                    {id: 3, desc: "Verificar versión del S.O."},
                    {id: 4, desc: "Probar instalar S.O. en SD-Card"},
                    {id: 5, desc: "Realizar downgrade de S.O."},
                    {id: 6, desc: "Instalar Office beta"}],
        cssClasses: {
            "bg-warning": true,
            "text-secondary": true,
        }
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
            this.message = salvarUsuario
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