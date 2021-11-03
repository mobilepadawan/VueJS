<template>
  <div class="home">
    <img alt="Vue logo" class="img-logo" src="../assets/logo.jpg">
    <HelloWorld msg="Bienvenido a tu SPA"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .img-logo {
    width: 6em;
  }
</style>