<template>
  <div class="home-page">
    <section class="home-hero" aria-labelledby="home-hero-title">
      <img class="home-hero__image" src="/images/products/product-33.jpeg" alt="" />
      <div class="home-hero__veil" aria-hidden="true"></div>

      <div class="container home-hero__content">
        <p class="section-kicker section-kicker--light">{{ $t('hero.eyebrow') }}</p>
        <h1 id="home-hero-title">{{ $t('hero.title') }}</h1>
        <p class="home-hero__lead">{{ $t('hero.subtitle') }}</p>

        <div class="home-hero__actions">
          <router-link to="/quotation" class="action-link action-link--primary">
            {{ $t('nav.requestQuote') }}
          </router-link>
          <router-link to="/products" class="action-link action-link--ghost">
            {{ $t('common.viewProducts') }}
          </router-link>
        </div>

        <dl class="home-hero__stats" aria-label="Bezrah highlights">
          <div v-for="stat in heroStats" :key="stat.label" class="home-hero__stat">
            <dt>{{ stat.value }}</dt>
            <dd>{{ stat.label }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section id="about" class="home-about">
      <div class="container home-about__grid">
        <div class="home-about__media" data-aos="fade-up">
          <img class="home-about__image home-about__image--main" src="/images/products/product-30.jpeg" alt="" />
          <img class="home-about__image home-about__image--small" src="/images/products/product-23.jpeg" alt="" />
        </div>

        <div class="home-about__copy" data-aos="fade-up" data-aos-delay="100">
          <p class="section-kicker">A seed, and a standard.</p>
          <h2>From a seed, a whole table.</h2>
          <p class="home-section-lead">
            "Bezrah" — بذرة — is the Arabic word for seed. Everything we make begins there: a single seed, the soil it knew, the hands that picked it, the jar or pack it ends in.
          </p>
          <p>
            We are a Mediterranean food house exporting frozen vegetables, frozen prepared foods, and traditional pickles (mekhalal, mouneh) to households and food-service kitchens across the United States, the European Union, and Latin America. Our shelves sit between the commodity freezer aisle and the specialty deli. We are not the cheapest. We are not boutique. We are the dependable, beautiful middle — heritage food made to professional export standard.
          </p>
          <ul class="check-list" style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
            <li>
              <span aria-hidden="true"></span>
              <strong>Origin:</strong> Traceable. We say where the seed came from, and we say it in Arabic on the label.
            </li>
            <li>
              <span aria-hidden="true"></span>
              <strong>Craft:</strong> Recipes from a region, not a focus group. Frozen and pickled the way a grandmother would, at industrial scale.
            </li>
            <li>
              <span aria-hidden="true"></span>
              <strong>Reach:</strong> Built for the export container and the long shelf. Cold chain, certifications, multi-language packaging.
            </li>
            <li>
              <span aria-hidden="true"></span>
              <strong>Restraint:</strong> Quiet design. Confident green. No shouting on the freezer door.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="products" class="home-products">
      <div class="container">
        <div class="home-section-head">
          <p class="section-kicker">{{ $t('hero.products') }}</p>
          <h2>{{ $t('home.productsTitle') }}</h2>
          <p>{{ $t('home.productsIntro') }}</p>
        </div>

        <div class="category-grid">
          <router-link
            v-for="category in categoryCards"
            :key="category.to"
            :to="category.to"
            class="category-card"
            :style="{ '--category-accent': category.accent }"
          >
            <img :src="category.image" :alt="category.title" loading="lazy" />
            <span class="category-card__shade" aria-hidden="true"></span>
            <span class="category-card__content">
              <span class="category-card__count">{{ category.count }} {{ $t('home.productCount') }}</span>
              <span class="category-card__title">{{ category.title }}</span>
              <span class="category-card__text">{{ category.description }}</span>
            </span>
          </router-link>
        </div>

        <div class="home-products__footer">
          <router-link to="/products" class="action-link action-link--outline">
            {{ $t('home.viewAll') }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="home-trade">
      <div class="container home-trade__grid">
        <div class="home-trade__copy" data-aos="fade-up">
          <p class="section-kicker section-kicker--light">{{ $t('home.excTitle') }}</p>
          <h2>{{ $t('home.plTitle') }}</h2>
          <p>{{ $t('home.plDesc1') }}</p>
          <p>{{ $t('home.plDesc2') }}</p>
        </div>

        <div class="home-trade__panel" data-aos="fade-up" data-aos-delay="100">
          <h3>{{ $t('home.plCapabTitle') }}</h3>
          <ul class="capability-list">
            <li v-for="capability in capabilities" :key="capability">
              <span aria-hidden="true"></span>
              {{ capability }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="home-packaging">
      <div class="container">
        <div class="home-section-head">
          <p class="section-kicker">{{ $t('home.packTypes') }}</p>
          <h2>{{ $t('home.plManufTitle') }}</h2>
          <p>{{ $t('home.plManufDesc') }}</p>
        </div>

        <div class="package-grid">
          <article v-for="pack in packageCards" :key="pack.title" class="package-card">
            <img :src="pack.image" :alt="pack.title" loading="lazy" />
            <div>
              <h3>{{ pack.title }}</h3>
              <p>{{ pack.description }}</p>
              <span>{{ $t('home.qualityAssured') }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section v-if="showBrandBrief" class="home-brief">
      <div class="container home-brief__row">
        <div>
          <p class="section-kicker">{{ $t('home.pdfTitle') }}</p>
          <h2>{{ $t('home.pdfDescription') }}</h2>
        </div>
        <a class="action-link action-link--primary" :href="brandPdfConfig.url" target="_blank" rel="noopener noreferrer">
          {{ $t('home.pdfButton') }}
        </a>
      </div>
    </section>

    <section id="contact" class="home-contact">
      <div class="container home-contact__row">
        <div>
          <p class="section-kicker section-kicker--light">{{ $t('nav.contact') }}</p>
          <h2>{{ $t('home.contactTitle') }}</h2>
          <p>{{ $t('home.contactDescription') }}</p>
        </div>
        <div class="home-contact__actions">
          <router-link to="/request-a-quote" class="action-link action-link--light">
            {{ $t('home.contactCta') }}
          </router-link>
          <router-link to="/products" class="action-link action-link--ghost">
            {{ $t('home.secondaryCta') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { brandPdfConfig } from '../config/contact'
import { catalogProducts } from '../data/priceList'

const { t } = useI18n()

const showBrandBrief = computed(() => brandPdfConfig.isExplicitlyConfigured)

const productCounts = computed(() =>
  catalogProducts.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1
    return counts
  }, {})
)

const heroStats = computed(() => [
  { value: '2022', label: t('home.estab') },
  { value: '4', label: t('home.heroStatTwo') },
  { value: String(catalogProducts.length), label: t('home.productCount') },
  { value: 'EU / JP', label: t('home.qualityCert') },
])

const aboutPoints = computed(() => [
  t('home.aboutPointOne'),
  t('home.aboutPointTwo'),
  t('home.aboutPointThree'),
])

const categoryCards = computed(() => [
  {
    to: '/products/pickles',
    title: t('home.picklesTitle'),
    description: t('home.picklesDesc'),
    image: '/images/products/product-28.jpeg',
    accent: '#A63F2F',
    count: productCounts.value.pickles || 0,
  },
  {
    to: '/products/olives',
    title: t('home.olivesTitle'),
    description: t('home.olivesDesc'),
    image: '/images/products/product-30.jpeg',
    accent: '#657A22',
    count: productCounts.value.olives || 0,
  },
  {
    to: '/products/iqf-vegetables',
    title: t('home.vegetablesTitle'),
    description: t('home.vegetablesDesc'),
    image: '/images/products/product-34.jpeg',
    accent: '#2B7C69',
    count: productCounts.value.vegetables || 0,
  },
  {
    to: '/products/iqf-fruits',
    title: t('home.fruitsTitle'),
    description: t('home.fruitsDesc'),
    image: '/images/products/product-41.jpeg',
    accent: '#B33D58',
    count: productCounts.value.fruits || 0,
  },
])

const capabilities = computed(() => [
  t('home.plCapab1'),
  t('home.plCapab2'),
  t('home.plCapab3'),
  t('home.plCapab4'),
  t('home.plCapab5'),
  t('home.plCapab6'),
])

const packageCards = computed(() => [
  {
    title: t('home.packTin'),
    description: t('home.packTinDesc'),
    image: '/images/products/product-1.jpeg',
  },
  {
    title: t('home.packGlass'),
    description: t('home.packGlassDesc'),
    image: '/images/products/product-5.jpeg',
  },
  {
    title: t('home.packBarrel'),
    description: t('home.packBarrelDesc'),
    image: '/images/products/product-20.jpeg',
  },
])
</script>

<style scoped>
.home-page {
  background: var(--color-cream);
  color: var(--color-charcoal);
}

.home-hero {
  position: relative;
  display: flex;
  min-height: 720px;
  align-items: flex-end;
  overflow: hidden;
  padding-block: 148px 54px;
}

.home-hero__image,
.home-hero__veil {
  position: absolute;
  inset: 0;
}

.home-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-hero__veil {
  background: rgba(23, 47, 18, 0.62);
}

.home-hero__content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #fff;
}

[dir='rtl'] .home-hero__content {
  margin-inline-start: auto;
}

.home-hero h1,
.home-contact h2,
.home-trade h2 {
  color: #fff;
}

.home-hero h1 {
  max-width: 820px;
  margin: 0;
  font-family: var(--font-display);
  font-size: 4.65rem;
  line-height: 1.03;
}

[dir='rtl'] .home-hero h1,
[dir='rtl'] .home-section-head h2,
[dir='rtl'] .home-about h2,
[dir='rtl'] .home-trade h2,
[dir='rtl'] .home-contact h2 {
  font-family: var(--font-ar-display);
}

.home-hero__lead {
  max-width: 690px;
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.18rem;
}

.section-kicker {
  margin: 0 0 12px;
  color: var(--color-leaf);
  font-size: 0.92rem;
  font-weight: 800;
}

.section-kicker--light {
  color: var(--color-sage);
}

.home-hero__actions,
.home-contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.action-link {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding-inline: 22px;
  font-weight: 800;
  transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease, transform 180ms ease;
}

.action-link:hover {
  transform: translateY(-1px);
}

.action-link--primary {
  background: var(--color-leaf);
  color: #fff;
}

.action-link--primary:hover {
  background: var(--color-leaf-700);
}

.action-link--ghost {
  border: 1px solid rgba(255, 255, 255, 0.48);
  color: #fff;
}

.action-link--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}

.action-link--outline {
  border: 1px solid var(--color-forest);
  color: var(--color-forest);
}

.action-link--outline:hover {
  background: var(--color-forest);
  color: #fff;
}

.action-link--light {
  background: #fff;
  color: var(--color-forest);
}

.action-link--light:hover {
  background: var(--color-cream);
}

.home-hero__stats {
  display: grid;
  max-width: 840px;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 1px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  margin: 42px 0 0;
  background: rgba(255, 255, 255, 0.14);
}

.home-hero__stat {
  padding: 18px;
  background: rgba(20, 45, 18, 0.38);
  backdrop-filter: blur(12px);
}

.home-hero__stat dt {
  color: #fff;
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 800;
  line-height: 1;
}

.home-hero__stat dd {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.88rem;
}

.home-about,
.home-products,
.home-packaging,
.home-brief {
  padding-block: 82px;
}

.home-about__grid,
.home-trade__grid,
.home-contact__row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.82fr);
  gap: 58px;
  align-items: center;
}

