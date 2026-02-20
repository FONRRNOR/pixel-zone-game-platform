<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const loginAsUser = () => {
  localStorage.setItem("role", "user")
  router.push("/user-dashboard")
}

const loginAsAdmin = () => {
  localStorage.setItem("role", "admin")
  router.push("/admin-dashboard")
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">

    <div class="bg-[#2a2c4a] p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
      
      <h2 class="text-2xl font-bold text-white mb-6">
        Mock Login
      </h2>

      <div class="space-y-4">
        <button
          @click="loginAsUser"
          class="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold"
        >
          Login as User
        </button>

        <button
          @click="loginAsAdmin"
          class="w-full py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-semibold"
        >
          Login as Admin
        </button>
      </div>

    </div>

  </div>
</template>