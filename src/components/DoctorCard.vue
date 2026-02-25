<!-- components/DoctorCard.vue -->
<template>
  <div class="doctor-card group" :class="{ 'animate-pulse': loading }">
    <div class="relative overflow-hidden rounded-t-lg">
      <img
        v-if="!loading && doctor"
        :src="doctor.image"
        :alt="doctor.name"
        class="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
        loading="lazy"
      />
      <div v-else class="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
    </div>

    <div class="p-4" v-if="doctor">
      <h3 class="text-xl font-semibold mb-2 dark:text-white">
        {{ doctor.name }}
      </h3>
      <p class="text-medical-blue mb-2">{{ doctor.specialty }}</p>

      <!-- Rating -->
      <div class="flex items-center mb-2">
        <div class="flex">
          <StarIcon
            v-for="star in 5"
            :key="star"
            class="w-4 h-4"
            :class="star <= doctor.rating ? 'text-yellow-400' : 'text-gray-300'"
          />
        </div>
        <span class="text-sm text-gray-600 dark:text-gray-400 mr-2">{{
          doctor.rating
        }}</span>
      </div>

      <!-- Experience -->
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
        <BriefcaseIcon class="w-4 h-4 inline ml-1" />
        {{ doctor.experience }} سنة خبرة
      </p>

      <!-- Address -->
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
        <MapPinIcon class="w-4 h-4 inline ml-1" />
        {{ doctor.clinicAddress }}
      </p>

      <!-- Available Times -->
      <div class="mb-4">
        <p class="text-sm font-semibold mb-2 dark:text-white">
          المواعيد المتاحة:
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="time in doctor.availableTimes.slice(0, 3)"
            :key="time"
            class="time-badge"
          >
            {{ time }}
          </span>
          <span
            v-if="doctor.availableTimes.length > 3"
            class="time-badge bg-gray-100"
          >
            +{{ doctor.availableTimes.length - 3 }}
          </span>
        </div>
      </div>

      <!-- Book Button -->
      <button
        @click="openBookingModal"
        class="w-full bg-medical-blue text-white py-2 rounded-lg hover:bg-teal transition transform hover:scale-105"
      >
        احجز موعد
      </button>
    </div>

    <!-- Booking Modal -->
    <Transition name="modal">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>
        <div
          class="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6"
          dir="rtl"
        >
          <h3 class="text-2xl font-bold mb-4 dark:text-white">تأكيد الحجز</h3>

          <form @submit.prevent="confirmBooking" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200"
                >الاسم</label
              >
              <input
                v-model="patientName"
                type="text"
                required
                class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="أدخل اسمك"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-1 dark:text-gray-200"
                >رقم الهاتف</label
              >
              <input
                v-model="patientPhone"
                type="tel"
                required
                class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="أدخل رقم هاتفك"
              />
            </div>

            <div class="flex gap-3">
              <button
                type="submit"
                class="flex-1 bg-medical-blue text-white py-2 rounded-lg hover:bg-teal transition"
              >
                تأكيد
              </button>
              <button
                type="button"
                @click="closeModal"
                class="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { BriefcaseIcon, MapPinIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  doctor: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const showModal = ref(false);
const patientName = ref("");
const patientPhone = ref("");

const openBookingModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  patientName.value = "";
  patientPhone.value = "";
};

const confirmBooking = () => {
  const message = `مساء الخير، أريد حجز موعد
الاسم: ${patientName.value}
رقم الهاتف: ${patientPhone.value}
الدكتور: ${props.doctor.name}
التخصص: ${props.doctor.specialty}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${props.doctor.whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
  closeModal();
};
</script>
