import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/upload",
      name: "upload",
      component: () => import("../views/Upload.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/Form.vue"),
    },
    {
      path: "/descriptions",
      name: "descriptions",
      component:()=>import('../views/Descriptions.vue')
    },
    {
      path: "/table",
      name: "table",
      component:()=>import('../views/table.vue')
    },
    
  ],
});

export default router;