.home-about__media {
  position: relative;
  min-height: 520px;
}

.home-about__image {
  display: block;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 22px 58px rgba(42, 42, 42, 0.16);
}

.home-about__image--main {
  width: min(72%, 430px);
  height: 520px;
}

.home-about__image--small {
  position: absolute;
  inset-inline-end: 0;
  inset-block-end: 38px;
  width: min(54%, 320px);
  height: 300px;
  border: 10px solid var(--color-cream);
}

.home-about h2,
.home-section-head h2,
.home-brief h2 {
  margin: 0;
  color: var(--color-forest);
  font-family: var(--font-display);
  font-size: 2.35rem;
  line-height: 1.14;
}

.home-about__copy p:not(.section-kicker),
.home-section-head p,
.home-trade__copy p,
.home-contact p,
.home-brief p {
  color: var(--color-muted);
}

.home-trade__copy p,
.home-contact p {
  color: rgba(244, 241, 232, 0.78);
}

.home-section-lead {
  margin-top: 22px;
  font-size: 1.08rem;
  font-weight: 700;
}

.check-list,
.capability-list {
  display: grid;
  gap: 12px;
  margin: 26px 0 0;
  padding: 0;
  list-style: none;
}

.check-list li,
.capability-list li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-weight: 700;
}

.check-list span,
.capability-list span {
  position: relative;
  display: inline-flex;
  width: 22px;
  height: 22px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-leaf-100);
  color: var(--color-leaf);
  font-size: 0.8rem;
}

