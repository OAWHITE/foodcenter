<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'instructions', 'rating', 'calories', 'region', 'image', 'ingredient_id',
    ];

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'recipe_ingredient');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_recipe');
    }

    public function celebrityRecipes()
    {
        return $this->hasMany(CelebrityRecipe::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
