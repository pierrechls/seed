import Home from '@/views/Home.vue';
import Plant from '@/views/Plant.vue';
import Garden from '@/views/Garden.vue';

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/home',
        redirect: '/',
    },
    {
        path: '/plant',
        name: 'Plant',
        component: Plant,
    },
    {
        path: '/garden',
        name: 'Garden',
        component: Garden,
    },
];
