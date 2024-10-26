import { createApp } from 'vue'
import App from './App.vue'
import Header from "@/sections/Header.vue";
import Footer from "@/sections/Footer.vue";
import store from "@/store/store.js";
import Modal from "@/components/Modal.vue";
import router from "@/router/router.js";
import Partners from "@/sections/Partners.vue";

/**
 * Create the app
 * @type {App<Element>}
 */
const app=createApp(App);

/**
 * Include some top-level components
 */
app.component("Footer",Footer);
app.component("Modal",Modal);
app.component("Header",Header);
app.component("Partners",Partners);

app.use(store);
app.use(router);

/**
 * Mount the app
 */
app.mount('#app');