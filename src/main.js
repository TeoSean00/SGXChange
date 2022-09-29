import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router/index";
import './index.css'
import { useColorMode } from '@vueuse/core';
import "bootstrap/dist/css/bootstrap.css"

const app = createApp(App).use(router);
app.use(useColorMode)
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js"