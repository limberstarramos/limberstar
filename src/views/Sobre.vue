<template>
  <div class="about">
      <div class="container-fluid titulo">
        <h3 class="text-center titl">Soy Limber Ramos</h3>
        <h4 class="subtl">Ingeniero de Sistemas</h4>
      </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
           <div class="card  imgcap2" >
                  <img src="../assets/img/perfil.png" alt="limberstar" style="width:100%;" >
                  <h4 class="text-titulo">Limber Ramos Paco</h4>
                  <p class="title">System Engineer</p>
                  <a href="https://www.linkedin.com/in/limber-ramos-p-39a1ba197"><i class='bx bxl-linkedin-square'></i></a>
            </div>
        </div>
        <div class="col-md-6 textdescripcion">

            <h4 class="text-center">Lo que hago</h4>
            <p class="text-left pdescripcion">Desarrollar sistemas web,aplicaciones web SPA,(Single Page Application). Brindando soluciones 
              óptimas, trabajando en equipo , capaz para determinar el diseño conceptual y 
              lógico como Back-End, crear  API REST, así tambien destacándome en el Front-End UX/UI .Con más de 2 años de experiencia en el ámbito de desarrollo ,
              combino mis habilidades, conocimiento, experiencia y pasión para crear 
              interfaces intuitivas y fáciles de manejar.</p>

          
        </div>
      </div>
    </div>
    <!-- diseño -->
      <div class="d-flex justify-content-center desig">
        <div class="card1">
          <div class="card cardlogo">
            <i class='bx bx-code-alt icondesig' ></i>
            <div class="container">
              <h4 class="text-dev"><b>DEVELOPER</b></h4>
            </div>
          </div>

          <div class="card cardlogo">
            <i class='bx bxs-eyedropper icondesig' ></i>
            <div class="container">
              <h4  class="text-dev"><b>DESIGNER</b></h4>
            </div>
          </div>
        </div>

    </div>
    <div  class="mensaje">
      <h4  class="subtl"><i class='bx bxs-quote-alt-left titl' ></i> La &uacute;nica forma de hacer un gran trabajo , es amar lo que haces.<i class='bx bxs-quote-alt-right titl'></i></h4>
      <p class="text_parrafo">- Steve Jobs</p>
    </div>
        <!-- end diseño -->
  </div>
</template>
<script>
export default {
    name:"sobre"

}
</script>
<style scoped>
.titulo{
  background-image: url('../assets/img/comp5.jpg');
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
    background: #000000;
    position: absolute;
    opacity: 0.3;
}
.titl{
  color:whitesmoke;
  position: relative;
  font-weight: bold;
}
.subtl{
  color:gainsboro;
  position: relative;
}
.imgcap2{
  top: -30px;
  float: left;
  position: relative;
  z-index: 1;
  max-width: 90%;
  opacity: 1;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  vertical-align: top;
}
.desig{
padding-bottom: 5%;
}
.card1{
  margin-left: 30%;
  display: flex;
}
.icondesig{
  font-size: 80px;
 color: #4070F4;
}
.cardlogo:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.cardlogo{
  margin-left: 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 5px;
}

.textdescripcion{
  padding-top: 5%;
}
.pdescripcion{
    color:#808080;
    font-size: 95%;
}
.mensaje{
  background-image: url('../assets/img/mensaje1.jpg');
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
.mensaje::before{
    content: "";
    width: 100%;
    height: 250px;
    background: #000000;
    position: absolute;
    opacity: 0.7;
}
.text_parrafo{
    color:gainsboro;
  position: relative;
  margin-top: 1rem;
}
@media screen and (max-width: 600px) {
  .descripcion {
    font-size: 85%;
    color:#808080;
  }
  .text-dev{
    font-size: 20px;
  }
  .card1{
  margin-left: 0%;
  display:flex;
  justify-content: center;
  margin-right: 12px;
  }
  .icondesig{
  font-size: 40px;
  color: #4070F4;
  }
  .cardlogo{
  margin-top:10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 1px;
  }

}
</style>