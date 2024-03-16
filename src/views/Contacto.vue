
<template>
  <div class="contacto">
    <div class="container-fluid titulo">
      <h3 class="m-3 titl">Contacto</h3> 
      <h5 class="subtl">Puedes contactarme en algunos de estos canales</h5>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 my-4">
              <div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                  <i class='bx bxl-linkedin ico_flotlin'></i>
                  </div>
                  <div class="col-md-8 ">
                    <div class="card-body ">
                      <h5 class="card-title">Linkedin</h5>
                      <p class="card-text"> Para m&aacute;s informaci&oacute;n.</p>
                      <a href="https://www.linkedin.com/in/limber-ramos-p-39a1ba197" class="btn btn-primary cardlogo" target="_blank"><i class='bx bxl-linkedin'></i> Linkedin</a>
                      
                      <p class="card-text"><small class="text-muted">Última actualización  mayo 2023</small></p>
                    </div>
                  </div>
                </div>
              </div>

        </div>
          <div class="col-md-6 my-4">
            <div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <i class='bx bxl-twitter ico_flot' ></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Twitter</h5>
                      <p class="card-text">Novedades frecuentemente.</p>
                      <a href="https://twitter.com/LimberstarR?=09" class="btn btn-info cardlogo" target="_blank"><i class='bx bxl-twitter'></i> Twitter</a>
                      <p class="card-text"><small class="text-muted">Última actualización  mayo 2023</small></p>
                    </div>
                  </div>
                </div>
              </div>
      
          </div>
          <div class="col-md-12 correoe">
          <div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded" style="width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                  <i class='bx bx-mail-send ico_flotmail'></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Correo electrónico</h5>
                      <p class="card-text"> Consultas .</p>
                      <a href="mailto:limberstar01@gmail.com" class="btn btn-dark cardlogo" target="_blank"><i class='bx bx-mail-send'></i> Email</a>
                      <p class="card-text"><small class="text-muted">Última actualización  mayo 2023  </small></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    <div class="container-fluid titulo">
      <div class="subtl">
      <p>¡S&iacute;gueme en mis redes sociales!</p>
        <div class="float-center d-flex justify-content-center gap-4 iconred">
          <!-- <a href="" class="float-left" target="_blank" ><i class='bx bxl-facebook-square'></i></a> -->
          <a href="https://twitter.com/LimberstarR?=09" target="_blank"><i class='bx bxl-twitter'></i></a>
          <a href="https://www.linkedin.com/in/limber-ramos-p-39a1ba197" class="float-right" target="_blank"><i class='bx bxl-linkedin'></i></a>

        </div>

      </div>

    </div>
  </div>
</template>
<script>

export default {
  name:'Contacto',
  data:function(){
    return {
    }
  },

}
</script>

<style scoped>
.titulo{
background-image: url('../assets/img/contact.png');
  height: 250px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titulo::before{
    content: "";
    width: 100%;
    height: 250px;
    background: #010811; 
    background: -webkit-linear-gradient(to right, #00040f, #010a14, #030b75);
    background: linear-gradient(to right, #00040f, #010a14, #030b75);
    position: absolute;
    opacity: 0.7;
}
.titl{
  color:whitesmoke;
  position: relative;
  font-weight: bold;
}
    img{
        width: 100%;
    }
    .ico_flotlin{
    color:  #f2f4f8;
    padding: 3%;
    font-size: 70px;
    border-radius: 100px;
    box-shadow: 0 15px 25px rgba(16, 106, 148, 0.932);
    z-index: 1;
    background-image: linear-gradient(#187adb,rgb(13, 166, 255));
    justify-content: center;
    margin-top: 50px;
    }
    .ico_flot{
    color:  #f2f4f8;
    padding: 3%;
    font-size: 70px;
    border-radius: 100px;
    box-shadow: 0 15px 25px rgba(16, 106, 148, 0.932);
    z-index: 1;
    background-image: linear-gradient(#20a7f5,rgb(4, 179, 233));
    justify-content: center;
    margin-top: 50px;
    }
    .ico_flotmail{
    color:  #f2f4f8;
    padding: 3%;
    font-size: 70px;
    border-radius: 100px;
    box-shadow: 0 15px 25px rgba(16, 106, 148, 0.932);
    z-index: 1;
    background-image: linear-gradient(#ada41c,rgb(214, 201, 10));
    justify-content: center;
    margin-top: 50px;
    }
    .correoe{
      display: inline-flex;
      position:relative;
      justify-content: center;
    }
    .cardlogo:hover {
      box-shadow: 0 10px 8px 0 rgba(0,0,0,0.2);
      /* border-bottom: 5px solid white; */
    }
    .cardlogo{
      width: 100%;
      justify-content: center;
      box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
      transition: 0.5s;
      padding: 5px;
    }

    .iconred a{
     font-size: 30px;
      color: gainsboro;
    }
    .iconred a:hover{
      color: rgb(51, 149, 214);
    }
    .subtl{
    color:gainsboro;
    font-weight: bold;
    position: relative;
  }

</style>