import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Doctors from "../views/Doctors.vue";
import Pharmacies from "../views/Pharmacies.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/doctors",
    name: "Doctors",
    component: Doctors,
  },
  {
    path: "/pharmacies",
    name: "Pharmacies",
    component: Pharmacies,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
