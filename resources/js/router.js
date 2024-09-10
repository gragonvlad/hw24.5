import { createRouter,createWebHistory } from 'vue-router'

import Home from './Test.vue'
import About from './Test2.vue'
const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
  ]
  
  //const router = createRouter({
  //  history: createMemoryHistory(),
  //  routes,
  //})
  export default createRouter({
      history: createWebHistory(),
      routes,
  });