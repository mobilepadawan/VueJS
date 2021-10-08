const app = new Vue(
    {
        el: "#app",
        data: {
            cursos: []
        },
        methods: {
            async getCursos() {
                await fetch("https://615ceedec29813001773636d.mockapi.io/cursos")
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
    await fetch("https://615ceedec29813001773636d.mockapi.io/cursos", encabezado)
            .then((response) => response.json())
            .then((json) => console.log(json))
}
        }
    }