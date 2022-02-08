// app.js
import Vue from "vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all.js'
const RouterView = Vue.component("router-view");

const createApp = () => {
  const app = new Vue({
    // inject router into root Vue instance
    router,
    render: h => h(RouterView)
  });

  // return both the app and the router
  return { app, router };
};

export default createApp;
