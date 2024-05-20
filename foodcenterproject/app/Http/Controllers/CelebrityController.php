<?php

namespace App\Http\Controllers;

use App\Models\Celebrity;
use Illuminate\Http\Request;

class CelebrityController extends Controller
{
    public function index()
    {
        return Celebrity::all();
    }

    public function show(Celebrity $celebrity)
    {
        return $celebrity;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        return Celebrity::create($validated);
    }

    public function update(Request $request, Celebrity $celebrity)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
        ]);

        $celebrity->update($validated);
        return $celebrity;
    }

    public function destroy(Celebrity $celebrity)
    {
        $celebrity->delete();
        return response(null, 204);
    }
}
