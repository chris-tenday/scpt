import {createRouter,createWebHistory,createWebHashHistory,createMemoryHistory} from "vue-router";
import {defineAsyncComponent} from "vue";
import Home from "@/pages/Home.vue";
import TestPage from "@/pages/TestPage.vue";
import LaPoste from "@/pages/LaPoste.vue";

var routes=[
    {
        path:"",
        name:"home",
        component:Home
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
        name:"telecom",
        path:"/telecom",
        component: defineAsyncComponent({
            loader:() => import("../pages/Telecom.vue")
        })
    },
    {
        name:"postefinance",
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
    },
    {
        path:"/test",
        name:"testpage",
        component: LaPoste
    },
    {
        name:"on",
        path:"/on",
        component:defineAsyncComponent(()=>import("../pages/ON.vue"))
    },
    {
        name:"contact",
        path:"/contact",
        component: defineAsyncComponent(()=>import('../pages/Contact.vue'))
    },
    {
        name:"immobilier",
        path:"/immobilier",
        component: defineAsyncComponent(()=>import("../pages/Immobilier.vue"))
    },
    {
        name:"yeloo",
        path:"/yeloo",
        component: defineAsyncComponent(()=>import("../pages/Yeloo.vue"))
    },
    {
        name:"blog",
        path: "/blog",
        component: defineAsyncComponent(()=>import("../pages/BlogPage.vue"))
    }
];



const router=createRouter(
    {
        history:createWebHashHistory('/#'),
        routes:routes
    }
);

export default router;