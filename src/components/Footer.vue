<!-- components/Footer.vue -->
<template>
  <footer
    class="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-auto"
    dir="rtl"
  >
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About -->
        <div>
          <h3 class="text-lg font-semibold mb-4 dark:text-white">عن الموقع</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            منصة طبية متكاملة لحجز المواعيد مع أفضل الأطباء والصيدليات في مصر
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 dark:text-white">
            روابط سريعة
          </h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="footer-link">الرئيسية</router-link>
            </li>
            <li>
              <router-link to="/doctors" class="footer-link"
                >الأطباء</router-link
              >
            </li>
            <li>
              <router-link to="/pharmacies" class="footer-link"
                >الصيدليات</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="footer-link"
                >اتصل بنا</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 dark:text-white">
            معلومات الاتصال
          </h3>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li class="flex items-center">
              <MapPinIcon class="w-4 h-4 ml-2" />
              القاهرة، مصر
            </li>
            <li class="flex items-center">
              <PhoneIcon class="w-4 h-4 ml-2" />
              +20 123 456 7890
            </li>
            <li class="flex items-center">
              <EnvelopeIcon class="w-4 h-4 ml-2" />
              info@shifaa.com
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-lg font-semibold mb-4 dark:text-white">تابعنا</h3>
          <div class="flex space-x-4">
            <a href="#" class="social-icon">
              <svg
                class="w-5 h-5"
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
            <a href="#" class="social-icon">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
            <a href="#" class="social-icon">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.465c.636-.247 1.363.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 0C9.58 0 9.22.01 8.05.057c-1.17.05-1.995.22-2.784.522a6.9 6.9 0 00-2.583 1.618 6.9 6.9 0 00-1.618 2.583c-.3.789-.472 1.614-.522 2.784C.01 9.22 0 9.58 0 12s.01 2.78.057 3.95c.05 1.17.22 1.995.522 2.784a6.9 6.9 0 001.618 2.583 6.9 6.9 0 002.583 1.618c.789.3 1.614.472 2.784.522C9.22 23.99 9.58 24 12 24s2.78-.01 3.95-.057c1.17-.05 1.995-.22 2.784-.522a6.9 6.9 0 002.583-1.618 6.9 6.9 0 001.618-2.583c.3-.789.472-1.614.522-2.784C23.99 14.78 24 14.42 24 12s-.01-2.78-.057-3.95c-.05-1.17-.22-1.995-.522-2.784a6.9 6.9 0 00-1.618-2.583 6.9 6.9 0 00-2.583-1.618c-.789-.3-1.614-.472-2.784-.522C14.78.01 14.42 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="#" class="social-icon">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="border-t dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400"
      >
        <p>جميع الحقوق محفوظة &copy; {{ new Date().getFullYear() }} - شفاء</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";
</script>
