<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRecipe extends Model
{
    protected $table = 'user_recipe';
    protected $fillable = ['user_id', 'recipe_id'];
}
