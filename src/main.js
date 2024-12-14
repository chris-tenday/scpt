import { createApp } from 'vue'
import App from './App.vue'
import Header from "@/sections/Header.vue";
import Footer from "@/sections/Footer.vue";
import store from "@/store/store.js";
import Modal from "@/components/Modal.vue";
import router from "@/router/router.js";
import Partners from "@/sections/Partners.vue";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

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
app.component("phoneInput",VuePhoneNumberInput);

app.use(store);
app.use(router);

app.config.globalProperties.$resolvePath=function(path){
    var host=window.location.host;
    var url= ""
    if(host.includes("localhost"))
    {
        url=path;
    }
    else
    {
        try {

            if(path[0]=="/")
            {
                url=""+path.slice(1);
            }
            else
            {
                url=path;
            }
        }catch(e){}

    }

    return url;
}


/**
 * Mount the app
 */
app.mount('#app');