<template>
  <section class="typeform" id="book-now">
    <h1>Book Us Now!</h1>
    <div data-tf-live="01JV7FJ8P1VV3BM145H726FNRM"></div>
  </section>
</template>

<script>
export default {
  name: "TypeformEmbed",
  mounted() {
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>