.check-list span::before,
.capability-list span::before {
  width: 8px;
  height: 12px;
  border: solid currentColor;
  border-width: 0 2px 2px 0;
  content: '';
  transform: rotate(45deg) translateY(-1px);
}

.home-products {
  background: #fff;
}

.home-section-head {
  max-width: 760px;
  margin-bottom: 34px;
}

.home-section-head p:not(.section-kicker) {
  margin-top: 14px;
  font-size: 1.05rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.category-card {
  position: relative;
  display: flex;
  min-height: 330px;
  overflow: hidden;
  align-items: flex-end;
  border-radius: 8px;
  color: #fff;
  isolation: isolate;
}

.category-card img,
.category-card__shade {
  position: absolute;
  inset: 0;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 480ms ease;
}

.category-card__shade {
  z-index: 1;
  background: rgba(23, 47, 18, 0.42);
}

.category-card::before {
  position: absolute;
  inset-inline: 0;
  inset-block-end: 0;
  z-index: 2;
  height: 7px;
  background: var(--category-accent);
  content: '';
}

.category-card__content {
  position: relative;
  z-index: 3;
  display: grid;
  gap: 10px;
  padding: 24px;
}

.category-card__count {
  width: max-content;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-forest);
  padding: 6px 10px;
  font-size: 0.82rem;
  font-weight: 800;
}

