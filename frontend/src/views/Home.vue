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
          <p class="section-kicker">{{ $t('brand.kicker') }}</p>
          <h2>{{ $t('brand.heading') }}</h2>
          <p class="home-section-lead">
            {{ $t('brand.lead') }}
          </p>
          <p>
            {{ $t('brand.body') }}
          </p>

        </div>
      </div>
    </section>



    <section id="products" class="home-products">
      <div class="container">
        <div class="home-section-head">
          <h2 class="products-main-title">{{ $t('hero.products') || 'Our Products' }}</h2>
          <p>{{ $t('home.productsIntro') }}</p>
        </div>

        <div class="all-products-grid">
          <div
            v-for="product in allUniqueImages"
            :key="product.image"
            class="product-item-card"
          >
            <div class="product-item-img-wrapper">
              <img :src="product.image" :alt="product.name" loading="lazy" />
            </div>
            <div class="product-item-info">
              <h3 class="product-item-name">{{ product.name }}</h3>
              <p class="product-item-price">{{ product.price }}</p>
            </div>
          </div>
        </div>

        <div class="home-products__footer">
          <router-link to="/products" class="action-link action-link--outline">
            {{ $t('home.viewAll') }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="home-markets">
      <div class="container">
        <div class="home-section-head home-markets__head" data-aos="fade-up">
          <p class="section-kicker">{{ $t('markets.kicker') }}</p>
          <h2>{{ $t('markets.heading') }}</h2>
          <p>{{ $t('markets.intro') }}</p>
        </div>
        <div class="markets-grid">
          <div class="market-card" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ $t('markets.usTitle') }}</h3>
            <p class="market-card__subtitle">{{ $t('markets.usSubtitle') }}</p>
            <p class="market-card__desc">{{ $t('markets.usDesc') }}</p>
          </div>
          <div class="market-card" data-aos="fade-up" data-aos-delay="200">
            <h3>{{ $t('markets.euTitle') }}</h3>
            <p class="market-card__subtitle">{{ $t('markets.euSubtitle') }}</p>
            <p class="market-card__desc">{{ $t('markets.euDesc') }}</p>
          </div>
          <div class="market-card" data-aos="fade-up" data-aos-delay="300">
            <h3>{{ $t('markets.latamTitle') }}</h3>
            <p class="market-card__subtitle">{{ $t('markets.latamSubtitle') }}</p>
            <p class="market-card__desc">{{ $t('markets.latamDesc') }}</p>
          </div>
        </div>

        <div class="markets-stats" data-aos="fade-up" data-aos-delay="400">
          <div class="market-stat">
            <h4>{{ $t('markets.stat1Value') }}</h4>
            <p><strong>{{ $t('markets.stat1Title') }}</strong><br/>{{ $t('markets.stat1Desc') }}</p>
          </div>
          <div class="market-stat">
            <h4>{{ $t('markets.stat2Value') }}</h4>
            <p><strong>{{ $t('markets.stat2Title') }}</strong><br/>{{ $t('markets.stat2Desc') }}</p>
          </div>
          <div class="market-stat">
            <h4>{{ $t('markets.stat3Value') }}</h4>
            <p><strong>{{ $t('markets.stat3Title') }}</strong><br/>{{ $t('markets.stat3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>


    <section class="home-identity">
      <div class="container">
        <div class="home-section-head home-identity__head" data-aos="fade-up" style="max-width: 800px;">
          <p class="section-kicker">{{ $t('identity.kicker') }}</p>
          <h2>{{ $t('identity.heading') }}</h2>
          <p>{{ $t('identity.intro') }}</p>
        </div>

        <div class="identity-grid">
          <div class="identity-card" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ $t('identity.logoTitle') }}</h3>
            <p>{{ $t('identity.logoDesc') }}</p>
            <div class="identity-card__note">
              <strong>{{ $t('identity.logoNote') }}</strong> {{ $t('identity.logoNoteText') }}
            </div>
          </div>

          <div class="identity-card" data-aos="fade-up" data-aos-delay="200">
            <h3>{{ $t('identity.typoTitle') }}</h3>
            <ul class="typography-list">
              <li>
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                  <strong style="margin: 0;">Cormorant Garamond</strong>
                  <span style="font-size: 0.7rem; color: #7A4748; letter-spacing: 0.05em; font-weight: 700;">{{ $t('identity.freeGoogleFonts') }}</span>
                </div>
                <div style="font-size: 0.75rem; letter-spacing: 0.05em; font-weight: 700; color: #3D8740; margin-bottom: 12px;">{{ $t('identity.cormorantRole') }}</div>
                <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: #365227; line-height: 1.2; margin-bottom: 8px;">{{ $t('identity.cormorantSample') }}</div>
              </li>
              <li>
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                  <strong style="margin: 0;">Inter</strong>
                  <span style="font-size: 0.7rem; color: #7A4748; letter-spacing: 0.05em; font-weight: 700;">{{ $t('identity.freeGoogleFonts') }}</span>
                </div>
                <div style="font-size: 0.75rem; letter-spacing: 0.05em; font-weight: 700; color: #3D8740; margin-bottom: 12px;">{{ $t('identity.interRole') }}</div>
                <p style="font-size: 0.9rem; margin-bottom: 12px; color: rgba(54, 82, 39, 0.85); line-height: 1.5;">{{ $t('identity.interDesc') }}</p>
              </li>
              <li>
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                  <strong style="margin: 0;">Amiri</strong>
                  <span style="font-size: 0.7rem; color: #7A4748; letter-spacing: 0.05em; font-weight: 700;">{{ $t('identity.freeGoogleFonts') }}</span>
                </div>
                <div style="font-size: 0.75rem; letter-spacing: 0.05em; font-weight: 700; color: #3D8740; margin-bottom: 12px;">{{ $t('identity.amiriRole') }}</div>
                <div style="font-family: 'Amiri', serif; font-size: 1.8rem; color: #365227; line-height: 1.4; margin-bottom: 12px;" dir="rtl">{{ $t('identity.amiriSample') }}</div>
                <p style="font-size: 0.85rem; margin-bottom: 12px; color: rgba(54, 82, 39, 0.85); line-height: 1.5;">Amiri Regular: <span style="font-size: 0.7rem; letter-spacing: 0.05em; font-weight: 700; color: #365227;">{{ $t('identity.amiriDesc1Label') }}</span> &nbsp;&nbsp; Noto Naskh Arabic: <span style="font-size: 0.7rem; letter-spacing: 0.05em; font-weight: 700; color: #365227;">{{ $t('identity.amiriDesc2Label') }}</span><br/><br/>
                <span style="font-size: 0.7rem; letter-spacing: 0.05em; font-weight: 700; color: #365227;">{{ $t('identity.amiriNote') }}</span></p>
              </li>
            </ul>
            <p style="margin-top: 16px; font-size: 0.85rem; color: rgba(54, 82, 39, 0.7); font-style: italic;">{{ $t('identity.typoFootnote') }}</p>
          </div>

          <div class="identity-card identity-card--full" data-aos="fade-up" data-aos-delay="300">
            <h3>{{ $t('identity.colorTitle') }}</h3>
            <div class="palette-grid">
              <div class="color-swatch" style="--swatch-color: #365227; color: white;">
                <span>{{ $t('identity.colorForest') }}</span>
              </div>
              <div class="color-swatch" style="--swatch-color: #3D8740; color: white;">
                <span>{{ $t('identity.colorLeaf') }}</span>
              </div>
              <div class="color-swatch" style="--swatch-color: #7A4748; color: white;">
                <span>{{ $t('identity.colorSpring') }}</span>
              </div>
              <div class="color-swatch" style="--swatch-color: #F5EDDE; color: var(--color-charcoal);">
                <span>{{ $t('identity.colorCream') }}</span>
              </div>
              <div class="color-swatch" style="--swatch-color: #F4F1E8; color: var(--color-charcoal);">
                <span>{{ $t('identity.colorBone') }}</span>
              </div>
              <div class="color-swatch" style="--swatch-color: #B8633A; color: white;">
                <span>{{ $t('identity.colorTerracotta') }}</span>
              </div>
              <div class="color-swatch" style="--swatch-color: #D9A441; color: white;">
                <span>{{ $t('identity.colorSaffron') }}</span>
              </div>
            </div>
          </div>
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
import { catalogProducts, displayPrice } from '../data/priceList'

const { t } = useI18n()

const showBrandBrief = computed(() => brandPdfConfig.isExplicitlyConfigured)

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

const allUniqueImages = computed(() => {
  const imagesSet = new Set();
  const productsList = [];
  
  catalogProducts.forEach(p => {
    if (!imagesSet.has(p.image)) {
      imagesSet.add(p.image);
      const priceObj = displayPrice(p);
      const priceStr = priceObj.amount !== 'On request' 
        ? `${priceObj.amount} ${priceObj.unit}` 
        : 'On request';
        
      productsList.push({
        image: p.image,
        name: p.name,
        price: priceStr
      });
    }
  });

  const missingNames = {
    18: 'Mango Cubes',
    21: 'Frozen Minced Spinach',
    22: 'Frozen Cauliflower',
    31: 'Sweet Corn Kernels',
    38: 'Frozen Peach Halves',
    41: 'Frozen Strawberries',
    42: 'Frozen Broccoli',
    44: 'Frozen Minced Molokhia'
  };

  for(let i = 1; i <= 44; i++) {
    const imgPath = `/images/products/product-${i}.jpeg`;
    if (!imagesSet.has(imgPath)) {
      productsList.push({
        image: imgPath,
        name: missingNames[i] || `Product ${i}`,
        price: 'On request'
      });
    }
  }

  return productsList;
});

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
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap');

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

.products-main-title {
  font-family: var(--font-display);
  font-size: 3.2rem;
  color: var(--color-forest);
  margin: 0 0 16px;
  line-height: 1.1;
}

[dir='rtl'] .products-main-title {
  font-family: var(--font-ar-display);
}

.all-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}

