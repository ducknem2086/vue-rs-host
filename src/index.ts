import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from "./route.ts";

createApp(App).use(router).mount('#root');
