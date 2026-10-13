<template>
  <div class="about-page">
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>{{ $t('nav.about') }}</h1>
        <p>{{ $t('about.heroSubtitle') }}</p>
      </div>
    </div>

    <!-- Who We Are -->
    <section class="container section-padding">
      <div class="about-section">
        <h2 class="section-title">{{ $t('about.whoWeAreTitle') }}</h2>
        <div class="about-text-block">
          <p>{{ $t('about.whoWeAreP1') }}</p>
          <p>{{ $t('about.whoWeAreP2') }}</p>
          <p>{{ $t('about.whoWeAreP3') }}</p>
          <p>{{ $t('about.whoWeAreP4') }}</p>
          <p>{{ $t('about.whoWeAreP5') }}</p>
          <p>{{ $t('about.whoWeAreP6') }}</p>
        </div>
      </div>
    </section>

    <!-- Stats strip -->
    <section class="stats-strip">
      <div class="container stats-strip__grid">
        <div class="stats-strip__item">
          <span class="stats-strip__value">2014</span>
          <span class="stats-strip__label">{{ $t('home.estab') }}</span>
        </div>
        <div class="stats-strip__item">
          <span class="stats-strip__value">4,200+</span>
          <span class="stats-strip__label">{{ $t('home.acresFarm') }}</span>
        </div>
        <div class="stats-strip__item">
          <span class="stats-strip__value">25,000</span>
          <span class="stats-strip__label">{{ $t('home.annualCap') }}</span>
        </div>
        <div class="stats-strip__item">
          <span class="stats-strip__value">20+</span>
          <span class="stats-strip__label">{{ $t('home.reachTitle') }}</span>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="container section-padding">
      <div class="about-section">
        <div class="mission-grid">
          <div class="mission-card" data-aos="fade-up">
            <div class="mission-icon">🎯</div>
            <h2>{{ $t('about.missionTitle') }}</h2>
            <p>{{ $t('about.missionP1') }}</p>
          </div>
          <div class="mission-card" data-aos="fade-up" data-aos-delay="150">
            <div class="mission-icon">🤝</div>
            <h2>{{ $t('about.afterSalesTitle') }}</h2>
            <p>{{ $t('about.afterSalesP1') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="certifications-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">{{ $t('home.qualityCert') }}</h2>
        <div class="cert-grid" data-aos="fade-up" data-aos-delay="100">
          <div class="cert-badge">
            <div class="cert-badge__icon">
              <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" stroke="#365227" stroke-width="3"/><text x="32" y="36" text-anchor="middle" fill="#365227" font-size="14" font-weight="700">ISO</text></svg>
            </div>
            <span>ISO 22000</span>
          </div>
          <div class="cert-badge">
            <div class="cert-badge__icon">
              <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" stroke="#365227" stroke-width="3"/><text x="32" y="36" text-anchor="middle" fill="#365227" font-size="11" font-weight="700">FSSC</text></svg>
            </div>
            <span>FSSC 22000</span>
          </div>
          <div class="cert-badge">
            <div class="cert-badge__icon">
              <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" stroke="#365227" stroke-width="3"/><text x="32" y="30" text-anchor="middle" fill="#365227" font-size="8" font-weight="700">GLOBAL</text><text x="32" y="42" text-anchor="middle" fill="#3D8740" font-size="8" font-weight="700">G.A.P</text></svg>
            </div>
            <span>GLOBALG.A.P</span>
          </div>
          <div class="cert-badge">
            <div class="cert-badge__icon">
              <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" stroke="#365227" stroke-width="3"/><text x="32" y="36" text-anchor="middle" fill="#365227" font-size="20" font-weight="700">K</text></svg>
            </div>
            <span>Kosher</span>
          </div>
          <div class="cert-badge">
            <div class="cert-badge__icon">
              <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" stroke="#365227" stroke-width="3"/><text x="32" y="36" text-anchor="middle" fill="#365227" font-size="10" font-weight="700">HALAL</text></svg>
            </div>
            <span>Halal</span>
          </div>
          <div class="cert-badge">
            <div class="cert-badge__icon">
              <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" stroke="#365227" stroke-width="3"/><text x="32" y="36" text-anchor="middle" fill="#365227" font-size="10" font-weight="700">BRC&amp;S</text></svg>
            </div>
            <span>BRC&amp;S</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page { padding-top: 0; }

.page-hero {
  position: relative; height: 30vh; min-height: 220px; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #365227 0%, #3D8740 100%); overflow: hidden;
}
.page-hero-overlay { position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(140, 153, 38, 0.2) 0%, transparent 60%); }
.page-hero-content { position: relative; z-index: 2; text-align: center; color: white; }
.page-hero-content h1 { font-size: 2.8rem; margin-bottom: 10px; color: white; }
.page-hero-content p { font-size: 1.1rem; opacity: 0.9; }

.section-padding { padding: 60px 20px; }

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #365227;
}

.about-section {
  max-width: 900px;
  margin: 0 auto;
}

.about-text-block p {
  font-size: 1.08rem;
  color: #444;
  margin-bottom: 22px;
  line-height: 1.9;
}

/* Stats Strip */
.stats-strip {
  background: #365227;
  padding: 40px 20px;
}

.stats-strip__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;
}

.stats-strip__value {
  display: block;
  font-size: 2.4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 4px;
}

.stats-strip__label {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Mission Grid */
.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.mission-card {
  background: white;
  padding: 40px 32px;
  border-radius: 20px;
  border: 1px solid #e8e4da;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(54, 82, 39, 0.1);
}

.mission-icon {
  font-size: 2.2rem;
  margin-bottom: 16px;
}

.mission-card h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #365227;
}

.mission-card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.85;
}

/* Certifications */
.certifications-section {
  padding: 60px 20px 80px;
  background: #f8f6f0;
}

.cert-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.cert-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: transform 0.3s ease;
}

.cert-badge:hover {
  transform: scale(1.08);
}

.cert-badge__icon {
  width: 80px;
  height: 80px;
}

.cert-badge__icon svg {
  width: 100%;
  height: 100%;
}

.cert-badge span {
  font-size: 0.85rem;
  font-weight: 600;
  color: #365227;
  text-align: center;
}

@media (max-width: 768px) {
  .page-hero-content h1 { font-size: 2rem; }
  .stats-strip__grid { grid-template-columns: repeat(2, 1fr); }
  .mission-grid { grid-template-columns: 1fr; }
  .section-title { font-size: 1.8rem; }
}

@media (max-width: 480px) {
  .stats-strip__grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .stats-strip__value { font-size: 1.8rem; }
}
</style>
