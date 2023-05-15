<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <SideBar />

  <MainWindow />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainWindow from "./components/Main.vue";
import SideBar from "./components/SideBar.vue";

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld,
    SideBar,
    MainWindow,
  },
});
</script>

<style>
@import "./assets/styles/normalize.css";
@import "./assets/styles/global.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  gap: 25px;
}

/* .v-collapse {
  transition: height var(--vc-auto-duration) cubic-bezier(0.33, 1, 0.68, 1);
} */
</style>
