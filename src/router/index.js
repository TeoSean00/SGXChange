import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UniversityPage from "@/views/UniversityPage.vue";
import UniversityPageSearch from "@/views/UniversityPageSearch.vue";
import ModuleMappingPage from "@/views/ModuleMappingPage.vue";
import Register from "@/views/Register.vue";
import SignIn from "@/views/SignIn.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import UniversityInfo from "@/views/UniversityInfo.vue";

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/UniversityPage/search",
      name: "UniversityPageSearch",
      component: UniversityPageSearch,
    },
    {
      path: "/UniversityInfo/:name",
      name: "UniversityInfo",
      component: UniversityInfo,
    },
    {
      path: "/UniversityPage",
      name: "UniversityPage",
      component: UniversityPage,
    },
    {
      path: "/ModuleMappingPage",
      name: "ModuleMappingPage",
      component: ModuleMappingPage,
    },
    {
      path: "/RegisterPage",
      name: "RegisterPage",
      component: Register,
    },
    {
      path: "/SignInPage",
      name: "SignInPage",
      component: SignIn,
    },
    {
      path: "/ProfilePage",
      name: "ProfilePage",
      component: ProfilePage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});


export default router;
