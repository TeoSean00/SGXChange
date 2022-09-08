import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import ProfilePage from '../views/ProfilePage.vue'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/ProfilePage",
        name: "ProfilePage",
        component: ProfilePage,
      },
    ],
  });