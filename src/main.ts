import { createApp } from 'vue';
// import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue';
import router from './router/index';


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia = createPinia();
createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app');
