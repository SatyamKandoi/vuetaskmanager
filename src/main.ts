// main.ts (or main.js)
import { createApp } from 'vue'
// Import Vuetify and its styles
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Required for Vuetify styles
import App from './App.vue'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light', // Default is dark
    themes: {
      light: {},
      dark: {}
    }
  }
})

// Vuetify configuration

const app = createApp(App)

// Use Vuetify
app.use(vuetify)

app.mount('#app')
