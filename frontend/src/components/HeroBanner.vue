<template>
  <div class="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto mt-4">
    <div
      class="relative h-[350px] sm:h-[450px] lg:h-[600px] overflow-hidden rounded-xl"
    >
      <!-- Slides -->
      <div
        class="flex h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        :style="{ transform: `translateX(-${current * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="relative min-w-full h-full overflow-hidden rounded-xl"
          :class="slide.bg"
        >
          <!-- Text overlay -->
          <div
            class="absolute left-0 top-0 h-full w-full md:w-1/2 flex items-center md:justify-center justify-start px-6 md:px-8"
          >
            <div class="text-white max-w-md">
              <h2
                class="text-lg sm:text-2xl md:text-4xl font-bold mb-3 md:mb-4"
              >
                {{ slide.title }}
              </h2>

              <p
                class="text-xs sm:text-sm md:text-base opacity-90 mb-4 md:mb-6"
              >
                {{ slide.subtitle }}
              </p>

              <button
                class="px-4 py-2 md:px-5 md:py-2.5 rounded-md md:rounded-lg bg-white text-black text-xs sm:text-sm md:text-base font-medium hover:scale-105 transition"
                @click="onBannerClick(index)"
              >
                {{ slide.button }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div
        class="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3"
      >
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="goTo(index)"
          class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
          :class="
            current === index
              ? 'bg-white scale-110'
              : 'bg-white/50 hover:bg-white'
          "
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const current = ref(0);

const slides = [
  {
    title: "Pixel Adventure",
    subtitle: "Explore a new pixel world",
    button: "Play Now",
    bg: "bg-red-500",
  },
  {
    title: "Cyber Battle",
    subtitle: "Fight in the cyber arena",
    button: "View Games",
    bg: "bg-blue-500",
  },
  {
    title: "Fantasy Quest",
    subtitle: "Begin your legendary journey",
    button: "Buy Now",
    bg: "bg-green-500",
  },
  {
    title: "Space Raiders",
    subtitle: "Conquer the galaxy in pixel style",
    button: "Join Now",
    bg: "bg-purple-500",
  },
  {
    title: "Dungeon Legends",
    subtitle: "Fight monsters and earn epic loot",
    button: "Start Quest",
    bg: "bg-yellow-500",
  },
];

let interval = null;
const DELAY = 10000;

const startAutoSlide = () => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % slides.length;
  }, DELAY);
};

const goTo = (index) => {
  current.value = index;
  resetAutoSlide();
};

const onBannerClick = (index) => {
  console.log("Clicked:", slides[index].title);
};

onMounted(startAutoSlide);
onUnmounted(() => clearInterval(interval));

const resetAutoSlide = () => {
  clearInterval(interval);
  startAutoSlide();
};
</script>
