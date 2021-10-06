const app = new Vue(
    {
        el: "#app",
        data: {
            cursos: []
        },
        methods: {
            async getCursos() {
                console.log("Ejecutando la petición de cursos...")
                await fetch('https://615ceedec29813001773636d.mockapi.io/cursos')
                            .then(response => response.json())
                            .then(data => {
                                this.cursos = data
                                console.table(this.cursos)
                            })
                            .catch(err => console.error(`${err}`))
            }
        }
    }
)