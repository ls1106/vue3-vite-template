import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes,
   //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  }
})

export default router
