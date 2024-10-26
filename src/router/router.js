import {createRouter,createWebHistory} from "vue-router";
import {defineAsyncComponent} from "vue";

var routes=[
    {
        path:"/",
        name:"home",
        component:defineAsyncComponent({
            loader:()=>import("../pages/Home.vue")
        })
    },
    {
        path:"/article/:id",
        name:"article",
        component: defineAsyncComponent({
            loader:()=> import("../pages/SingleBlog.vue")
        })
    },
    {
        path: "/laposte",
        name:"laposte",
        component:defineAsyncComponent({
            loader:()=> import("../pages/LaPoste.vue")
        })
    },
    {
        name:"telcom",
        path:"/telecom",
        component: defineAsyncComponent({
            loader:() => import("../pages/Telecom.vue")
        })
    },
    {
        name:"finance",
        path:"/postefinance",
        component: defineAsyncComponent({
            loader:()=> import("../pages/PosteFinance.vue")
        })
    },
    {
        name:"ems",
        path:"/ems",
        component: defineAsyncComponent({
            loader:() => import("../pages/Ems.vue")
        })
    },
    {
        name:"postemarket",
        path:"/postemarket",
        component: defineAsyncComponent({
            loader:()=> import("../pages/PosteMarket.vue")
        })
    }
];



const router=createRouter(
    {
        history:createWebHistory(),
        routes:routes
    }
);

export default router;