import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {setupStore} from '@/store'

import "normalize.css";
import "./assets/css/index.less";

import { globalRegister } from "./global";

const app = createApp(App);

app.use(globalRegister);
app.use(store);
app.use(router);
setupStore()

app.mount("#app");
