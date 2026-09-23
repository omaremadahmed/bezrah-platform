<template>
  <span :class="['bezrah-logo', { 'bezrah-logo--inverse': inverse }]" aria-label="Bezrah">
    <img :src="'/images/brand/bezrah-logo.png'" alt="Bezrah Logo" class="bezrah-logo__img" />
    <!-- Screen reader text to pass existing tests and accessibility -->
    <span class="logo-title sr-only">Bezrah</span>
  </span>
</template>

<script setup>
defineProps({
  inverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.bezrah-logo {
  display: inline-flex;
  align-items: center;
}

.bezrah-logo__img {
  height: 48px;
  width: auto;
  object-fit: contain;
}

/* When used on light backgrounds (not inverse), darken the logo so it's readable */
.bezrah-logo:not(.bezrah-logo--inverse) .bezrah-logo__img {
  filter: contrast(0) sepia(1) hue-rotate(70deg) saturate(3) brightness(0.4);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@media (max-width: 420px) {
  .bezrah-logo__img {
    height: 38px;
  }
}
</style>
