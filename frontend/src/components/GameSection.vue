<template>
  <section class="mt-6">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors">
      <!-- 🔥 Featured Games -->
      <div class="py-10 flex items-center justify-center mt-10">
        <h2
          class="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 tracking-wide after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:w-[60px] after:h-[3px] after:bg-yellow-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-[80px]"
        >
          Suggested Games
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div
          v-for="game in games"
          :key="game.id"
          class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
        >
          <div class="h-[270px] sm:h-[270px] lg:h-[340px] relative">
            <div class="absolute inset-0 bg-white"></div>

            <div class="absolute bottom-3 left-3 text-gray-800">
              <h3 class="text-sm sm:text-lg lg:text-xl font-bold mb-1">
                {{ game.title }}
              </h3>

              <p v-if="game.price" class="text-xs sm:text-base font-semibold">
                ${{ game.price }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Title -->
      <div class="py-10 flex items-center justify-center mt-10">
        <h2
          class="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 tracking-wide after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:w-[60px] after:h-[3px] after:bg-yellow-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-[80px]"
        >
          Game Categories
        </h2>
      </div>

      <!-- Games Categories -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-12">
        <!-- Nintendo -->
        <div
          class="relative w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:scale-[1.03] h-[270px] lg:h-[400px] flex items-end justify-center bg-cover bg-center"
          :style="{ backgroundImage: `url(${nintendoImg})` }"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-red-900/80 via-black/40 to-transparent"
          ></div>

          <div class="relative text-center pb-8">
            <h3
              class="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg"
            >
              Nintendo
            </h3>
            <button
              class="mt-4 px-6 py-2 text-sm font-semibold bg-white text-black rounded-full transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/40"
            >
              View Products →
            </button>
          </div>
        </div>

        <!-- Xbox -->
        <div
          class="relative w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:scale-[1.03] h-[270px] lg:h-[400px] flex items-end justify-center bg-cover bg-center"
          :style="{ backgroundImage: `url(${xboxImg})` }"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-green-900/80 via-black/40 to-transparent"
          ></div>

          <div class="relative text-center pb-8">
            <h3
              class="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg"
            >
              Xbox
            </h3>
            <button
              class="mt-4 px-6 py-2 text-sm font-semibold bg-white text-black rounded-full transition-all duration-300 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-500/40"
            >
              View Products →
            </button>
          </div>
        </div>

        <!-- PS5 -->
        <div
          class="relative w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:scale-[1.03] h-[270px] lg:h-[400px] flex items-end justify-center bg-cover bg-center"
          :style="{ backgroundImage: `url(${ps5Img})` }"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-black/40 to-transparent"
          ></div>

          <div class="relative text-center pb-8">
            <h3
              class="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg"
            >
              PS5
            </h3>
            <button
              class="mt-4 px-6 py-2 text-sm font-semibold bg-white text-black rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/40"
            >
              View Products →
            </button>
          </div>
        </div>

        <!-- PS4 -->
        <div
          class="relative w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:scale-[1.03] h-[270px] lg:h-[400px] flex items-end justify-center bg-cover bg-center"
          :style="{ backgroundImage: `url(${ps4Img})` }"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-blue-800/80 via-black/40 to-transparent"
          ></div>

          <div class="relative text-center pb-8">
            <h3
              class="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg"
            >
              PS4
            </h3>
            <button
              class="mt-4 px-6 py-2 text-sm font-semibold bg-white text-black rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400/40"
            >
              View Products →
            </button>
          </div>
        </div>
      </div>

      <!-- Our Products Title -->
      <div class="py-10 flex items-center justify-center">
        <h2
          class="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 tracking-wide after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:w-[60px] after:h-[3px] after:bg-yellow-400 after:rounded-full after:transition-all after:duration-300 hover:after:w-[80px]"
        >
          Our Products
        </h2>
      </div>

      <!-- Sort -->
      <div class="flex flex-col items-center gap-4 mb-8">
        <div
          class="relative flex w-full max-w-md sm:max-w-lg bg-gray-200 p-1 rounded-full shadow-sm"
        >
          <!-- Sliding Background -->
          <div
            class="absolute top-1 bottom-1 w-1/3 bg-yellow-400 rounded-full transition-all duration-300 ease-in-out"
            :class="{
              'left-1': sortType === 'new',
              'left-1/3': sortType === 'best',
              'left-2/3': sortType === 'special',
            }"
          ></div>

          <button
            v-for="type in ['new', 'best', 'special']"
            :key="type"
            @click="sortType = type"
            class="relative flex-1 px-3 sm:px-4 py-2 text-sm sm:text-md font-medium rounded-full transition text-center z-10"
            :class="sortType === type ? 'text-gray-900' : 'text-gray-600'"
          >
            {{ formatSortLabel(type) }}
          </button>
        </div>
      </div>

      <!-- Our Products Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12"
      >
        <div
          v-for="product in sortedProducts"
          :key="product.id"
          class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden border"
        >
          <!-- Image Section -->
          <div
            class="relative bg-gray-100 h-56 flex items-center justify-center"
          >
            <!-- Discount Badge -->
            <span
              v-if="product.discount"
              class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full"
            >
              {{ product.discount }}% OFF
            </span>

            <img :src="product.image" alt="" class="h-40 object-contain" />
          </div>

          <!-- Content -->
          <div class="p-5">
            <!-- Rating -->
            <div class="flex text-yellow-400 text-sm mb-2">★★★★★</div>

            <!-- Title -->
            <h3 class="text-base font-semibold text-gray-800 mb-2">
              {{ product.title }}
            </h3>

            <!-- Price -->
            <div class="flex items-center gap-2">
              <span class="text-yellow-500 font-bold text-lg">
                ${{ product.price }}
              </span>

              <span
                v-if="product.oldPrice"
                class="text-gray-400 line-through text-sm"
              >
                ${{ product.oldPrice }}
              </span>
            </div>

            <!-- Button -->
            <button
              class="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import nintendoImg from "../assets/game-category/nintendo-game-poster.png";
import ps5Img from "../assets/game-category/ps5-game-poster.png";
import ps4Img from "../assets/game-category/ps4-game-poster.png";
import xboxImg from "../assets/game-category/xbox-game-poster.png";

import { ref, computed, onMounted } from "vue";

const games = ref([]);
const specialCategories = ref([]);
const ourProducts = ref([]);
const sortType = ref("new");

onMounted(async () => {
  const res = await fetch("http://localhost:3000/games");
  const data = await res.json();

  games.value = data.filter((item) => item.category === "suggest").slice(0, 2);

  specialCategories.value = data.filter(
    (item) => item.category === "special-category",
  );

  ourProducts.value = data.filter((item) => item.type);
});

const sortedProducts = computed(() => {
  const filtered = ourProducts.value.filter(
    (product) => product.type === sortType.value,
  );

  if (sortType.value === "special") {
    return filtered.slice(0, 2);
  }

  return filtered;
});

const formatSortLabel = (type) => {
  if (type === "new") return "New Arrivals";
  if (type === "best") return "Best Seller";
  if (type === "special") return "Special";
};
</script>
