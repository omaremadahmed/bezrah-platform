<template>
  <div class="about-page">
    <!-- Compact Hero Header -->
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>{{ $t('nav.about') }}</h1>
        <p>{{ $t('about.heroSubtitle') }}</p>
      </div>
    </div>

    <!-- Who We Are Section -->
    <section class="about-section container">
      <div class="section-badge">{{ $t('about.whoWeAreTitle') }}</div>
      <h2 class="section-heading">{{ $t('about.whoWeAreTitle') }}</h2>
      <div class="story-card">
        <p class="story-lead">{{ $t('about.whoWeAreP1') }}</p>
        <p>{{ $t('about.whoWeAreP2') }}</p>
        <p>{{ $t('about.whoWeAreP3') }}</p>
        <p>{{ $t('about.whoWeAreP4') }}</p>
        <div class="story-highlight">
          <p>{{ $t('about.whoWeAreP5') }}</p>
        </div>
        <p class="story-conclusion">{{ $t('about.whoWeAreP6') }}</p>
      </div>
    </section>

    <!-- Mission & After-Sales Services -->
    <section class="values-section container">
      <div class="mission-grid">
        <div class="value-card" data-aos="fade-up">
          <div class="value-card__header">
            <div class="value-icon">🎯</div>
            <h2>{{ $t('about.missionTitle') }}</h2>
          </div>
          <p>{{ $t('about.missionP1') }}</p>
        </div>

        <div class="value-card" data-aos="fade-up" data-aos-delay="100">
          <div class="value-card__header">
            <div class="value-icon">🤝</div>
            <h2>{{ $t('about.afterSalesTitle') }}</h2>
          </div>
          <p>{{ $t('about.afterSalesP1') }}</p>
        </div>
      </div>
    </section>

    <!-- Certifications Showcase (9 Logos) -->
    <section class="certifications-section">
      <div class="container">
        <div class="certifications-head" data-aos="fade-up">
          <span class="section-badge">{{ locale === 'ar' ? 'الاعتمادات والجودة' : 'Quality & Standards' }}</span>
          <h2>{{ $t('about.certificationsTitle') }}</h2>
          <p>{{ $t('about.certificationsSubtitle') }}</p>
        </div>

        <div class="cert-grid" data-aos="fade-up" data-aos-delay="150">
          <div
            v-for="cert in certificates"
            :key="cert.id"
            class="cert-card"
          >
            <div class="cert-card__badge">{{ cert.badge }}</div>
            <div class="cert-card__media">
              <img
                :src="cert.image"
                :alt="cert.name"
                class="cert-card__img"
                loading="lazy"
              />
            </div>
            <div class="cert-card__body">
              <h3 class="cert-card__title">{{ locale === 'ar' ? cert.titleAr : cert.titleEn }}</h3>
              <p class="cert-card__code">{{ cert.standard }}</p>
              <p class="cert-card__desc">{{ locale === 'ar' ? cert.descAr : cert.descEn }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const certificates = [
  {
    id: 'iso-9001',
    name: 'ISO 9001',
    standard: 'ISO 9001:2015',
    titleAr: 'نظام إدارة الجودة',
    titleEn: 'Quality Management System',
    descAr: 'شهادة ضمان إدارة الجودة وكفاءة العمليات التشغيلية والإنتاجية وفق أعلى المعايير.',
    descEn: 'Quality management certification ensuring operational and production excellence.',
    image: '/images/certificates/iso-9001.png',
    badge: 'ISO 9001'
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001',
    standard: 'ISO 14001:2015',
    titleAr: 'نظام الإدارة البيئية',
    titleEn: 'Environmental Management',
    descAr: 'الالتزام الكامل بممارسات الاستدامة البيئية وترشيد الموارد الطبيعية وحماية البيئة.',
    descEn: 'Full commitment to environmental sustainability, resource conservation, and eco-standards.',
    image: '/images/certificates/iso-14001.png',
    badge: 'ISO 14001'
  },
  {
    id: 'iso-22000',
    name: 'ISO 22000',
    standard: 'ISO 22000:2018',
    titleAr: 'نظام سلامة الغذاء',
    titleEn: 'Food Safety Management',
    descAr: 'منظومة متكاملة لسلامة الغذاء وإدارة المخاطر والتحكم في كافة مراحل سلسلة الإمداد.',
    descEn: 'Integrated food safety and risk management system across all supply chain stages.',
    image: '/images/certificates/iso-22000.png',
    badge: 'ISO 22000'
  },
  {
    id: 'iso-45001',
    name: 'ISO 45001',
    standard: 'ISO 45001:2018',
    titleAr: 'الصحة والسلامة المهنية',
    titleEn: 'Occupational Health & Safety',
    descAr: 'توفير بيئة عمل آمنة وصحية للكوادر البشرية وفق أعلى المعايير الدولية المعتمدة.',
    descEn: 'Providing a safe, secure, and healthy working environment under global standards.',
    image: '/images/certificates/iso-45001.png',
    badge: 'ISO 45001'
  },
  {
    id: 'globalgap',
    name: 'GLOBALG.A.P.',
    standard: 'IFA Standard',
    titleAr: 'الممارسات الزراعية الجيدة',
    titleEn: 'GLOBALG.A.P. Certified',
    descAr: 'المعيار العالمي المعتمد للزراعة الآمنة والمستدامة للمحاصيل المخصصة للتصدير.',
    descEn: 'Global benchmark for safe and sustainable agriculture tailored for export markets.',
    image: '/images/certificates/globalgap.png',
    badge: 'GLOBALG.A.P.'
  },
  {
    id: 'fssc-22000',
    name: 'FSSC 22000',
    standard: 'GFSI Recognized',
    titleAr: 'شهادة نظام سلامة الغذاء',
    titleEn: 'FSSC 22000 Certified',
    descAr: 'معيار دولي مرموق معترف به عالمياً من المبادرة العالمية لسلامة الأغذية (GFSI).',
    descEn: 'Internationally recognized certification benchmarked by GFSI for food manufacturing.',
    image: '/images/certificates/fssc-22000.png',
    badge: 'FSSC 22000'
  },
  {
    id: 'kosher',
    name: 'Kosher',
    standard: 'Kosher Certified',
    titleAr: 'شهادة كوشر المعتمدة',
    titleEn: 'Kosher Certification',
    descAr: 'مطابقة تامة وموثقة لكافة متطلبات واشتراطات شهادة كوشر للتصنيع والتصدير.',
    descEn: 'Certified compliance with dietary and processing requirements for global Kosher export.',
    image: '/images/certificates/kosher.png',
    badge: 'Kosher'
  },
  {
    id: 'fda',
    name: 'FDA Approved',
    standard: 'U.S. FDA Registered',
    titleAr: 'اعتماد هيئة الغذاء والدواء الأمريكية',
    titleEn: 'U.S. FDA Approved',
    descAr: 'تسجيل المنشأة وتوافق المنتجات التام مع اللوائح والمعايير الفيدرالية الأمريكية.',
    descEn: 'Facility registered and products fully compliant with US Federal FDA regulations.',
    image: '/images/certificates/fda.png',
    badge: 'U.S. FDA'
  },
  {
    id: 'brcgs',
    name: 'BRCGS Food Safety',
    standard: 'BRCGS Grade A',
    titleAr: 'المعيار العالمي لسلامة الأغذية',
    titleEn: 'BRCGS Food Safety',
    descAr: 'شهادة المعيار البريطاني العالمي المعتمدة لأعلى مستويات جودة وسلامة التصنيع الغذائي.',
    descEn: 'British Retail Consortium Global Standard for high food safety and processing integrity.',
    image: '/images/certificates/brcgs.png',
    badge: 'BRCGS'
  }
]
</script>

<style scoped>
.about-page {
  padding-top: 0;
  background-color: #faf9f5;
  min-height: 100vh;
}

/* 1. Compact Hero Header */
.page-hero {
  position: relative;
  min-height: 150px;
  padding: 42px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #28441d 0%, #3d8740 100%);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(40, 68, 29, 0.15);
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.page-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.page-hero-content h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.page-hero-content p {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.92);
  max-width: 620px;
  margin: 0 auto;
}

/* Section Shared */
.section-badge {
  display: inline-block;
  background: rgba(61, 135, 64, 0.1);
  color: #2e6027;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-heading {
  font-size: 2.1rem;
  font-weight: 800;
  color: #233b18;
  margin-bottom: 24px;
}

/* 2. Who We Are Section */
.about-section {
  padding: 56px 20px 32px;
  max-width: 960px;
  margin: 0 auto;
}

.story-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 44px 40px;
  border: 1px solid #e7e2d6;
  box-shadow: 0 6px 24px rgba(40, 68, 29, 0.05);
}

