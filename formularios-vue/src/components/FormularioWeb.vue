<template> 
  <div class="container">
    <form id="app" @submit="validarContenidoCargado" action="/haceralgo" method="POST">
      <div class="row">
        <div class="col col-12">
          <br><br>
          <label for="nombre" class="text-start">Tu nombre</label>
          <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre completo" v-model="nombre">
          <br>
          <label for="edad" class="form-label text-start">Edad</label>
          <input type="number" class="form-control" name="edad" id="edad" placeholder="Edad" min="0" v-model="edad">
          <br>
          <label for="email" class="form-label text-start">Email</label>
          <input type="email" class="form-control" name="email" id="email" placeholder="tu@email.com" v-model="email">
          <br>
          <label for="select" class="form-label text-start">País</label>
          <select class="form-select" v-model="pais">
            <option selected></option>
            <option v-for="pais in listaPaises" 
                    v-bind:value="pais.id" 
                    v-bind:key="pais.index">
              {{ pais.pais }}
            </option>
          </select>
          <br>
          <div v-if="errors.length > 0">
          <p>Errores detectados: </p>
            <ul class="text-warning fw-bold">
              {{ <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li> }}
            </ul>
          </div>
          <br>
          <div class="row">
            <h4>Selecciona tu curso</h4>
            <div class="col col-2">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="javascript" id="javascript" v-model="chequeados">
              <label class="form-check-label" for="javascript">
                JavaScript
              </label>
                <br>
                <input class="form-check-input" type="checkbox" value="react" id="react" v-model="chequeados">
                <label class="form-check-label" for="react">
                  React
                </label>
                <br>
                <input class="form-check-input" type="checkbox" value="angular" id="angular" v-model="chequeados">
                <label class="form-check-label text-start" for="angular">
                  Angular
                </label>
                <br>
                <input class="form-check-input" type="checkbox" value="vue" id="vue" v-model="chequeados">
                <label class="form-check-label" for="vue">
                  Vue
                </label>
              </div>
            </div>
          </div>
          <br>
          <p>Confirmados: <span class="text-success fw-bold">{{ chequeados }}</span></p>
          <label for="areaComentarios" class="form-label text-start">Comentarios</label>
          <textarea class="form-control" id="areaComentarios" rows="3"></textarea>
          <br>
          <div class="row">
            <h4>Tipo de documento</h4>
            <div class="col">
              <input type="radio" name="checkDNI" class="form-check-input">
              <label for="checkDNI">DNI</label>
            </div>
            <div class="col">
              <input type="radio" name="checkDNI" class="form-check-input">
              <label for="checkDNI">Pasaporte</label>
            </div>
            <div class="col">
              <input type="radio" name="checkDNI" class="form-check-input">
              <label for="checkDNI">VISA</label>
            </div>
          </div>
          <hr>
          <div class="row">
            <br>
            <div class="col-10"></div>
            <br>
            <div class="col-2">
              <input type="submit" class="btn btn-primary" value="ENVIAR">
            </div>
            <br>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormularioWeb',
  props: {
    formulario: [
      {
        nombre: null,
        edad: null,
        email: null,
        javascript: false,
        react: false,
        angular: false,
        vue: false,
        comentarios: ''
      }
    ]
  },
  data() {
    return {
      errors: [],
      nombre: '',
      email: '',
      edad: 0,
      chequeados: [],
        pais: '',
        listaPaises: [{id: 'A', pais: 'Argentina'},
                      {id: 'B', pais: 'Uruguay'},
                      {id: 'C', pais: 'Perú'},
                      {id: 'D', pais: 'Colombia'}]
    }
  },
  methods: {
    validarContenidoCargado: (e)=> {
      if (this.nombre && this.edad && this.email) {
        return true
      }
      if (this.nombre === '') {this.errors.push('El nombre es obligatorio.')}
      if (this.email === '') {this.errors.push('El correo electrónico es obligatorio.')}
      if (this.edad === 0) {this.errors.push('La edad debe ser mayor a 0 (cero).')}
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
  a {
    color: #42b983;
  }
  label {
    margin-left: 0.5em !important;
  }
</style>
