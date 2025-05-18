<template>
  <section class="testimonials" id="testimonials">
    <img src="https://cdn.tabitabipo.fun/tree.png" class="tree-1" />
    <img src="https://cdn.tabitabipo.fun/tree.png" class="tree-2" />
    <div class="testimonial-col col">
      <div class="copy">
        <h1>Become a part of the legend!</h1>
        <p>
          A digital gallery of the players who won the game and successfully
          escaped from the realm of guardians of the forest.<br />
          Submit your group photo to be featured!
        </p>
      </div>

      <Vue3Marquee :pauseOnHover="true">
        <div class="testimonial">
          <img src="https://cdn.tabitabipo.fun/gallery-pic-1.jpg" />
        </div>
        <div class="testimonial">
          <img src="https://cdn.tabitabipo.fun/gallery-pic-2.jpg" />
        </div>
        <div class="testimonial">
          <img src="https://cdn.tabitabipo.fun/gallery-pic-1.jpg" />
        </div>
        <div class="testimonial">
          <img src="https://cdn.tabitabipo.fun/gallery-pic-2.jpg" />
        </div>
        <div class="testimonial">
          <img src="https://cdn.tabitabipo.fun/gallery-pic-1.jpg" />
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPaused: false,
    };
  },
};
</script>

<style></style>
