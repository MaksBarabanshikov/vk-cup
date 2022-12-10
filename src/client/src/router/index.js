import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/view/HomeView.vue";
import NotFound from "@/view/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
