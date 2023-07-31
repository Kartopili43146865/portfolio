import { createRouter, createWebHistory } from 'vue-router';

import Home from '../src/pages/home-page.vue';
import about from '../src/pages/about-page.vue';
import contact from '../src/pages/contact-page.vue';



const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: about,
  },
  {
    path: '/contact',
    component: contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
