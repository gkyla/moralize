import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/diary-note",
    name: "Diary Note",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DiaryNote.vue")
  },
  {
    path: "/your-target",
    name: "Your Target",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/YourTarget.vue")
  },
  {
    path: "/achievement",
    name: "Achievement",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Achievement.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
