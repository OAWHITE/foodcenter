<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show(User $user)
    {
        return $user;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|in:admin,chef,coach,user',
            'profile_image' => 'nullable|string',
            'allergies' => 'nullable|string',
            'height' => 'nullable|numeric',
            'weight' => 'nullable|numeric',
        ]);

        return User::create($validated);
    }

    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|string|min:8',
            'role' => 'sometimes|in:admin,chef,coach,user',
            'profile_image' => 'nullable|string',
            'allergies' => 'nullable|string',
            'height' => 'nullable|numeric',
            'weight' => 'nullable|numeric',
        ]);

        $user->update($validated);
        return $user;
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response(null, 204);
    }
}
