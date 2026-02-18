<script setup>
import Navbar from "./components/Navbar.vue";
import HeroBanner from "./components/HeroBanner.vue";
import FeatureBar from "./components/FeatureBar.vue";
</script>

<template>
  <div class="min-h-screen transition-colors">
    <Navbar />
    <HeroBanner />
    <FeatureBar />
    <router-view />
  </div>
</template>
