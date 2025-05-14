<template>
  <navbar />
  <hero />
  <promotional />
  <tutorial />
  <testimonials />
  <typeform />
  <newsletter />
  <cfooter />
  <ScrollTop />
</template>

<script>
import navbar from "@/layouts/navbar.vue";
import Hero from "@/components/home/hero.vue";
import Promotional from "@/components/home/promotional.vue";
import Tutorial from "@/components/home/tutorial.vue";
import testimonials from "@/components/home/testimonials.vue";
import typeform from "@/components/home/typeform.vue";
import Cfooter from "@/layouts/cfooter.vue";
import newsletter from "@/components/home/newsletter.vue";
export default {
  components: {
    navbar,
    Hero,
    Promotional,
    Tutorial,
    testimonials,
    typeform,
    Cfooter,
    newsletter,
  },
};
</script>

<style></style>
