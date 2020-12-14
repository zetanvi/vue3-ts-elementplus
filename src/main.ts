/*
 * @Author: mellow
 * @Date: 2020-12-10 18:18:50
 * @Last Modified by: mellow
 * @Last Modified time: 2020-12-11 11:40:02
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element-plus";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);
installElementPlus(app);
app.use(store);
app.use(router);
app.mount("#app");
