<template>
  <div class="HomePrincipal">

    <div class="container-fluid contenedor text-center ">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 textTitle">
          <div class="textTitle1">
            <h1 class="titulo text-uppercase text-lg-start fw-bold">HOLA, MI NOMBRE ES LIMBER </h1>
            <h4 class="subtitulo text-uppercase text-md-start">SOY DESARROLLADOR WEB</h4>
          </div>

        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <img  src="../assets/img/devmen.png"  class="imgHomeP" alt="">
        </div>
      </div>
      <div class="row" >
        <div class="col-md-12">
            <div class="vuetyped">
              <vue-typed-js :strings="['LARAVEL', 'VUE.JS','MYSQL','REACT','TAILWINDCSS']" :loop="true" :typeSpeed="100" :backSpeed="50" >
                <h4 class="pro subtitulo text-uppercase text-xl-start" >Programación con : <span class="typing text-info "></span></h4>
              </vue-typed-js>
            </div>

        </div>
      </div>




    </div>
  </div>
</template>

<script>

export default {
  name: 'home-principal',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contenedor{
            background-image: url("../assets/img/comp1.jpg");
            height: 100vh;
            width: auto;
            background-size: cover;
            background-position: center;
            color: aliceblue;

            display: flex; 
            flex-direction: column;
            justify-content: center;
            align-items:center;
            background-attachment: fixed; 
        }
        .contenedor::before{
            content: "";
            width: 100%;
            height: 100vh;
            background: #092d5a; 
            background: -webkit-linear-gradient(to right, #00081a, #00081a, #00081a);
            background: linear-gradient(to right, #00081a, #00081a, #00081a);

            /* background: #000916;  */
            position: absolute;
            opacity: 0.7;
           
        }
        .contenedor h1,h4{
            position: relative;
        }
        .contenedor .pro{
            position: relative;
            text-align: center;
        }
        .contenedor .typing{
          color:#2C3E50;
        }

.vuetyped{
  display: flex;
  justify-content: center;
  margin-top: 0px;
}
.textTitle1{
  display: block;
  margin-top: 100px;
}
.imgHomeP{
  width: 400px;
}
@media screen and (min-width: 601px) {
  .titulo {
    font-size: 35px;
    color: white;
    font-weight: bold;
  }

}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .textTitle1 {
    font-weight: 700;
    margin-top: 0px;
  }
  .titulo {
    font-size: 30px;
    color: white;
    font-weight: bold;
  }
  .subtitulo{
    font-size: 15px;
  }
  .vuetyped{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  }
  .imgHomeP{
  width: 300px;
  }
  .textTitle{
   margin-top: 0px;
  }
  .contenedor .typing{
     font-size: 15px;
  }
}

</style>
