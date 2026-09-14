<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::where('name', 'admin')->first();
        $userRole = Role::where('name', 'user')->first();

        $admin = User::firstOrCreate(
            ['email' => 'admin@bazrah.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'status' => 'active',
            ]
        );
        if ($adminRole && !$admin->roles()->where('role_id', $adminRole->id)->exists()) {
            $admin->roles()->attach($adminRole);
        }

        $user = User::firstOrCreate(
            ['email' => 'user@example.com'],
            [
                'name' => 'Test User',
                'password' => Hash::make('password'),
                'status' => 'active',
            ]
        );
        if ($userRole && !$user->roles()->where('role_id', $userRole->id)->exists()) {
            $user->roles()->attach($userRole);
        }
    }
}
