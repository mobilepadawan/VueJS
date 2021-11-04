<template>
  <div class="about">
    <h1>Acerca de...</h1>
    <p>Página dedicada al apartado Acerca de...</p>
  </div>
</template>

<script>
export default {
    data: {
      nombreAplicacion: 'Mi App Vue/Cli'
    },
    beforeCreate: ()=> {
      console.log('En este momento del ciclo, data: no existe aún.')
    },
    created: ()=> {
      console.log('En este momento del ciclo, ya puedo acceder a data: ' + $this.data.nombreAplicacion)
    },
    mounted: ()=> {
          this.$nextTick() => {
            console.log(this.$el.querySelector('h1'))
          }
    },
    methods: {
      cancelarEventos: ()=> {
        this.$destroy()
      }
    }
  }
}
</script>