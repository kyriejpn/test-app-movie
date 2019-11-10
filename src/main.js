import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
//import VeeValidate, { Validator } from 'vee-validate';
import router from './router'; // 追記
import './plugins/vuetify';
import vuetify from './plugins/vuetify';
import { extend /*, ValidationProvider, ValidationObserver */} from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

// バリデーションルール
extend('required', required);
extend('email', email);


Vue.config.productionTip = false;

new Vue({
 router,
 vuetify,
  render: h => h(App)
}).$mount('#app');