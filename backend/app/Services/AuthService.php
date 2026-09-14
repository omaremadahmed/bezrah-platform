<?php

namespace App\Services;

use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Str;

class AuthService
{
    /**
     * Register a new user.
     */
    public function register(array $data): User
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        // Assign default 'user' role
        $userRole = Role::where('name', 'user')->first();
        if ($userRole) {
            $user->roles()->attach($userRole);
        }

        event(new Registered($user));

        Log::info('User registered', ['user_id' => $user->id, 'email' => $user->email]);

        return $user;
    }

    /**
     * Authenticate user and generate token.
     */
    public function login(array $credentials): ?array
    {
        $user = User::where('email', $credentials['email'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            Log::warning('Login failed', ['email' => $credentials['email']]);
            return null;
        }

        if ($user->status !== 'active') {
            Log::warning('Suspended user attempted login', ['user_id' => $user->id]);
            throw new \Exception('Your account has been suspended.');
        }

        $user->update(['last_login_at' => now()]);

        // Generate Sanctum token
        $token = $user->createToken('bazrah-auth-token')->plainTextToken;

        return [
            'user' => $user->load('roles'),
            'token' => $token,
        ];
    }

    /**
     * Logout current user.
     */
    public function logout(User $user): void
    {
        $user->currentAccessToken()->delete();
    }

    /**
     * Update user profile.
     */
    public function updateProfile(User $user, array $data): User
    {
        $user->update([
            'name' => $data['name'] ?? $user->name,
            'email' => $data['email'] ?? $user->email,
            'phone' => $data['phone'] ?? $user->phone,
            'bio' => $data['bio'] ?? $user->bio,
        ]);

        return $user;
    }

    /**
     * Change user password.
     */
    public function changePassword(User $user, string $currentPassword, string $newPassword): bool
    {
        if (!Hash::check($currentPassword, $user->password)) {
            return false;
        }

        $user->update([
            'password' => Hash::make($newPassword)
        ]);

        Log::info('Password changed', ['user_id' => $user->id]);

        return true;
    }
}
