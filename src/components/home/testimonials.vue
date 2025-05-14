<template>
  <section class="testimonials" id="testimonials">
    <img src="https://cdn.tabitabipo.fun/tree.png" class="tree-1" />
    <img src="https://cdn.tabitabipo.fun/tree.png" class="tree-2" />
    <div class="testimonial-col col">
      <div class="copy">
        <h1>Become a part of the legend!</h1>
        <p>Here's what our players has to say.</p>
      </div>

      <Vue3Marquee :pauseOnHover="true">
        <div class="testimonial">
          <div class="overlay"></div>
          <img src="https://cdn.tabitabipo.fun/testimonial-1.png" />
          <div class="testimonial-copy">
            <p>
              “Tabi-Tabi Po brought back the stories I heard as a child — but
              this time, I could actually play them! It’s so refreshing to see a
              board game that celebrates Filipino folklore in a fun and
              meaningful way. I’m proud to share this with my own kids now.”
            </p>
            <p class="name">— Carlo D., Manila 2025</p>
          </div>
        </div>
        <div class="testimonial">
          <div class="overlay"></div>
          <img src="https://cdn.tabitabipo.fun/testimonial-2.png" />
          <div class="testimonial-copy">
            <p>
              “My kids were hooked the moment the duwende showed up! Not only is
              the game engaging, but it also teaches them about our rich
              mythology. It sparked so many questions and stories at the dinner
              table — we’ve never had so much fun learning about our roots.”
            </p>
            <p class="name">— Aimee L., Laguna 2025</p>
          </div>
        </div>
        <div class="testimonial">
          <div class="overlay"></div>
          <img src="https://cdn.tabitabipo.fun/testimonial-3.png" />
          <div class="testimonial-copy">
            <p>
              “The moment the game starts, you’re pulled into a mystical world
              that feels both eerie and exciting. I love how each character
              challenges you in different ways — it's not just a game, it's a
              full-on adventure!”
            </p>
            <p class="name">— Jules M., Caloocan 2025</p>
          </div>
        </div>
        <div class="testimonial">
          <div class="overlay"></div>
          <img src="https://cdn.tabitabipo.fun/testimonial-4.png" />
          <div class="testimonial-copy">
            <p>
              “As an educator, I’m always looking for creative ways to connect
              students to our cultural heritage. Tabi-Tabi Po does that
              beautifully. It’s interactive, informative, and a fantastic tool
              for opening discussions about Philippine mythology.”
            </p>
            <p class="name">— Prof. Liza T., Novaliches 2025</p>
          </div>
        </div>
        <div class="testimonial">
          <div class="overlay"></div>
          <img src="https://cdn.tabitabipo.fun/testimonial-5.png" />
          <div class="testimonial-copy">
            <p>
              “I didn’t expect to fall in love with a board game — but Tabi-Tabi
              Po is pure magic! From the vibrant characters to the unpredictable
              twists, it feels like you’re part of a living legend. Every round
              is a new tale waiting to unfold.”
            </p>
            <p class="name">— Nico S., Pasay 2025</p>
          </div>
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
