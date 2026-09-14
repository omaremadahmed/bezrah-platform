# Bazrah 🌱

## Project Overview

Bazrah is a modern bilingual agricultural products platform. The platform showcases and manages products related to agriculture and food industries, connecting agricultural products with markets through quality, sustainability, and innovation.

## Vision

To be the premier digital bridge connecting high-quality agricultural products with global markets, fostering sustainable agricultural practices and transparent food supply chains.

## Mission

To provide an elegant, efficient, and reliable platform that empowers agricultural producers to showcase their products and enables buyers to easily discover and source premium agricultural goods.

## Key Features

- **Bilingual Interface**: Full support for English (LTR) and Arabic (RTL).
- **Comprehensive Product Catalog**: Detailed product listings with specifications, categories, and high-quality imagery.
- **Advanced Authentication**: Secure login via Email/Password, Google OAuth, and GitHub OAuth.
- **Powerful Search & Filtering**: Easy discovery of products based on categories and attributes.
- **Role-Based Access Control**: Granular permissions for Admins, Managers, and Users.
- **Responsive Design**: Flawless experience across desktop, tablet, and mobile devices.
- **Admin Dashboard**: Complete management of users, products, categories, and inquiries.

## Screens & Pages

- `/` - **Home Page** (Hero, Company Intro, Featured Products, Why Choose Bazrah, Stats)
- `/products` - **Products Listing Page** (Grid, Pagination, Search, Filter)
- `/products/:slug` - **Product Details Page** (Gallery, Specs, Related Products, Inquiry)
- `/categories` - **Categories Page**
- `/categories/:slug` - **Category Details**
- `/about` - **About Bazrah** (Story, Vision, Mission, Values)
- `/contact` - **Contact Page** (Form, Details, Social Media)
- `/login` - **Login Page**
- `/register` - **Register Page**
- `/forgot-password` - **Forgot Password**
- `/profile` - **User Profile**

## Tech Stack

**Frontend:**
- Vue.js 3 (Composition API)
- Vite
- Vue Router & Pinia
- Axios
- Vue I18n
- Modern Vanilla CSS & CSS Variables

**Backend:**
- Laravel
- Laravel REST API
- Laravel Sanctum & Socialite
- PostgreSQL
- Queue System & Events

**Development & Infrastructure:**
- Git & GitHub
- Docker-ready architecture
- Environment Variables

## System Architecture

```text
+-----------------------+           +-----------------------+           +-----------------------+
|                       |           |                       |           |                       |
|     Vue.js 3 SPA      |           |     Laravel 11+       |           |      PostgreSQL       |
|      (Frontend)       |   REST    |       (Backend)       |    SQL    |      (Database)       |
|                       | <=======> |                       | <=======> |                       |
| - Pinia State         |   JSON    | - API Routes          |           | - Products            |
| - Vue Router          |           | - Controllers         |           | - Categories          |
| - Vue I18n (AR/EN)    |           | - Sanctum/Socialite   |           | - Users/Roles         |
|                       |           | - Eloquent ORM        |           | - Translations        |
+-----------------------+           +-----------------------+           +-----------------------+
```

## Project Structure

### Frontend Structure

```text
frontend/
└── src/
    ├── assets/       # Static assets (images, icons, fonts, CSS variables/styles)
    ├── components/   # Reusable UI components (common, layout, home, products, auth, ui)
    ├── views/        # Page components (Home, About, Products, Login, etc.)
    ├── router/       # Vue Router configuration and route definitions
    ├── stores/       # Pinia state management (auth, products, categories, language)
    ├── services/     # API service classes (axios instances, auth service, etc.)
    ├── composables/  # Vue 3 composables (reusable logic)
    ├── locales/      # Translation files (en.json, ar.json)
    ├── utils/        # Helper functions and utilities
    ├── App.vue       # Root Vue component
    └── main.js       # Vue application entry point
```

### Backend Structure

```text
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/Api/ # API request handlers
│   │   ├── Middleware/      # HTTP middleware (auth, language, etc.)
│   │   ├── Requests/        # Form request validation classes
│   │   └── Resources/       # API Resource classes for JSON formatting
│   ├── Models/              # Eloquent models representing database tables
│   ├── Services/            # Business logic layer
│   ├── Repositories/        # Data access layer
│   ├── Policies/            # Authorization policies
│   ├── Events/              # System events
│   ├── Listeners/           # Event listeners
│   ├── Jobs/                # Background queue jobs
│   ├── Notifications/       # System notifications
│   └── Providers/           # Service providers
├── database/
│   ├── migrations/          # Database schema definitions
│   ├── seeders/             # Initial database population scripts
│   └── factories/           # Model factories for testing
├── routes/
│   ├── api.php              # RESTful API route definitions
│   └── web.php              # Web routes (mostly for OAuth callbacks)
├── config/                  # Application configuration files
├── resources/               # Views (if any), lang files
├── storage/                 # Uploaded files, logs, framework cache
└── tests/                   # Feature and unit tests
```

