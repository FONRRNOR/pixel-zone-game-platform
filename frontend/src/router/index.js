import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import UserDashboard from "../views/UserDashboard.vue"
import AdminDashboard from "../views/AdminDashboard.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/user-dashboard", component: UserDashboard },
  { path: "/admin-dashboard", component: AdminDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router