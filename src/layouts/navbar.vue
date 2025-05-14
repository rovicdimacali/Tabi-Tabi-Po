<template>
  <nav class="navbar row">
    <a class="link" href="#home"> Home </a>
    <a class="link" href="#gameplay"> Gameplay </a>
    <a href="https://tabitabipo.fun">
      <img
        src="https://cdn.tabitabipo.fun/tabitabipo-logo.png"
        alt="Tabi Tabi Po Collapsible Board Game Logo"
        class="logo"
      />
    </a>
    <a class="link" href="#testimonials"> Testimonials </a>
    <a class="link" href="#book-now"> Book Now </a>
    <div class="burger-menu" @click="isSidebarVisible = true">
      <img src="https://cdn.tabitabipo.fun/burger-menu-removebg-preview.png" />
    </div>
  </nav>
  <Drawer
    v-model:visible="isSidebarVisible"
    header="Tabi Tabi Po"
    position="right"
    class="drawer"
  >
    <div class="drawer-links col">
      <a class="link" href="#home" @click="isSidebarVisible = false"> Home </a>
      <a class="link" href="#gameplay" @click="isSidebarVisible = false">
        Gameplay
      </a>
      <a class="link" href="#testimonials" @click="isSidebarVisible = false">
        Testimonials
      </a>
      <a class="link" href="#book-now" @click="isSidebarVisible = false">
        Book Now
      </a>
    </div>
  </Drawer>
</template>

<script>
export default {
  data() {
    return {
      isSidebarVisible: false,
    };
  },
};
</script>

<style></style>
