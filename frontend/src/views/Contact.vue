<template>
  <div class="contact-page">
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container">
        <h1>{{ $t('nav.contact') }}</h1>
        <p>Get in touch with us for inquiries, partnerships, and support.</p>
      </div>
    </div>

    <section class="container section-padding">
      <div class="contact-grid">
        <!-- Contact Form -->
        <div class="contact-form-card">
          <h2>Send Us a Message</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" v-model="form.name" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" v-model="form.email" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input type="text" v-model="form.subject" placeholder="How can we help?" />
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" rows="5" placeholder="Type your message..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full">Send Message</button>
          </form>
          <div v-if="sent" class="success-msg">✓ Message sent successfully! We'll get back to you shortly.</div>
        </div>

        <!-- Contact Info -->
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">📍</div>
            <h3>Address</h3>
            <p>123 Agricultural Zone, Industrial City</p>
          </div>
          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3>Email</h3>
            <p>info@bezrah.com</p>
          </div>
          <div class="info-card">
            <div class="info-icon">📞</div>
            <h3>Phone</h3>
            <p><a href="tel:+201036161617" dir="ltr">+20 103 616 1617</a></p>
          </div>
          <div class="info-card">
            <div class="info-icon">🕐</div>
            <h3>Business Hours</h3>
            <p>Sun - Thu: 8:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
  name: '', email: '', subject: '', message: ''
});

const sent = ref(false);

const handleSubmit = () => {
  sent.value = true;
  setTimeout(() => sent.value = false, 5000);
  form.name = ''; form.email = ''; form.subject = ''; form.message = '';
};
</script>

<style scoped>
.contact-page { padding-top: 0; }

.page-hero {
  position: relative; height: 40vh; min-height: 300px; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%); overflow: hidden;
}
.page-hero-overlay { position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(140, 153, 38, 0.2) 0%, transparent 60%); }
.page-hero-content { position: relative; z-index: 2; text-align: center; color: white; }
.page-hero-content h1 { font-size: 3rem; margin-bottom: 10px; color: white; }
.page-hero-content p { font-size: 1.1rem; opacity: 0.9; }

.section-padding { padding: 80px 20px; }

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  align-items: start;
}

.contact-form-card {
  background: white;
  padding: 40px;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.contact-form-card h2 {
  font-size: 1.8rem;
  margin-bottom: 30px;
}

.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; color: var(--primary-color); }

.form-group input, .form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  font-size: 1rem;
  font-family: inherit;
  background: var(--bg-color);
  color: var(--text-color);
  outline: none;
  transition: all 0.3s ease;
  resize: vertical;
}

.form-group input:focus, .form-group textarea:focus {
  border-color: var(--primary-color);
  background: white;
  box-shadow: 0 0 0 4px rgba(15, 76, 58, 0.1);
}

.btn-full { width: 100%; padding: 16px; font-size: 1.05rem; }

.success-msg {
  margin-top: 20px;
  background: rgba(15, 76, 58, 0.1);
  color: var(--primary-color);
  padding: 14px;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateX(5px);
}

[dir="rtl"] .info-card:hover {
  transform: translateX(-5px);
}

.info-icon {
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  background: rgba(15, 76, 58, 0.05);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-card h3 {
  font-size: 1rem;
  margin-bottom: 3px;
}

.info-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
  .page-hero-content h1 { font-size: 2.2rem; }
  .contact-form-card { padding: 20px; }
}
</style>
