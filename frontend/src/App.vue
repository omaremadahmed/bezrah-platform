<template>
  <div class="app-wrapper">
    <transition name="preloader">
      <div v-if="isNavigating" class="preloader-screen">
        <Logo inverse class="preloader-logo" />
      </div>
    </transition>

    <Navbar />
    <CartDrawer />
    <ContactRail />

    <main :class="['app-main', { 'app-main--home': route.path === '/' }]">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div class="site-footer__brand">
          <Logo inverse />
          <p>{{ $t('footer.description') }}</p>
        </div>

        <nav class="site-footer__group" :aria-label="$t('footer.company')">
          <h2>{{ $t('footer.company') }}</h2>
          <router-link to="/">{{ $t('nav.home') }}</router-link>
          <router-link to="/about">{{ $t('nav.about') }}</router-link>
          <router-link to="/products">{{ $t('nav.products') }}</router-link>
          <router-link to="/request-a-quote">{{ $t('nav.requestQuote') }}</router-link>
          <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
        </nav>

        <nav class="site-footer__group" :aria-label="$t('footer.categories')">
          <h2>{{ $t('footer.categories') }}</h2>
          <router-link v-for="category in categoryLinks" :key="category.to" :to="category.to">
            {{ category.label }}
          </router-link>
        </nav>

        <div class="site-footer__group">
          <h2>{{ $t('footer.contact') }}</h2>
          <template v-if="hasConfiguredContact">
            <a v-if="contactLinks.email" :href="contactLinks.email">{{ contactConfig.email }}</a>
            <a v-if="contactLinks.phone" :href="contactLinks.phone" dir="ltr">{{ contactConfig.phone }}</a>
            <a v-if="contactLinks.whatsapp" :href="contactLinks.whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a v-if="contactLinks.telegram" :href="contactLinks.telegram" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            <a href="https://www.linkedin.com/company/bezrah" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/bezrah" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </template>
          <p v-else class="site-footer__muted">{{ $t('footer.missingContact') }}</p>

          <div class="site-footer__legal">
            <router-link to="/privacy">{{ $t('footer.privacy') }}</router-link>
            <router-link to="/terms">{{ $t('footer.terms') }}</router-link>
          </div>
        </div>
      </div>

      <div class="container site-footer__bottom">
        <p>© 2026 Bezrah. {{ $t('footer.copyright') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import CartDrawer from './components/CartDrawer.vue'
import Logo from './components/Logo.vue'
import ContactRail from './components/ContactRail.vue'
import AOS from 'aos'
import { contactConfig, getContactLinks, hasAnyContactMethod } from './config/contact'

const { locale, t } = useI18n()
const router = useRouter()
const route = useRoute()
const isNavigating = ref(false)

const contactLinks = getContactLinks()
const hasConfiguredContact = hasAnyContactMethod()

const categoryLinks = computed(() => [
  { to: '/products/frozen-vegetables', label: t('home.vegetablesTitle') },
  { to: '/products/frozen-fruits', label: t('home.fruitsTitle') },
  { to: '/products/olives', label: t('home.olivesTitle') },
  { to: '/products/peppers', label: t('home.peppersTitle') },
  { to: '/products/pickles', label: t('home.picklesTitle') },
])

const upsertMeta = (selector, attrs) => {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

const upsertCanonical = () => {
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', `${window.location.origin}${route.path}`)
}

const localizedMetaValue = (value, fallback = '') => {
  if (typeof value === 'string') return value
  return value?.[locale.value] || value?.en || fallback
}

const updateDocumentMeta = () => {
  const isArabic = locale.value === 'ar'
  document.documentElement.setAttribute('lang', isArabic ? 'ar' : 'en')
  document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr')

  const title = localizedMetaValue(route.meta.title, t('title'))
  const description = localizedMetaValue(
    route.meta.description,
    isArabic
      ? 'بذرة شركة زراعية وغذائية متوسطية للتصدير.'
      : 'Bezrah is a Mediterranean agricultural and food export company.'
  )
  const fullTitle = route.path === '/' ? `${t('title')} | ${title}` : `${title} | ${t('title')}`

  document.title = fullTitle
  upsertMeta('meta[name="description"]', { name: 'description', content: description })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
  upsertCanonical()
}

onMounted(() => {
  updateDocumentMeta()
  isNavigating.value = true
  window.setTimeout(() => {
    isNavigating.value = false
  }, 450)
})

watch(
  () => [locale.value, route.fullPath],
  () => updateDocumentMeta(),
  { immediate: true }
)

router.beforeEach(async (to, from) => {
  if (to.path !== from.path) {
    isNavigating.value = true
    await new Promise((resolve) => window.setTimeout(resolve, 90))
  }
  return true
})

router.afterEach(() => {
  window.setTimeout(() => {
    isNavigating.value = false
    AOS.refreshHard()
  }, 400)
})
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-cream);
  color: var(--color-charcoal);
}

.preloader-screen {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-forest);
}

.preloader-logo {
  animation: preloader-pulse 900ms ease-in-out infinite alternate;
}

.app-main {
  flex: 1 0 auto;
  padding-top: 78px;
}

.app-main--home {
  padding-top: 0;
}

.site-footer {
  background: var(--color-forest);
  color: var(--color-cream);
  padding-block: 64px 28px;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: minmax(240px, 1.3fr) repeat(3, minmax(150px, 1fr));
  gap: 42px;
}

.site-footer__brand p {
  max-width: 360px;
  color: rgba(244, 241, 232, 0.78);
  margin-top: 18px;
}

.site-footer__group {
  display: grid;
  align-content: start;
  gap: 12px;
}

.site-footer__group h2 {
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.2;
  margin: 0 0 6px;
}

[dir='rtl'] .site-footer__group h2 {
  font-family: var(--font-ar-body);
}

.site-footer__group a,
.site-footer__muted,
.site-footer__bottom {
  color: rgba(244, 241, 232, 0.74);
  font-size: 0.95rem;
}

.site-footer__group a {
  transition: color 160ms ease;
}

.site-footer__group a:hover {
  color: #fff;
}

.site-footer__legal {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 14px;
}

.site-footer__bottom {
  border-top: 1px solid rgba(244, 241, 232, 0.14);
  margin-top: 46px;
  padding-top: 24px;
}

.site-footer__bottom p {
  margin: 0;
  font-size: 0.9rem;
}

.preloader-enter-active,
.preloader-leave-active,
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 260ms ease;
}

.preloader-enter-from,
.preloader-leave-to,
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

@keyframes preloader-pulse {
  from {
    opacity: 0.7;
    transform: scale(0.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 980px) {
  .app-main {
    padding-top: 68px;
  }

  .app-main--home {
    padding-top: 0;
  }

  .site-footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .site-footer {
    padding-block-start: 48px;
  }

  .site-footer__grid {
    grid-template-columns: 1fr;
    gap: 34px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .preloader-logo {
    animation: none;
  }

  .preloader-enter-active,
  .preloader-leave-active,
  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none;
  }
}
</style>
