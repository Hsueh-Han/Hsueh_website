import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from '@/views/mainPage.vue';

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
  ],
});
