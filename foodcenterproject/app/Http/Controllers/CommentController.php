<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
        return Comment::all();
    }

    public function show(Comment $comment)
    {
        return $comment;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'comment' => 'required|string',
            'user_id' => 'required|exists:users,id',
        ]);

        return Comment::create($validated);
    }

    public function update(Request $request, Comment $comment)
    {
        $validated = $request->validate([
            'comment' => 'sometimes|string',
            'user_id' => 'sometimes|exists:users,id',
        ]);

        $comment->update($validated);
        return $comment;
    }

    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response(null, 204);
    }
}
