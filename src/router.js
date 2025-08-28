import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./components/views/HomeView.vue";

const routes = [
    {path: '/', component: HomeView},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;