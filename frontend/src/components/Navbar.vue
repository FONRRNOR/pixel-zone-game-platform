<template>
  <header
    class="h-[60px] sm:h-[70px] bg-[#1e1f35]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#2a2b45]"
  >
    <nav
      class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between"
    >
      <!-- Logo -->
      <div
        class="text-xl sm:text-2xl lg:text-3xl font-black tracking-wider cursor-pointer select-none"
      >
        <span class="text-white">PIXEL </span>
        <span class="text-[#ffb300] drop-shadow-[0_0_8px_#ffb300]"> ZONE </span>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-8 text-sm text-gray-300 items-center">
        <li class="menu-item">Home</li>
        <li class="menu-item">Games</li>
        <li class="menu-item">Products</li>
        <li class="menu-item">Leaderboard</li>
        <li class="menu-item">Contact</li>
      </ul>

      <!-- Right Section -->
      <div class="flex items-center gap-6">
        <!-- Search -->
        <router-link to="/search">
          <img :src="searchIcon" alt="Search" class="icon" />
        </router-link>

        <!-- Account -->
        <img :src="userIcon" alt="User" class="icon" />

        <!-- Bag -->
        <div class="flex items-center cursor-pointer">
          <img :src="bagIcon" alt="Bag" class="icon mr-2" />

          <!-- Container amount -->
          <div class="flex items-center gap-3 min-w-[110px]">
            <!-- จำนวน -->
            <span class="text-[#ffb300] tabular-nums font-semibold">
              ({{ cartCount }})
            </span>

            <!-- total price -->
            <span class="text-[#ffb300] tabular-nums font-semibold">
              ${{ cartTotal }}
            </span>
          </div>
        </div>

        <!-- Mobile Dropdown -->
        <div class="md:hidden relative">
          <div class="cursor-pointer" @click="toggleMenu">
            <img :src="mobileMenuIcon" alt="Mobile Menu" class="icon" />
          </div>

          <transition name="fade">
            <ul
              v-if="isOpen"
              class="absolute right-0 mt-3 w-44 bg-[#25264a] rounded-lg shadow-xl py-3 space-y-1 text-gray-300 border border-[#2a2b45]"
            >
              <li class="dropdown-item" @click="closeMenu">Home</li>
              <li class="dropdown-item" @click="closeMenu">Games</li>
              <li class="dropdown-item" @click="closeMenu">Products</li>
              <li class="dropdown-item" @click="closeMenu">Leaderboard</li>
              <li class="dropdown-item" @click="closeMenu">Contact</li>
            </ul>
          </transition>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";

import searchIcon from "../assets/navbar/search-icon.png";
import userIcon from "../assets/navbar/user-icon.png";
import bagIcon from "../assets/navbar/bag-icon.png";
import mobileMenuIcon from "../assets/navbar/mobile-menu-icon.png";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const cartItems = ref([]);

const cartCount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

const cartTotal = computed(() => {
  const total = cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return total.toFixed(2);
});
</script>

<style scoped>
/* Desktop menu */
.menu-item {
  @apply relative font-semibold tracking-wide cursor-pointer transition duration-300;
}

.menu-item:hover {
  color: #c084fc;
  text-shadow: 0 0 6px #a855f7;
}

/* Icon */
.icon {
  @apply w-4 h-4 sm:w-5 sm:h-5 cursor-pointer opacity-80 transition duration-300;
}

.icon:hover {
  opacity: 1;
  filter: brightness(1.2) drop-shadow(0 0 6px #a855f7);
}

/* Dropdown items */
.dropdown-item {
  @apply px-4 py-2 text-sm font-medium cursor-pointer transition duration-200 rounded-md;
}

.dropdown-item:hover {
  background-color: #2f3055;
  color: #c084fc;
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
