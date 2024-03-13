
import "jquery/dist/jquery.min.js"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/floating-wpp.min.css"
import "boxicons/css/boxicons.css"


import "popper.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "./assets/js/floating-wpp.min.js"
import VueLazyload from 'vue-lazyload'
const loadimage = require('./assets/img/loading.gif')
// import  "wow.js"
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: errorimage,
  loading: loadimage,
  attempt: 1,
  // lazyComponent: true
})

Vue.config.productionTip = false
// import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
});
// let wow = new WOW(
//   {
//   boxClass:     'wow',      // default
//   animateClass: 'animated', // default
//   offset:       0,          // default
//   mobile:       true,       // default
//   live:         true        // default
// }
// )
// wow.init();

// end scroller
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

