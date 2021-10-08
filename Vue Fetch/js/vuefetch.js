const app = new Vue(
    {
        el: "#app",
        data: {
            URL: "https://615ceedec29813001773636d.mockapi.io/cursos",
            cursos: []
        },
        methods: {
            async getCursos() {
                await fetch(this.URL)
                        .then(response => response.json())
                        .then(data => {this.cursos = data})
                        .then(data => {console.table(this.cursos)})
                        .catch(err => console.error(`${err}`))
                        .finally(() => {
                            console.log("Finalizó la petición de datos remotos...")
                        })
            },
            async postCurso() {
                const cursoData = {
                    "nombre": "Typescript",
                    "creado": "2021-10-07",
                    "duracion": "20"
                }
                const encabezado = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                    },
                    body: JSON.stringify(this.cursoData)
                }
                await fetch(this.URL, encabezado)
                        .then((response) => response.json())
                        .then((json) => console.log(json.data))
            },
            async axiosGetCursos() {
            await axios.get(this.URL)
                    .then((response) => {console.table(response.data)})
                    .catch((err) => {console.error(`${err}`)})
            },
            async axiosPostCurso() {
                const nuevoCurso = {
                    "nombre": "Deno",
                    "creado": "2020-12-01",
                    "duracion": 25 
                }
                await axios.post(this.URL, nuevoCurso)
                        .then((response) => {console.table(response.data)})
                        .catch((err) => {console.error(`${err}`)})
                }
        }
    }
)