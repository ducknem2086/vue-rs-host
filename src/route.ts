// ./src/router.ts
import { loadRemote } from '@module-federation/enhanced/runtime'
import { createRouter, createWebHistory } from 'vue-router'
import { createRemoteAppComponent } from "@module-federation/bridge-vue3";


const Remote2 = createRemoteAppComponent({
    loader: () => loadRemote('remote1/export-app'),
});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Define your routes here
        {path: '/', redirect: '/remote1'},
        {path: '/remote1/:pathMatch(.*)*', component: Remote2},
        // Other routes
    ],
});
export default router;