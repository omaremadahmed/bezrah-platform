<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <div class="modal-header">
        <h2>إضافة منتج</h2>
        <button class="close-btn" @click="close">&times;</button>
      </div>
      
      <form @submit.prevent="submitForm" class="product-form">
        <div class="form-section">
          <h3>البيانات الأساسية</h3>
          <div class="form-group">
            <label>مسار الصورة (Image URL)</label>
            <input type="text" v-model="form.image" placeholder="/images/products/product-1.jpeg" required>
          </div>
          <div class="form-group">
            <label>التصنيف (Category ID)</label>
            <select v-model="form.category_id" required>
              <option value="1">Olives</option>
              <option value="2">Pickles</option>
              <option value="3">Vegetables</option>
              <option value="4">Fruits</option>
            </select>
          </div>
        </div>

        <div class="form-section">
          <h3>الترجمة العربية</h3>
          <div class="form-group">
            <label>اسم المنتج (Arabic Name)</label>
            <input type="text" v-model="form.translations.ar.name" required>
          </div>
          <div class="form-group">
            <label>الوصف (Arabic Description)</label>
            <textarea v-model="form.translations.ar.description"></textarea>
          </div>
        </div>

        <div class="form-section">
          <h3>الترجمة الإنجليزية</h3>
          <div class="form-group">
            <label>Product Name (English)</label>
            <input type="text" v-model="form.translations.en.name" required>
          </div>
          <div class="form-group">
            <label>Description (English)</label>
            <textarea v-model="form.translations.en.description"></textarea>
          </div>
        </div>

        <div class="form-section">
          <h3>بيانات السعر والتعبئة (Variant)</h3>
          <div class="form-group">
            <label>التعبئة (Packaging)</label>
            <input type="text" v-model="variant.packaging" placeholder="e.g. Jars 720g">
          </div>
          <div class="form-group">
            <label>السعر للكرتونة (FOB Carton Price)</label>
            <input type="number" step="0.01" v-model="variant.price_fob_carton">
          </div>
          <div class="form-group">
            <label>السعر للقطعة (FOB Piece Price)</label>
            <input type="number" step="0.01" v-model="variant.price_fob_piece">
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="btn btn-secondary" @click="close">إلغاء</button>
          <button type="submit" class="btn btn-primary" :disabled="loading">
            {{ loading ? 'جاري الحفظ...' : 'حفظ المنتج' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import apiClient from '../../services/apiClient';
import { priceListData } from '../../data/priceList';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close', 'productAdded']);

const loading = ref(false);

const categoryMap = {
  1: { category: 'olives', categoryName: 'Olives' },
  2: { category: 'pickles', categoryName: 'Pickles' },
  3: { category: 'vegetables', categoryName: 'Vegetables' },
  4: { category: 'fruits', categoryName: 'Fruits' }
};

const form = reactive({
  category_id: 1,
  image: '',
  status: 'active',
  is_featured: false,
  translations: {
    en: { name: '', description: '' },
    ar: { name: '', description: '' }
  }
});

const variant = reactive({
  packaging: '',
  price_fob_carton: null,
  price_fob_piece: null
});

const close = () => {
  emit('close');
};

const resetForm = () => {
  form.category_id = 1;
  form.image = '';
  form.status = 'active';
  form.is_featured = false;
  form.translations.en.name = '';
  form.translations.en.description = '';
  form.translations.ar.name = '';
  form.translations.ar.description = '';
  variant.packaging = '';
  variant.price_fob_carton = null;
  variant.price_fob_piece = null;
};

const submitForm = async () => {
  loading.value = true;
  try {
    const payload = {
      ...form,
      variants: [variant]
    };

    // Try saving to backend API
    let savedToBackend = false;
    try {
      await apiClient.post('/admin/products', payload);
      savedToBackend = true;
    } catch (apiError) {
      console.warn('Backend save failed (product will be added locally):', apiError.message);
    }

    // Add product to local data so it appears immediately on the page
    const catInfo = categoryMap[form.category_id] || categoryMap[1];
    const slug = form.translations.en.name.toLowerCase().replace(/\s+/g, '-');
    
    const fobCarton = variant.price_fob_carton ? `$${Number(variant.price_fob_carton).toFixed(2)}` : '-';
    const fobPiece = variant.price_fob_piece ? `$${Number(variant.price_fob_piece).toFixed(2)}` : '-';

    const newProduct = {
      id: slug || `product-${Date.now()}`,
      name: form.translations.en.name,
      category: catInfo.category,
      categoryName: catInfo.categoryName,
      image: form.image || '/images/products/product-1.jpeg',
      variants: [{
        items: '-',
        cartons: '-',
        packaging: variant.packaging || '-',
        drained: '-',
        fobCarton: fobCarton,
        fobPiece: fobPiece
      }]
    };

    priceListData.push(newProduct);

    alert(savedToBackend 
      ? '✅ تم إضافة المنتج بنجاح وحفظه في قاعدة البيانات!' 
      : '✅ تم إضافة المنتج محلياً بنجاح!');
    
    resetForm();
    emit('productAdded');
    close();
  } catch (error) {
    console.error(error);
    alert('حدث خطأ أثناء حفظ المنتج: ' + error.message);
  } finally {
    loading.value = false;
  }
};
</script>


<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.form-section {
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}
.form-section h3 {
  margin-top: 0;
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}
.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

@media (max-width: 480px) {
  .modal-content {
    padding: 20px;
    width: 95%;
  }
}
</style>
