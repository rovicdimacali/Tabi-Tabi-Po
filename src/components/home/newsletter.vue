<template>
  <Toast />
  <section class="newsletter wrap">
    <div class="image-container">
      <img src="https://cdn.tabitabipo.fun/newsletter-image.png" />
    </div>
    <div class="form col">
      <h1>Want Updates?</h1>
      <p>
        Subscribe to our newsletter to be updated on the latest events,
        features, and more!
      </p>
      <div class="row-10">
        <InputText
          v-model="email"
          type="text"
          placeholder="Email Address"
          @keypress.enter="submit"
        />
        <Button icon="pi pi-arrow-right" rounded @click="submit" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
  methods: {
    submit() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(this.email)) {
        this.$toast.add({
          severity: "error",
          summary: "Invalid Email",
          detail: "Please enter a valid email address.",
          life: 3000,
        });
        return;
      }

      // Clear email and show success toast
      this.email = null;
      this.$toast.add({
        severity: "success",
        summary: "Subscribed",
        detail: "You have subscribed to our newsletter",
        life: 3000,
      });
    },
  },
};
</script>

<style></style>
