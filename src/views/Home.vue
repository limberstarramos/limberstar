<template>
    <!-- <div class="spin">

    </div> -->
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <home-principal></home-principal>
    <!-- <spinner></spinner> -->
    <seccion-desarrollo></seccion-desarrollo>

  </div>
</template>

<script>
// @ is an alias to /src
// import Spinner from '@/components/Spinner.vue'
import HomePrincipal from '@/components/HomePrincipal.vue'
import SeccionDesarrollo from '@/components/SeccionDesarrollo.vue'


export default {
  name: 'Home',
  components: {
    // Spinner,
    HomePrincipal,
    SeccionDesarrollo
  
  }
}
</script>

   