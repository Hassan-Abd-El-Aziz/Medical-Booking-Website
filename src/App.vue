<!-- App.vue -->
<template>
  <div
    :class="[
      theme,
      'min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300',
    ]"
  >
    <Navbar @toggle-theme="toggleTheme" :theme="theme" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import WhatsAppFloat from "./components/WhatsAppFloat.vue";
import AOS from "aos";
import "aos/dist/aos.css";

const theme = ref(localStorage.getItem("theme") || "light");

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });
});

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme.value);
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@font-face {
  font-family: "Cairo";
  src: url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap");
}

body {
  font-family: "Cairo", sans-serif;
}
</style>
