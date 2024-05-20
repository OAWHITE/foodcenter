<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Diet extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'meals', 'calories', 'fat', 'carbs', 'protein'];
}
