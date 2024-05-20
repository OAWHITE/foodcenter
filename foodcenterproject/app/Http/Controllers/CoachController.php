<?php

namespace App\Http\Controllers;

use App\Models\Coach;
use Illuminate\Http\Request;

class CoachController extends Controller
{
    public function index()
    {
        return Coach::all();
    }

    public function show(Coach $coach)
    {
        return $coach;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'certificate' => 'required|string|max:255',
            'user_id' => 'required|exists:users,id',
        ]);

        return Coach::create($validated);
    }

    public function update(Request $request, Coach $coach)
    {
        $validated = $request->validate([
            'certificate' => 'sometimes|string|max:255',
            'user_id' => 'sometimes|exists:users,id',
        ]);

        $coach->update($validated);
        return $coach;
    }

    public function destroy(Coach $coach)
    {
        $coach->delete();
        return response(null, 204);
    }
}
