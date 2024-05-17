<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DietController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CelebrityController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ChefController;
use App\Http\Controllers\CoachController;
use App\Http\Controllers\RecipeIngredientController;
use App\Http\Controllers\UserRecipeController;
use App\Http\Controllers\CelebrityRecipeController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('users', UserController::class);
Route::apiResource('diets', DietController::class);
Route::apiResource('ingredients', IngredientController::class);
Route::apiResource('recipes', RecipeController::class);
Route::apiResource('celebrities', CelebrityController::class);
Route::apiResource('comments', CommentController::class);
Route::apiResource('chefs', ChefController::class);
Route::apiResource('coaches', CoachController::class);
Route::apiResource('recipe-ingredients', RecipeIngredientController::class);
Route::apiResource('user-recipes', UserRecipeController::class);
Route::apiResource('celebrity-recipes', CelebrityRecipeController::class);
