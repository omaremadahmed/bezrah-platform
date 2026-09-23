<template>
  <div class="auth-page">
    <div class="auth-container" data-aos="zoom-in" data-aos-duration="280" data-aos-easing="ease-out-cubic">
      <div class="auth-card">
        
        <!-- Left Side: Form -->
        <div class="auth-form-side">
          <div class="auth-form-header">
            <h2>{{ $t('auth.forgotPasswordTitle') }}</h2>
            <p>{{ $t('auth.forgotPasswordDesc') }}</p>
          </div>

          <form @submit.prevent="handleForgotPassword" class="auth-form" v-if="!successMessage">
            <div class="form-group">
              <label for="email">{{ $t('auth.email') }}</label>
              <input
                type="email"
                id="email"
                v-model="email"
                required
                placeholder="company@example.com"
              />
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" :class="{ loading: isLoading }" :disabled="isLoading">
              <span v-if="isLoading" class="btn-loading">
                <span class="spinner" aria-hidden="true"></span>
                {{ $t('auth.resetting') }}
              </span>
              <span v-else>{{ $t('auth.sendResetLink') }}</span>
            </button>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>
          </form>

          <div v-if="successMessage" class="success-message">
            <div class="success-icon">✓</div>
            <p>{{ successMessage }}</p>
          </div>

          <div class="auth-footer">
            <router-link to="/login">{{ $t('auth.backToLogin') }}</router-link>
          </div>
        </div>

        <!-- Right Side: Branding -->
        <div class="auth-brand-side">
          <div class="brand-content">
            <div class="brand-logo">
              <Logo inverse />
            </div>
            <p class="brand-tagline">{{ $t('hero.title') }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { authService } from '../services/authService'
import Logo from '../components/Logo.vue'

const email = ref('')
const isLoading = ref(false)
const error = ref('')
const successMessage = ref('')

const handleForgotPassword = async () => {
  isLoading.value = true
  error.value = ''
  successMessage.value = ''
  
  try {
    const response = await authService.forgotPassword(email.value)
    if (response.success) {
      successMessage.value = response.message || 'If an account exists, a password reset link has been sent.'
    } else {
      error.value = response.message || 'An error occurred'
    }
  } catch (err) {
    error.value = err.response?.data?.message || 'An error occurred'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdfdfd;
  background-image: radial-gradient(circle at 50% 50%, rgba(15, 76, 58, 0.03) 0%, transparent 60%);
  padding: 100px 20px 40px;
}

.auth-container {
  width: 100%;
  max-width: 1000px;
}

.auth-card {
  display: flex;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  min-height: clamp(450px, 80vh, 600px);
}

/* Left Side (Form) */
.auth-form-side {
  flex: 1;
  padding: clamp(24px, 5vw, 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.auth-form-header {
  text-align: center;
  margin-bottom: 40px;
}

.auth-form-header h2 {
  font-size: 2.2rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.auth-form-header p {
  color: var(--text-muted);
  font-size: 1rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 25px;
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

.form-group input {
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: #fafafa;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
  background: white;
  box-shadow: 0 0 0 4px rgba(15, 76, 58, 0.1);
}

.btn-lg {
  padding: 16px;
  font-size: 1.1rem;
  border-radius: 12px;
  min-height: 56px;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease, opacity 0.18s ease;
}

.btn-block {
  width: 100%;
}

.btn-lg:disabled {
  cursor: progress;
  opacity: 0.9;
}

.btn-loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.35);
  border-top-color: white;
  border-radius: 50%;
  flex: 0 0 auto;
  animation: auth-spin 0.65s linear infinite;
}

.error-message {
  color: #dc3545;
  background: #ffe6e6;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
}

.success-message {
  color: #155724;
  background: #d4edda;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  font-size: 1.05rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.success-icon {
  width: 50px;
  height: 50px;
  background: #28a745;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.auth-footer {
  margin-top: 30px;
  text-align: center;
  font-size: 0.95rem;
}

.auth-footer a {
  color: var(--primary-color);
  font-weight: 700;
  text-decoration: none;
}

/* Right Side (Brand) */
.auth-brand-side {
  flex: 1;
  background: linear-gradient(135deg, var(--primary-color) 0%, #156c52 100%);
  padding: clamp(30px, 5vw, 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;
}

.auth-brand-side::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><text x="10" y="25" font-size="20" opacity="0.05">🌱</text></svg>') repeat;
}

.brand-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.brand-logo {
  margin-bottom: 20px;
}

.brand-logo .logo-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 10px;
}

.brand-logo h1 {
  font-size: 3rem;
  font-weight: 800;
}

.brand-tagline {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.8);
}

@media (max-width: 992px) {
  .auth-card {
    flex-direction: column-reverse;
  }
  .auth-brand-side {
    padding: 40px 20px;
    min-height: 300px;
  }
  .auth-form-side {
    padding: 40px 20px;
  }
}

@keyframes auth-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
