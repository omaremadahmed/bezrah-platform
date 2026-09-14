const clean = (value) => (typeof value === 'string' ? value.trim() : '')

const digitsOnly = (value) => clean(value).replace(/[^\d]/g, '')

const normalizeTelegram = (value) => clean(value).replace(/^@/, '')

const contactEmail = clean(import.meta.env.VITE_CONTACT_EMAIL)
const contactPhone = clean(import.meta.env.VITE_CONTACT_PHONE)
const whatsappNumber = clean(import.meta.env.VITE_WHATSAPP_NUMBER || contactPhone)
const telegramHandle = normalizeTelegram(import.meta.env.VITE_TELEGRAM_HANDLE)

export const contactConfig = {
  email: contactEmail,
  phone: contactPhone,
  whatsapp: whatsappNumber,
  telegram: telegramHandle,
  address: {
    en: clean(import.meta.env.VITE_CONTACT_ADDRESS_EN),
    ar: clean(import.meta.env.VITE_CONTACT_ADDRESS_AR),
  },
}

export const brandPdfConfig = {
  url: clean(import.meta.env.VITE_BRAND_PDF_URL) || '/assets/bezrah-brand-guidelines.pdf',
  isExplicitlyConfigured: Boolean(clean(import.meta.env.VITE_BRAND_PDF_URL)),
}

export const getContactLinks = () => {
  const whatsappDigits = digitsOnly(whatsappNumber)

  return {
    whatsapp: whatsappDigits ? `https://wa.me/${whatsappDigits}` : '',
    telegram: telegramHandle ? `https://t.me/${telegramHandle}` : '',
    email: contactEmail ? `mailto:${contactEmail}` : '',
    phone: contactPhone ? `tel:${digitsOnly(contactPhone) || contactPhone}` : '',
  }
}

export const hasAnyContactMethod = () => {
  return Boolean(contactEmail || contactPhone || whatsappNumber || telegramHandle)
}
