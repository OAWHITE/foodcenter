<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Celebrity extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'celebrity_recipe');
    }
}
