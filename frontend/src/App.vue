<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors"
  ></div>
  <script setup>
    import Navbar from "./components/Navbar.vue";
    import HeroBanner from "./components/HeroBanner.vue";
    import FeatureBar from "./components/FeatureBar.vue";
  </script>

  <template>
    <Navbar />
    <HeroBanner />
    <FeatureBar />
  </template>

  <script setup></script>
</template>
