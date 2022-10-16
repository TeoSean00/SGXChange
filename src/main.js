import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";

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

const app = createApp(App).use(router);
app.mount("#app");
