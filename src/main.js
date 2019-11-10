import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router'; // 追記
import './plugins/vuetify';
import vuetify from './plugins/vuetify';
import VeeValidate, { Validator } from 'vee-validate'; // 追加
import ja from 'vee-validate/dist/locale/ja'; // 追加

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Validator.localize('ja', ja);

new Vue({
 router,
 vuetify,
  render: h => h(App)
}).$mount('#app');