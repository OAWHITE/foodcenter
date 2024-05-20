<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    public function index()
    {
        return Ingredient::all();
    }

    public function show(Ingredient $ingredient)
    {
        return $ingredient;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'quantity' => 'required|numeric',
            'unit' => 'required|string|max:255',
            'image' => 'nullable|string',
            'calories' => 'nullable|numeric',
            'fat' => 'nullable|numeric',
            'carbs' => 'nullable|numeric',
            'protein' => 'nullable|numeric',
            'avg_rating' => 'nullable|numeric',
        ]);

        return Ingredient::create($validated);
    }

    public function update(Request $request, Ingredient $ingredient)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'quantity' => 'sometimes|numeric',
            'unit' => 'sometimes|string|max:255',
            'image' => 'nullable|string',
            'calories' => 'nullable|numeric',
            'fat' => 'nullable|numeric',
            'carbs' => 'nullable|numeric',
            'protein' => 'nullable|numeric',
            'avg_rating' => 'nullable|numeric',
        ]);

        $ingredient->update($validated);
        return $ingredient;
    }

    public function destroy(Ingredient $ingredient)
    {
        $ingredient->delete();
        return response(null, 204);
    }
}
