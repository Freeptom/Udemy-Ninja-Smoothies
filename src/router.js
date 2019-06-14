import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index.vue';
import AddSmoothie from '@/views/AddSmoothie.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie,
    },
  ],
});
