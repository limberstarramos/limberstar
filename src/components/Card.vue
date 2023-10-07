<template>
    <div>
        <div class="card item-center" style="width: 18rem;" v-if="codigo=='1'">
            <!-- <img src="https://miro.medium.com/max/2560/1*Ht8T-vqbqy5iG7FzNQGjFA.png" alt=""> -->
            <img src="../assets/img/dashpro.png" alt="">
            <div class="card-body">
                <h5>Sistema de Inventario <span hidden>{{codigo}}</span>  </h5>
                <p class="card-text">
                    Sistema para administracion y gestión de ventas ,
                  control de stock de productos.</p>
            </div>
            <router-link 
                :to="{name: 'Detalle_servicio', params: {id: codigo}}" 
                class="btn btn-outline-info ">Ver más  <span hidden>{{codigo}}</span>
            </router-link>
        </div>

        <div class="card item-center" style="width: 18rem;" v-if="codigo=='2'">
            <img src="../assets/img/pag1.png" alt="">
            <div class="card-body">
                <h5>Catálogo de Productos <span hidden>{{codigo}} </span>  </h5>
                <p class="card-text">
                    Sistema para gestionar   productos por categoria o 
                    tambien subcategorias , podrás administrar sus detalles correspondientes.</p>
            </div>
            <router-link 
                :to="{name: 'Detalle_servicio', params: {id: codigo}}" 
                class="btn btn-outline-info ">Ver más  <span hidden>{{codigo}}</span>
            </router-link>
        </div>
        <div class="card item-center" style="width: 18rem;" v-if="codigo=='3'">
            <img src="../assets/img/siteweb.png" alt="">
            <div class="card-body">
                <h5>P&aacute;gina Web <span hidden>{{codigo}} </span>  </h5>
                <p class="card-text">
                    P&aacute;gina web personalizado, adaptable 
                    a cualquier dispositivo,hazte conocer en el mundo.</p>
            </div>
            <router-link 
                :to="{name: 'Detalle_servicio', params: {id: codigo}}" 
                class="btn btn-outline-info ">Ver más  <span hidden>{{codigo}}</span>
            </router-link>
        </div>
        <div class="card item-center" style="width: 18rem;" v-if="codigo=='4'">
            <img src="../assets/img/flujo1.png" alt="">
            <div class="card-body">
                <h5>Gestión de la Organización<span hidden>{{codigo}} </span>  </h5>
                <p class="card-text">
                   ERP, Planificacion de Recursos Empresariales,negocios y servicios
                    </p>
            </div>
            <router-link 
                :to="{name: 'Detalle_servicio', params: {id: codigo}}" 
                class="btn btn-outline-info ">Ver más  <span hidden>{{codigo}}</span>
            </router-link>
        </div>

    </div>


</template>
<script>
export default {
    name: 'card',
    props: ['codigo'],
    computed: {
        imagen: function(){
            return 'https://source.unsplash.com/collection/' + this.codigo
        }
    }
}
</script>

<style scoped>
    img {
        height: 150px;
    }
    .card-text{
        color:#808080;
        font-size: 95%;
    }
</style>