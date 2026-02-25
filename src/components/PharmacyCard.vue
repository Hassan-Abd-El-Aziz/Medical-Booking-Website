<!-- components/PharmacyCard.vue -->
<template>
  <div class="pharmacy-card group" :class="{ 'animate-pulse': loading }">
    <div class="relative overflow-hidden rounded-t-lg">
      <img
        v-if="!loading && pharmacy"
        :src="pharmacy.image"
        :alt="pharmacy.name"
        class="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
        loading="lazy"
      />
      <div v-else class="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
    </div>

    <div class="p-4" v-if="pharmacy">
      <h3 class="text-xl font-semibold mb-2 dark:text-white">
        {{ pharmacy.name }}
      </h3>

      <!-- Address -->
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <MapPinIcon class="w-4 h-4 inline ml-1" />
        {{ pharmacy.address }}
      </p>

      <!-- Phone -->
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        <PhoneIcon class="w-4 h-4 inline ml-1" />
        {{ pharmacy.phone }}
      </p>

      <!-- Actions -->
      <div class="grid grid-cols-3 gap-2">
        <a
          :href="`https://wa.me/${pharmacy.whatsappNumber}`"
          target="_blank"
          class="action-button bg-green-500 hover:bg-green-600 text-white"
        >
          <ChatBubbleBottomCenterTextIcon class="w-5 h-5" />
        </a>

        <a
          :href="`tel:${pharmacy.phone}`"
          class="action-button bg-medical-blue hover:bg-teal text-white"
        >
          <PhoneIcon class="w-5 h-5" />
        </a>

        <a
          :href="pharmacy.mapLink"
          target="_blank"
          class="action-button bg-gray-500 hover:bg-gray-600 text-white"
        >
          <MapIcon class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  MapPinIcon,
  PhoneIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/vue/24/outline";

defineProps({
  pharmacy: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
