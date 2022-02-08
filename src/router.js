// router.js
import Vue from "vue";
import Router from "vue-router";
import ToDo from "./components/ToDo";
import Calculator from "./components/Calculator";
import App from "./components/App";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "app",
      component: App
    },
    {
      path: "/ToDo",
      name: "ToDo",
      component: ToDo
    },
    {
      path: "/Calculator",
      name: "Calculator",
      component: Calculator
    }
  ]
});
