import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import VueRouter from 'vue-router';
import Routes from './routes.js';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history',
//   default mode is "hash"
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
