import Vue from 'vue';
import VueRouter from 'vue-router';
import { authService } from '@/vue.auth.service.js'

Vue.use(VueRouter);

const Home = () => import( /* webpackChunkName: "home" */ '@/views/Home.vue');
const TestSimpleAPI = () => import( /* webpackChunkName: "simple-api" */ '@/views/TestSimpleAPI.vue');
const TestMonitoring = () => import( /* webpackChunkName: "monitoring" */ '@/views/TestMonitoring.vue');
const TestAuthentication = () => import( /* webpackChunkName: "auth" */ '@/views/TestAuthentication.vue');

export const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: '/home', component: Home },
        { path: '/simple-api', component: TestSimpleAPI },
        { path: '/monitoring', component: TestMonitoring },
        { path: '/auth', component: TestAuthentication, meta: { requiresAuth: true } },

        { path: '/login', beforeEnter() { window.location.replace('/login'); } },
        { path: '/logout', beforeEnter() { window.location.replace('/logout'); } },
        { path: '*', redirect: '/home' } // otherwise redirect to home
    ]
});

router.beforeEach(async (to, from, next) => {
    const { requiresAuth } = to.meta || false; //set default to true in production

    if (requiresAuth) {
        const isLoggedIn = await authService.isLoggedIn();
        if (!isLoggedIn) { return next('/login') }
    }
    return next();
})