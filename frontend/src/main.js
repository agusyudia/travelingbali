// import Vue from 'vue'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/main.css'

// Vue.use(VueToast);
// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
