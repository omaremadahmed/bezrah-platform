<template>
  <section class="legal-page">
    <div class="container legal-page__inner">
      <p class="legal-page__eyebrow">Bezrah</p>
      <h1>{{ title }}</h1>
      <p>{{ body }}</p>
      <router-link to="/contact" class="btn btn-primary">
        {{ $t('nav.contact') }}
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const isTerms = computed(() => route.meta.legalType === 'terms')
const title = computed(() => t(isTerms.value ? 'legal.termsTitle' : 'legal.privacyTitle'))
const body = computed(() => t(isTerms.value ? 'legal.termsBody' : 'legal.privacyBody'))
</script>

<style scoped>
.legal-page {
  min-height: 70vh;
  background: var(--color-cream);
  padding-block: 96px;
}

.legal-page__inner {
  max-width: 760px;
}

.legal-page__eyebrow {
  color: var(--color-leaf);
  font-weight: 700;
  margin-bottom: 12px;
}

.legal-page h1 {
  color: var(--color-forest);
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 1.1;
  margin-bottom: 20px;
}

[dir='rtl'] .legal-page h1 {
  font-family: var(--font-ar-display);
}

.legal-page p {
  color: var(--color-charcoal);
  font-size: 1.08rem;
  margin-bottom: 28px;
}

@media (max-width: 640px) {
  .legal-page {
    padding-block: 64px;
  }

  .legal-page h1 {
    font-size: 2.2rem;
  }
}
</style>