## Database Architecture

The PostgreSQL database relies on a robust relational design utilizing translation tables for internationalization.

- **users**: Stores application users (admins, managers, customers).
- **roles / permissions / role_user / permission_role**: Manages RBAC (Role-Based Access Control).
- **products**: Core product data (category_id, slug, status, image).
- **product_translations**: Localized product data (language_id, name, descriptions, specs).
- **categories**: Product groupings (slug, image, status).
- **category_translations**: Localized category data.
- **product_images**: Gallery images for products.
- **oauth_accounts**: Links social logins to users.
- **contact_messages / inquiries**: Stores user communications.
- **media**: Global media management.
- **settings / languages**: System configuration.
- **sessions / tokens / jobs**: Framework utilities.

## Entity Relationships

```text
+--------------+       +------------------+       +------------------+
|    Roles     |       |      Users       |       |  OAuth Accounts  |
+--------------+       +------------------+       +------------------+
| id           |<------| role_id          |------>| id               |
| name         |       | name             |       | user_id          |
+--------------+       | email            |       | provider         |
                       | password         |       | provider_id      |
                       +------------------+       +------------------+
                                |
                                v
                       +------------------+
                       |    Inquiries     |
                       +------------------+
                       | user_id          |
                       | product_id       |
                       | message          |
                       +------------------+
                                ^
                                |
+--------------+       +------------------+       +----------------------+
|  Categories  |       |     Products     |       | Product Translations |
+--------------+       +------------------+       +----------------------+
| id           |<------| category_id      |------>| id                   |
| slug         |       | id               |       | language_id          |
| image        |       | slug             |       | name                 |
+--------------+       | status           |       | description          |
      |                | image            |       +----------------------+
      |                +------------------+
      v                         |
+-------------------------+     |                 +----------------------+
| Category Translations   |     +---------------->|    Product Images    |
+-------------------------+                       +----------------------+
| id                      |                       | id                   |
| category_id             |                       | product_id           |
| language_id             |                       | image_path           |
| name                    |                       +----------------------+
+-------------------------+
```

## Authentication Architecture

The system utilizes a modern token-based authentication approach with OAuth support.

### Laravel Sanctum
Sanctum handles stateful authentication for the SPA. Upon successful login via `/api/auth/login`, Sanctum issues a secure, HTTP-only cookie or a bearer token that the Vue.js frontend stores and attaches to subsequent API requests.

### OAuth Architecture (Laravel Socialite)
1. **Google & GitHub Login**: Users click "Continue with Google/GitHub" on the frontend.
2. **Redirection**: Frontend redirects to the backend (`/api/auth/google`), which redirects to the OAuth provider.
3. **Callback**: The provider redirects back to `/api/auth/google/callback` with a code.
4. **Token Generation**: Laravel Socialite exchanges the code for user details. The backend creates/finds the user, generates a Sanctum token, and redirects back to the Vue application with the authentication payload.

## API Architecture

### Authentication
- `POST   /api/auth/register`
- `POST   /api/auth/login`
- `POST   /api/auth/logout`
- `POST   /api/auth/forgot-password`
- `POST   /api/auth/reset-password`
- `GET    /api/auth/google` (Redirect)
- `GET    /api/auth/google/callback`
- `GET    /api/auth/github` (Redirect)
- `GET    /api/auth/github/callback`

### User
- `GET    /api/user/profile`
- `PUT    /api/user/profile`

### Products
- `GET    /api/products`
- `GET    /api/products/{slug}`
- `GET    /api/products/featured`
- `POST   /api/admin/products`
- `PUT    /api/admin/products/{id}`
- `DELETE /api/admin/products/{id}`

### Categories
- `GET    /api/categories`
- `GET    /api/categories/{slug}`
- `POST   /api/admin/categories`
- `PUT    /api/admin/categories/{id}`
- `DELETE /api/admin/categories/{id}`

### Communications
- `POST   /api/contact`
- `POST   /api/inquiries`

## Internationalization

BAZRAH 🌱 is designed as a bilingual platform from the ground up:
- **Languages**: Arabic (RTL) & English (LTR).
- **Frontend**: Utilizes `vue-i18n` with separate JSON files (`locales/en.json`, `locales/ar.json`).
- **Layout Direction**: The UI dynamically switches between `dir="ltr"` and `dir="rtl"` based on the active language, affecting the entire design system (flexbox/grid layouts, margins, padding).
- **Backend**: Translations are stored in dedicated database tables (`product_translations`, `category_translations`) allowing flexible data management per language.
- **Persistence**: User language preference is stored in `localStorage` and optionally in the user profile.

## User Roles & Permissions

