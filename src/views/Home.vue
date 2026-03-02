<template>
  <div dir="rtl" class="bg-cyan-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen max-h-[600px] overflow-hidden">
      <div
        v-for="(slide, index) in heroSlides"
        :key="index"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="{
          'opacity-100': currentSlide === index,
          'opacity-0': currentSlide !== index,
        }"
      >
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-blue-900/70"
        ></div>
      </div>

      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="text-white max-w-2xl" data-aos="fade-up">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            احجز موعدك مع أفضل الأطباء
          </h1>
          <p class="text-xl mb-8">خدمة طبية متميزة على مدار الساعة</p>
          <button
            @click="scrollToSpecialties"
            class="bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition transform hover:scale-105 shadow-lg"
          >
            احجز الآن
          </button>
        </div>
      </div>
    </section>

    <!-- Specialties Grid -->
    <section id="specialties" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          التخصصات الطبية
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="specialty in specialties"
            :key="specialty.name"
            class="specialty-card bg-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 border border-cyan-100"
            data-aos="zoom-in"
            :data-aos-delay="specialty.delay"
          >
            <component
              :is="specialty.icon"
              class="w-12 h-12 text-cyan-600 mb-3 mx-auto"
            />
            <span class="text-sm font-medium text-gray-700">{{
              specialty.name
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Doctors -->
    <section class="py-16 bg-cyan-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          أطباء مميزون
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DoctorCard
            v-for="doctor in featuredDoctors"
            :key="doctor.id"
            :doctor="doctor"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>

    <!-- Featured Pharmacies -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          صيدليات مميزة
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PharmacyCard
            v-for="pharmacy in featuredPharmacies"
            :key="pharmacy.id"
            :pharmacy="pharmacy"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-cyan-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          لماذا تختارنا؟
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="text-center"
            data-aos="fade-up"
          >
            <div
              class="feature-icon bg-white p-4 rounded-full inline-block mb-4 shadow-sm text-cyan-600"
            >
              <component :is="feature.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-gray-800">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          آراء العملاء
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="testimonial-card bg-cyan-50 p-6 rounded-xl shadow-sm border border-cyan-100"
            data-aos="fade-up"
          >
            <div class="flex items-center mb-4">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover ml-4"
              />
              <div>
                <h4 class="font-semibold text-gray-800">
                  {{ testimonial.name }}
                </h4>
                <div class="flex">
                  <StarIcon
                    v-for="star in 5"
                    :key="star"
                    class="w-4 h-4"
                    :class="
                      star <= testimonial.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    "
                  />
                </div>
              </div>
            </div>
            <p class="text-gray-600">
              {{ testimonial.comment }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import DoctorCard from "../components/DoctorCard.vue";
import PharmacyCard from "../components/PharmacyCard.vue";
import {
  HeartIcon,
  EyeIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  Square3Stack3DIcon,
} from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/24/solid";

// Image imports
import hero1 from "../assets/Hero1.jpg";
import hero2 from "../assets/Hero1.jpg";
import hero3 from "../assets/Hero1.jpg";
import avatar1 from "../assets/Hero1.jpg";
import avatar2 from "../assets/Hero1.jpg";
import avatar3 from "../assets/Hero1.jpg";

// Hero Slider
const heroSlides = [
  { image: hero1, alt: "Medical team" },
  { image: hero2, alt: "Modern clinic" },
  { image: hero3, alt: "Patient care" },
];

const currentSlide = ref(0);
let slideInterval;

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
});

const scrollToSpecialties = () => {
  document.getElementById("specialties").scrollIntoView({ behavior: "smooth" });
};

// Specialties
const specialties = [
  { name: "قلب", icon: HeartIcon, delay: 100 },
  { name: "أعصاب", icon: CpuChipIcon, delay: 200 },
  { name: "أسنان", icon: SparklesIcon, delay: 300 },
  { name: "عيون", icon: EyeIcon, delay: 400 },
  { name: "أنف وأذن", icon: SpeakerWaveIcon, delay: 500 },
  { name: "عظام", icon: Square3Stack3DIcon, delay: 600 },
];

// Features
const features = [
  {
    icon: ClockIcon,
    title: "خدمة 24/7",
    description: "متاحون على مدار الساعة لخدمتك",
  },
  {
    icon: ShieldCheckIcon,
    title: "أطباء معتمدون",
    description: "جميع الأطباء معتمدون وموثوقون",
  },
  {
    icon: UserGroupIcon,
    title: "آلاف المرضى",
    description: "ثقة آلاف المرضى في خدماتنا",
  },
  {
    icon: CurrencyDollarIcon,
    title: "أسعار مناسبة",
    description: "نقدم أفضل الأسعار التنافسية",
  },
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    avatar: avatar1,
    rating: 5,
    comment: "خدمة ممتازة وسهولة في الحجز. أنصح الجميع باستخدام هذا الموقع",
  },
  {
    id: 2,
    name: "سارة علي",
    avatar: avatar2,
    rating: 5,
    comment: "تجربة رائعة، الأطباء محترفون والمواعيد دقيقة",
  },
  {
    id: 3,
    name: "محمد عبدالله",
    avatar: avatar3,
    rating: 4,
    comment: "منصة ممتازة وسهلة الاستخدام، شكراً لكم",
  },
];

// Mock data
const featuredDoctors = ref([]);
const featuredPharmacies = ref([]);

// Load mock data
import mockDoctors from "../data/doctors.json";
import mockPharmacies from "../data/pharmacies.json";

featuredDoctors.value = mockDoctors.doctors.slice(0, 3);
featuredPharmacies.value = mockPharmacies.pharmacies.slice(0, 3);
</script>
