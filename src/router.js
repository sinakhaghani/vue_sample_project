import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/pages/Home';
import UserTemplate from './components/pages/users/Template';
import UserIndex from './components/pages/users/Index';
import UserShow from './components/pages/users/Show';

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/users', name: 'users', component: UserTemplate, children:[
            {path: '', name: 'users', component: UserIndex},
            {path: '/users/:id', name: 'userId', component: UserShow}
        ]},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;