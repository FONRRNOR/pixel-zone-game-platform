<script setup>
import Navbar from "./components/Navbar.vue";
import bg from "./assets/web-background/background.png";
</script>

<template>
  <div class="min-h-screen relative bg-[#1e1f35] overflow-hidden">

    <!-- background -->
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '800px',
        opacity: 0.3
      }"
    ></div>

    <!-- content -->
    <div class="relative z-10">
      <Navbar />
      <router-view />
    </div>

  </div>
</template>