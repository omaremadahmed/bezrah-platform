<template>
  <div class="profile-page">
    <div class="profile-wrap">
      <div class="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account settings and preferences.</p>
      </div>

      <div class="profile-content" v-if="authStore.user">
        <aside class="profile-sidebar">
          <div class="profile-card identity-card">
            <div class="avatar-circle">
              <span>{{ authStore.user.name.charAt(0).toUpperCase() }}</span>
            </div>
            <h2>{{ authStore.user.name }}</h2>
            <p class="identity-email">{{ authStore.user.email }}</p>
            <button @click="handleLogout" class="btn-logout" type="button">Logout</button>
          </div>
        </aside>

        <div class="profile-main">
          <section class="profile-card">
            <h3>Personal Information</h3>
            <form class="profile-form" @submit.prevent="updateProfile">
              <div class="form-grid">
                <label class="field">
                  <span>Full Name</span>
                  <input type="text" v-model="profileForm.name" required>
                </label>
                <label class="field">
                  <span>Email Address</span>
                  <input type="email" v-model="profileForm.email" required>
                </label>
                <label class="field">
                  <span>Phone Number</span>
                  <input type="text" v-model="profileForm.phone" placeholder="Optional">
                </label>
              </div>

              <p class="alert success" v-if="profileSuccess">{{ profileSuccess }}</p>
              <p class="alert danger" v-if="profileError">{{ profileError }}</p>

              <button type="submit" class="btn btn-primary" :disabled="isUpdatingProfile">
                {{ isUpdatingProfile ? 'Saving...' : 'Save Changes' }}
              </button>
            </form>
          </section>

          <section class="profile-card">
            <h3>Change Password</h3>
            <form class="profile-form" @submit.prevent="changePassword">
              <label class="field">
                <span>Current Password</span>
                <input type="password" v-model="passwordForm.current_password" required>
              </label>
              <div class="form-grid">
                <label class="field">
                  <span>New Password</span>
                  <input type="password" v-model="passwordForm.new_password" required minlength="8">
                </label>
                <label class="field">
                  <span>Confirm New Password</span>
                  <input type="password" v-model="passwordForm.new_password_confirmation" required minlength="8">
                </label>
              </div>

              <p class="alert success" v-if="passwordSuccess">{{ passwordSuccess }}</p>
              <p class="alert danger" v-if="passwordError">{{ passwordError }}</p>

              <button type="submit" class="btn btn-primary" :disabled="isChangingPassword">
                {{ isChangingPassword ? 'Updating...' : 'Update Password' }}
              </button>
            </form>
          </section>
        </div>
      </div>

      <div v-else class="loading-box">
        <p>Loading profile...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const profileForm = ref({
  name: '',
  email: '',
  phone: ''
});

const passwordForm = ref({
  current_password: '',
  new_password: '',
  new_password_confirmation: ''
});

const isUpdatingProfile = ref(false);
const isChangingPassword = ref(false);
const profileSuccess = ref('');
const profileError = ref('');
const passwordSuccess = ref('');
const passwordError = ref('');

onMounted(async () => {
  if (!authStore.user) {
    await authStore.fetchProfile();
  }

  if (authStore.user) {
    profileForm.value = {
      name: authStore.user.name || '',
      email: authStore.user.email || '',
      phone: authStore.user.phone || ''
    };
  } else {
    router.push('/login');
  }
});

const updateProfile = async () => {
  isUpdatingProfile.value = true;
  profileSuccess.value = '';
  profileError.value = '';

  try {
    const success = await authStore.updateProfile(profileForm.value);
    if (success) {
      profileSuccess.value = 'Profile updated successfully!';
    }
  } catch (error) {
    profileError.value = error.response?.data?.message || 'Failed to update profile.';
  } finally {
    isUpdatingProfile.value = false;
  }
};

const changePassword = async () => {
  if (passwordForm.value.new_password !== passwordForm.value.new_password_confirmation) {
    passwordError.value = 'New passwords do not match.';
    return;
  }

  isChangingPassword.value = true;
  passwordSuccess.value = '';
  passwordError.value = '';

  try {
    const success = await authStore.changePassword(passwordForm.value);
    if (success) {
      passwordSuccess.value = 'Password changed successfully!';
      passwordForm.value = { current_password: '', new_password: '', new_password_confirmation: '' };
    }
  } catch (error) {
    passwordError.value = error.response?.data?.message || 'Failed to change password.';
  } finally {
    isChangingPassword.value = false;
  }
};

const handleLogout = async () => {
  await authStore.logout();
  router.push('/login');
};
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f4f7f5 0%, #faf9f6 40%);
  padding: 120px 20px 80px;
}

.profile-wrap {
  max-width: 1100px;
  margin: 0 auto;
}

.profile-header {
  text-align: center;
  margin-bottom: 40px;
}

.profile-header h1 {
  font-size: 2.4rem;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.profile-header p {
  color: var(--text-muted);
  font-size: 1.05rem;
}

.profile-content {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 28px;
  align-items: start;
}

.profile-card {
  background: #fff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(15, 76, 58, 0.06);
  border: 1px solid var(--border-color);
}

.identity-card {
  text-align: center;
}

.avatar-circle {
  width: 108px;
  height: 108px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f4c3a, #1b735a);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  font-weight: 800;
  box-shadow: 0 8px 20px rgba(15, 76, 58, 0.25);
}

.identity-card h2 {
  font-size: 1.4rem;
  margin-bottom: 6px;
}

.identity-email {
  color: var(--text-muted);
  word-break: break-word;
  margin-bottom: 20px;
}

.btn-logout {
  width: 100%;
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid #d7ddd9;
  background: #f8f9fa;
  color: #8a1f1f;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}

.btn-logout:hover {
  background: #ffeaea;
  border-color: #f0c2c2;
}

.profile-card h3 {
  margin-bottom: 22px;
  font-size: 1.25rem;
}

.profile-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.field span {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--primary-color);
}

.field input {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #dce4df;
  border-radius: 12px;
  background: #fafafa;
  font-size: 1rem;
  font-family: inherit;
}

.field input:focus {
  outline: none;
  border-color: var(--primary-color);
  background: #fff;
  box-shadow: 0 0 0 4px rgba(15, 76, 58, 0.1);
}

.alert {
  margin: 0;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 0.92rem;
}

.alert.success {
  background: #e8f7ee;
  color: #146c2e;
}

.alert.danger {
  background: #fdecec;
  color: #b42318;
}

.loading-box {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .profile-content,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .profile-header h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .profile-page {
    padding-top: 100px;
  }
  .profile-card {
    padding: 20px;
  }
}
</style>
