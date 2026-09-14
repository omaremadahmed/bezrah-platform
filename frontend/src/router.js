import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Products from './views/Products.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Export from './views/Export.vue'
import Quotation from './views/Quotation.vue'
import Checkout from './views/Checkout.vue'
import Profile from './views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: {
        en: 'Mediterranean Agriculture and Export',
        ar: 'زراعة متوسطية وتصدير',
      },
      description: {
        en: 'Bezrah prepares Mediterranean olives, pickles, IQF vegetables, and IQF fruits for importers and distributors.',
        ar: 'تجهز بذرة الزيتون والمخللات والخضروات والفواكه المجمدة للمستوردين والموزعين.',
      },
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      title: { en: 'Products', ar: 'المنتجات' },
      description: {
        en: 'Browse the Bezrah product catalog and export price-list formats.',
        ar: 'تصفح كتالوج منتجات بذرة وصيغ الأسعار التصديرية.',
      },
    },
  },
  {
    path: '/products/:category',
    name: 'ProductCategory',
    component: Products,
    meta: {
      title: { en: 'Product Category', ar: 'فئة المنتجات' },
      description: {
        en: 'Browse a Bezrah product category.',
        ar: 'تصفح إحدى فئات منتجات بذرة.',
      },
    },
  },
  {
    path: '/products/:category/:slug',
    name: 'ProductDetail',
    component: Products,
    meta: {
      title: { en: 'Product Details', ar: 'تفاصيل المنتج' },
      description: {
        en: 'View Bezrah product details and request a quote.',
        ar: 'اعرض تفاصيل المنتج واطلب عرض سعر من بذرة.',
      },
    },
  },
  {
    path: '/export',
    name: 'Export',
    component: Export,
    meta: {
      title: { en: 'Export', ar: 'التصدير' },
      description: {
        en: 'Learn how Bezrah coordinates Mediterranean agricultural exports.',
        ar: 'تعرف على كيفية تنسيق بذرة لصادرات المنتجات الزراعية المتوسطية.',
      },
    },
  },
  {
    path: '/quotation',
    name: 'Quotation',
    alias: '/request-a-quote',
    component: Quotation,
    meta: {
      title: { en: 'Request a Quote', ar: 'طلب عرض سعر' },
      description: {
        en: 'Request pricing, samples, packaging, or export availability from Bezrah.',
        ar: 'اطلب الأسعار أو العينات أو التعبئة أو توافر التصدير من بذرة.',
      },
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: { en: 'About Us', ar: 'من نحن' },
      description: {
        en: 'Learn about Bezrah, a Mediterranean agricultural and food export company.',
        ar: 'تعرف على بذرة، شركة زراعية وغذائية متوسطية للتصدير.',
      },
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: { en: 'Contact Us', ar: 'تواصل معنا' },
      description: {
        en: 'Contact Bezrah for partnerships, quotations, and product inquiries.',
        ar: 'تواصل مع بذرة للشراكات وعروض الأسعار واستفسارات المنتجات.',
      },
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: { en: 'Login', ar: 'تسجيل الدخول' },
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: { en: 'Register', ar: 'إنشاء حساب' },
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: {
      title: { en: 'Checkout', ar: 'الدفع' },
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('./views/Legal.vue'),
    meta: {
      legalType: 'privacy',
      title: { en: 'Privacy', ar: 'الخصوصية' },
    },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('./views/Legal.vue'),
    meta: {
      legalType: 'terms',
      title: { en: 'Terms', ar: 'الشروط' },
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('./views/ForgotPassword.vue'),
    meta: {
      title: { en: 'Forgot Password', ar: 'استعادة كلمة المرور' },
    },
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('./views/ResetPassword.vue'),
    meta: {
      title: { en: 'Reset Password', ar: 'إعادة تعيين كلمة المرور' },
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true,
      title: { en: 'Profile', ar: 'الملف الشخصي' },
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Navigation guard for protected routes
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (!token) {
      return { name: 'Login', query: { redirect: to.fullPath } }
    }
  }
})

export default router
