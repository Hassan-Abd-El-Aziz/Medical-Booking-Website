<!-- src/views/Contact.vue -->
<template>
  <div
    dir="rtl"
    class="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300"
  >
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h1
          class="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          data-aos="fade-up"
        >
          اتصل بنا
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          هل لديك سؤال أو استفسار؟ يسعدنا تواصلك معنا.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contact Info & Social Media -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Info Cards -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            data-aos="fade-left"
          >
            <h3
              class="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 dark:border-gray-700"
            >
              معلومات التواصل
            </h3>
            <ul class="space-y-6">
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <PhoneIcon class="w-6 h-6 ml-3 text-medical-blue shrink-0" />
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">
                    الهاتف
                  </p>
                  <p>+20 123 456 7890</p>
                </div>
              </li>
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <EnvelopeIcon class="w-6 h-6 ml-3 text-medical-blue shrink-0" />
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">
                    البريد الإلكتروني
                  </p>
                  <p>info@shifaa.com</p>
                </div>
              </li>
              <li class="flex items-start text-gray-600 dark:text-gray-300">
                <MapPinIcon class="w-6 h-6 ml-3 text-medical-blue shrink-0" />
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">
                    العنوان
                  </p>
                  <p>القاهرة، مصر</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Social Media -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h3
              class="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 dark:border-gray-700"
            >
              تابعنا على
            </h3>
            <div class="flex justify-center space-x-6 space-x-reverse">
              <a
                href="#"
                class="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.465c.636-.247 1.363.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 0C9.58 0 9.22.01 8.05.057c-1.17.05-1.995.22-2.784.522a6.9 6.9 0 00-2.583 1.618 6.9 6.9 0 00-1.618 2.583c-.3.789-.472 1.614-.522 2.784C.01 9.22 0 9.58 0 12s.01 2.78.057 3.95c.05 1.17.22 1.995.522 2.784a6.9 6.9 0 001.618 2.583 6.9 6.9 0 002.583 1.618c.789.3 1.614.472 2.784.522C9.22 23.99 9.58 24 12 24s2.78-.01 3.95-.057c1.17-.05 1.995-.22 2.784-.522a6.9 6.9 0 002.583-1.618 6.9 6.9 0 001.618-2.583c.3-.789.472-1.614.522-2.784C23.99 14.78 24 14.42 24 12s-.01-2.78-.057-3.95c-.05-1.17-.22-1.995-.522-2.784a6.9 6.9 0 00-1.618-2.583 6.9 6.9 0 00-2.583-1.618c-.789-.3-1.614-.472-2.784-.522C14.78.01 14.42 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div
          class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            أرسل لنا رسالة
          </h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >الاسم الكامل</label
                >
                <input
                  type="text"
                  v-model="form.name"
                  id="name"
                  required
                  class="mt-1 block w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-medical-blue focus:border-medical-blue"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >البريد الإلكتروني</label
                >
                <input
                  type="email"
                  v-model="form.email"
                  id="email"
                  required
                  class="mt-1 block w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-medical-blue focus:border-medical-blue"
                />
              </div>
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >الموضوع</label
              >
              <input
                type="text"
                v-model="form.subject"
                id="subject"
                required
                class="mt-1 block w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-medical-blue focus:border-medical-blue"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >رسالتك</label
              >
              <textarea
                v-model="form.message"
                id="message"
                rows="5"
                required
                class="mt-1 block w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-medical-blue focus:border-medical-blue"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                class="w-full bg-medical-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal transition transform hover:scale-105"
              >
                إرسال الرسالة
              </button>
            </div>
          </form>
          <div
            v-if="formStatus"
            class="mt-4 text-center p-3 rounded-lg"
            :class="
              formStatus.success
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            "
          >
            {{ formStatus.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/outline";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const formStatus = ref(null);

const handleSubmit = () => {
  console.log("Form submitted:", form.value);

  formStatus.value = {
    success: true,
    message: "شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح.",
  };

  form.value = { name: "", email: "", subject: "", message: "" };

  setTimeout(() => {
    formStatus.value = null;
  }, 5000);
};

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>
