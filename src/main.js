import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router'; // 追記

Vue.config.productionTip = false;

new Vue({
  router, // 追記
  render: h => h(App)
}).$mount('#app');