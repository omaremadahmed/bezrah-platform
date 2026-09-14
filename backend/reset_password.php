<?php
$env = 'pgsql';
putenv("DB_CONNECTION=$env");
putenv("DB_URL=postgresql://neondb_owner:npg_uI3B2NYsMRSn@ep-square-snow-axnol0b0.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require");

require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$user = \App\Models\User::where('email', 'ytbbb6789@gmail.com')->first();
if ($user) {
    $user->password = \Illuminate\Support\Facades\Hash::make('12345678');
    $user->save();
    echo "Password reset successfully for {$user->email}\n";
} else {
    echo "User not found\n";
}
