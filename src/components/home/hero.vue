<template>
  <section class="hero" id="home">
    <Carousel
      :value="banners"
      :numScroll="1"
      circular
      :autoplayInterval="4000"
      :showNavigators="false"
      :showIndicators="false"
    >
      <template #item="slotProps">
        <img :src="slotProps.data" />
      </template>
    </Carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "https://cdn.tabitabipo.fun/banner-1.jpg",
        "https://cdn.tabitabipo.fun/banner-2.png",
        "https://cdn.tabitabipo.fun/banner-3.jpg",
      ],
    };
  },
};
</script>

<style></style>
