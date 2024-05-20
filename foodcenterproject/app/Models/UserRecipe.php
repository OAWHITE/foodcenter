<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserRecipe extends Model
{
    use HasFactory;

    protected $table = 'user_recipe';
    protected $fillable = ['user_id', 'recipe_id'];
}
