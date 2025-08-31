import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./components/views/HomeView.vue";
import { useAuth } from "./auth";
import LoginView from "./components/views/LoginView.vue";
import RegisterView from "./components/views/RegisterView.vue";
import IndicatorsView from "./components/views/IndicatorsView.vue";
import SavedDataView from "./components/views/SavedDataView.vue";


const routes = [
    {path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true }},
    {path: '/login', name: 'login', component: LoginView},
    {path: '/register', name: 'register', component: RegisterView},
    {path: '/indicators', name: 'indicators', component: IndicatorsView, meta: { requiresAuth: true }},
    {path: '/saved-data', name: 'saved-data', component: SavedDataView, meta: { requiresAuth: true }}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const { isLogged } = useAuth();

    if (to.meta.requiresAuth && !isLogged.value) {
        next({ name: 'login' });
    } else if ((to.name === 'login' || to.name === 'register') && isLogged.value) {
        next({ name: 'home' });
    } else {
        next();
    }
});

export default router;