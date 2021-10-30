<template> 
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col col-12">
          <br><br>
          <label for="inputNombre" class="text-start">Tu nombre</label>
          <input type="text" class="form-control" id="inputNombre" placeholder="Nombre completo" v-model="nombre">
          <br>
          <p>Validar nombre: <span class="text-success fw-bold">{{ nombre }}</span></p>
          <br>
          <label for="inputEdad" class="form-label text-start">Edad</label>
          <input type="number" class="form-control" id="inputEdad" placeholder="Edad">
          <br>
          <label for="inputEmail" class="form-label text-start">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="tu@email.com">
          <br>
          <label for="select" class="form-label text-start">País</label>
          <select class="form-select" aria-label="Default select example">
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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
        nombre: '',
        edad: 0,
        email: '',
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
      nombre: '',
        chequeados: [],
    //   edad: 0,
    //   email: '',
    //   comentarios: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
