<?php

namespace App\Http\Controllers;

use App\Models\UserRecipe;
use Illuminate\Http\Request;

class UserRecipeController extends Controller
{
    public function index()
    {
        return UserRecipe::all();
    }

    public function show(UserRecipe $userRecipe)
    {
        return $userRecipe;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'recipe_id' => 'required|exists:recipes,id',
        ]);

        return UserRecipe::create($validated);
    }

    public function update(Request $request, UserRecipe $userRecipe)
    {
        $validated = $request->validate([
            'user_id' => 'sometimes|exists:users,id',
            'recipe_id' => 'sometimes|exists:recipes,id',
        ]);

        $userRecipe->update($validated);
        return $userRecipe;
    }

    public function destroy(UserRecipe $userRecipe)
    {
        $userRecipe->delete();
        return response(null, 204);
    }
}
