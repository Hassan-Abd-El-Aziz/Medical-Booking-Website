<!-- components/WhatsAppFloat.vue -->
<template>
  <a
    href="https://wa.me/201234567890"
    target="_blank"
    class="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
    data-aos="fade-up"
    data-aos-offset="0"
  >
    <ChatBubbleBottomCenterTextIcon class="w-6 h-6" />
  </a>
</template>

<script setup>
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/vue/24/outline";
</script>
