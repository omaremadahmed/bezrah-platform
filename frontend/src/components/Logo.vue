<template>
  <span :class="['bezrah-logo', { 'bezrah-logo--inverse': inverse }]" aria-label="Bezrah">
    <span class="bezrah-logo__mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" focusable="false">
        <path class="bezrah-logo__leaf-primary" d="M24 42c-7.7-7-11.5-14-11.3-21 .2-7.4 5.2-12.4 15-15 7.8 7.2 11.1 14.6 9.9 22.2C36.5 35 32 39.6 24 42Z" />
        <path class="bezrah-logo__leaf-secondary" d="M24 42c-1.5-9 .1-16.2 4.7-21.6 3.3-3.8 7.4-5.7 12.2-5.8.7 8.2-1.2 14.7-5.8 19.5-3 3.2-6.7 5.8-11.1 7.9Z" />
        <path class="bezrah-logo__stem" d="M24 41c-.6-8.6.7-16.7 4-24.4" />
      </svg>
    </span>
    <span class="bezrah-logo__copy">
      <span class="bezrah-logo__arabic">بذرة</span>
      <span class="logo-title bezrah-logo__latin">Bezrah</span>
    </span>
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
  --logo-text: var(--color-forest);
  --logo-muted: var(--color-charcoal);
  --logo-leaf-primary: var(--color-forest);
  --logo-leaf-secondary: var(--color-leaf);
  --logo-stem: var(--color-forest);

  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--logo-text);
  line-height: 1;
  white-space: nowrap;
}

.bezrah-logo--inverse {
  --logo-text: var(--color-cream);
  --logo-muted: rgba(244, 241, 232, 0.82);
  --logo-leaf-primary: var(--color-sage);
  --logo-leaf-secondary: var(--color-leaf);
  --logo-stem: var(--color-cream);
}

.bezrah-logo__mark {
  display: inline-flex;
  width: 38px;
  height: 38px;
  flex: 0 0 auto;
}

.bezrah-logo__mark svg {
  width: 100%;
  height: 100%;
}

.bezrah-logo__leaf-primary {
  fill: var(--logo-leaf-primary);
}

.bezrah-logo__leaf-secondary {
  fill: var(--logo-leaf-secondary);
  opacity: 0.92;
}

.bezrah-logo__stem {
  fill: none;
  stroke: var(--logo-stem);
  stroke-width: 2.7;
  stroke-linecap: round;
}

.bezrah-logo__copy {
  display: grid;
  gap: 2px;
}

.bezrah-logo__arabic {
  color: var(--logo-text);
  font-family: var(--font-ar-display);
  font-size: 1.2rem;
  font-weight: 700;
}

.bezrah-logo__latin {
  color: var(--logo-muted);
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 700;
}

@media (max-width: 420px) {
  .bezrah-logo__mark {
    width: 34px;
    height: 34px;
  }

  .bezrah-logo__arabic {
    font-size: 1.05rem;
  }

  .bezrah-logo__latin {
    font-size: 0.82rem;
  }
}
</style>
