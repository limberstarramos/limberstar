<template>
    <div class="SeccionDesarrollo">


        <!-- start div container -->
        <div class="container my-4">
            <h3 class="text-center subtitle wow fadeInUp" >Desarrollo - Experiencia en Sistemas Web</h3>
            
        <!-- <h3 data-aos="fade-up"
            AOS.init();k
            data-aos-anchor-placement="bottom-bottom" class="text-center subtitle wow bounceInUp" data-wow-duration="5s" data-wow-delay="5s" >Desarrollo - Experiencia en Sistemas Web</h3>
             -->
        <hr class="linea">
        <p class="text-center my-4 descripcion">Desde que comencé mi trayectoria como desarrollador he creado y participado en
            diferentes proyectos, trabajo constantemente para mejorar mis habilidades en:</p>
        <div class="row align-items-center ">
            <div class="col-sm-12 col-md-4">
                <div  class="categoria__icon wow fadeInUp" >
                    <i class='bx bx-desktop ' id="ico_categ"></i>
                </div>
            
                <div class="categori_descrip text-gray-500 text-md wow fadeInUp">
                    <h5  class="categoria__subtitle font-bold text-gray-800 mt-4">Desarrollo Web</h5>
                    <p class="descripcion">He realizado soluciones web ,en sistemas escalables como ser:Academia Test,Mapas,Planillas, Proforma, Contabilidad y entre otros</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-4">
                <div class="categoria__icon wow fadeInUp">
                    <i class='bx bxs-palette' id="ico_categ"></i>
                </div>
               
                <div class="categori_descrip text-gray-500 text-md wow fadeInUp">
                 <h5 class="categoria__subtitle font-bold text-gray-800 mt-4"> Front-End</h5>
                    <p class="descripcion">Me gusta codificar desde cero o tambien en base de plantillas, estructurar y siseñar UX/UI , darle vida a las ideas en la web, siendo creativo y 
                        dinámico . </p>
                </div>
            </div>
            <div class="col-sm-12 col-md-4">
                <div  class="categoria__icon wow fadeInUp">
                    <!-- <i class='bx bxs-basket' id="ico_categ" ></i> -->
                    <i class='bx bxs-data' id="ico_categ"></i>
                </div>
               
                <div class="categori_descrip text-gray-500 text-md wow fadeInUp">
                    <h5  class="categoria__subtitle font-bold text-gray-800 mt-4"> Back-End</h5>
                    <p class="descripcion">Llevar todo el proceso de la lógica interna es tambien uno de mis favoritos,
                        siempre velando la seguridad de los datos y estructurando para que sea un sistema escalable 
                        
                    </p>
                </div>
            </div>
       </div>


        <!-- otro nuevo boton whtsapp -->
            <div data-aos="zoom-in-left" id="WAButton"></div> 
        <!-- end otro boton -->

       <!-- seccion sistemas -->
        <h3   class="text-center subtitle wow  fadeInUp">Destacado</h3>
        <hr class="linea" >
        <p class="descripcion" > Proyectos en los cuales he aventurado.</p>
        
        <div class="row row-cols-1 row-cols-md-3 g-4" v-lazy-container="{ selector: 'img' }">
            <div  class="col-sm-12 col-md-6 col-lg-4 imgnegocio wow  fadeInUp">
                <div class="card shadow-lg p-3 mb-5 bg-body rounded ">
                    <img data-src="../assets/img/home_sisdos.jpg" class="card-img-top imgcard" alt="...">
                    <div class="card-footer text-left">
                        <p class="text-lef fw-bold  sist">Proceso: r&aacute;pido - adaptable</p>
                        <p class="text-sm-start font-bold sist"><b>Control de inventario</b></p>
                        <p class="sist">Sistema de inventario</p>
                    </div>
                </div>
            </div>
            <div  class="col-sm-12 col-md-6 col-lg-4 imgnegocio wow  fadeInUp">
                <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <img data-src="../assets/img/guabira.png" class="card-img-top imgcard" alt="...">

                    <div class="card-footer text-left">
                        <p class="text-lef fw-bold  sist">Proceso: r&aacute;pido - adaptable</p>
                        <p class="sist"><b>Gestión de actividades y productos</b></p>
                        <p class="sist">Gestión de cat&aacute;logo de producto</p>
                    </div>

                </div>
            </div>
            <div  class="col-sm-12 col-md-12 col-lg-4 imgnegocio wow  fadeInUp">
                <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <img data-src="../assets/img/dashpro.png" class="card-img-to imgcard" alt="...">
                    <div class="card-footer text-left">
                        <p class="text-lef fw-bold  sist">Proceso: r&aacute;pido - adaptable</p>
                        <p class="fw-bold sist"><b>Órdenes de trabajo</b></p>
                        <p class="sist">Control de órdenes de trabajo</p>
                    </div>

                 </div>
            </div>
        </div>
        <!-- end seccion sistemas-->
        <!-- seccion product -->
        <h3  class="text-center subtitle wow fadeInUp">Habilidades </h3>
        <hr class="linea" >
            <div class="row align-items-center text-left">
                <div class="col-sm-12 col-md-6">
                    <div class="row ">
                        <!-- start-->
                        <div  class="col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp">
                            <!-- <i class='bx bx-tab ico_soft' ></i> -->
                            <i class='bx bxl-php ico_soft'></i>
                        </div>
                        <div  class="col-9 col-sm-8 col-md-9 marginsoftv wow fadeInUp">
                        <h5 class="servicio_subtitle">Laravel</h5>
                            <p class="descripcion">
                                Laravel es un marco de trabajo para aplicaciones que proporciona también una
                                estructura organizativa y un punto de partida para crear una aplicación.
                            Se caracteriza por manejo de Eloquent ORM,Sistema de rutas,Basado en arquitectura MVC y mucho más.

                                
                            </p>
                        </div>
                        <!--end  -->
                        <!-- start -->
                        <div   class="col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp">
                             <i class='bx bxl-vuejs ico_soft' ></i>
                        </div>
                        <div  class="col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp" >
                            <h5 class="servicio_subtitle ">Vuejs</h5>
                            <p class="descripcion">
                                Vue es un marco de JavaScript para construir interfaces de usuario. Se basa en
                            HTML, CSS y JavaScript, y proporciona un modelo de programación basado en componentes.
                            Nos permite crear aplicaciones web SPA de una sola página.
                            Se caracteriza por ser un Paradigma reactivo,Tamaño de descarga muy pequeño,Framework progresivo.
                            </p>
                        </div>
                        <!-- end -->
                        <!-- start -->
                        <div class="col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp">                               
                            <i class='bx bxl-react ico_soft' ></i>
                        </div>
                        <div  class="col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp" >
                            <h5 class="servicio_subtitle ">React</h5>
                            <p class="descripcion">
                                React, una biblioteca javascript, diseñado para facilitar 
                                 la creación de interfaces de usuario de una manera ágil y versátil.Nos
                                 permite crear aplicaciones web SPA de una sola página e incluso aplicaciones para móviles.
                                Se caracteriza por la composicion de componentes, desarrollo declarativo.
                            </p>
                        </div>
                        <!-- end -->
                    </div>

                </div>
                <div class="col-sm-12 col-md-6">
                     <div class="row ">

                           <!-- start -->
                        <div  class="col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp" >
                            <i class='bx bxl-tailwind-css ico_soft' ></i>
                        </div>
                        <div  class="col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp" >
                            <h5 class="servicio_subtitle ">Tailwindcss</h5>
                            <p class="descripcion">
                                Tailwind CSS es un framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en 
                                el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS.
                            </p>
                        </div>
                        <!-- end -->
                        <!-- start -->
                        <div  class="col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp" >
                            
                            <i class='bx bxs-data ico_soft'></i>
                        </div>
                        <div  class="col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp" >
                            <h5 class="servicio_subtitle ">MySQL</h5>
                            <p class="descripcion">
                                MySQL es un sistema de administración de bases de datos relacionales.
                                Es un software de código abierto desarrollado por Oracle. Se considera como 
                                la base de datos de código abierto más utilizada en el mundo.
                                Se caracteriza por que es Multiplataforma,Escalabilidad 40-50 millones de registros.
                            </p>
                        </div>
                        <!-- end -->
                        <!-- start -->
                        <div  class="col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp" >
                            <i class='bx bxs-data ico_soft'></i>
                        </div>
                        <div  class="col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp" >
                            <h5 class="servicio_subtitle ">SQL server</h5>
                            <p class="descripcion">
                                Microsoft SQL Server es uno de los principales sistemas de gestión de bases de datos relacional del mercado que presta servicio a un amplio abanico de 
                                aplicaciones de software destinadas a la inteligencia empresarial y análisis sobre entornos corporativos.
                            </p>
                        </div>
                        <!-- end -->
                    </div>

                </div>
            </div>
        <!-- end seccion product -->

        <!-- probando scroll -->
        <hr class="lineoscuro">
        <div  class="box wow fadeInUp "  >
            <vue-typed-js :strings="['Desarrollo Web ']" :typeSpeed="100" :showCursor="false">
                <h3 class="text-center"> <span class="typing text-light texbox"></span></h3>
            </vue-typed-js>
            <vue-typed-js :strings="['Sistema con rápido procesasamiento de datos', 'Aplicaciones web responsive ','SPA, en los sistemas web diseñados']" :loop="true" :typeSpeed="50" :backSpeed="10" >
                <h4 class="text-center" ><span class="typing text-info texbox1"></span></h4>
            </vue-typed-js>
            <div class="iconAPL">
                <i class='bx bx-line-chart-down ico_flot'></i>
             
            </div>

        </div>
        <!-- probando nuevo estulo -->

        <!--end scroll  -->
        <!-- imagen -->
        <div class="row g-0  position-relative imgtrabajo ">
            <div  class="col-md-6 mb-md-0 p-md-4 organizacionimg wow fadeInUp"  >
                <div class="content_img_ctf" >
                    <img src="../assets/img/ctf_01.png" class="w-100 img_ctf" alt="...">
                </div>
            </div>
            <div class="col-md-6 p-4 ps-md-0 organizaciontext">
                <div class="textorg">
                     <h5 class="mt-4">Ciberseguridad</h5>
                    <p class="descripcion ">
                        Como no mencionarles sobre  los
                        sistemas operativo Linux, es uno de los mejores  para la seguridad informatica.
                         he incursionado con diferentes herramientas 
                        para protegerse de posibles ataques.
                        <br>
                       <b> ¿Deseas comunicarte conmigo ?
                        env&iacute;ame un mensaje al correo o WhatsApp y le responder&eacute; a la brevedad posible.</b>
                    </p>
                    <!-- <div data-aos="zoom-in-left"> -->
                    <div  class="wow fadeInUp">
                        <a href="mailto:limberstar01@gmail.com" class="cardlogoemail"><i class='bx bx-mail-send icon_page'></i></a>
                    </div>
   
                    
                </div>

            </div>
            

        </div>
       

    </div>
        <!-- div container -->
        <!-- comenzar o getstart -->

    <!-- <div class="container-security">
    </div> -->


    <div class="container-fluid comenzar">
        <div class="row">
            <div  class="col-12 col-sm-12 col-md-6 imgcomenzar">
               <div class="wow fadeInUp"   id="code">
                 <img src="../assets/img/cel0101.png" class="card-img-top" id="imgcel" >
                 <hr class="linecel  rounded">
               </div>
            </div>
            <div  class="col-12 col-sm-12 col-md-6 imgcomenzar" style="color:white">
                <div  class="sombra wow fadeInUp"  >
                    <h3 class="text_sombra">
                        Sistema responsive </h3>
                    <p>
                        Siempre me gustó hacer un sitio que sea completamente adaptable en cualquier dispositvo.

                    </p>
                    <router-link to="/sobre" @click.native="subir" class="btn btn-outline-light btncomenzar ">Sobre mí</router-link>
                </div>
              
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    name:'seccion-desarrollo',
    data: function(){
        return {
            iconwhatsapp:false,
            src:'../assets/img/whatsapp.svg'
        }
       
    },
    mounted:function(){
        this.$nextTick(function () {
            // AOS.init();
            new WOW().init();

            $(function () {
            $('#WAButton').floatingWhatsApp({
                phone: '59163454066', //WhatsApp Business phone number
                headerTitle: 'WhatsApp Chat', //Popup Title
                popupMessage: 'Hola, en que te puedo ayudar?', //Popup Message
                showPopup: true, //Enables popup display
                buttonImage: this.src, //Button Image
                autoOpen: false,
                //headerColor: 'crimson', //Custom header color
                //backgroundColor: 'red', //Custom background button color
                position: "right", //Position: left | right
                zIndex: 100,
                size:55,
  
            });
        });
        })
       
       
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll(event){           
        let y= window.scrollY;
            console.log(y);
            if(y > 600)
            {
                console.log("yupii mi watsapp");
                this.iconwhatsapp=true;
            }else{
                this.iconwhatsapp=false;
                console.log("espera..");
            }
        },
        subir(){
            $('body,html').animate({scrollTop:0},500, 'swing',);
        }


    },


}
</script>

