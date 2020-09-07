import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Film from "../views/Film.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/film/:id",
    component: Film
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
