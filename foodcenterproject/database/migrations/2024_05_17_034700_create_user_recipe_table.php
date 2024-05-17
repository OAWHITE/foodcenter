<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRecipeTable extends Migration
{
    public function up()
    {
        Schema::create('user_recipe', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('recipe_id')->constrained('recipes');
            $table->primary(['user_id', 'recipe_id']);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_recipe');
    }
}
