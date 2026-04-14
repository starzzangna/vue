import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import installAxios from './plugins/axios';

const app = createApp(App);

app.use(createPinia());
app.use(router);
installAxios(app);

app.mount('#app');
