import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // 引入element-plus图标
import "element-plus/dist/index.css"; // 引入element-plus样式

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(store);
app.use(router);
app.mount("#app");
