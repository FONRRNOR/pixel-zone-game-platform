<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

/* ================= FORM STATE ================= */
const email = ref("");
const password = ref("");
const showPassword = ref(false);

/* ================= IMAGES ================= */
const heroImage = new URL(
  "../assets/login/gaming-hero.png",
  import.meta.url
).href;

const logoImage = new URL(
  "../assets/login/Pixel-zone-logo-/1.png",
  import.meta.url
).href;

const loginImage = new URL(
  "../assets/login/Pixel-zone-logo-/2.png",
  import.meta.url
).href;

const eyeOpenIcon = new URL(
  "../assets/login/Pixel-zone-logo-/Eye-icon/1.png",
  import.meta.url
).href;

const eyeCloseIcon = new URL(
  "../assets/login/Pixel-zone-logo-/Eye-icon/2.png",
  import.meta.url
).href;

/* ================= LOGIN ================= */
const loginAsAdmin = () => {
  if (emailError.value || passwordError.value) return;
  localStorage.setItem("role", "admin");
  router.push("/admin-dashboard");
};

/* ================= VALIDATION ================= */
const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

const passwordRegex =
  /^[A-Za-z0-9]+$/;

const isEmailValid = computed(() =>
  emailRegex.test(email.value)
);

const isPasswordValid = computed(() =>
  passwordRegex.test(password.value)
);

const emailError = computed(() => {
  if (!email.value) return "";
  if (!isEmailValid.value)
    return "Invalid email format (English letters and numbers only)";
  return "";
});

const passwordError = computed(() => {
  if (!password.value) return "";
  if (!isPasswordValid.value)
    return "Password can contain only letters and numbers";
  return "";
});
</script>

<template>
  <div class="min-h-screen flex bg-[#1e1f35]">

    <!-- ================= LEFT SIDE ================= -->
    <div
      class="flex-1 relative flex items-center justify-center bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-white px-8">
        <div class="flex items-center justify-center gap-10">
          <img
            :src="logoImage"
            alt="Pixel Zone Logo"
            class="w-[170px]"
          />

          <div>
            <h1 class="text-3xl font-bold">
              Welcome to Pixel Zone
            </h1>
            <p class="text-sm tracking-[0.4em] opacity-80">
              Sign in to your account
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= RIGHT SIDE ================= -->
    <div class="flex-1 flex items-center justify-center px-6">
      <div
        class="w-full max-w-lg text-white rounded-xl p-8 shadow-2xl border border-white/10"
      >
        <!-- Logo -->
        <div class="flex justify-center mb-6">
          <img
            :src="loginImage"
            alt="Login Logo"
            class="w-[90px]"
          />
        </div>

        <!-- Title -->
        <div class="text-center mb-6">
          <h2 class="text-3xl font-bold">Sign In</h2>
          <p class="text-white/60 mt-1">
            Enter your credentials to continue
          </p>
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label
            class="font-medium"
            :class="emailError ? 'text-red-500' : 'text-white/80'"
          >
            Email
          </label>

          <input
            v-model="email"
            type="text"
            placeholder="you@email.com"
            class="w-full mt-1 px-4 py-2 bg-[#1e1f35] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2"
            :class="
              emailError
                ? 'border-red-500 focus:ring-red-500'
                : 'border-white/20 focus:ring-indigo-500'
            "
          />

          <p v-if="emailError" class="text-sm text-red-500 mt-1">
            {{ emailError }}
          </p>
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label
            class="font-medium block mb-1"
            :class="passwordError ? 'text-red-500' : 'text-white/80'"
          >
            Password
          </label>

          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              class="w-full px-4 py-2 pr-12 bg-[#1e1f35] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2"
              :class="
                passwordError
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-white/20 focus:ring-indigo-500'
              "
            />

            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <img
                :src="showPassword ? eyeCloseIcon : eyeOpenIcon"
                class="w-5 h-5 opacity-70 hover:opacity-100 transition"
              />
            </button>
          </div>

          <p v-if="passwordError" class="text-sm text-red-500 mt-1">
            {{ passwordError }}
          </p>
        </div>

        <!-- Sign In -->
        <button
          @click="loginAsAdmin"
          class="w-full bg-indigo-600 py-2 rounded-lg font-semibold hover:bg-indigo-500 transition"
        >
          Sign In
        </button>

        <!-- Divider -->
        <div class="flex items-center my-6">
          <div class="flex-1 h-[1px] bg-white/20"></div>
          <span class="px-3 text-sm text-white/40">or</span>
          <div class="flex-1 h-[1px] bg-white/20"></div>
        </div>

        <!-- Sign Up -->
        <div class="text-center text-sm text-white/70">
          Don’t have an account?
          <a href="#" class="text-indigo-400 font-medium hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  </div>
</template>