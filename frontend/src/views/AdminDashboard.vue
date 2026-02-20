<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem("role")   // ลบ role
  router.push("/login")            // ไป login
}
</script>

<template>
  <div class="p-10 text-white">
    <h1 class="text-3xl font-bold text-purple-400 mb-6">
      Admin Dashboard
    </h1>

    <button
      @click="logout"
      class="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg"
    >
      Logout
    </button>
  </div>
</template>
