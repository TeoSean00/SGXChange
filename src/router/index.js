import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import UniversityPage from '../views/UniversityPage.vue'
import ModulePage from '../views/ModulePage.vue'
import ModuleMappingPage from '../views/ModuleMappingPage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/UniversityPage",
        name: "UniversityPage",
        component: UniversityPage,
      },
      {
        path: "/ModulePage",
        name: "ModulePage",
        component: ModulePage,
      },
      {
        path: "/ModuleMappingPage",
        name: "ModuleMappingPage",
        component: ModuleMappingPage,
      },
    ],
  });