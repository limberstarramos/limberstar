(function(t){function a(a){for(var s,i,c=a[0],l=a[1],r=a[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(a);while(p.length)p.shift()();return n.push.apply(n,r||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(s=!1)}s&&(n.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},i={app:0},o={app:0},n=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-002bf9cd":"f8d52845"}[t]+".js"}function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e={"chunk-002bf9cd":1};i[t]?a.push(i[t]):0!==i[t]&&e[t]&&a.push(i[t]=new Promise((function(a,e){for(var s="css/"+({}[t]||t)+"."+{"chunk-002bf9cd":"31c0cf62"}[t]+".css",o=l.p+s,n=document.getElementsByTagName("link"),c=0;c<n.length;c++){var r=n[c],d=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(d===s||d===o))return a()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){r=p[c],d=r.getAttribute("data-href");if(d===s||d===o)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var s=a&&a.target&&a.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete i[t],m.parentNode.removeChild(m),e(n)},m.href=o;var u=document.getElementsByTagName("head")[0];u.appendChild(m)})).then((function(){i[t]=0})));var s=o[t];if(0!==s)if(s)a.push(s[2]);else{var n=new Promise((function(a,e){s=o[t]=[a,e]}));a.push(s[2]=n);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(t);var p=new Error;r=function(a){d.onerror=d.onload=null,clearTimeout(m);var e=o[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;p.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",p.name="ChunkLoadError",p.type=s,p.request=i,e[1](p)}o[t]=void 0}};var m=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(a)},l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/limberstar/",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=a,r=r.slice();for(var p=0;p<r.length;p++)a(r[p]);var m=d;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1dd8":function(t,a,e){"use strict";e("f9e2")},"2d16":function(t,a,e){t.exports=e.p+"img/devmen.477a9e80.png"},"3e41":function(t,a){!function(t){t.fn.floatingWhatsApp=function(a){var e,s,i=t.extend({phone:"",message:"",size:"72px",backgroundColor:"#25D366",position:"left",popupMessage:"",showPopup:!1,showOnIE:!0,autoOpenTimeout:0,headerColor:"#128C7E",headerTitle:"WhatsApp Chat",zIndex:0,buttonImage:'<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800" width="800" height="800"><defs><clipPath id="_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><rect width="800" height="800"/></clipPath></defs><g clip-path="url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ)"><g><path d=" M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z " fill="rgb(37,211,102)"/></g><g><path d=" M 508.558 450.429 C 502.67 447.483 473.723 433.24 468.325 431.273 C 462.929 429.308 459.003 428.328 455.078 434.22 C 451.153 440.114 439.869 453.377 436.434 457.307 C 433 461.236 429.565 461.729 423.677 458.78 C 417.79 455.834 398.818 449.617 376.328 429.556 C 358.825 413.943 347.008 394.663 343.574 388.768 C 340.139 382.873 343.207 379.687 346.155 376.752 C 348.804 374.113 352.044 369.874 354.987 366.436 C 357.931 362.999 358.912 360.541 360.875 356.614 C 362.837 352.683 361.857 349.246 360.383 346.299 C 358.912 343.352 347.136 314.369 342.231 302.579 C 337.451 291.099 332.597 292.654 328.983 292.472 C 325.552 292.301 321.622 292.265 317.698 292.265 C 313.773 292.265 307.394 293.739 301.996 299.632 C 296.6 305.527 281.389 319.772 281.389 348.752 C 281.389 377.735 302.487 405.731 305.431 409.661 C 308.376 413.592 346.949 473.062 406.015 498.566 C 420.062 504.634 431.03 508.256 439.581 510.969 C 453.685 515.451 466.521 514.818 476.666 513.302 C 487.978 511.613 511.502 499.06 516.409 485.307 C 521.315 471.55 521.315 459.762 519.842 457.307 C 518.371 454.851 514.446 453.377 508.558 450.429 Z  M 401.126 597.117 L 401.047 597.117 C 365.902 597.104 331.431 587.661 301.36 569.817 L 294.208 565.572 L 220.08 585.017 L 239.866 512.743 L 235.21 505.332 C 215.604 474.149 205.248 438.108 205.264 401.1 C 205.307 293.113 293.17 205.257 401.204 205.257 C 453.518 205.275 502.693 225.674 539.673 262.696 C 576.651 299.716 597.004 348.925 596.983 401.258 C 596.939 509.254 509.078 597.117 401.126 597.117 Z  M 567.816 234.565 C 523.327 190.024 464.161 165.484 401.124 165.458 C 271.24 165.458 165.529 271.161 165.477 401.085 C 165.46 442.617 176.311 483.154 196.932 518.892 L 163.502 641 L 288.421 608.232 C 322.839 627.005 361.591 636.901 401.03 636.913 L 401.126 636.913 L 401.127 636.913 C 530.998 636.913 636.717 531.2 636.77 401.274 C 636.794 338.309 612.306 279.105 567.816 234.565" fill-rule="evenodd" fill="rgb(255,255,255)"/></g></g></svg>'},a),o=(e=!1,s=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(s)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.substr(0,4)))&&(e=!0),e);this.addClass("floating-wpp");var n,c=t(document.createElement("div")),l=t(document.createElement("div")),r=t(document.createElement("div")),d=t(document.createElement("div")),p=t(document.createElement("div")),m=t(document.createElement("div")),u=t(document.createElement("div"));if(l.addClass("floating-wpp-button-image"),c.addClass("floating-wpp-button").append(t(i.buttonImage)).css({width:i.size,height:i.size,"background-color":i.backgroundColor}),(!(0<=(n=window.navigator.userAgent).indexOf("MSIE")||n.match(/Trident.*rv\:11\./))||i.showOnIE)&&c.append(l).appendTo(this),c.on("click",(function(){o&&i.showPopup?b():h()})),i.showPopup){var v=t(document.createElement("textarea")),g=t(document.createElement("strong")),f=t('<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 18" width="20" height="18"><defs><clipPath id="_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G"><rect width="20" height="18"/></clipPath></defs><g clip-path="url(#_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G)"><path d=" M 0 0 L 0 7.813 L 16 9 L 0 10.188 L 0 18 L 20 9 L 0 0 Z " fill="rgb(46,46,46)"/></g></svg>');function b(){r.hasClass("active")||(r.addClass("active"),v.focus())}r.addClass("floating-wpp-popup"),d.addClass("floating-wpp-head"),p.addClass("floating-wpp-message"),u.addClass("floating-wpp-input-message"),m.addClass("floating-wpp-btn-send"),p.text(i.popupMessage),v.val(i.message),i.popupMessage||p.hide(),d.append("<span>"+i.headerTitle+"</span>",g).css("background-color",i.headerColor),m.append(f),u.append(v,m),g.addClass("close").html("&times;"),r.append(d,p,u).appendTo(this),p.click((function(){})),g.click((function(){})),d.click((function(){r.removeClass("active")})),v.keypress((function(a){i.message=t(this).val(),13!=a.keyCode||a.shiftKey||o||(a.preventDefault(),m.click())})),m.click((function(){i.message=v.val(),h()})),this.mouseenter((function(){b()})),0<i.autoOpenTimeout&&setTimeout((function(){b()}),i.autoOpenTimeout)}function h(){var t="http://";t+=o?"api":"web",t+=".whatsapp.com/send?phone="+i.phone+"&text="+encodeURI(i.message),window.open(t)}i.zIndex&&t(this).css("z-index",i.zIndex),"right"===i.position&&(this.css({left:"auto",right:"15px"}),r.css("right","0"))}}(jQuery)},"56d7":function(t,a,e){"use strict";e.r(a);e("c5ec");var s=e("2b0e"),i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("spinner"),a("div",{staticClass:"navbar navbar-expand-lg",attrs:{id:"menu"}},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"font-weight-bold volver logo_page",attrs:{to:"/"},nativeOn:{click:function(a){return t.subir.apply(null,arguments)}}},[t._v("Limberstar")]),a("button",{staticClass:"navbar-toggler icon",attrs:{"data-toggle":"collapse","aria-expanded":"false","data-target":"#mylista"},on:{click:t.menuopen}},[t.menutoggle?a("span",[a("i",{staticClass:"bx bx-menu ico"})]):a("span",[a("i",{staticClass:"bx bx-x ico"})])]),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"mylista"}},[a("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"navbar-nav",attrs:{id:"nav"}},[a("router-link",{staticClass:"nav-link volver",attrs:{to:"/"},nativeOn:{click:function(a){return t.subir.apply(null,arguments)}}},[t._v("Inicio")]),a("router-link",{staticClass:"nav-link volver",attrs:{to:"/sobre"},nativeOn:{click:function(a){return t.subir.apply(null,arguments)}}},[t._v("Sobre")]),a("router-link",{staticClass:"nav-link volver",attrs:{to:"/contacto"},nativeOn:{click:function(a){return t.subir.apply(null,arguments)}}},[t._v("Contacto")])],1)])],1)]),a("router-view"),a("seccion-footer")],1)},o=[],n=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"contenedor_carga"}},[a("div",{attrs:{id:"carga"}})])}],l={name:"spinner",data:function(){return{}},mounted:function(){this.$nextTick((function(){window.onload=function(){let t=document.getElementById("contenedor_carga");t.style.visibility="hidden",t.style.opacity="0"}}))}},r=l,d=(e("ad57"),e("2877")),p=Object(d["a"])(r,n,c,!1,null,"21a4ab6f",null),m=p.exports,u=function(){var t=this,a=t._self._c;return a("div",{staticClass:"foot"},[a("div",{staticClass:"footer"},[a("div",{staticClass:"row d-flex justify-content-around"},[a("div",{staticClass:"col-sm-12 col-md-12 p-2 bg-info1 text-center"},[a("div",{staticClass:"sobreL"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.host+"/images/lim1.png",expression:"host+'/images/lim1.png'"}],attrs:{width:"50px",height:"50px"}}),a("h3",{staticClass:"text-center SL"},[t._v("Sobre mi")])]),a("hr",{staticClass:"linefooter text-left"}),t._m(0),a("small",[t._v("Santa Cruz - Bolivia")])])])]),t._m(1)])},v=[function(){var t=this,a=t._self._c;return a("p",[t._v("Limber Ramos "),a("br"),t._v("Desarrollador web")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"footer-copyright text-center py-3"},[a("div",{staticClass:"container-fluid"},[a("p",[t._v("© 2020-2023 Copyright: Limberstar ")])])])}],g={name:"seccion-footer",props:{msg:String},data:function(){return{host:"https://limberstarramos.github.io/limberstar"}}},f=g,b=(e("9a7b"),Object(d["a"])(f,u,v,!1,null,"0bab074c",null)),h=b.exports,C={name:"SeccionDesarrollo",components:{Spinner:m,SeccionFooter:h},data:function(){return{menutoggle:!0}},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{menuopen(){1==this.menutoggle?this.menutoggle=!1:this.menutoggle=!0},handleScroll(t){window.scrollY},subir(){$("body,html").animate({scrollTop:0},500,"swing")}}},w=C,x=(e("f779"),Object(d["a"])(w,i,o,!1,null,null,null)),_=x.exports,y=e("8c4f"),k=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("home-principal"),a("seccion-desarrollo")],1)},S=[],L=function(){var t=this,a=t._self._c;return a("div",{staticClass:"HomePrincipal"},[a("div",{staticClass:"container-fluid contenedor text-center"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"vuetyped"},[a("vue-typed-js",{attrs:{strings:["LARAVEL","VUE.JS","MYSQL","REACT","TAILWINDCSS"],loop:!0,typeSpeed:100,backSpeed:50}},[a("h4",{staticClass:"pro subtitulo text-uppercase text-xl-start"},[t._v("Programación con : "),a("span",{staticClass:"typing text-info"})])])],1)])])])])},z=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 textTitle"},[a("div",{staticClass:"textTitle1"},[a("h1",{staticClass:"titulo text-uppercase text-lg-start fw-bold"},[t._v("HOLA, MI NOMBRE ES LIMBER ")]),a("h4",{staticClass:"subtitulo text-uppercase text-md-start"},[t._v("SOY DESARROLLADOR WEB")])])]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-6"},[a("img",{staticClass:"imgHomeP",attrs:{src:e("2d16"),alt:""}})])])}],j={name:"home-principal",props:{msg:String}},I=j,P=(e("abe3"),Object(d["a"])(I,L,z,!1,null,"973f793e",null)),E=P.exports,O=function(){var t=this,a=t._self._c;return a("div",{staticClass:"SeccionDesarrollo"},[a("div",{staticClass:"container my-4"},[a("h3",{staticClass:"text-center subtitle wow fadeInUp"},[t._v("Desarrollo - Experiencia en Sistemas Web")]),a("hr",{staticClass:"linea"}),a("p",{staticClass:"text-center my-4 descripcion"},[t._v("Desde que comencé mi trayectoria como desarrollador he creado y participado en diferentes proyectos, trabajo constantemente para mejorar mis habilidades en:")]),t._m(0),a("div",{attrs:{"data-aos":"zoom-in-left",id:"WAButton"}}),a("h3",{staticClass:"text-center subtitle wow fadeInUp"},[t._v("Destacado")]),a("hr",{staticClass:"linea"}),a("p",{staticClass:"descripcion"},[t._v(" Proyectos en los cuales he aventurado.")]),a("div",{staticClass:"row row-cols-1 row-cols-md-3 g-4"},[a("div",{staticClass:"col-sm-12 col-md-6 col-lg-4 imgnegocio wow fadeInUp"},[a("div",{staticClass:"card shadow-lg p-3 mb-5 bg-body rounded"},[a("div",{staticClass:"d-flex w-100 justify-content-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.host+"/images/home_sisdos.jpg",expression:"host+'/images/home_sisdos.jpg'"}],staticClass:"card-img-top imgcard",attrs:{alt:"..."}})]),t._m(1)])]),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-4 imgnegocio wow fadeInUp"},[a("div",{staticClass:"card shadow-lg p-3 mb-5 bg-body rounded"},[a("div",{staticClass:"d-flex w-100 justify-content-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.host+"/images/guabira.png",expression:"host+'/images/guabira.png'"}],staticClass:"card-img-top imgcard",attrs:{alt:"..."}})]),t._m(2)])]),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-4 imgnegocio wow fadeInUp"},[a("div",{staticClass:"card shadow-lg p-3 mb-5 bg-body rounded"},[a("div",{staticClass:"d-flex w-100 justify-content-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.host+"/images/dashpro.png",expression:"host+'/images/dashpro.png'"}],staticClass:"card-img-top imgcard",attrs:{alt:"..."}})]),t._m(3)])])]),a("h3",{staticClass:"text-center subtitle wow fadeInUp"},[t._v("Habilidades ")]),a("hr",{staticClass:"linea"}),t._m(4),a("hr",{staticClass:"lineoscuro"}),a("div",{staticClass:"box wow fadeInUp"},[a("vue-typed-js",{attrs:{strings:["Desarrollo Web "],typeSpeed:100,showCursor:!1}},[a("h3",{staticClass:"text-center"},[a("span",{staticClass:"typing text-light texbox"})])]),a("vue-typed-js",{attrs:{strings:["Sistema con rápido procesasamiento de datos","Aplicaciones web responsive ","SPA, en los sistemas web diseñados"],loop:!0,typeSpeed:50,backSpeed:10}},[a("h4",{staticClass:"text-center"},[a("span",{staticClass:"typing text-info texbox1"})])]),t._m(5)],1),a("div",{staticClass:"row g-0 position-relative imgtrabajo"},[a("div",{staticClass:"col-md-6 mb-md-0 p-md-4 organizacionimg wow fadeInUp"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.host+"/images/bg_ctf.jpeg",expression:"host+'/images/bg_ctf.jpeg'",arg:"background-image"}],staticClass:"content_img_ctf"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.host+"/images/ctf_01.png",expression:"host+'/images/ctf_01.png'"}],staticClass:"img_ctf",attrs:{alt:"..."}})])]),t._m(6)])]),a("div",{staticClass:"container-fluid comenzar"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6 imgcomenzar"},[a("div",{staticClass:"wow fadeInUp",attrs:{id:"code"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.host+"/images/cel0101.png",expression:"host+'/images/cel0101.png'"}],staticClass:"card-img-top",attrs:{id:"imgcel"}}),a("hr",{staticClass:"linecel rounded"})])]),a("div",{staticClass:"col-12 col-sm-12 col-md-6 imgcomenzar",staticStyle:{color:"white"}},[a("div",{staticClass:"sombra wow fadeInUp"},[a("h3",{staticClass:"text_sombra"},[t._v(" Sistema responsivo ")]),a("p",[t._v(" Siempre me gustó que un sitio sea completamente adaptable en cualquier dispositvo. ")]),a("router-link",{staticClass:"btn btn-outline-light btncomenzar",attrs:{to:"/sobre"},nativeOn:{click:function(a){return t.subir.apply(null,arguments)}}},[t._v("Sobre mí")])],1)])])])])},U=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-sm-12 col-md-4"},[a("div",{staticClass:"categoria__icon wow fadeInUp"},[a("i",{staticClass:"bx bx-desktop",attrs:{id:"ico_categ"}})]),a("div",{staticClass:"categori_descrip text-gray-500 text-md wow fadeInUp"},[a("h5",{staticClass:"categoria__subtitle font-bold text-gray-800 mt-4"},[t._v("Desarrollo Web")]),a("p",{staticClass:"descripcion"},[t._v("He realizado soluciones web ,en sistemas escalables como ser:Academia Test,Mapas,Planillas, Proforma, Contabilidad y entre otros")])])]),a("div",{staticClass:"col-sm-12 col-md-4"},[a("div",{staticClass:"categoria__icon wow fadeInUp"},[a("i",{staticClass:"bx bxs-palette",attrs:{id:"ico_categ"}})]),a("div",{staticClass:"categori_descrip text-gray-500 text-md wow fadeInUp"},[a("h5",{staticClass:"categoria__subtitle font-bold text-gray-800 mt-4"},[t._v(" Front-End")]),a("p",{staticClass:"descripcion"},[t._v("Me gusta codificar desde cero o tambien en base de plantillas, estructurar y siseñar UX/UI , darle vida a las ideas en la web, siendo creativo y dinámico . ")])])]),a("div",{staticClass:"col-sm-12 col-md-4"},[a("div",{staticClass:"categoria__icon wow fadeInUp"},[a("i",{staticClass:"bx bxs-data",attrs:{id:"ico_categ"}})]),a("div",{staticClass:"categori_descrip text-gray-500 text-md wow fadeInUp"},[a("h5",{staticClass:"categoria__subtitle font-bold text-gray-800 mt-4"},[t._v(" Back-End")]),a("p",{staticClass:"descripcion"},[t._v("Llevar todo el proceso de la lógica interna es tambien uno de mis favoritos, siempre velando la seguridad de los datos y estructurando para que sea un sistema escalable ")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-footer text-left"},[a("p",{staticClass:"text-lef fw-bold sist"},[t._v("Proceso: rápido - adaptable")]),a("p",{staticClass:"text-sm-start font-bold sist"},[a("b",[t._v("Control de inventario")])]),a("p",{staticClass:"sist"},[t._v("Sistema de inventario")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-footer text-left"},[a("p",{staticClass:"text-lef fw-bold sist"},[t._v("Proceso: rápido - adaptable")]),a("p",{staticClass:"sist"},[a("b",[t._v("Gestión de actividades y productos")])]),a("p",{staticClass:"sist"},[t._v("Gestión de catálogo de producto")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-footer text-left"},[a("p",{staticClass:"text-lef fw-bold sist"},[t._v("Proceso: rápido - adaptable")]),a("p",{staticClass:"fw-bold sist"},[a("b",[t._v("Órdenes de trabajo")])]),a("p",{staticClass:"sist"},[t._v("Control de órdenes de trabajo")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row align-items-center text-left"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp"},[a("i",{staticClass:"bx bxl-php ico_soft"})]),a("div",{staticClass:"col-9 col-sm-8 col-md-9 marginsoftv wow fadeInUp"},[a("h5",{staticClass:"servicio_subtitle"},[t._v("Laravel")]),a("p",{staticClass:"descripcion"},[t._v(" Laravel es un marco de trabajo para aplicaciones que proporciona también una estructura organizativa y un punto de partida para crear una aplicación. Se caracteriza por manejo de Eloquent ORM,Sistema de rutas,Basado en arquitectura MVC y mucho más. ")])]),a("div",{staticClass:"col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp"},[a("i",{staticClass:"bx bxl-vuejs ico_soft"})]),a("div",{staticClass:"col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp"},[a("h5",{staticClass:"servicio_subtitle"},[t._v("Vuejs")]),a("p",{staticClass:"descripcion"},[t._v(" Vue es un marco de JavaScript para construir interfaces de usuario. Se basa en HTML, CSS y JavaScript, y proporciona un modelo de programación basado en componentes. Nos permite crear aplicaciones web SPA de una sola página. Se caracteriza por ser un Paradigma reactivo,Tamaño de descarga muy pequeño,Framework progresivo. ")])]),a("div",{staticClass:"col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp"},[a("i",{staticClass:"bx bxl-react ico_soft"})]),a("div",{staticClass:"col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp"},[a("h5",{staticClass:"servicio_subtitle"},[t._v("React")]),a("p",{staticClass:"descripcion"},[t._v(" React, una biblioteca javascript, diseñado para facilitar la creación de interfaces de usuario de una manera ágil y versátil.Nos permite crear aplicaciones web SPA de una sola página e incluso aplicaciones para móviles. Se caracteriza por la composicion de componentes, desarrollo declarativo. ")])])])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp"},[a("i",{staticClass:"bx bxl-tailwind-css ico_soft"})]),a("div",{staticClass:"col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp"},[a("h5",{staticClass:"servicio_subtitle"},[t._v("Tailwindcss")]),a("p",{staticClass:"descripcion"},[t._v(" Tailwind CSS es un framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS. ")])]),a("div",{staticClass:"col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp"},[a("i",{staticClass:"bx bxs-data ico_soft"})]),a("div",{staticClass:"col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp"},[a("h5",{staticClass:"servicio_subtitle"},[t._v("MySQL")]),a("p",{staticClass:"descripcion"},[t._v(" MySQL es un sistema de administración de bases de datos relacionales. Es un software de código abierto desarrollado por Oracle. Se considera como la base de datos de código abierto más utilizada en el mundo. Se caracteriza por que es Multiplataforma,Escalabilidad 40-50 millones de registros. ")])]),a("div",{staticClass:"col-3 col-sm-4 col-md-3 marginsoft text-center wow fadeInUp"},[a("i",{staticClass:"bx bxs-data ico_soft"})]),a("div",{staticClass:"col-9 col-sm-8 col-md-9 marginsoft wow fadeInUp"},[a("h5",{staticClass:"servicio_subtitle"},[t._v("SQL server")]),a("p",{staticClass:"descripcion"},[t._v(" Microsoft SQL Server es uno de los principales sistemas de gestión de bases de datos relacional del mercado que presta servicio a un amplio abanico de aplicaciones de software destinadas a la inteligencia empresarial y análisis sobre entornos corporativos. ")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"iconAPL"},[a("i",{staticClass:"bx bx-line-chart-down ico_flot"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-md-6 p-4 ps-md-0 organizaciontext"},[a("div",{staticClass:"textorg"},[a("h5",{staticClass:"mt-4"},[t._v("Ciberseguridad")]),a("p",{staticClass:"descripcion"},[t._v(" Como no mencionarles sobre los sistemas operativo Linux, es uno de los mejores para la seguridad informatica. he incursionado con diferentes herramientas para protegerse de posibles ataques. "),a("br"),a("b",[t._v(" ¿Deseas comunicarte conmigo ? envíame un mensaje al correo o WhatsApp y le responderé a la brevedad posible.")])]),a("div",{staticClass:"wow fadeInUp"},[a("a",{staticClass:"cardlogoemail",attrs:{href:"mailto:limberstar01@gmail.com"}},[a("i",{staticClass:"bx bx-mail-send icon_page"})])])])])}],T={name:"seccion-desarrollo",data:function(){return{iconwhatsapp:!1,src:"../assets/img/whatsapp.svg",host:"https://limberstarramos.github.io/limberstar"}},mounted:function(){this.$nextTick((function(){(new WOW).init(),$((function(){$("#WAButton").floatingWhatsApp({phone:"59163454066",headerTitle:"WhatsApp Chat",popupMessage:"Hola, en que te puedo ayudar?",showPopup:!0,buttonImage:this.src,autoOpen:!1,position:"right",zIndex:100,size:55})}))}))},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(t){let a=window.scrollY;console.log(a),a>600?(console.log("yupii mi watsapp"),this.iconwhatsapp=!0):(this.iconwhatsapp=!1,console.log("espera.."))},subir(){$("body,html").animate({scrollTop:0},500,"swing")}}},A=T,M=(e("1dd8"),Object(d["a"])(A,O,U,!1,null,"19344e0e",null)),q=M.exports,B={name:"Home",components:{HomePrincipal:E,SeccionDesarrollo:q}},N=B,D=Object(d["a"])(N,k,S,!1,null,null,null),G=D.exports,R=function(){var t=this;t._self._c;return t._m(0)},W=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"contacto"},[a("div",{staticClass:"container-fluid titulo"},[a("h3",{staticClass:"m-3 titl"},[t._v("Contacto")]),a("h5",{staticClass:"subtl"},[t._v("Puedes contactarme en algunos de estos canales")])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 my-4"},[a("div",{staticClass:"card mb-3 shadow-lg p-3 mb-5 bg-white rounded",staticStyle:{"max-width":"540px"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("i",{staticClass:"bx bxl-linkedin ico_flotlin"})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Linkedin")]),a("p",{staticClass:"card-text"},[t._v(" Para más información.")]),a("a",{staticClass:"btn btn-primary cardlogo",attrs:{href:"https://www.linkedin.com/in/limber-ramos-p-39a1ba197",target:"_blank"}},[a("i",{staticClass:"bx bxl-linkedin"}),t._v(" Linkedin")]),a("p",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("Última actualización mayo 2023")])])])])])])]),a("div",{staticClass:"col-md-6 my-4"},[a("div",{staticClass:"card mb-3 shadow-lg p-3 mb-5 bg-white rounded",staticStyle:{"max-width":"540px"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("i",{staticClass:"bx bxl-twitter ico_flot"})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Twitter")]),a("p",{staticClass:"card-text"},[t._v("Novedades frecuentemente.")]),a("a",{staticClass:"btn btn-info cardlogo",attrs:{href:"https://twitter.com/LimberstarR?=09",target:"_blank"}},[a("i",{staticClass:"bx bxl-twitter"}),t._v(" Twitter")]),a("p",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("Última actualización mayo 2023")])])])])])])]),a("div",{staticClass:"col-md-12 correoe"},[a("div",{staticClass:"card mb-3 shadow-lg p-3 mb-5 bg-white rounded",staticStyle:{width:"540px"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("i",{staticClass:"bx bx-mail-send ico_flotmail"})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Correo electrónico")]),a("p",{staticClass:"card-text"},[t._v(" Consultas .")]),a("a",{staticClass:"btn btn-dark cardlogo",attrs:{href:"mailto:limberstar01@gmail.com",target:"_blank"}},[a("i",{staticClass:"bx bx-mail-send"}),t._v(" Email")]),a("p",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("Última actualización mayo 2023 ")])])])])])])])])]),a("div",{staticClass:"container-fluid titulo"},[a("div",{staticClass:"subtl"},[a("p",[t._v("¡Sígueme en mis redes sociales!")]),a("div",{staticClass:"float-center d-flex justify-content-center gap-4 iconred"},[a("a",{attrs:{href:"https://twitter.com/LimberstarR?=09",target:"_blank"}},[a("i",{staticClass:"bx bxl-twitter"})]),a("a",{staticClass:"float-right",attrs:{href:"https://www.linkedin.com/in/limber-ramos-p-39a1ba197",target:"_blank"}},[a("i",{staticClass:"bx bxl-linkedin"})])])])])])}],H={name:"Contacto",data:function(){return{}}},Q=H,F=(e("d85f"),Object(d["a"])(Q,R,W,!1,null,"60243ee8",null)),Y=F.exports;s["a"].use(y["a"]);const J=[{path:"/",name:"Home",component:G},{path:"/sobre",name:"Sobre",component:()=>e.e("chunk-002bf9cd").then(e.bind(null,"d09e"))},{path:"/contacto",name:"Contacto",component:Y}],V=new y["a"]({mode:"history",base:"/limberstar/",routes:J});var Z=V,X=e("2f62"),K=e("8cb8");s["a"].use(K["default"]),s["a"].use(X["a"]);var tt=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),at=(e("ab8b"),e("a1ce"),e("abb8"),e("3e48"),e("3e41"),e("caf9"));const et=e("f8b2");s["a"].use(at["a"],{preLoad:1.3,loading:et,attempt:1}),s["a"].config.productionTip=!1,s["a"].directive("scroll",{inserted:function(t,a){let e=function(s){a.value(s,t)&&window.removeEventListener("scroll",e)};window.addEventListener("scroll",e)}}),new s["a"]({router:Z,store:tt,render:t=>t(_)}).$mount("#app")},"612f":function(t,a,e){},"8ed0":function(t,a,e){},"9a7b":function(t,a,e){"use strict";e("612f")},a1ce:function(t,a,e){},abe3:function(t,a,e){"use strict";e("b725")},ad57:function(t,a,e){"use strict";e("e9fd")},b725:function(t,a,e){},d85f:function(t,a,e){"use strict";e("fab5")},e9fd:function(t,a,e){},f779:function(t,a,e){"use strict";e("8ed0")},f8b2:function(t,a,e){t.exports=e.p+"img/loading.e7143eea.gif"},f9e2:function(t,a,e){},fab5:function(t,a,e){}});
//# sourceMappingURL=app.67c834ad.js.map