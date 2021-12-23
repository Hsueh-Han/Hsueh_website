import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from '@/views/mainPage.vue';
import Wiside from '@/views/wisideDemo.vue';
import Wiad from '@/views/wiadDemo.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      name: 'index',
      path: '/',
      component: MainPage,
    },
    {
      name: 'wiside',
      path: '/wiside',
      component: Wiside,
    },
    {
      name: 'wiad',
      path: '/wiad',
      component: Wiad,
    },
  ],
});
