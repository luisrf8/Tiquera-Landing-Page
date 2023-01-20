import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'


import Header from 'primevue/dialog';
import Carousel from 'primevue/dialog';
import Button from 'primevue/dialog';

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import './assets/main.css'
import "primevue/resources/primevue.min.css";
const app = createApp(App)


app.component('Header', Header);
app.component('Carousel', Carousel);
app.component('Button', Button);



app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
