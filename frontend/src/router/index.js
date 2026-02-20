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

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem("role")

  // ถ้าไปหน้า login แต่ยัง login อยู่ → เด้งไป home
  if (to.path === "/login" && role === "user") {
    return next("/home")
  }

  if (to.path === "/login" && role === "admin") {
    return next("/admin-dashboard")
  }

  // ถ้าหน้านั้นต้อง login แต่ไม่มี role
  if (to.meta.requiresAuth && !role) {
    return next("/login")
  }

  next()
})

export default router