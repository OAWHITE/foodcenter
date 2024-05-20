<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ingredient extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'quantity', 'unit', 'image', 'calories', 'fat', 'carbs', 'protein', 'avg_rating'];
}
