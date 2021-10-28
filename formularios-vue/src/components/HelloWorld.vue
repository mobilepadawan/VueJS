<template> 
  <div class="container">
    <form action="">
      <div class="row">
        <div class="col col-12">
          <br><br>
          <label for="exampleFormControlInputName" class="text-start">Tu nombre</label>
          <input type="text" class="form-control" id="exampleFormControlInputName" placeholder="Nombre completo" required>
          <br>
          <label for="exampleFormControlAge" class="form-label text-start">Edad</label>
          <input type="number" class="form-control" id="exampleFormControlAge" placeholder="Edad">
          <br>
          <label for="exampleFormControlEmail" class="form-label text-start">Email</label>
          <input type="email" class="form-control" id="exampleFormControlEmail" placeholder="tu@email.com">
          <br>
          <label for="exampleFormControlTextarea1" class="form-label text-start">Comentarios</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <br>
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
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
