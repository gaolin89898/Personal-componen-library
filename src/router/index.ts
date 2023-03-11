import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/Home",
    children: [
      {
        path: "/Home",
        name: "Home",
        component: () => import("@/view/Home/index.vue"),
        meta: {
          title: "首页",
          icon: "icon-shouye",
        },
      },
      {
        path: "/GitPage",
        name: "GitPage",
        component: () => import("@/view/GitPage/index.vue"),
        meta: {
          title: "Git管理",
          icon: "icon-git",
        },
      },
    ],
  },
];

const router = createRouter({
  // 采用 hash 模式  URL不显示路径
  // history: createWebHashHistory(),

  // 采用 history 模式  域名后面不带 # 号
  history: createWebHistory(),
  routes,
});

export default router;
