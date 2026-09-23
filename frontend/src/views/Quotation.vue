<template>
  <div class="page-container">
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container" data-aos="fade-up">
        <h1>{{ $t('nav.quotation') }}</h1>
        <p>{{ $t('quotation.subtitle') }}</p>
      </div>
    </div>
    
    <div class="container page-content">
      <div class="quotation-grid">
        
        <!-- Contact Info Sidebar -->
        <div class="quote-info" data-aos="fade-right">
          <h2>{{ $t('quotation.buildPartnership') }}</h2>
          <p>{{ $t('quotation.fillForm') }}</p>
          
          <div class="info-blocks">
            <div class="info-block">
              <h3>📍 {{ $t('quotation.globalHq') }}</h3>
              <p>Industrial Zone, Cairo, Egypt<br>Export Operations Center</p>
            </div>
            <div class="info-block">
              <h3>✉️ {{ $t('quotation.emailUs') }}</h3>
              <p>sales@bezrah.com<br>export@bezrah.com</p>
            </div>
            <div class="info-block">
              <h3>📞 {{ $t('quotation.callUs') }}</h3>
              <p><a href="tel:+201036161617" dir="ltr">+20 103 616 1617</a></p>
            </div>
          </div>
        </div>

        <!-- Quotation Form -->
        <div class="quote-form-card" data-aos="fade-left">
          <form @submit.prevent="submitQuote" class="q-form">
            <div class="form-row">
              <div class="form-group">
                <label>{{ $t('quotation.fname') }}</label>
                <input v-model.trim="form.first_name" type="text" required />
              </div>
              <div class="form-group">
                <label>{{ $t('quotation.lname') }}</label>
                <input v-model.trim="form.last_name" type="text" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>{{ $t('quotation.company') }}</label>
                <input v-model.trim="form.company" type="text" required />
              </div>
              <div class="form-group">
                <label>{{ $t('quotation.country') }}</label>
                <input v-model.trim="form.country" type="text" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>{{ $t('quotation.email') }}</label>
                <input v-model.trim="form.email" type="email" required />
              </div>
              <div class="form-group">
                <label>{{ $t('quotation.phone') }}</label>
                <input v-model.trim="form.phone" type="tel" required />
              </div>
            </div>

            <div class="form-group">
              <label>{{ $t('quotation.category') }}</label>
              <select v-model="form.category" required>
                <option value="">{{ $t('quotation.catPlaceholder') }}</option>
                <option value="olives">Olives</option>
                <option value="pickles">Pickles</option>
                <option value="vegetables">IQF Vegetables</option>
                <option value="fruits">IQF Fruits</option>
                <option value="private-label">Private Label Manufacturing</option>
              </select>
            </div>

            <div class="form-group">
              <label>{{ $t('quotation.quantity') }}</label>
              <input v-model.number="form.quantity" type="number" min="1" step="1" required />
            </div>

            <div class="form-group">
              <label>{{ $t('quotation.details') }}</label>
              <textarea v-model.trim="form.details" rows="4"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" :disabled="isSubmitting">
              {{ isSubmitting ? $t('common.submitting') : $t('quotation.submit') }}
            </button>

            <p v-if="successMessage" class="form-message form-message--success">{{ successMessage }}</p>
            <p v-if="errorMessage" class="form-message form-message--error">{{ errorMessage }}</p>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { contactService } from '../services/contactService'

const { t } = useI18n()

const createEmptyForm = () => ({
  first_name: '',
  last_name: '',
  company: '',
  country: '',
  email: '',
  phone: '',
  category: '',
  quantity: 1,
  details: '',
})

const form = reactive(createEmptyForm())
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const getErrorMessage = (error) => {
  const data = error.response?.data || error
  const firstFieldError = data?.errors
    ? Object.values(data.errors).flat().find(Boolean)
    : null

  return firstFieldError || data?.message || t('quotation.error')
}

const resetForm = () => {
  Object.assign(form, createEmptyForm())
}

const submitQuote = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await contactService.submitQuotation({
      ...form,
      quantity: Number(form.quantity),
    })
    successMessage.value = t('quotation.success')
    resetForm()
  } catch (error) {
    errorMessage.value = getErrorMessage(error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

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

.page-content { padding: 80px 20px; }

.quotation-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.quote-info h2 {
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.quote-info > p {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 40px;
}

.info-blocks {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-block h3 {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-block p {
  color: var(--text-muted);
  padding-inline-start: 35px;
  line-height: 1.6;
}

.quote-form-card {
  background: white;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.04);
  border: 1px solid var(--border-color);
}

.q-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: var(--text-color);
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  font-family: inherit;
  font-size: 1rem;
  background: #fafafa;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background: white;
  box-shadow: 0 0 0 4px rgba(15, 76, 58, 0.1);
}

.btn-block {
  width: 100%;
}

.btn-lg {
  padding: 16px;
  font-size: 1.1rem;
  border-radius: 12px;
  margin-top: 10px;
}

.btn-lg:disabled {
  cursor: progress;
  opacity: 0.8;
}

.form-message {
  margin: 0;
  padding: 12px 14px;
  border-radius: 10px;
  font-weight: 700;
}

.form-message--success {
  background: #e8f7ee;
  color: #146c2e;
}

.form-message--error {
  background: #fdecec;
  color: #b42318;
}

@media (max-width: 992px) {
  .quotation-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-hero-content h1 {
    font-size: 2.2rem;
  }
  .quote-form-card {
    padding: 20px;
  }
}
</style>