.category-card__title {
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.1;
}

[dir='rtl'] .category-card__title {
  font-family: var(--font-ar-display);
}

.category-card__text {
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.95rem;
  line-height: 1.55;
}

.category-card:hover img {
  transform: scale(1.06);
}

.home-products__footer {
  margin-top: 34px;
}

.home-trade,
.home-contact {
  background: var(--color-forest);
  color: #fff;
  padding-block: 80px;
}

.home-trade__copy h2,
.home-contact h2 {
  margin: 0 0 18px;
  font-family: var(--font-display);
  font-size: 2.35rem;
  line-height: 1.14;
}

.home-trade__copy p + p {
  margin-top: 16px;
}

.home-trade__panel {
  border: 1px solid rgba(244, 241, 232, 0.18);
  border-radius: 8px;
  background: rgba(244, 241, 232, 0.08);
  padding: 28px;
}

.home-trade__panel h3 {
  margin: 0;
  color: #fff;
  font-size: 1.25rem;
}

.capability-list span {
  background: rgba(162, 182, 154, 0.2);
  color: var(--color-sage);
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.package-card {
  overflow: hidden;
  border: 1px solid var(--color-rule);
  border-radius: 8px;
  background: #fff;
}

.package-card img {
  width: 100%;
  height: 210px;
  object-fit: cover;
}

.package-card div {
  padding: 22px;
}

.package-card h3 {
  margin: 0 0 8px;
  color: var(--color-forest);
  font-size: 1.15rem;
}

.package-card p {
  margin: 0 0 16px;
  color: var(--color-muted);
}

.package-card span {
  color: var(--color-leaf);
  font-size: 0.9rem;
  font-weight: 800;
}

.home-brief {
  background: #fff;
}

.home-brief__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.home-contact__row {
  grid-template-columns: minmax(0, 1fr) auto;
}

.home-contact__actions {
  justify-content: flex-end;
  margin-top: 0;
}

@media (max-width: 1020px) {
  .home-hero h1 {
    font-size: 3.55rem;
  }

  .home-about__grid,
  .home-trade__grid,
  .home-contact__row {
    grid-template-columns: 1fr;
  }

  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-contact__actions {
    justify-content: flex-start;
  }
}

@media (max-width: 760px) {
  .home-hero {
    min-height: 680px;
    padding-block: 118px 38px;
  }

  .home-hero h1 {
    font-size: 2.65rem;
  }

  .home-hero__lead {
    font-size: 1rem;
  }

  .home-hero__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-about,
  .home-products,
  .home-packaging,
  .home-brief {
    padding-block: 60px;
  }

  .home-about__media {
    min-height: auto;
  }

  .home-about__image--main,
  .home-about__image--small {
    position: static;
    width: 100%;
    height: 320px;
    border: 0;
  }

  .home-about__image--small {
    margin-top: 16px;
  }

  .home-about h2,
  .home-section-head h2,
  .home-trade__copy h2,
  .home-contact h2,
  .home-brief h2 {
    font-size: 2rem;
  }

  .package-grid {
    grid-template-columns: 1fr;
  }

  .home-brief__row {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 560px) {
  .home-hero__actions,
  .home-contact__actions {
    flex-direction: column;
  }

  .action-link {
    width: 100%;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    min-height: 290px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .action-link,
  .category-card img {
    transition: none;
  }

  .action-link:hover,
  .category-card:hover img {
    transform: none;
  }
}
</style>
