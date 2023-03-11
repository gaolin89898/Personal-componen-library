import { createApp } from 'vue';
// import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue';
import router from './router/index';
import IconSVG from '@/components/IconSVG/index.vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia = createPinia();
createApp(App).use(router).use(ElementPlus).component('IconSVG',IconSVG).use(pinia).mount('#app');
