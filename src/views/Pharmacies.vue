<!-- src/views/Pharmacies.vue -->
<template>
  <div dir="rtl" class="bg-white dark:bg-gray-900 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1
        class="text-3xl font-bold text-center mb-8 dark:text-white"
        data-aos="fade-up"
      >
        ابحث عن صيدلية
      </h1>

      <!-- Filters -->
      <div
        class="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              for="search"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              بحث بالاسم
            </label>
            <input
              type="text"
              id="search"
              v-model="searchTerm"
              class="mt-1 block w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-medical-blue focus:border-medical-blue"
              placeholder="مثال: صيدلية الشفاء"
            />
          </div>
          <div>
            <label
              for="address"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              بحث بالعنوان
            </label>
            <input
              type="text"
              id="address"
              v-model="searchAddress"
              class="mt-1 block w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-medical-blue focus:border-medical-blue"
              placeholder="مثال: القاهرة"
            />
          </div>
        </div>
      </div>

      <!-- Pharmacies Grid -->
      <div
        v-if="filteredPharmacies.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <PharmacyCard
          v-for="pharmacy in filteredPharmacies"
          :key="pharmacy.id"
          :pharmacy="pharmacy"
          data-aos="fade-up"
        />
      </div>
      <div v-else class="text-center py-16">
        <p class="text-xl text-gray-500 dark:text-gray-400">
          لا يوجد صيدليات تطابق بحثك.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import allPharmacies from "../data/pharmacies.json";
import PharmacyCard from "../components/PharmacyCard.vue";

const pharmacies = ref(allPharmacies.pharmacies);
const searchTerm = ref("");
const searchAddress = ref("");
const filteredPharmacies = computed(() => {
  return pharmacies.value.filter((pharmacy) => {
    const nameMatch = pharmacy.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase());
    const addressMatch = pharmacy.address
      .toLowerCase()
      .includes(searchAddress.value.toLowerCase());
    return nameMatch && addressMatch;
  });
});
</script>
