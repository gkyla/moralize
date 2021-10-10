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
    path: "/pined",
    name: "Pined",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pined.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "about" */ "../views/User.vue")
  },
  {
    path: "/event",
    name: "Event",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Event.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
