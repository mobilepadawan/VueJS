<template>
  <div>
    <h1>Ayuda</h1>
    <p>
      Bienvenidos a nuestra Ayuda en línea.
    </p>
    <hello-world msg="Importé un componente Vue a una Vista">
  </div>
</template>

<script>
import HelloWorld from 'src/components/HelloWorld.vue'

const componenteA = {
  methods: {
    accionArealizar() {
      bus.$emit('incrementar', 1)
    }
  }
}

const componenteB = {
  data() {
    return {
      contador: 0
    }
  },
  evento() {
    bus.$on('incrementar', (numero) => {
      this.contador += numero
    })
  }
}
</script>