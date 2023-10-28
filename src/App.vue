<template>
  <div id="app">
    <spinner></spinner>
     <div class="navbar navbar-expand-lg" id="menu">
      <div class="container">
        <!-- <h3 class="font-weight-bold  mt-1" href="#">Limberstar</h3> -->
        <router-link to="/"  @click.native="subir"  class=" font-weight-bold  volver logo_page ">Limberstar</router-link>

        <button @click="menuopen" class="navbar-toggler icon" data-toggle="collapse"  aria-expanded="false" data-target="#mylista">
          <span v-if="menutoggle">
            <i class='bx bx-menu ico'></i>
          </span>
          <span v-else>
            <i class='bx bx-x ico'></i>
          </span>
        
         
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="mylista">
          <div id="nav" class="navbar-nav" v-scroll="handleScroll">
            <router-link to="/"  @click.native="subir"  class="nav-link volver">Inicio</router-link>
            <router-link to="/sobre"   @click.native="subir" class="nav-link volver">Sobre</router-link>
            <router-link to="/contacto" @click.native="subir"  class="nav-link volver">Contacto</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <seccion-footer></seccion-footer>
  </div>
</template>

<script >
import Spinner from '@/components/Spinner.vue'
import SeccionFooter from '@/components/SeccionFooter.vue'
export default {
  name:"SeccionDesarrollo",
 
 components:{
    Spinner,
    SeccionFooter
 },
   data:function(){
    return {
        menutoggle:true
    }
  },
 
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
 methods:{
   menuopen(){
      if(this.menutoggle==true)
      {
        this.menutoggle=false;
      }else
      {
        this.menutoggle=true;
      }
   },
    handleScroll(event){           
        let y= window.scrollY;
        },
    subir(){
      $('body,html').animate({scrollTop:0},500, 'swing',);
    }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 
#menu {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  
  /* position: sticky; */
  /* top: 0; */
  font-size: 18px;
  z-index: 2;
  background-color:#2C3E50;
 color: white;
 /* padding-bottom: 0px; */

  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;

  padding-bottom: 10px;
  padding-top: 10px;


} 
#nav a.router-link-exact-active{
  color:#fff ;
  color:silver;
}
.nav-link{
  color: skyblue;
  color:silver;
  color:#fff ;
}
.nav-link:hover{
  color:#fff;
  color:silver;
}
.icon{
  color: whitesmoke;
  padding: 1px;
  justify-content: right;
  align-items: right;
}
.icon:focus {
  outline: none;
  box-shadow: none;
}
.ico{
  font-size: 35px;
}
.logo_page{
  text-decoration: none;
  list-style: none;
  color:white;
  font-size: 1.7rem;
}
.logo_page:hover{
  text-decoration: none;
  list-style: none;
  color:white;
  
}

</style>
