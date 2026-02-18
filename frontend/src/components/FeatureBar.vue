<template>
  <div class="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto mt-6">
    <div class="grid grid-cols-2 lg:grid-cols-4 rounded-xl shadow-md overflow-hidden">
      
      <!-- Item -->
      <div class="feature-item">
        <img :src="deliveryIcon" alt="Delivery" class="icon" />
        <h4 class="title">Free Delivery</h4>
        <p class="desc">Free shipping on all orders</p>
      </div>

      <div class="feature-item">
        <img :src="refundIcon" alt="Return" class="icon" />
        <h4 class="title">Money Return</h4>
        <p class="desc">Back guarantee in 7 days</p>
      </div>

      <div class="feature-item">
        <img :src="discountIcon" alt="Discount" class="icon" />
        <h4 class="title">Member Discount</h4>
        <p class="desc">On every order over $130</p>
      </div>

      <div class="feature-item">
        <img :src="supportIcon" alt="Support" class="icon" />
        <h4 class="title">24/7 Support</h4>
        <p class="desc">Support anytime you need</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import deliveryIcon from "../assets/feature-item/delivery-icon.png";
import refundIcon from "../assets/feature-item/refund-icon.png";
import discountIcon from "../assets/feature-item/discount-icon.png";
import supportIcon from "../assets/feature-item/support-icon.png";
</script>

<style scoped>
.feature-item {
  @apply flex flex-col items-center justify-center text-center
         gap-1 p-4 h-32;
}

.icon {
  @apply w-12 h-12 lg:w-14 lg:h-14;
}

.title {
  @apply font-semibold text-sm text-white leading-tight;
}

.desc {
  @apply text-xs opacity-80 text-white leading-tight;
}
</style>
