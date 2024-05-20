<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use Notifiable, HasFactory;

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

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'user_recipe');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
