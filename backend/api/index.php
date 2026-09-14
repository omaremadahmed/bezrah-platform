<?php

$tmpDirs = [
    '/tmp/storage',
    '/tmp/storage/app',
    '/tmp/storage/app/public',
    '/tmp/storage/framework',
    '/tmp/storage/framework/cache',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/framework/testing',
    '/tmp/storage/framework/views',
    '/tmp/storage/logs'
];

foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }
}

// Override storage path and env variables for Vercel
$_ENV['APP_CONFIG_CACHE'] = '/tmp/storage/framework/cache/config.php';
$_ENV['APP_ROUTES_CACHE'] = '/tmp/storage/framework/cache/routes.php';
$_ENV['APP_EVENTS_CACHE'] = '/tmp/storage/framework/cache/events.php';
$_ENV['APP_PACKAGES_CACHE'] = '/tmp/storage/framework/cache/packages.php';
$_ENV['APP_SERVICES_CACHE'] = '/tmp/storage/framework/cache/services.php';
$_ENV['VIEW_COMPILED_PATH'] = '/tmp/storage/framework/views';
// Prefer environment variables from Vercel, fallback to defaults if missing
$_ENV['APP_ENV'] = getenv('APP_ENV') ?: 'production';
$_ENV['APP_DEBUG'] = getenv('APP_DEBUG') ?: 'false';
$_ENV['APP_URL'] = getenv('APP_URL') ?: 'https://bezrah-app-backend.vercel.app';
$_ENV['FRONTEND_URL'] = getenv('FRONTEND_URL') ?: 'https://bezrah-app-frontend.vercel.app';
$_ENV['SANCTUM_STATEFUL_DOMAINS'] = getenv('SANCTUM_STATEFUL_DOMAINS') ?: 'bezrah-app-frontend.vercel.app';

// Enforce completely stateless sessions and caches on serverless
$_ENV['SESSION_DRIVER'] = 'array';
$_ENV['CACHE_STORE'] = 'array';
$_ENV['LOG_CHANNEL'] = 'errorlog';

$_ENV['DB_CONNECTION'] = getenv('DB_CONNECTION') ?: 'pgsql';
$_ENV['DB_URL'] = getenv('DB_URL') ?: 'postgresql://neondb_owner:npg_uI3B2NYsMRSn@ep-square-snow-axnol0b0-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require';

// Ensure APP_KEY is always set from environment, use the local one as a hardcoded fallback if Vercel env is missing
$_ENV['APP_KEY'] = getenv('APP_KEY') ?: 'base64:m1a0v/Y65U+T5Fv4yXlR+N0F2ZzPZzPZzPZzPZzPZzM=';

// Fix missing Authorization header in some serverless environments
if (!isset($_SERVER['HTTP_AUTHORIZATION']) && isset($_SERVER['HTTP_X_AUTHORIZATION'])) {
    $_SERVER['HTTP_AUTHORIZATION'] = $_SERVER['HTTP_X_AUTHORIZATION'];
}

putenv('APP_CONFIG_CACHE=' . $_ENV['APP_CONFIG_CACHE']);
putenv('APP_ROUTES_CACHE=' . $_ENV['APP_ROUTES_CACHE']);
putenv('APP_EVENTS_CACHE=' . $_ENV['APP_EVENTS_CACHE']);
putenv('APP_PACKAGES_CACHE=' . $_ENV['APP_PACKAGES_CACHE']);
putenv('APP_SERVICES_CACHE=' . $_ENV['APP_SERVICES_CACHE']);
putenv('VIEW_COMPILED_PATH=' . $_ENV['VIEW_COMPILED_PATH']);
putenv('APP_ENV=' . $_ENV['APP_ENV']);
putenv('APP_DEBUG=' . $_ENV['APP_DEBUG']);
putenv('APP_KEY=' . $_ENV['APP_KEY']);
putenv('APP_URL=' . $_ENV['APP_URL']);
putenv('FRONTEND_URL=' . $_ENV['FRONTEND_URL']);
putenv('SANCTUM_STATEFUL_DOMAINS=' . $_ENV['SANCTUM_STATEFUL_DOMAINS']);
putenv('SESSION_DRIVER=' . $_ENV['SESSION_DRIVER']);
putenv('CACHE_STORE=' . $_ENV['CACHE_STORE']);
putenv('LOG_CHANNEL=' . $_ENV['LOG_CHANNEL']);
putenv('DB_CONNECTION=' . $_ENV['DB_CONNECTION']);
putenv('DB_URL=' . $_ENV['DB_URL']);

// Mail variables for password reset
if (getenv('MAIL_MAILER')) putenv('MAIL_MAILER=' . getenv('MAIL_MAILER'));
if (getenv('MAIL_HOST')) putenv('MAIL_HOST=' . getenv('MAIL_HOST'));
if (getenv('MAIL_PORT')) putenv('MAIL_PORT=' . getenv('MAIL_PORT'));
if (getenv('MAIL_USERNAME')) putenv('MAIL_USERNAME=' . getenv('MAIL_USERNAME'));
if (getenv('MAIL_PASSWORD')) putenv('MAIL_PASSWORD=' . getenv('MAIL_PASSWORD'));
if (getenv('MAIL_ENCRYPTION')) putenv('MAIL_ENCRYPTION=' . getenv('MAIL_ENCRYPTION'));
if (getenv('MAIL_FROM_ADDRESS')) putenv('MAIL_FROM_ADDRESS=' . getenv('MAIL_FROM_ADDRESS'));
if (getenv('MAIL_FROM_NAME')) putenv('MAIL_FROM_NAME=' . getenv('MAIL_FROM_NAME'));

$_SERVER['SCRIPT_NAME'] = '/index.php';

require __DIR__ . '/../public/index.php';
