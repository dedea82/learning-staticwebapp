import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import( /* webpackChunkName: "home" */ '@/views/Home.vue');
const TestSimpleAPI = () => import( /* webpackChunkName: "simple-api" */ '@/views/TestSimpleAPI.vue');
const TestMonitoring = () => import( /* webpackChunkName: "monitoring" */ '@/views/TestMonitoring.vue');

export default new VueRouter({
    mode: "hash",
    routes: [
        { path: '/home', component: Home },
        { path: '/simple-api', component: TestSimpleAPI },
        { path: '/monitoring', component: TestMonitoring },
        { path: '*', redirect: '/home' } // otherwise redirect to home
    ]
});