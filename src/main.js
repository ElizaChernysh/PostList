import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/UI";
import router from './router/router';
// import Vue from 'vue';
// import VueRouter from 'vue-router';
import './registerServiceWorker'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

// Vue.use(VueRouter);
app.use(router);
app.mount('#app')
