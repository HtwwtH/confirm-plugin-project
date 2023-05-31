import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { confirmPlugin } from './confirmPlugin'

createApp(App)
  .use(confirmPlugin)
  .mount('#app')
