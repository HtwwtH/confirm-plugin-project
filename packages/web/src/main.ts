import './assets/main.css'

import { createApp } from 'vue'
import { confirmPlugin } from '@pkg/confirm'
import App from './App.vue'

createApp(App)
  .use(confirmPlugin)
  .mount('#app')
