import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/pages/Home';
import UserIndex from './components/pages/users/index';

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/users', name: 'users', component: UserIndex}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;