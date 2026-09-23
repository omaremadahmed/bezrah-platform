<template>
  <div class="auth-page">
    <div class="auth-container" data-aos="zoom-in" data-aos-duration="280" data-aos-easing="ease-out-cubic">
      <div class="auth-card">
        
        <!-- Left Side: Form -->
        <div class="auth-form-side">
          <div class="auth-form-header">
            <h2>{{ $t('auth.createAccount') }}</h2>
            <p>{{ $t('auth.joinNetwork') }}</p>
          </div>

          <form @submit.prevent="handleRegister" class="auth-form">
            <div class="form-group">
              <label for="name">{{ $t('auth.fname') }}</label>
              <input
                type="text"
                id="name"
                v-model="name"
                required
                placeholder="John Doe"
              />
            </div>

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
            
            <div class="form-group">
              <label for="password">{{ $t('auth.password') }}</label>
              <input
                type="password"
                id="password"
                v-model="password"
                required
                placeholder="••••••••"
              />
            </div>

            <div class="form-group">
              <label for="password_confirm">{{ $t('auth.confirmPass') }}</label>
              <input
                type="password"
                id="password_confirm"
                v-model="passwordConfirm"
                required
                placeholder="••••••••"
              />
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" :class="{ loading: isLoading }" :disabled="isLoading">
              <span v-if="isLoading" class="btn-loading">
                <span class="spinner" aria-hidden="true"></span>
                {{ $t('auth.signingUp') }}
              </span>
              <span v-else>{{ $t('auth.signUp') }}</span>
            </button>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>
          </form>

          <div class="auth-footer">
            <p>{{ $t('auth.hasAccount') }} <router-link to="/login">{{ $t('auth.signIn') }}</router-link></p>
          </div>
        </div>

        <!-- Right Side: Branding -->
        <div class="auth-brand-side">
          <div class="brand-content">
            <div class="brand-logo">
              <Logo inverse />
            </div>
            <p class="brand-tagline">{{ $t('auth.tagline') }}</p>
            
            <div class="brand-features">
              <div class="feature-item">
                <div class="f-dot"></div>
                <span>{{ $t('auth.r1') }}</span>
              </div>
              <div class="feature-item">
                <div class="f-dot"></div>
                <span>{{ $t('auth.r2') }}</span>
              </div>
              <div class="feature-item">
                <div class="f-dot"></div>
                <span>{{ $t('auth.r3') }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Logo from '../components/Logo.vue'

const router = useRouter()
const authStore = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const isLoading = ref(false)
const error = ref('')

const handleRegister = async () => {
  if (password.value !== passwordConfirm.value) {
    error.value = 'Passwords do not match'
    return
  }

  isLoading.value = true
  error.value = ''
  
  try {
    const success = await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirm.value
    })
    
    if (success) {
      router.push('/')
    } else {
      error.value = authStore.error || 'Registration failed'
    }
  } catch (err) {
    error.value = authStore.error || 'An error occurred during registration'
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
  margin-top: 10px;
  min-height: 56px;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease, opacity 0.18s ease;
}

.btn-block {
  width: 100%;
}

.btn-lg:disabled {
  cursor: progress;
  opacity: 0.9;
  transform: none;
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

.auth-footer {
  margin-top: 30px;
  text-align: center;
  font-size: 0.95rem;
  color: var(--text-muted);
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
  margin-bottom: 50px;
}

.brand-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  max-width: 250px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.05rem;
  color: rgba(255,255,255,0.9);
}

.f-dot {
  width: 8px;
  height: 8px;
  background: var(--secondary-color);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(140, 153, 38, 0.3);
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

@media (max-width: 480px) {
  .auth-brand-side, .auth-form-side {
    padding: 30px 15px;
  }
  .auth-form-header h2 {
    font-size: 1.8rem;
  }
  .brand-logo h1 {
    font-size: 2.2rem;
  }
}

@keyframes auth-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
  }

  .form-group input,
  .btn-lg {
    transition: none;
  }
}
</style>