.story-card p {
  font-size: 1.08rem;
  line-height: 1.95;
  color: #3f473c;
  margin-bottom: 22px;
}

.story-lead {
  font-size: 1.2rem !important;
  font-weight: 600;
  color: #233b18 !important;
  border-inline-start: 4px solid #3d8740;
  padding-inline-start: 16px;
  margin-bottom: 26px !important;
}

.story-highlight {
  background: linear-gradient(135deg, rgba(61, 135, 64, 0.07) 0%, rgba(40, 68, 29, 0.04) 100%);
  border-radius: 16px;
  padding: 22px 26px;
  margin: 26px 0;
  border: 1px dashed rgba(61, 135, 64, 0.3);
}

.story-highlight p {
  margin-bottom: 0;
  font-weight: 600;
  color: #28441d;
}

.story-conclusion {
  margin-bottom: 0 !important;
  color: #28441d !important;
  font-weight: 500;
}

/* 3. Mission & After Sales */
.values-section {
  padding: 24px 20px 48px;
  max-width: 960px;
  margin: 0 auto;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.value-card {
  background: #ffffff;
  border-radius: 22px;
  padding: 36px 32px;
  border: 1px solid #e7e2d6;
  box-shadow: 0 6px 20px rgba(40, 68, 29, 0.04);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  display: flex;
  flex-direction: column;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(40, 68, 29, 0.1);
  border-color: #3d8740;
}

.value-card__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.value-icon {
  font-size: 2.1rem;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(61, 135, 64, 0.1);
  border-radius: 14px;
  flex-shrink: 0;
}

.value-card h2 {
  font-size: 1.45rem;
  font-weight: 700;
  color: #233b18;
  margin: 0;
}

.value-card p {
  font-size: 1.02rem;
  color: #495446;
  line-height: 1.85;
  margin: 0;
}

/* 4. Certifications Showcase */
.certifications-section {
  padding: 64px 20px 96px;
  background: linear-gradient(180deg, #f4f2ea 0%, #ebe7db 100%);
  border-top: 1px solid #e2ded4;
}

.certifications-head {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 48px;
}

.certifications-head h2 {
  font-size: 2.3rem;
  font-weight: 800;
  color: #233b18;
  margin: 10px 0 12px;
}

.certifications-head p {
  font-size: 1.1rem;
  color: #556250;
  line-height: 1.7;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  max-width: 1140px;
  margin: 0 auto;
}

.cert-card {
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 32px 24px 28px;
  border: 1px solid #e6e2d8;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 36px rgba(40, 68, 29, 0.12);
  border-color: #3d8740;
}

.cert-card__badge {
  position: absolute;
  top: 14px;
  inset-inline-end: 14px;
  background: #edf5ea;
  color: #2e6027;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid #d4e6ce;
}

.cert-card__media {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 8px;
}

.cert-card__img {
  max-height: 105px;
  max-width: 170px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.05));
}

.cert-card:hover .cert-card__img {
  transform: scale(1.08);
}

.cert-card__body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.cert-card__title {
  font-size: 1.18rem;
  font-weight: 700;
  color: #233b18;
  margin: 0 0 6px;
}

.cert-card__code {
  font-size: 0.85rem;
  font-weight: 600;
  color: #3d8740;
  margin: 0 0 10px;
  letter-spacing: 0.3px;
}

.cert-card__desc {
  font-size: 0.92rem;
  color: #5d6759;
  line-height: 1.65;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .page-hero {
    min-height: 130px;
    padding: 32px 16px;
  }
  .page-hero-content h1 {
    font-size: 1.85rem;
  }
  .story-card {
    padding: 30px 22px;
  }
  .story-lead {
    font-size: 1.1rem !important;
  }
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .value-card {
    padding: 28px 22px;
  }
  .cert-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .certifications-head h2 {
    font-size: 1.85rem;
  }
}
</style>

