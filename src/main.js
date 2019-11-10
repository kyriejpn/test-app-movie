import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router'; // 追記
import './plugins/vuetify';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
 router,
 vuetify,
  render: h => h(App)
}).$mount('#app');