<style>
    #ico_categ{
    color: #4070F4;
    padding: 7%;
    font-size: 40px;
    border-radius: 100px;
    box-shadow: 0 5px 15px rgba(143, 192, 241, 0.829);

    }
    .ico_soft{
    color: #4070F4;
    padding: 10%;
    font-size: 50px;
    border-radius: 100px;
    box-shadow: 0 4px 25px rgba(14,36,49,.25);
    }
    .iconAPL{
        justify-content: center;
        display: inline;
    }
     .ico_flot{
    color:  #f2f4f8;
    padding: 3%;
    font-size: 70px;
    border-radius: 100px;
    box-shadow: 0 15px 25px rgba(16, 106, 148, 0.932);
    z-index: 1;
    background-image: linear-gradient(#2C3E50,black);

    }
    hr.linea{
        border: 2px solid #4070F4;
        width: 10%;
        margin-bottom: 5%;
    }
    hr.lineoscuro{
        border: 1px solid #d1d1d1;
        width: 80%;
        margin-bottom: 5%;
        margin-top: 5%;
    }
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
    .marginsoft{
        margin-top: 5%;
    }
    .imgcard {
        height: 280px;
        object-fit: contain;
    }
    .manejo{
        align-items: center;
    }
    .imgcard1{
    align-items: center;
    max-width:100%;
    margin-top: 20px;
    }
    .sist{
        margin: 0;
        
    }
    .content_img_ctf{
        /* background: yellow; */
        background-image: url('../assets/img/bg_ctf.jpeg');
        height: 400px;
        position:relative;

        /* background-attachment: fixed; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
       
    }
    .img_ctf{
        height: 100%;
        object-fit: contain;
    }
    .descripcion{
        color:#808080;
        font-size: 95%;
    }
    /* pantalla xs  sm*/
.fondo{
    background: green;
}
.write_code{
    padding: 10%;
    background: darkgray;
    color:white;
}
.box {
  transition: 4.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: 8%;
 background-image: linear-gradient(#2C3E50,black);
 text-align: end;
 border-radius: 8px;
 box-shadow: 0 10px 25px rgba(27, 43, 48, 0.932);
}
.comenzar{
background: #314755; 
background: -webkit-linear-gradient(to left,#1f3441, #307ca0); 
background: linear-gradient(to left, #132e3f, #307ca0); 
color: gray;
}
.sombra {
    margin-top: 5%;
    background: -webkit-linear-gradient(to left,#1f3441, #307ca0);
    width: 80%;
    padding: 10%;
    box-shadow: 0 10px 25px rgba(17, 31, 36, 0.932);
    border-radius: 10px;
    align-items: center;
    margin-bottom: 35px;

}
.imgcomenzar{
    margin-top: 5%;
}
.icon_page{
    color:#4070F4;
}
.footer{
    color:white;
    background-image: linear-gradient(#2C3E50,black);
    padding: 8%;
}
.footer-copyright{
    background-color: black;
    color:silver;
}
.imgtrabajo{
    margin-top: 4%;
}
#imgcel{
    width: 40%;
 
}
.linecel{
    background-color: rgb(250, 250, 253); 
    margin-top: 0px;
    width: 70%;
    padding: 4px;
    background: -webkit-linear-gradient(to left,#1f3441, #dbe5e9);
    box-shadow: 0 15px 20px rgba(0, 4, 5, 0.89);
}

.btn-whatsapp {
    display:block;
    width:60px;
    height:60px;
    color:#fff;
    position: fixed;
    right:20px;
    bottom:20px;
    border-radius:50%;
    line-height:80px;
    text-align:center;
    z-index:999;
    
}
.btn-whatsapp :hover{
    opacity: 0.7 !important;
    filter: alpha(opacity=70) !important;
}
.iconwsp{
    width: 30%;
    border-radius: 10px;
}
.iconwsp:hover{
    opacity: 0.7 !important;
    filter: alpha(opacity=70) !important;
    border-radius: 10px;
}

.whatsapnuevo {

    width: 40px;
    text-align: center;
    text-decoration: none;

    right:20px;
    position: fixed;
    bottom:10px;
    line-height:10px;
    z-index:999;
    
}
.whatsapnuevo:hover {
opacity: 0.7;
}

.bxl-whatsapp {
border-radius:50px;
font-size: 40px;
background: #25d366;
color: #FFF;
padding: 5px;
}
.cardlogoemail{
    font-size: 100px;
}
.btncomenzar{
    /* background: #fff; */
    border:1px solid white;
    
}
.btncomenzar:hover{
    background: transparent;
    border:1px solid white;
    /* color:#fff; */
}
.imgnegocio{
     transition: transform 0.2s; 
}

.imgnegocio:hover{
 transform: scale(1.05); 
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