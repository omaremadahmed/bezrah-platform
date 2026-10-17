<template>
  <nav
    :class="[
      'site-header',
      {
        'site-header--solid': isScrolled || route.path !== '/',
        'site-header--open': mobileMenuOpen,
      },
    ]"
    aria-label="Primary navigation"
  >
    <div class="site-header__inner">
      <router-link to="/" class="site-header__brand" @click="closeMobileMenu">
        <Logo inverse />
      </router-link>

      <div class="site-header__desktop">
        <router-link v-for="item in navLinks" :key="item.to" :to="item.to" class="nav-link">
          {{ item.label }}
        </router-link>

        <div class="products-menu">
          <router-link to="/products" class="nav-link nav-link--dropdown">
            {{ $t('nav.products') }}
            <svg class="nav-link__chevron" viewBox="0 0 20 20" aria-hidden="true">
              <path d="m5 7 5 5 5-5" />
            </svg>
          </router-link>
          <div class="dropdown-menu" role="menu">
            <router-link
              v-for="category in productLinks"
              :key="category.to"
              :to="category.to"
              class="dropdown-item"
              role="menuitem"
            >
              {{ category.label }}
            </router-link>
          </div>
        </div>

        <router-link to="/contact" class="nav-link">
          {{ $t('nav.contact') }}
        </router-link>
      </div>

      <div class="site-header__actions">
        <button class="language-toggle" type="button" @click="toggleLocale">
          {{ $t('common.switchLanguage') }}
        </button>

        <router-link to="/quotation" class="quote-link">
          {{ $t('nav.requestQuote') }}
        </router-link>
      </div>

      <div class="site-header__mobile-actions">
        <button class="language-toggle language-toggle--mobile" type="button" @click="toggleLocale">
          {{ locale === 'en' ? 'AR' : 'EN' }}
        </button>
        <button
          class="menu-toggle"
          type="button"
          :aria-label="mobileMenuOpen ? $t('common.closeMenu') : $t('common.openMenu')"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg v-if="!mobileMenuOpen" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <transition name="drawer">
    <div v-if="mobileMenuOpen" class="mobile-drawer-shell">
      <button class="mobile-drawer-backdrop" type="button" :aria-label="$t('common.closeMenu')" @click="closeMobileMenu"></button>
      <aside class="mobile-drawer" aria-label="Mobile navigation">
        <div class="mobile-drawer__top">
          <Logo />
          <button class="drawer-close" type="button" :aria-label="$t('common.closeMenu')" @click="closeMobileMenu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div class="mobile-drawer__nav">
          <router-link v-for="item in drawerLinks" :key="item.to" :to="item.to" class="mobile-nav-link">
            {{ item.label }}
          </router-link>
        </div>

        <router-link to="/quotation" class="mobile-quote-link">
          {{ $t('nav.requestQuote') }}
        </router-link>
      </aside>
    </div>
  </transition>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Logo from './Logo.vue'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()
const authStore = useAuthStore()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleLogout = async () => {
  await authStore.logout()
  router.push('/')
}

const navLinks = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/about', label: t('nav.about') },
])

const productLinks = computed(() => [
  { to: '/products/frozen-vegetables', label: t('home.vegetablesTitle') },
  { to: '/products/frozen-fruits', label: t('home.fruitsTitle') },
  { to: '/products/olives', label: t('home.olivesTitle') },
  { to: '/products/peppers', label: t('home.peppersTitle') },
  { to: '/products/pickles', label: t('home.picklesTitle') },
])

const drawerLinks = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/about', label: t('nav.about') },
  { to: '/products', label: t('nav.products') },
  { to: '/contact', label: t('nav.contact') },
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 16
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleLocale = () => {
  const nextLocale = locale.value === 'en' ? 'ar' : 'en'
  locale.value = nextLocale
  localStorage.setItem('locale', nextLocale)
}

watch(
  () => route.fullPath,
  () => closeMobileMenu()
)

