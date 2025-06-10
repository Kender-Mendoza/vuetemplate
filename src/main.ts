import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'
import { Ripple } from 'vuetify/directives'

const vuetify = createVuetify({
  components: {
    VBtn
  },
  directives: {
    Ripple
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
