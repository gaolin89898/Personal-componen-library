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
        path: "/Blog",
        name: "Blog",
        component: () => import("@/view/Blog/index.vue"),
        meta: {
          title: "博客管理",
          icon: "icon-boke",
        },
      },
      {
        path: "/ComponentLibrary",
        name: "ComponentLibrary",
        component: () => import("@/view/ComponentLibrary/index.vue"),
        meta: {
          title: "组件库",
          icon: "icon-zujianku",
        },
      },
      {
        path: "/ToolBox",
        name: "ToolBox",
        component: () => import("@/view/ToolBox/index.vue"),
        meta: {
          title: "工具箱",
          icon: "icon-gongjuxiang",
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
      {
        path: "/Authority",
        name: "Authority",
        component: () => import("@/view/Authority/index.vue"),
        meta: {
          title: "权限管理",
          icon: "icon-quanxian",
        },
      },
      {
        path: "/User",
        name: "User",
        component: () => import("@/view/User/index.vue"),
        meta: {
          title: "用户管理",
          icon: "icon-yonghu",
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
