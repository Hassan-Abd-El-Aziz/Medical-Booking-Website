<!-- src/views/Doctors.vue -->
<template>
  <div dir="rtl" class="bg-white dark:bg-gray-900 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1
        class="text-3xl font-bold text-center mb-8 dark:text-white"
        data-aos="fade-up"
      >
        ابحث عن طبيبك
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
              placeholder="مثال: د. أحمد"
            />
          </div>
          <div>
            <label
              for="specialty"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              بحث بالتخصص
            </label>
            <select
              id="specialty"
              v-model="selectedSpecialty"
              class="mt-1 block w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-medical-blue focus:border-medical-blue"
            >
              <option value="">كل التخصصات</option>
              <option v-for="spec in specialties" :key="spec" :value="spec">
                {{ spec }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Doctors Grid -->
      <div
        v-if="filteredDoctors.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <DoctorCard
          v-for="doctor in filteredDoctors"
          :key="doctor.id"
          :doctor="doctor"
          data-aos="fade-up"
        />
      </div>
      <div v-else class="text-center py-16">
        <p class="text-xl text-gray-500 dark:text-gray-400">
          لا يوجد أطباء يطابقون بحثك.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import allDoctors from "../data/doctors.json";
import DoctorCard from "../components/DoctorCard.vue";

const doctors = ref(allDoctors.doctors); // Correctly access the array
const searchTerm = ref("");
const selectedSpecialty = ref("");

const specialties = computed(() => [
  ...new Set(doctors.value.map((d) => d.specialty)),
]);

const filteredDoctors = computed(() => {
  return doctors.value.filter((doctor) => {
    const nameMatch = doctor.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase());
    const specialtyMatch = selectedSpecialty.value
      ? doctor.specialty === selectedSpecialty.value
      : true;
    return nameMatch && specialtyMatch;
  });
});

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>
