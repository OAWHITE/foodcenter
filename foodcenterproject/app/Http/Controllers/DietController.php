<?php

namespace App\Http\Controllers;

use App\Models\Diet;
use Illuminate\Http\Request;

class DietController extends Controller
{
    public function index()
    {
        return Diet::all();
    }

    public function show(Diet $diet)
    {
        return $diet;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'meals' => 'nullable|string',
            'calories' => 'nullable|integer',
            'fat' => 'nullable|numeric',
            'carbs' => 'nullable|numeric',
            'protein' => 'nullable|numeric',
        ]);

        return Diet::create($validated);
    }

    public function update(Request $request, Diet $diet)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'meals' => 'nullable|string',
            'calories' => 'nullable|integer',
            'fat' => 'nullable|numeric',
            'carbs' => 'nullable|numeric',
            'protein' => 'nullable|numeric',
        ]);

        $diet->update($validated);
        return $diet;
    }

    public function destroy(Diet $diet)
    {
        $diet->delete();
        return response(null, 204);
    }
}
