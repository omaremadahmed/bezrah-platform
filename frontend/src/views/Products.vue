<template>
  <div class="products-page">
    
    <!-- Custom Toast -->
    <transition name="toast-fade">
      <div v-if="toastMessage" class="custom-toast">
        {{ toastMessage }}
      </div>
    </transition>
    <div class="page-hero">
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content container" data-aos="fade-up">
        <h1>{{ $t('nav.products') }}</h1>
        <p>Premium agricultural products from our farms to your table</p>
      </div>
    </div>

    <section class="products-main container">
      
     <div class="catalog-view mb-5">
    <div class="catalog-header">
        
        <div class="header-spacer"></div>

        <h2>Our Products Catalog</h2>

        <button 
            class="add-product-btn"
            @click="isAddProductModalOpen = true"
        >
            + إضافة منتج
        </button>

    </div>

        
        <div class="filter-bar" data-aos="fade-up" data-aos-delay="100">
          <button
            v-for="cat in categories"
            :key="cat.id"
            :class="['filter-btn', { active: activeCategory === cat.id }]"
            @click="activeCategory = cat.id"
          >
            <span class="filter-icon">{{ cat.icon }}</span>
            {{ cat.name }}
          </button>
        </div>

        <div class="grid">
          <div
            class="grid-card"
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            data-aos="fade-up"
            :data-aos-delay="(index % 4) * 100"
            @click="addToCart(product)"
          >
            <div class="grid-card-img">
              <img :src="product.image" :alt="product.name" @error="$event.target.src = '/images/products/product-1.jpeg'" loading="lazy" />
              <span class="cat-badge">{{ product.categoryName }}</span>
            </div>
            <div class="grid-card-body">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="card-meta">
                <span class="card-price">{{ displayPrice(product).amount }}</span>
                <span class="card-pack">{{ displayPrice(product).unit || product.packaging }}</span>
              </div>
              <button class="btn btn-primary add-cart-btn" type="button" @click.stop="addToCart(product)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div v-if="filteredProducts.length === 0" class="empty-state">
          <p>No products found in this category.</p>
        </div>
      </div>

      <div class="spacer-80"></div>

      <!-- Price List Section -->
      <div class="pricelist-view" data-aos="fade-in">
        <div class="pricelist-header">
          <h2>Bezrah Price List - May 2026 (USA)</h2>
          <button class="btn btn-primary btn-sm" type="button" :disabled="isDownloading" @click="downloadCatalogue">
            {{ isDownloading ? 'Generating…' : 'Download PDF' }}
          </button>
        </div>
        
        <div class="table-responsive">
          <table class="price-table">
            <thead>
              <tr>
                <th class="text-center">Photo</th>
                <th>Product Name</th>
                <th class="text-center">Items / Carton</th>
                <th class="text-center">Cartons / 20ft Container</th>
                <th>Packaging</th>
                <th>Drained Weight</th>
                <th class="price-col">Price FOB / Carton</th>
                <th class="price-col">Price FOB / Piece</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(group, gIndex) in priceListData" :key="gIndex">
                <tr v-for="(variant, vIndex) in group.variants" :key="`${gIndex}-${vIndex}`">
                  <!-- Render Photo and Name only on the first row of the group, with rowspan -->
                  <td v-if="vIndex === 0" :rowspan="group.variants.length" class="photo-cell" @click="addPriceGroupToCart(group)">
                    <img :src="group.image" :alt="group.name" @error="$event.target.src = '/images/products/product-1.jpeg'" class="table-img" />
                  </td>
                  <td v-if="vIndex === 0" :rowspan="group.variants.length" class="name-cell" @click="addPriceGroupToCart(group)">
                    <strong>{{ group.name }}</strong>
                    <button type="button" class="table-add-btn" @click.stop="addPriceGroupToCart(group)">Add to Cart</button>
                  </td>
                  
                  <!-- Variant Data -->
                  <td class="text-center">{{ variant.items }}</td>
                  <td class="text-center">{{ variant.cartons }}</td>
                  <td>{{ variant.packaging }}</td>
                  <td>{{ variant.drained }}</td>
                  <td class="price-val">{{ variant.fobCarton }}</td>
                  <td class="price-val">{{ variant.fobPiece }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Add Product Modal -->
    <AddProductModal 
      :isOpen="isAddProductModalOpen" 
      @close="isAddProductModalOpen = false"
      @productAdded="refreshProducts"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { priceListData, catalogProducts as staticProducts, productCategories, displayPrice, sellPrice } from '../data/priceList';
import { useCartStore } from '../stores/cart';
import { generateCataloguePdf, savePdfForDevice } from '../utils/downloadPdf';
import AddProductModal from '../components/admin/AddProductModal.vue';
import { productService } from '../services/productService';

const cartStore = useCartStore();
const route = useRoute();
const isDownloading = ref(false);
const isAddProductModalOpen = ref(false);
const categories = productCategories;

const categorySlugAliases = {
  all: 'all',
  olives: 'olives',
  pickles: 'pickles',
  fruits: 'fruits',
  'iqf-fruits': 'fruits',
  vegetables: 'vegetables',
  'iqf-vegetables': 'vegetables',
};

const resolveRouteCategory = () => {
  const rawCategory = route.params.category || route.query.category || 'all';
  const category = Array.isArray(rawCategory) ? rawCategory[0] : rawCategory;
  return categorySlugAliases[category] || 'all';
};

const activeCategory = ref(resolveRouteCategory());

watch(() => [route.params.category, route.query.category], () => {
  activeCategory.value = resolveRouteCategory();
});

const addToCart = (product) => {
  cartStore.addItem({
    ...product,
    price_fob_piece: sellPrice(product)
  });
  cartStore.isCartOpen = true;
};

const addPriceGroupToCart = (group) => {
  const first = group.variants[0] || {};
  addToCart({
    id: group.id,
    name: group.name,
    image: group.image,
    price_fob_piece: first.fobPiece,
    price_fob_carton: first.fobCarton,
    packaging: first.packaging
  });
};

const downloadCatalogue = async () => {
  isDownloading.value = true;
  try {
    const doc = await generateCataloguePdf(staticProducts);
    await savePdfForDevice(doc, 'Bezrah_Product_Catalogue.pdf');
  } catch (error) {
    console.error('Failed to generate catalogue:', error);
    showToast('Failed to download catalogue. Please try again.');
  } finally {
    isDownloading.value = false;
  }
};

// Toast state
const toastMessage = ref('');
const showToast = (msg) => {
  toastMessage.value = msg;
  setTimeout(() => {
    toastMessage.value = '';
  }, 4000);
};

const backendProducts = ref([]);

onMounted(async () => {
  await refreshProducts();
});

const filteredProducts = computed(() => {
  // Always use static products as the primary catalog source.
  // Backend products are only used if they contain items not already in static data.
  const products = staticProducts;
  if (activeCategory.value === 'all') return products;
  return products.filter(p => {
    const cat = (p.category_name || p.categoryName || p.category || '').toLowerCase();
    return cat === activeCategory.value.toLowerCase();
  });
});

const refreshProducts = async () => {
  try {
    const res = await productService.getProducts({ per_page: 100 });
    if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
      backendProducts.value = res.data;
    } else {
      backendProducts.value = [];
    }
  } catch (e) {
    console.warn('Failed to fetch products from API, using static data', e);
    backendProducts.value = [];
  }
};
</script>

