<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCelebrityRecipeTable extends Migration
{
    public function up()
    {
        Schema::create('celebrity_recipe', function (Blueprint $table) {
            $table->foreignId('celebrity_id')->constrained('celebrities');
            $table->foreignId('recipe_id')->constrained('recipes');
            $table->primary(['celebrity_id', 'recipe_id']);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('celebrity_recipe');
    }
}
