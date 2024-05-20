<?php

namespace App\Http\Controllers;

use App\Models\Chef;
use Illuminate\Http\Request;

class ChefController extends Controller
{
    public function index()
    {
        return Chef::all();
    }

    public function show(Chef $chef)
    {
        return $chef;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'certificate' => 'required|string|max:255',
            'user_id' => 'required|exists:users,id',
        ]);

        return Chef::create($validated);
    }

    public function update(Request $request, Chef $chef)
    {
        $validated = $request->validate([
            'certificate' => 'sometimes|string|max:255',
            'user_id' => 'sometimes|exists:users,id',
        ]);

        $chef->update($validated);
        return $chef;
    }

    public function destroy(Chef $chef)
    {
        $chef->delete();
        return response(null, 204);
    }
}
