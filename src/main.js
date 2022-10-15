import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import { reactive } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import "./index.css";

const app = createApp(App).use(router);
app.mount("#app");
