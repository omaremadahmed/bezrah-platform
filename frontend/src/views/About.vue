<template>
  <div class="about-page">
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>{{ $t('nav.about') }}</h1>
        <p>Learn more about our journey, mission, and agricultural excellence.</p>
      </div>
    </div>

    <section class="container section-padding">
      <div class="about-grid">
        <div class="about-text">
          <h2>Who We Are</h2>
          <p>Bezrah is a leading global player in agricultural production, specializing in transforming raw crops into premium packaged goods that meet the highest global standards.</p>
          <p>Established in 2026, we manage over 4,200 acres of fertile farmland and have an annual production capacity of 25,000 tons. We pride ourselves on sustainable practices, quality assurance, and community impact.</p>
        </div>
        <div class="about-stats">
          <div class="about-stat-card">
            <span class="stat-num">4,200</span>
            <span class="stat-lbl">Acres Farm</span>
          </div>
          <div class="about-stat-card">
            <span class="stat-num">25K</span>
            <span class="stat-lbl">Tons / Year</span>
          </div>
          <div class="about-stat-card">
            <span class="stat-num">20+</span>
            <span class="stat-lbl">Export Markets</span>
          </div>
          <div class="about-stat-card">
            <span class="stat-num">ISO</span>
            <span class="stat-lbl">Certified</span>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section container">
      <h2 class="section-title">Our Values</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">🌱</div>
          <h3>Sustainability</h3>
          <p>We are committed to environmentally responsible farming and manufacturing practices.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">✅</div>
          <h3>Quality First</h3>
          <p>Every product undergoes rigorous quality control from farm to final packaging.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🌍</div>
          <h3>Global Impact</h3>
          <p>We export to over 20 markets worldwide, bringing premium food to every table.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page { padding-top: 0; }

.page-hero {
  position: relative; height: 40vh; min-height: 300px; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%); overflow: hidden;
}
.page-hero-overlay { position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(140, 153, 38, 0.2) 0%, transparent 60%); }
.page-hero-content { position: relative; z-index: 2; text-align: center; color: white; }
.page-hero-content h1 { font-size: 3rem; margin-bottom: 10px; color: white; }
.page-hero-content p { font-size: 1.1rem; opacity: 0.9; }

.section-padding { padding: 80px 20px; }

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-text h2 { font-size: 2.5rem; margin-bottom: 25px; }
.about-text p { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.8; }

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.about-stat-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.stat-num {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 5px;
}

.stat-lbl {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.values-section {
  padding: 0 20px 100px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.value-card {
  text-align: center;
  background: white;
  padding: 40px 30px;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(15, 76, 58, 0.08);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.value-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.value-card p {
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 30px; }
  .values-grid { grid-template-columns: 1fr; }
  .page-hero-content h1 { font-size: 2.2rem; }
  .about-text h2 { font-size: 2rem; }
}
</style>
