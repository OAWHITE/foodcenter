<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chef extends Model
{
    protected $fillable = ['certificate', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
