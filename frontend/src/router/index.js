import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import AdminDashboard from "../views/AdminDashboard.vue"

const routes = [
  { path: "/", redirect: "/login" },

  { path: "/login", component: Login },

  {
    path: "/home",
    component: Home,
    meta: { requiresAuth: true }
  },

  {
    path: "/admin-dashboard",
    component: AdminDashboard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const role = localStorage.getItem("role")

  if (to.path === "/login" && role === "user") {
    return "/home"
  }

  if (to.path === "/login" && role === "admin") {
    return "/admin-dashboard"
  }

  if (to.meta.requiresAuth && !role) {
    return "/login"
  }

  return true
})

export default router