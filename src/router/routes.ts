const routes = [
  {
    path: "/",
    component: () => import("@/pages/user.vue") //路由懒加载
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/notFound.vue")
  }
]

export default routes
