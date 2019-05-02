import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(axios)
Vue.use(VueRouter)

// Vue.config.productionTip = false;
// let app = '';
// var config = {
//   apiKey: "AIzaSyCpmscQWBfFpCDrMEAhGkIQamVbukiYdMg",
//   authDomain: "vuepj-2c432.firebaseapp.com",
//   databaseURL: "https://vuepj-2c432.firebaseio.com",
//   projectId: "vuepj-2c432",
//   storageBucket: "vuepj-2c432.appspot.com",
//   messagingSenderId: "882464200923"
// };
// firebase.initializeApp(config);

// firebase.auth().onAuthStateChanged(()=>{
//   if(!app){
    
//   }
// })
const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
