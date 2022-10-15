import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";

import "@fontsource/Montserrat/100.css";
import "@fontsource/Montserrat/200.css";
import "@fontsource/Montserrat/300.css";
import "@fontsource/Montserrat/400.css";
import "@fontsource/Montserrat/500.css";
import "@fontsource/Montserrat/600.css";
import "@fontsource/Montserrat/700.css";
import "@fontsource/Montserrat/800.css";
import "@fontsource/Montserrat/900.css";
import "vue3-marquee/dist/style.css";
import "./index.css";

const app = createApp(App).use(router);
app.mount("#app");
