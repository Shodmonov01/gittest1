import { createApp } from "vue";
import App from "./App.vue";
import { Collapse } from "./hooks";

createApp(App).component("Collapse", Collapse).mount("#app");
