<template>
  <div class="foot">
    
        <div class="footer">
            <div class="row d-flex justify-content-around ">
                 <div class="col-sm-12 col-md-12 p-2 bg-info1 text-center">
                     <div class="sobreL">
                        <img v-lazy="'/images/lim1.png'" width="50px" height="50px">
                        <h3 class="text-center SL">Sobre mi</h3>
                     </div>
                   
                    <hr class="linefooter text-left">
                    <p>Limber Ramos   <br>Desarrollador web</p>
                    <small>Santa Cruz - Bolivia</small>
                 </div>
                <!-- <div class="col-sm-12 col-md-4 p-2 bg-warning1 text-left">
                    <h3 class="text-center">Productos</h3>
                     <hr class="linefooter">
                     <div class="footL">
                        <ul>
                            <li>Sistema de inventario</li>
                            <li>Cat&aacute;logo de productos</li>
                            <li>Sistema de pedidos e ingresos</li>
                        </ul>
                     </div>
      
                </div> -->
                <!-- <div class="col-sm-12 col-md-6 p-2 bg-primary1 text-left">
                    <h3 class="text-center">Info.</h3>
                     <hr class="linefooter">
                    <div class="footL">
                        <ul>
                            <li>Portafolio </li>
                            <li>Servicios</li>
                        </ul>

                    </div>

                </div> -->

            </div>
        </div>
        <div class="footer-copyright text-center py-3 ">
            <div class="container-fluid">
                <p>© 2020-2023 Copyright: Limberstar </p>
                
            </div>
        </div>
    
  </div>
</template>

<script>
export default {
  name: 'seccion-footer',
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    hr.linefooter{
        /* border: 1px solid #829eeb; */
        border: 1px solid #4070F4;
        width: 70%;
    }
    .subtitle{
        margin-top: 10%;
        color: #4070F4;
        font-weight: bold;
        /* font-size: 30px; */
        color:#2C3E50;
    }


/* parallax */


.footer{
    color:white;
    background-image: linear-gradient(#2C3E50,black);
    padding: 5%;
}
.footer-copyright{
    background-color: black;
    color:silver;
}
.imgtrabajo{
    margin-top: 4%;
}
.sobreL{
    display: flex;
    justify-content: center;

}
.SL{
    margin-left: 6px;
    margin-top: 6px;
    padding: 3px;
}
.footL{
    width: 100%;
    display: flex;
    justify-content: center;
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .descripcion {
    font-size: 85%;
    color:#808080;
  }
  .texbox{
      font-size: 75%;
      font-weight: bold;
  }
    .texbox1{
      font-size: 70%;
      font-weight: bold;
  }
  .sombra{
    margin-left: 4%;
    width: 90%;
    margin-bottom: 10%;
  }
  .text_sombra{
      font-size: 110%;
      font-weight: 700;

  }
  .ico_soft{
    color: #4070F4;
    padding: 13%;
    font-size: 50px;
    border-radius: 100px;
    box-shadow: 0 4px 25px rgba(14,36,49,.25);

    }

}

</style>
