const app = new Vue(
    {
        el: "#app",
        data: {
            cursos: []
        },
        methods: {
            getCursos() {
                console.log("Vue funciona como debería!")
                fetch("https://615ceedec29813001773636d.mockapi.io/cursos")
                    .then(response => response.json())
                    .then(data => {this.cursos = data})
                    .then(data => {console.table(this.cursos)})
                    .catch(err => console.error(`${err}`))
            }
        }
    }
)