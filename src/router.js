import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
  ],
});
