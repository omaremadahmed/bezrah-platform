import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/about', component: { template: '<div>About</div>' } },
    { path: '/products', component: { template: '<div>Products</div>' } },
    { path: '/products/:category', component: { template: '<div>Category</div>' } },
    { path: '/contact', component: { template: '<div>Contact</div>' } },
    { path: '/request-a-quote', component: { template: '<div>Quote</div>' } },
  ],
})

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      title: 'Bezrah',
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'About Us',
        contact: 'Contact Us',
        login: 'Login',
        requestQuote: 'Request a Quote',
      },
      common: {
        switchLanguage: 'العربية',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      },
      home: {
        picklesTitle: 'Pickles',
        olivesTitle: 'Olives',
        vegetablesTitle: 'IQF Vegetables',
        fruitsTitle: 'IQF Fruits',
      },
    },
  }
})

describe('Navbar.vue', () => {
  beforeEach(async () => {
    const localStorageMock = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    }
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      configurable: true,
    })
    Object.defineProperty(globalThis, 'localStorage', {
      value: localStorageMock,
      configurable: true,
    })
    router.push('/')
    await router.isReady()
  })

  it('renders navbar correctly', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [createPinia(), router, i18n]
      }
    })
    expect(wrapper.find('.logo-title').text()).toBe('Bezrah')
  })

  it('has a dropdown for products', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [createPinia(), router, i18n]
      }
    })
    
    const dropdownMenu = wrapper.find('.dropdown-menu')
    expect(dropdownMenu.exists()).toBe(true)
    
    const items = dropdownMenu.findAll('.dropdown-item')
    expect(items.length).toBe(4)
  })
})
