<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'role', 'profile_image', 'allergies', 'height', 'weight',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function coach()
    {
        return $this->hasOne(Coach::class);
    }

    public function chef()
    {
        return $this->hasOne(Chef::class);
    }
}
