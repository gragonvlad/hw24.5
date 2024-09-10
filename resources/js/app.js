import './bootstrap';

import $ from 'jQuery'
import App from './App.vue'
import { createApp } from 'vue/dist/vue.esm-bundler'
let app = createApp(App);
import router from './router';
import PrimeVue from 'primevue/config';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import Button from "primevue/button";
import Aura from '@primevue/themes/nora';
app.use(PrimeVue, {
  pt: {
    button: {
        header: 'bg-gray-50 text-gray-900 p-4 border',
        content: 'border p-4 text-gray-900',
        footer: 'p-4 border'
    }
},
  theme: {
      preset: Aura,
      options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
      }
  },
  zIndex: {
    modal: 1100,        //dialog, drawer
    overlay: 1000,      //select, popover
    menu: 1000,         //overlay menus
    tooltip: 1100       //tooltip
}
});
app.component('Slider', Slider);
app.component('Button', Button);
app.component('RadioButton',RadioButton);

import HomeView from './Test.vue'
import AboutView from './Test2.vue'
const Home = { template: '<h2>Home Page</h2>' }
const About = { template: '<h2>About Page</h2>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]
app.use(router)
//createApp(App).mount("#app")


app.mount('#app');


$(document).ready(function () {
console.log('Start jquery');
    
   
});
 console.log('123'); // hello 124