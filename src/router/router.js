import {createRouter,createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import SingleBlog from "@/pages/SingleBlog.vue";

var routes=[
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/article/:id",
        name:"article",
        component: SingleBlog
    }
];



const router=createRouter(
    {
        history:createWebHistory(),
        routes:routes
    }
);

export default router;