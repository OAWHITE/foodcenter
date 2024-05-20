<?php

namespace App\Http\Controllers;

use App\Models\RecipeIngredient;
use Illuminate\Http\Request;

class RecipeIngredientController extends Controller
{
    public function index()
    {
        return RecipeIngredient::all();
    }

    public function show(RecipeIngredient $recipeIngredient)
    {
        return $recipeIngredient;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'recipe_id' => 'required|exists:recipes,id',
            'ingredient_id' => 'required|exists:ingredients,id',
        ]);

        return RecipeIngredient::create($validated);
    }

    public function update(Request $request, RecipeIngredient $recipeIngredient)
    {
        $validated = $request->validate([
            'recipe_id' => 'sometimes|exists:recipes,id',
            'ingredient_id' => 'sometimes|exists:ingredients,id',
        ]);

        $recipeIngredient->update($validated);
        return $recipeIngredient;
    }

    public function destroy(RecipeIngredient $recipeIngredient)
    {
        $recipeIngredient->delete();
        return response(null, 204);
    }
}
