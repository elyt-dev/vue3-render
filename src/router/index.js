import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RenderMain from "../views/render/RenderMain.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: RenderMain,
  },
  {
    path: "/RenderMain",
    name: "RenderMain",
    component: RenderMain,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/elementplus",
    name: "elementplus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/element-plus/ElementPlus.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
