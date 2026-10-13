<template>
  <div class="contact-rail" aria-label="Contact shortcuts">
    <component
      :is="item.href ? 'a' : 'span'"
      v-for="item in railItems"
      :key="item.key"
      class="contact-rail__item"
      :class="{ 'contact-rail__item--disabled': !item.href }"
      :href="item.href || undefined"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noopener noreferrer' : undefined"
      :aria-disabled="!item.href"
      :data-tooltip="item.tooltip"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path :d="item.icon" />
      </svg>
    </component>
  </div>

  <a
    v-if="mobileWhatsappHref"
    class="whatsapp-fab"
    :href="mobileWhatsappHref"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path :d="icons.whatsapp" />
    </svg>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { contactConfig, getContactLinks } from '../config/contact'

const { locale, t } = useI18n()
const links = getContactLinks()

const icons = {
  whatsapp:
    'M12 2.2A9.7 9.7 0 0 0 3.7 17l-1.1 4.1 4.2-1.1A9.7 9.7 0 1 0 12 2.2Zm0 1.9a7.8 7.8 0 0 1 6.6 11.9 7.7 7.7 0 0 1-9.3 2.5l-.3-.2-2.5.7.7-2.4-.2-.3A7.8 7.8 0 0 1 12 4.1Zm-3.4 4c-.2 0-.5.1-.7.3-.4.4-.9 1-.9 1.9 0 .9.6 1.8.7 2 .1.1 1.3 2.1 3.2 2.9 1.6.7 2 .6 2.4.6.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1l-.4-.2-1.5-.7c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1-.4-1.8-1.1-.7-.6-1.1-1.4-1.3-1.7-.1-.2 0-.3.1-.5l.4-.5c.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4L8.3 8.5c-.1-.3-.3-.4-.5-.4h.8Z',
  telegram:
    'M21.8 4.4c.2-1-.7-1.8-1.6-1.4L2.9 9.7c-1.1.4-1.1 1.9 0 2.3l4.4 1.4 1.7 5.5c.3 1 1.6 1.2 2.2.4l2.5-3.2 4.6 3.4c.8.6 1.9.1 2.1-.9l1.4-14.2ZM18.9 6.2 9.5 14.5l-.3 2.6-1.1-3.6 10.8-7.3Z',
  email:
    'M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm0 2c-.2 0-.4.1-.5.2l8 5.3 8-5.3c-.1-.1-.3-.2-.5-.2h-15Zm15.5 2.5-7.4 4.9a1 1 0 0 1-1.2 0L4 9.5v7c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-7Z',
  phone:
    'M7.4 3.2c.6-.3 1.4-.1 1.7.5l1.5 3c.3.6.1 1.2-.3 1.7l-1.1 1c.8 1.7 2.1 3.1 3.8 4l1.2-1.1c.5-.4 1.2-.5 1.7-.2l2.9 1.6c.6.3.9 1 .6 1.7l-1.1 2.8c-.3.6-.9 1-1.5.9C10.4 18.9 5.1 13.6 4.4 6.7c-.1-.7.3-1.3.9-1.5l2.1-2Z',
  linkedin:
    'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.71-1.6-1.6-1.6Z',
  facebook:
    'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12Z',
}

const labels = computed(() => ({
  whatsapp: locale.value === 'ar' ? 'واتساب' : 'WhatsApp',
  telegram: locale.value === 'ar' ? 'تيليجرام' : 'Telegram',
  email: locale.value === 'ar' ? 'البريد الإلكتروني' : 'Email',
  phone: locale.value === 'ar' ? 'الهاتف' : 'Phone',
  linkedin: locale.value === 'ar' ? 'لينكد إن' : 'LinkedIn',
  facebook: locale.value === 'ar' ? 'فيسبوك' : 'Facebook',
}))

const railItems = computed(() => [
  {
    key: 'whatsapp',
    href: links.whatsapp,
    external: true,
    icon: icons.whatsapp,
    tooltip: contactConfig.whatsapp || labels.value.whatsapp,
  },
  {
    key: 'telegram',
    href: links.telegram,
    external: true,
    icon: icons.telegram,
    tooltip: contactConfig.telegram ? `@${contactConfig.telegram}` : labels.value.telegram,
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/company/bizrah.com',
    external: true,
    icon: icons.linkedin,
    tooltip: labels.value.linkedin,
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com/share/18u9uu6wgn/?mibextid=wwXIfr',
    external: true,
    icon: icons.facebook,
    tooltip: labels.value.facebook,
  },
  {
    key: 'email',
    href: links.email,
    icon: icons.email,
    tooltip: contactConfig.email || t('common.unavailable'),
  },
  {
    key: 'phone',
    href: links.phone,
    icon: icons.phone,
    tooltip: contactConfig.phone || t('common.unavailable'),
  },
])

const mobileWhatsappHref = computed(() => links.whatsapp)
</script>

<style scoped>
.contact-rail {
  position: fixed;
  inset-block-start: 50%;
  inset-inline-end: 18px;
  z-index: 70;
  display: grid;
  gap: 8px;
  transform: translateY(-50%);
}

[dir='rtl'] .contact-rail {
  inset-inline-end: auto;
  inset-inline-start: 18px;
}

.contact-rail__item,
.whatsapp-fab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(244, 241, 232, 0.2);
  border-radius: 8px;
  background: rgba(54, 83, 39, 0.96);
  color: #fff;
  box-shadow: 0 12px 30px rgba(42, 42, 42, 0.16);
  position: relative;
  transition: background-color 180ms ease, transform 180ms ease;
}

.contact-rail__item svg,
.whatsapp-fab svg {
  width: 21px;
  height: 21px;
  fill: currentColor;
}

.contact-rail__item:not(.contact-rail__item--disabled):hover {
  background: var(--color-leaf);
  transform: translateX(-2px);
}

[dir='rtl'] .contact-rail__item:not(.contact-rail__item--disabled):hover {
  transform: translateX(2px);
}

.contact-rail__item::before {
  content: attr(data-tooltip);
  position: absolute;
  inset-inline-end: calc(100% + 10px);
  inset-block-start: 50%;
  width: max-content;
  max-width: 220px;
  border-radius: 8px;
  background: var(--color-charcoal);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 700;
  opacity: 0;
  padding: 7px 10px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: opacity 160ms ease;
}

[dir='rtl'] .contact-rail__item::before {
  inset-inline-end: auto;
  inset-inline-start: calc(100% + 10px);
}

.contact-rail__item:hover::before,
.contact-rail__item:focus-visible::before {
  opacity: 1;
}

.contact-rail__item--disabled {
  cursor: not-allowed;
  opacity: 0.48;
}

.whatsapp-fab {
  position: fixed;
  inset-inline-end: 18px;
  inset-block-end: 18px;
  z-index: 72;
  display: none;
  background: var(--color-leaf);
}

[dir='rtl'] .whatsapp-fab {
  inset-inline-end: auto;
  inset-inline-start: 18px;
}

@media (max-width: 980px) {
  .contact-rail {
    display: none;
  }

  .whatsapp-fab {
    display: inline-flex;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-rail__item,
  .contact-rail__item::before {
    transition: none;
  }
}
</style>
