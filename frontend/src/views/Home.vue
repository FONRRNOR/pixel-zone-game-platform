<script setup>
import { useRouter } from "vue-router"

import Navbar from "../components/Navbar.vue"
import HeroBanner from "../components/HeroBanner.vue"
import FeatureBar from "../components/FeatureBar.vue"
import GameSection from "../components/GameSection.vue"

import bg from "../assets/web-background/background.png"

const router = useRouter()

const logout = () => {
  localStorage.removeItem("role")
  router.replace("/login")
}
</script>

<template>
  <div class="min-h-screen relative bg-[#1e1f35] overflow-hidden">

    <!-- Background -->
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '700px',
        opacity: 0.4
      }"
    ></div>

    <!-- Content -->
    <div class="relative z-10">
      <Navbar />
      <HeroBanner />
      <FeatureBar />
      <GameSection />
    </div>

  </div>
</template>