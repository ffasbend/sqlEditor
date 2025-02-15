// https://primevue.org/vite

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
//import Lara from '@primevue/themes/lara';
import Aura from '@primevue/themes/aura';
import './style.css';
import App from './App.vue';

const app = createApp(App)


// PrimeVue plugin is required to be installed as an application plugin to set up the default configuration.
// Configure PrimeVue to use a theme like Aura.
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.mount('#app')