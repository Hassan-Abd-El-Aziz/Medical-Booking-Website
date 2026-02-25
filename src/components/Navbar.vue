<!-- components/Navbar.vue -->
<template>
  <nav
    class="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300"
    dir="rtl"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <img src="../assets/help.png" alt="Medical Booking" class="h-8 w-8" />
          <span class="text-xl font-bold text-medical-blue dark:text-white"
            >Shifaa</span
          >
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="nav-link"
            active-class="text-medical-blue font-semibold"
            >الرئيسية</router-link
          >
          <router-link
            to="/doctors"
            class="nav-link"
            active-class="text-medical-blue font-semibold"
            >الأطباء</router-link
          >
          <router-link
            to="/pharmacies"
            class="nav-link"
            active-class="text-medical-blue font-semibold"
            >الصيدليات</router-link
          >
          <router-link
            to="/contact"
            class="nav-link"
            active-class="text-medical-blue font-semibold"
            >اتصل بنا</router-link
          >
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <SunIcon v-if="isDark" class="h-5 w-5 text-yellow-500" />
            <MoonIcon v-else class="h-5 w-5 text-gray-600" />
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isOpen" class="md:hidden py-4 border-t dark:border-gray-700">
          <div class="flex flex-col space-y-3">
            <router-link @click="isOpen = false" to="/" class="mobile-nav-link"
              >الرئيسية</router-link
            >
            <router-link
              @click="isOpen = false"
              to="/doctors"
              class="mobile-nav-link"
              >الأطباء</router-link
            >
            <router-link
              @click="isOpen = false"
              to="/pharmacies"
              class="mobile-nav-link"
              >الصيدليات</router-link
            >
            <router-link
              @click="isOpen = false"
              to="/contact"
              class="mobile-nav-link"
              >اتصل بنا</router-link
            >
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { SunIcon, MoonIcon, Bars3Icon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && systemDark)) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});
</script>
