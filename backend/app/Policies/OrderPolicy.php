<?php

namespace App\Policies;

use App\Models\Order;
use App\Models\User;

class OrderPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasRole(['admin', 'manager']);
    }

    public function view(User $user, Order $order): bool
    {
        return $user->id === $order->user_id || $user->hasRole(['admin', 'manager']);
    }

    public function update(User $user, Order $order): bool
    {
        return $user->hasRole(['admin', 'manager']);
    }

    public function delete(User $user, Order $order): bool
    {
        return $user->hasRole('admin');
    }
}
