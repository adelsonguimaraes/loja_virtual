import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filter from './filters/'
import Vuelidate from 'vuelidate'
import money from 'v-money'
import VModal from 'vue-js-modal'

Vue.use(Vuelidate);
Vue.use(money, {precision: 4});
Vue.use(VModal);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filter,
  render: h => h(App)
}).$mount('#app')
