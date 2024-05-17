<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipeIngredientTable extends Migration
{
    public function up()
    {
        Schema::create('recipe_ingredient', function (Blueprint $table) {
            $table->foreignId('recipe_id')->constrained('recipes');
            $table->foreignId('ingredient_id')->constrained('ingredients');
            $table->primary(['recipe_id', 'ingredient_id']);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('recipe_ingredient');
    }
}