watch(mobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.site-header {
  position: fixed;
  inset-block-start: 0;
  inset-inline: 0;
  z-index: 80;
  border-bottom: 1px solid transparent;
  background: transparent;
  transition: background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.site-header--solid,
.site-header--open {
  border-color: rgba(244, 241, 232, 0.14);
  background: rgba(54, 83, 39, 0.96);
  box-shadow: 0 14px 30px rgba(42, 42, 42, 0.12);
}

.site-header__inner {
  display: flex;
  width: min(100% - 32px, 1220px);
  min-height: 78px;
  margin-inline: auto;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.site-header__desktop {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex: 1 1 auto;
}

.nav-link,
.language-toggle,
.quote-link {
  min-height: 42px;
  border-radius: 8px;
  color: rgba(244, 241, 232, 0.9);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
}

[dir='rtl'] .nav-link,
[dir='rtl'] .language-toggle,
[dir='rtl'] .quote-link {
  font-family: var(--font-ar-body);
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;
  position: relative;
  transition: color 180ms ease, background-color 180ms ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
  background: rgba(244, 241, 232, 0.1);
}

.nav-link__chevron {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  transition: transform 180ms ease;
}

.products-menu {
  position: relative;
}

.products-menu:hover .nav-link__chevron,
.products-menu:focus-within .nav-link__chevron {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  inset-block-start: calc(100% + 10px);
  inset-inline-start: 50%;
  min-width: 230px;
  overflow: hidden;
  border: 1px solid rgba(54, 83, 39, 0.12);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 20px 48px rgba(42, 42, 42, 0.16);
  opacity: 0;
  transform: translate(-50%, 8px);
  visibility: hidden;
  transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
}

[dir='rtl'] .dropdown-menu {
  transform: translate(50%, 8px);
}

.products-menu:hover .dropdown-menu,
.products-menu:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(-50%, 0);
  visibility: visible;
}

[dir='rtl'] .products-menu:hover .dropdown-menu,
[dir='rtl'] .products-menu:focus-within .dropdown-menu {
  transform: translate(50%, 0);
}

.dropdown-item {
  display: block;
  padding: 13px 16px;
  color: var(--color-charcoal);
  font-size: 0.95rem;
  font-weight: 700;
  transition: background-color 160ms ease, color 160ms ease;
}

.dropdown-item:hover,
.dropdown-item.router-link-active {
  background: var(--color-cream);
  color: var(--color-forest);
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-toggle {
  border: 1px solid rgba(244, 241, 232, 0.28);
  background: rgba(244, 241, 232, 0.08);
  cursor: pointer;
  padding: 0 14px;
}

.language-toggle:hover {
  background: rgba(244, 241, 232, 0.16);
}

.quote-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-leaf);
  color: #fff;
  padding: 0 18px;
  box-shadow: 0 12px 24px rgba(16, 55, 24, 0.18);
  transition: background-color 180ms ease, transform 180ms ease;
}

.quote-link:hover {
  background: #2f7738;
  transform: translateY(-1px);
}

.site-header__mobile-actions {
  display: none;
  align-items: center;
  gap: 8px;
}

.language-toggle--mobile,
.menu-toggle,
.drawer-close {
  width: 42px;
  height: 42px;
  padding: 0;
}

.menu-toggle,
.drawer-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(244, 241, 232, 0.28);
  border-radius: 8px;
  background: rgba(244, 241, 232, 0.08);
  color: #fff;
  cursor: pointer;
}

.cart-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid rgba(244, 241, 232, 0.28);
  border-radius: 8px;
  color: rgba(244, 241, 232, 0.9);
  padding: 8px 12px;
  cursor: pointer;
  transition: all 180ms ease;
  position: relative;
}

.cart-button:hover {
  background: rgba(244, 241, 232, 0.16);
  color: #fff;
}

.cart-button svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cart-button__label {
  font-weight: 700;
  font-size: 0.95rem;
}

.cart-button__count {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #e74c3c;
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  line-height: 1;
}

[dir="rtl"] .cart-button__count {
  right: auto;
  left: -6px;
}

.cart-icon-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(244, 241, 232, 0.08);
  border: 1px solid rgba(244, 241, 232, 0.28);
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}

.cart-icon-button svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cart-icon-button__count {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #e74c3c;
  color: #fff;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 10px;
  line-height: 1;
}

.menu-toggle svg,
.drawer-close svg {
  width: 23px;
  height: 23px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 2;
}

.mobile-drawer-shell {
  position: fixed;
  inset: 0;
  z-index: 90;
}

.mobile-drawer-backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: rgba(20, 28, 18, 0.44);
}

.mobile-drawer {
  position: absolute;
  inset-block: 0;
  inset-inline-end: 0;
  display: flex;
  width: min(86vw, 360px);
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  background: var(--color-cream);
  padding: 22px;
  box-shadow: -18px 0 48px rgba(42, 42, 42, 0.22);
}

[dir='rtl'] .mobile-drawer {
  inset-inline-end: auto;
  inset-inline-start: 0;
  box-shadow: 18px 0 48px rgba(42, 42, 42, 0.22);
}

.mobile-drawer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.drawer-close {
  border-color: rgba(54, 83, 39, 0.18);
  background: #fff;
  color: var(--color-forest);
}

.mobile-drawer__nav {
  display: grid;
  gap: 6px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  min-height: 46px;
  border-radius: 8px;
  color: var(--color-charcoal);
  font-weight: 800;
  padding-inline: 14px;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background: #fff;
  color: var(--color-forest);
}

.mobile-quote-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  border-radius: 8px;
  background: var(--color-forest);
  color: #fff;
  font-weight: 800;
  padding-inline: 18px;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 190ms ease;
}

.drawer-enter-active .mobile-drawer,
.drawer-leave-active .mobile-drawer {
  transition: transform 220ms ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .mobile-drawer,
.drawer-leave-to .mobile-drawer {
  transform: translateX(100%);
}

[dir='rtl'] .drawer-enter-from .mobile-drawer,
[dir='rtl'] .drawer-leave-to .mobile-drawer {
  transform: translateX(-100%);
}

@media (max-width: 980px) {
  .site-header__inner {
    min-height: 68px;
  }

  .site-header__desktop,
  .site-header__actions {
    display: none;
  }

  .site-header__mobile-actions {
    display: flex;
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-header,
  .nav-link,
  .nav-link__chevron,
  .dropdown-menu,
  .quote-link,
  .drawer-enter-active,
  .drawer-leave-active,
  .drawer-enter-active .mobile-drawer,
  .drawer-leave-active .mobile-drawer {
    transition: none;
  }
}
</style>
