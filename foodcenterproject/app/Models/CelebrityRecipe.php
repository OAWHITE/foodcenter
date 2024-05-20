<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CelebrityRecipe extends Model
{
    use HasFactory;

    protected $fillable = ['celebrity_id', 'recipe_id'];

    public function celebrity()
    {
        return $this->belongsTo(Celebrity::class);
    }

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }
}
