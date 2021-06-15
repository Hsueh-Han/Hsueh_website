import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/all.scss';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './validate';

import router from './router';
import App from './App.vue';

Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
