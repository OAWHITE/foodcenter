<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http; // Add this import

class RecipeController extends Controller
{
    // Fetch all recipes
    public function index()
    {
        return Recipe::all();
    }

    // Fetch a specific recipe
    public function show(Recipe $recipe)
    {
        return $recipe;
    }

    // Store a new recipe
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
        $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
        $imagePath = $request->image->storeAs('recipe/image', $imageName, 'public');

        $recipe = new Recipe();
        $recipe->title = $request->title;
        $recipe->description = $request->description;
        $recipe->instructions = $request->instructions;
        $recipe->rating = $request->rating;
        $recipe->calories = $request->calories;
        $recipe->region = $request->region;
        $recipe->ingredient_id = $request->ingredient_id;
        $recipe->image = $imagePath; // Store the image path in the database
        $recipe->save();
        return response()->json(['message' => 'intervention created successfully'], 201);



      //  return Recipe::create($validated);
    }

    // Update an existing recipe
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

    // Delete a recipe
    public function destroy(Recipe $recipe)
    {
        $recipe->delete();
        return response(null, 204);
    }

    // List recipes and fetch data from API
    public function list()
    {
        $recipes = Recipe::paginate(10);

        return view('recipes.list', compact('recipes'));
    }
    public function create()
{
    return view('recipes.create');
}

}
