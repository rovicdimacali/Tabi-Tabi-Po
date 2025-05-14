import "./assets/style.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Vue3Marquee from "vue3-marquee";

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import Aura from "@primeuix/themes/aura";

import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

import Carousel from "primevue/carousel";
import ScrollTop from "primevue/scrolltop";
import Drawer from "primevue/drawer";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(Vue3Marquee);
app.use(ToastService);

app.component("Toast", Toast);
app.component("Carousel", Carousel);
app.component("ScrollTop", ScrollTop);
app.component("Drawer", Drawer);
app.component("InputText", InputText);
app.component("Button", Button);

app.use(router);

app.mount("#app");
