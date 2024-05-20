<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = ['name', 'description', 'calories', 'preparation_time'];

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
