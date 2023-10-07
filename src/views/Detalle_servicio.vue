  <template>
  <div class="container">
    <div v-if="$route.params.id=='1'">
        <h2 class="m-3">Detalle del servicio</h2>
        <div class="card mt-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <img src="../assets/img/dashpro.png" alt="">
              </div>
              <div class="col-md-6">
                <h4>Sistema de Inventario <span hidden>{{$route.params.id}} </span></h4>
                <p class="text-left descripcion_prod">Esta aplicación web consiste en un sistema que permite
                    administrar el almacén de una tienda: sus ingresos y sus
                    ventas, La tienda vende productos de distintas categorías
                    o departamentos a sus clientes (una venta simple) ademas
                    de comprar productos a sus distintos proveedores.

                    Existen 5 tipos de usuario de quienes se almacena información 
                    en el sistema, el cliente, el proveedor, uno o mas usuarios habilitado
                    unicamente para gestionar y crear los ingresos al almacén,
                    es decir el (almacenero o wharehouser), uno o mas usuarios habilitado 
                    unicamente para gestionar y realizar las ventas que se hacen 
                    en la tienda (un vendedor), y un usuario (administrador) del 
                    sistema; que tiene ambas funcionalidades descritas anteriormente
                    ademas de gestionar los usuarios y los roles de usuario.
                   </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-3">
            <div class="card-body">
                <button @click="back" class="btn btn-info btn-sm">Volver atrás</button>
            </div>
        </div>

    </div>
        <div v-if="$route.params.id=='2'">
          <h2 class="m-3">Detalle del servicio</h2>
          <div class="card mt-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                    <img src="../assets/img/pag1.png" alt="">
                </div>
                <div class="col-md-6">
                  <h4>Catálogo de Productos <span hidden>{{$route.params.id}} </span> </h4>
                  <p class="text-left descripcion_prod">
                    Sistema de gestion de catálogo de productos,
                    el usuario administrador tendra acceso al sistema y 
                    podrá subir imágenes de acuerdo a la categoria especificada o seleccionada,
                    adjuntando una breve  descripcion ,precio , detalle del producto. 
                    y otros mas.

                    </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-3 ">
              <div class="card-body">
                  <button @click="back" class="btn btn-info btn-sm">Volver atrás</button>
              </div>
          </div>
      </div>
          <div v-if="$route.params.id=='3'">
            <h2 class="m-3">Detalle del servicio</h2>
            <div class="card mt-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <img src="../assets/img/siteweb.png" alt="">
                  </div>
                  <div class="col-md-6">
                    <h4>Página web <span hidden>{{$route.params.id}} </span></h4>
                    <p class="text-left descripcion_prod">Sitio web amigable
                      acorde a los requerimientos especificados,
                      responsive ,adaptable 
                      en cualquier dispositivo.Podra tener 
                      Información digitalizada accesible
                      para todos los usuarios, tambien podr&aacute; vincular todas
                      tus redes sociales como ser: <b> Facebook, Instagram, WhatsApp,etc.</b> para promover
                      las ventas y hacer conocer tus productos
                      a nivel nacional e internacional.

                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                  <button @click="back" class="btn btn-info btn-sm">Volver atrás</button>
                </div>
            </div>
        </div>
         
        <div v-if="$route.params.id=='4'">
            <h2 class="m-3">Detalle del servicio</h2>
            <div class="card mt-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                   <img src="../assets/img/bu2.png" alt="">
                   <img src="../assets/img/es1.png" alt="">
                  </div>
                  <div class="col-md-6">
                    <h3>Gestión de la Organización <span hidden> {{$route.params.id}}</span></h3>
                    <p class="descripcion_prod">Software a medida.
                      ERP planificaion de recursos Empresariales </p>
                     
                     <h5 class="text-center ">Inteligencia de negocio</h5> 
                      <ul class="text-left descripcion_prod">
                        <li>Gestion empresarial</li>
                        <li>Flujos de trabajo entre departamentos</li>
                        <li>Introducción de datos</li>
                        <li>Eliminacion de errores</li>
                        <li>Acceso e intercambio de informacion</li>
                      </ul>
                      <h5 class="text-center">Gestión Empresarial</h5> 
                      <ul class="text-left descripcion_prod">
                        <li>Compras</li>
                        <li>Ventas</li>
                        <li>Gestión Financiera</li>
                        <li>Recursos Humanos</li>
                        <li>Almacenes</li>
                        <li>Producción</li>
                      </ul>
                      <h5 class="text-center">Gracias al sistema podr&aacute;s :</h5> 
                        <ul class="text-left descripcion_prod">
                          <li>Observar(¿Qu&eacute; esta ocurriendo?).</li>
                          <li>Comprender(¿Porqu&eacute; ocurre?).</li>
                          <li>Predecir(¿Qu&eacute; ocurriría?).</li>
                          <li>Colaborar(¿Qu&eacute; deberia hacer el equipo?).</li>
                          <li>Decidir(¿Qu&eacute; caminos se debe seguir?).</li>
                        </ul>
                 
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                  <button @click="back" class="btn btn-info btn-sm">Volver atrás</button>
                </div>
            </div>
        </div>

  </div>
</template>
<script>
export default {
    name: 'Detalle_servicio',
    methods: {
        back(){
            this.$router.go(-1)
        },
        // home(){
        //     this.$router.push('/')
        // }
    }
};
</script>
<style scoped>
img {
  width: 100%;
}
.descripcion_prod{
    color:#808080;
    font-size: 95%;
}
</style>