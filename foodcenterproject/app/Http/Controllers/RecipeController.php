<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index()
    {
        return Recipe::all();
    }

    public function show(Recipe $recipe)
    {
        return $recipe;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'instructions' => 'required|string',
            'rating' => 'nullable|numeric',
            'calories' => 'nullable|integer',
            'region' => 'nullable|string|max:255',
            'image' => 'nullable|string', 
            'ingredient_id' => 'required|exists:ingredients,id',
        ]);

        return Recipe::create($validated);
    }

    public function update(Request $request, Recipe $recipe)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'instructions' => 'sometimes|string',
            'rating' => 'nullable|numeric',
            'calories' => 'nullable|integer',
            'region' => 'nullable|string|max:255',
            'image' => 'nullable|string', 
            'ingredient_id' => 'sometimes|exists:ingredients,id',
        ]);

        $recipe->update($validated);
        return $recipe;
    }

    public function destroy(Recipe $recipe)
    {
        $recipe->delete();
        return response(null, 204);
    }
}
