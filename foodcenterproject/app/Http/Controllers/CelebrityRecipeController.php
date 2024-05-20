<?php

namespace App\Http\Controllers;

use App\Models\CelebrityRecipe;
use Illuminate\Http\Request;

class CelebrityRecipeController extends Controller
{
    public function index()
    {
        return CelebrityRecipe::all();
    }

    public function show(CelebrityRecipe $celebrityRecipe)
    {
        return $celebrityRecipe;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'celebrity_id' => 'required|exists:celebrities,id',
            'recipe_id' => 'required|exists:recipes,id',
        ]);

        return CelebrityRecipe::create($validated);
    }

    public function update(Request $request, CelebrityRecipe $celebrityRecipe)
    {
        $validated = $request->validate([
            'celebrity_id' => 'sometimes|exists:celebrities,id',
            'recipe_id' => 'sometimes|exists:recipes,id',
        ]);

        $celebrityRecipe->update($validated);
        return $celebrityRecipe;
    }

    public function destroy(CelebrityRecipe $celebrityRecipe)
    {
        $celebrityRecipe->delete();
        return response(null, 204);
    }
}
