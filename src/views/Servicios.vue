<template>
  <div>
    <div class="container" >
        <div class="row">
        <div class="col-md-12 col-lg-12 tituloserv ">
                <h2 class="m-3 ">Servicios</h2>
                <h5 class="subtlserv">¿Te gustaría tener un sistema para tu negocio o un sitio web para hacer conocer tus productos?</h5>
            </div>
        </div>
        <div class="row row-cols-1  row-cols-md-3 g-3 ">
            <div class="col-sm-12 col-md-6 col-lg-4 col mb-4 d-flex justify-content-center">
                <card codigo="1"></card>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 col mb-4 d-flex justify-content-center">
                <card codigo="2"></card>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 col mb-4 d-flex justify-content-center">
                <card codigo="3"></card>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 col mb-4 d-flex justify-content-center">
                <card codigo="4" ></card>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 col mb-4 d-flex justify-content-center">
                <card codigo="5"></card>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    name:'Servicios',
    components:{
        Card
    }
}
</script>
<style>
    .tituloserv{
        padding-top: 4px;
        padding-bottom: 50px;
    }
    .subtlserv{
    color:#808080;
    font-weight: bold;

  }
  @media screen and (max-width: 600px) {
    .subtlserv {
        font-size: 110%;
     
    }
  }
</style>