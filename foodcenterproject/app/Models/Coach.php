<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Coach extends Model
{
    use HasFactory;

    protected $fillable = ['certificate', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
