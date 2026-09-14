import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'
import './style.css'
import App from './App.vue'
import messages from './i18n/messages'
import { useAuthStore } from './stores/auth'

const supportedLocales = ['en', 'ar']
const savedLocale = localStorage.getItem('locale')
const configuredLocale = import.meta.env.VITE_APP_LOCALE || 'ar'

const initialLocale = supportedLocales.includes(savedLocale)
  ? savedLocale
  : supportedLocales.includes(configuredLocale)
    ? configuredLocale
    : 'ar'

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
})

const initApp = async () => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)
  app.use(i18n)

  const authStore = useAuthStore()
  authStore.initialize().catch((err) => console.warn(err))

  app.mount('#app')

  AOS.init({
    duration: 650,
    easing: 'ease-out-cubic',
    once: true,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  })
}

initApp()
