<template>
  <div class="page-container">
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container" data-aos="fade-up">
        <h1>{{ $t('nav.export') || 'Export' }}</h1>
        <p>Bringing our premium agricultural products to the world.</p>
      </div>
    </div>
    
    <!-- Global Reach Stats -->
    <div class="stats-section">
      <div class="container stats-grid">
        <div class="stat-card" data-aos="zoom-in" data-aos-delay="100">
          <div class="stat-num">20+</div>
          <div class="stat-label">Countries Exported To</div>
        </div>
        <div class="stat-card" data-aos="zoom-in" data-aos-delay="200">
          <div class="stat-num">25k</div>
          <div class="stat-label">Tons Annual Capacity</div>
        </div>
        <div class="stat-card" data-aos="zoom-in" data-aos-delay="300">
          <div class="stat-num">100%</div>
          <div class="stat-label">Quality Assured</div>
        </div>
      </div>
    </div>

    <div class="container page-content">
      
      <!-- Operations Section -->
      <div class="export-operations" data-aos="fade-up">
        <div class="ops-text">
          <h2>Global Export Operations</h2>
          <p>Bezrah operates a robust global export network reaching over 20 countries worldwide. Our logistics and supply chain are optimized to deliver fresh, high-quality agricultural products to international markets efficiently and safely.</p>
          <p>From our 4200-acre farms directly to global distributors, we ensure strict compliance with international shipping standards, maintaining product integrity throughout the journey.</p>
        </div>
        <div class="ops-image">
          <img src="/images/products/product-15.jpeg" alt="Logistics" class="rounded-img" />
        </div>
      </div>

      <!-- Process Steps -->
      <div class="process-section">
        <h2 class="text-center" data-aos="fade-up">Our Export Process</h2>
        <div class="process-grid">
          <div class="process-step" data-aos="fade-up" data-aos-delay="100">
            <div class="step-num">1</div>
            <h3>Harvest & Processing</h3>
            <p>Carefully harvested and immediately processed in our state-of-the-art facility.</p>
          </div>
          <div class="process-step" data-aos="fade-up" data-aos-delay="200">
            <div class="step-num">2</div>
            <h3>Quality Control</h3>
            <p>Rigorous testing to meet ISO and FDA standards before packaging.</p>
          </div>
          <div class="process-step" data-aos="fade-up" data-aos-delay="300">
            <div class="step-num">3</div>
            <h3>Custom Packaging</h3>
            <p>Secure, export-grade packaging tailored for long-distance transit.</p>
          </div>
          <div class="process-step" data-aos="fade-up" data-aos-delay="400">
            <div class="step-num">4</div>
            <h3>Global Logistics</h3>
            <p>Efficient shipping via sea or air freight to your destination port.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.page-container { padding-top: 0; min-height: 100vh; background: #fdfdfd; }
.page-hero {
  position: relative; height: 40vh; min-height: 350px; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, #155d47 100%); overflow: hidden;
}
.page-hero-overlay { position: absolute; inset: 0; background: url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.05)"/></svg>') repeat; }
.page-hero-content { position: relative; z-index: 2; text-align: center; color: white; }
.page-hero-content h1 { font-size: 3.5rem; margin-bottom: 10px; font-weight: 800; }
.page-hero-content p { font-size: 1.2rem; opacity: 0.9; }

.stats-section {
  background: white;
  padding: 40px 0;
  border-bottom: 1px solid var(--border-color);
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  text-align: center;
}
.stat-card {
  padding: 20px;
}
.stat-num {
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 5px;
}
.stat-label {
  color: var(--text-muted);
  font-size: 1.1rem;
  font-weight: 500;
}

.page-content { padding: 80px 20px; }

.export-operations {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
}

.ops-text h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.ops-text p {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 15px;
}

.rounded-img {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.process-section h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 50px;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.process-step {
  text-align: center;
  background: white;
  padding: 40px 20px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  transition: transform 0.3s ease;
}

.process-step:hover {
  transform: translateY(-10px);
}

.step-num {
  width: 60px;
  height: 60px;
  background: var(--bg-color);
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 800;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.process-step h3 {
  color: var(--text-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.process-step p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .stats-grid { grid-template-columns: 1fr; }
  .export-operations { grid-template-columns: 1fr; }
  .process-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .process-grid { grid-template-columns: 1fr; }
  .page-hero-content h1 { font-size: 2.2rem; }
  .ops-text h2 { font-size: 2rem; }
  .process-section h2 { font-size: 2rem; }
}
</style>