.product-item-card {
  background: #fff;
  border: 1px solid rgba(54, 82, 39, 0.1);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-item-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.product-item-img-wrapper {
  height: 160px;
  overflow: hidden;
  background: var(--color-cream);
}

.product-item-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-item-card:hover .product-item-img-wrapper img {
  transform: scale(1.08);
}

.product-item-info {
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-item-name {
  font-size: 1rem;
  margin: 0 0 8px;
  color: var(--color-forest);
  line-height: 1.4;
  font-weight: 700;
}

.product-item-price {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--color-leaf);
  margin: 0;
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

.home-philosophy {
  background: #E5EDDE;
  color: #365227;
  padding-block: 82px;
}

.home-philosophy__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.82fr);
  gap: 58px;
  align-items: center;
}

.home-philosophy h2 {
  color: #365227;
  font-family: 'Cormorant Garamond', var(--font-display);
  font-size: 2.65rem;
  line-height: 1.1;
  margin: 0;
}

[dir='rtl'] .home-philosophy h2,
[dir='rtl'] .home-markets h2 {
  font-family: var(--font-ar-display);
}

.home-philosophy .section-kicker {
  color: #3D8740;
}

.home-philosophy p:not(.section-kicker) {
  color: rgba(54, 82, 39, 0.85);
}

