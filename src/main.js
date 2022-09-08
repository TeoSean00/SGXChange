import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router/index";// loads from src/router/index.js
import './index.css'
import "bootstrap/dist/css/bootstrap.css"

const app = createApp(App).use(router);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js"