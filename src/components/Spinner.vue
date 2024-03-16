<template>
   
      <div id="contenedor_carga">
        <div id="carga">

        </div>

      </div>
  
</template>
<script>

export default {
    name:'spinner',
    data:function(){
      return{

      }
    },
    mounted:function(){
        this.$nextTick(function () {
          window.onload = function(){
            let contenedor =document.getElementById('contenedor_carga');
            contenedor.style.visibility ='hidden';
            contenedor.style.opacity= '0';
          }

        })
       
       
    },
}
</script>
<style scoped>
#contenedor_carga{
  background-color: rgba(240, 245, 250, 1);
  height: 100%;
  width: 100%;
  position: fixed;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  z-index:10000;
}
#carga{
  border: 15px solid #5aa5c7;
  border-top-color: #056aa8;

  border-top-style: groove;
  height: 80px;
  width: 80px;
  border-radius:100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  -webkit-animation: girar 1.5s linear infinite;
  -o-animation: girar 1.5s linear infinite;
  animation: girar 1.5s linear infinite;
}
@keyframes girar{
  from { transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}


</style>