.home-philosophy__values {
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(54, 82, 39, 0.15);
  border-radius: 8px;
  padding: 28px;
}

.home-philosophy__values h3 {
  margin: 0 0 16px;
  color: #365227;
  font-size: 1.35rem;
  font-family: 'Cormorant Garamond', var(--font-display);
}

.philosophy-list span {
  background: #365227;
  color: #E5EDDE;
}

.home-markets {
  background: #365227;
  color: #E5EDDE;
  padding-block: 82px;
}

.home-markets__head {
  text-align: center;
  margin: 0 auto 48px;
}

.home-markets .home-section-head h2 {
  color: #E5EDDE;
  font-family: 'Cormorant Garamond', var(--font-display);
  font-size: 2.8rem;
}

.home-markets__head p:not(.section-kicker) {
  color: rgba(244, 241, 232, 0.85);
}

.home-markets__head .section-kicker {
  color: #74A748;
}

.markets-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.market-card {
  background: rgba(229, 237, 222, 0.05);
  border: 1px solid rgba(229, 237, 222, 0.15);
  padding: 38px 24px;
  border-radius: 8px;
  text-align: center;
  transition: transform 300ms ease;
  display: flex;
  flex-direction: column;
}

.market-card:hover {
  transform: translateY(-4px);
  background: rgba(229, 237, 222, 0.08);
}