<style scoped>
.custom-toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: white;
  padding: 14px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  z-index: 9999;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  width: max-content;
  max-width: 90vw;
}
[dir="rtl"] .custom-toast {
  transform: translateX(50%);
}
.toast-fade-enter-active, .toast-fade-leave-active {
  transition: all 0.3s ease;
}
.toast-fade-enter-from, .toast-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.products-page {
  padding-top: 0;
}

.page-hero {
  position: relative;
  height: 40vh;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  overflow: hidden;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(140, 153, 38, 0.2) 0%, transparent 60%);
}

.page-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.page-hero-content h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  color: white;
}

.page-hero-content p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.products-main {
  padding: 40px 20px 100px;
}

.spacer-80 {
  height: 80px;
}

/* Catalog View Styles */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid var(--border-color);
  background: white;
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.filter-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 25px;
}

.grid-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.4s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  cursor: pointer;
}

.grid-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(15, 76, 58, 0.1);
  border-color: var(--primary-color);
}

.grid-card-img {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: #f7f7f4;
}

.grid-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 14px;
  gap: 8px;
}

.card-price {
  font-weight: 800;
  color: var(--primary-color);
}

.card-pack {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.add-cart-btn {
  width: 100%;
  padding: 10px 16px;
  font-size: 0.9rem;
}

.grid-card:hover .grid-card-img img {
  transform: scale(1.06);
}

.cat-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--primary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

[dir="rtl"] .cat-badge {
  right: auto;
  left: 12px;
}

.grid-card-body {
  padding: 18px;
}

.grid-card-body h3 {
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: var(--primary-color);
}

.grid-card-body p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.empty-state {
  text-align: center;
  padding: 60px;
  color: var(--text-muted);
  font-size: 1.1rem;
}

/* Price List View Styles */
.pricelist-view {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.pricelist-header {
  padding: 25px 30px;
  background: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pricelist-header h2 {
  font-size: 1.5rem;
  margin: 0;
}

.pricelist-header .btn {
  background: white;
  color: var(--primary-color);
}

.pricelist-header .btn:hover {
  background: var(--secondary-color);
  color: white;
}

.table-responsive {
  overflow-x: auto;
  padding: 0;
  width: 100%;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
}

.price-table th {
  background: #f8f9fa;
  color: var(--primary-color);
  font-weight: 700;
  text-align: left;
  padding: 16px 20px;
  font-size: 0.95rem;
  border-bottom: 2px solid var(--border-color);
  white-space: nowrap;
}

.text-center {
  text-align: center !important;
}

.price-col {
  text-align: right !important;
}

[dir="rtl"] .price-table th {
  text-align: right;
}
[dir="rtl"] .price-col {
  text-align: left !important;
}

.price-table td {
  padding: 12px 20px;
  border-bottom: 1px solid var(--border-color);
  vertical-align: middle;
  font-size: 0.95rem;
  color: var(--text-color);
}

.price-table tr:hover td:not(.photo-cell):not(.name-cell) {
  background-color: #fcfcfc;
}

.photo-cell {
  width: 100px;
  text-align: center;
  border-right: 1px solid var(--border-color);
  background: white;
  padding: 10px !important;
}

[dir="rtl"] .photo-cell,
[dir="rtl"] .name-cell {
  border-right: none;
  border-left: 1px solid var(--border-color);
}

.table-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  display: block;
  margin: 0 auto;
}

.name-cell {
  background: white;
  border-right: 1px solid var(--border-color);
  font-size: 1.1rem;
  color: var(--primary-color);
  cursor: pointer;
}

.table-add-btn {
  display: block;
  margin-top: 8px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}

.price-val {
  font-weight: 700;
  color: var(--secondary-color);
  text-align: right;
}
[dir="rtl"] .price-val {
  text-align: left;
}

.catalog-header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}

.catalog-header h2 {
    margin: 0;
    text-align: center;
}

.add-product-btn {
    justify-self: end;
    background: #1f5a46;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
    box-shadow: 0 4px 12px rgba(31, 90, 70, 0.2);
}

.add-product-btn:hover {
    transform: translateY(-2px);
    background: #174635;
}

@media (max-width: 768px) {
  .page-hero-content h1 {
    font-size: 2rem;
  }
  .pricelist-header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  .catalog-header {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .header-spacer {
    display: none;
  }
  .add-product-btn {
    width: 100%;
  }
  .filter-btn {
    flex: 1 1 45%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .filter-btn {
    flex: 1 1 100%;
  }
}
</style>
