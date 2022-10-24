import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
// import "ant-design-vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import anime from "animejs/lib/anime.es.js";

import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

import "vue3-marquee/dist/style.css";
import "./index.css";

const app = createApp(App).use(router).use(Antd).use(anime);

app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  },
});

app.mount("#app");
