<!-- components/Navbar.vue -->
<template>
  <nav
    class="sticky top-0 z-50 bg-cyan-500/50 backdrop-blur-sm shadow-sm border-b border-cyan-100"
    dir="rtl"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <img src="../assets/help.png" alt="Medical Booking" class="h-8 w-8" />
          <span class="text-xl font-bold text-cyan-100">Shifaa</span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="nav-link"
            active-class="text-cyan-700 font-semibold"
            >الرئيسية</router-link
          >
          <router-link
            to="/doctors"
            class="nav-link"
            active-class="text-cyan-700 font-semibold"
            >الأطباء</router-link
          >
          <router-link
            to="/pharmacies"
            class="nav-link"
            active-class="text-cyan-700 font-semibold"
            >الصيدليات</router-link
          >
          <router-link
            to="/contact"
            class="nav-link"
            active-class="text-cyan-700 font-semibold"
            >اتصل بنا</router-link
          >
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-4">
          <!-- Mobile Menu Button -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded-lg hover:bg-cyan-100 text-cyan-700"
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
        <div
          v-if="isOpen"
          class="md:hidden py-4 border-t border-cyan-100 bg-cyan-50"
        >
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
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
</script>