.market-card h3 {
  color: #F4F1E8;
  font-family: 'Cormorant Garamond', var(--font-display);
  font-size: 1.85rem;
  margin: 0 0 6px;
}

.market-card__subtitle {
  color: #74A748;
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.market-card__desc {
  color: rgba(229, 237, 222, 0.8);
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

[dir='rtl'] .market-card__desc {
  text-align: right;
}

.markets-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid rgba(229, 237, 222, 0.15);
}

.market-stat h4 {
  font-family: 'Cormorant Garamond', var(--font-display);
  font-size: 2.8rem;
  color: #E5EDDE;
  margin: 0 0 12px;
  line-height: 1;
}

.market-stat p {
  margin: 0;
  color: rgba(229, 237, 222, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
}

.market-stat p strong {
  color: #74A748;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 6px;
}

.home-identity {
  background: #F4F1E8;
  color: #365227;
  padding-block: 48px;
}

.home-identity__head {
  text-align: center;
  margin: 0 auto 48px;
}

.home-identity .home-section-head h2 {
  color: #365227;
  font-family: 'Cormorant Garamond', var(--font-display);
  font-size: 2.8rem;
}

.home-identity__head p:not(.section-kicker) {
  color: rgba(54, 82, 39, 0.85);
}

.home-identity__head .section-kicker {
  color: #3D8740;
}

.identity-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
}

.identity-card {
  background: #fff;
  border: 1px solid rgba(54, 82, 39, 0.1);
  padding: 32px;
  border-radius: 8px;
}

.identity-card--full {
  grid-column: 1 / -1;
}

.identity-card h3 {
  font-family: 'Cormorant Garamond', var(--font-display);
  font-size: 1.85rem;
  color: #365227;
  margin: 0 0 16px;
}

[dir='rtl'] .identity-card h3 {
  font-family: var(--font-ar-display);
}

.identity-card p {
  color: rgba(54, 82, 39, 0.8);
  line-height: 1.6;
  margin: 0 0 24px;
}

.identity-card__note {
  background: #E5EDDE;
  padding: 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #365227;
}

.typography-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.typography-list li {
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(54, 82, 39, 0.1);
  color: rgba(54, 82, 39, 0.8);
}

.typography-list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.typography-list strong {
  color: #365227;
  display: block;
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.palette-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.color-swatch {
  background: var(--swatch-color);
  padding: 16px 12px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  border: 1px solid rgba(0,0,0,0.05);
  text-align: center;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1020px) {
  .home-philosophy__grid {
    grid-template-columns: 1fr;
  }

  .home-hero h1 {
    font-size: 3.55rem;
  }

  .home-about__grid,
  .home-trade__grid,
  .home-contact__row {
    grid-template-columns: 1fr;
  }

  .all-products-grid {
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
  .home-brief,
  .home-philosophy,
  .home-markets,
  .home-identity {
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
  .home-brief h2,
  .home-philosophy h2,
  .home-markets .home-section-head h2,
  .home-identity .home-section-head h2 {
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

  .all-products-grid,
  .markets-grid,
  .markets-stats,
  .identity-grid {
    grid-template-columns: 1fr;
  }

  .identity-card--full {
    grid-column: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .action-link,
  .product-item-img-wrapper img {
    transition: none;
  }

  .action-link:hover,
  .product-item-card:hover .product-item-img-wrapper img {
    transform: none;
  }
}
</style>