- **Admin**: Full system access. Manages users, roles, products, categories, media, settings, and views all inquiries.
- **Manager**: Content-focused access. Manages products, categories, and handles customer inquiries.
- **User**: Standard authenticated access. Views products, manages personal profile, and submits product inquiries.

## Admin Dashboard

A comprehensive, secured area for platform management:
- **Dashboard**: High-level metrics and system overview.
- **Products**: CRUD operations, image uploads, localization management.
- **Categories**: Category hierarchy and translation management.
- **Users**: User listing, role assignments, account status.
- **Inquiries**: Viewing customer product inquiries and responding.
- **Contact Messages**: Managing general contact form submissions.
- **Media Management**: Centralized file/image library.
- **Settings**: Global platform configurations.

## UI/UX Design System

**Visual Identity:** "From Seed to Market"
- **Primary Colors**: Deep Green, Olive Green, Natural Beige, White.
- **Design Principles**: Premium, Agricultural, Organic, Modern, Corporate, Minimal, Elegant.
- **UI Elements**:
  - Glassmorphism navigation bar for a modern touch.
  - Large, immersive hero sections with high-quality agricultural imagery.
  - Rounded cards with subtle, smooth hover micro-animations.
  - Responsive grid layouts utilizing vanilla CSS and CSS Variables.
  - Clean, modern typography without reliance on generic templates.

## Security

- **Authentication**: Laravel Sanctum for secure token management.
- **OAuth**: Secure implementation via Laravel Socialite.
- **CSRF Protection**: Native Laravel protection for stateful API requests.
- **Rate Limiting**: Throttling API endpoints to prevent abuse.
- **Validation**: Strict input validation using Laravel Form Requests.
- **Authorization**: Granular Laravel Policies protecting admin/manager routes.
- **Data Protection**: Secure password hashing (Bcrypt/Argon2), SQL Injection prevention via Eloquent ORM, and XSS protection.

## Environment Variables

### BACKEND (.env)
```env
APP_NAME=Bazrah
APP_ENV=local
APP_KEY=base64:...
APP_DEBUG=true

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=bazrah
DB_USERNAME=postgres
DB_PASSWORD=secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://localhost:8000/api/auth/google/callback

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GITHUB_REDIRECT_URI=http://localhost:8000/api/auth/github/callback

SANCTUM_STATEFUL_DOMAINS=localhost:5173
SESSION_DOMAIN=localhost

FRONTEND_URL=http://localhost:5173
```

### FRONTEND (.env)
```env
VITE_APP_NAME=Bazrah
VITE_API_URL=http://localhost:8000/api
VITE_APP_LOCALE=en
```

## Installation Guide

### Backend Installation (Laravel)
1. Clone the repository and navigate to the backend folder.
2. Install dependencies: `composer install`
3. Copy the environment file: `cp .env.example .env`
4. Generate application key: `php artisan key:generate`
5. Configure PostgreSQL in `.env`.
6. Run database migrations and seeders: `php artisan migrate --seed`
7. Start the development server: `php artisan serve`

### Frontend Installation (Vue.js)
1. Navigate to the frontend folder.
2. Install dependencies: `npm install`
3. Copy the environment file: `cp .env.example .env`
4. Start the development server: `npm run dev`

## Development Workflow
1. Separate frontend and backend servers run concurrently during development.
2. Frontend proxies API requests or uses CORS to communicate with the backend.
3. State management (Pinia) handles global application state (Auth, Language).
4. Automated testing and linting run before commits.

## Git Branch Strategy
- `main`: Production-ready code.
- `develop`: Main development branch for integrating features.
- `feature/*`: New features (e.g., `feature/oauth-integration`).
- `fix/*`: Bug fixes for development.
- `hotfix/*`: Urgent fixes for production.

## Testing Strategy
- **Backend**: Pest/PHPUnit for feature and unit tests (testing API endpoints, authentication, and database logic).
- **Frontend**: Vitest for unit testing Vue components and composables.
- **E2E**: Cypress or Laravel Dusk for critical user journeys (e.g., Checkout, Login, Admin flows).

## Deployment Architecture
- **Frontend**: Deployed to a CDN/Static hosting provider (e.g., Vercel, Netlify, or AWS S3 + CloudFront).
- **Backend**: Deployed to a dedicated application server (e.g., Laravel Forge, AWS EC2, or DigitalOcean Droplet).
- **Database**: Managed PostgreSQL instance (e.g., AWS RDS).
- **CI/CD**: GitHub Actions for automated testing and deployment.

## Future Improvements
- Product marketplace allowing third-party vendors.
- Agricultural suppliers directory.
- Detailed farmer profiles and stories.
- Online quotations and B2B ordering system.
- AI agricultural recommendations based on regional data.
- Product comparison tool.
- Advanced analytics for platform administrators.
- Native mobile application (Flutter/React Native).
- Multi-country currency and logistics support.

## Contributing
1. Fork the project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
Distributed under the MIT License. See `LICENSE` for more information.
