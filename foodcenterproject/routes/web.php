<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipeController;


Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('login', [AuthController::class, 'login']);

Route::get('register', [AuthController::class, 'showSignUpForm'])->name('register');
Route::post('register', [AuthController::class, 'register']);

Route::post('logout', [AuthController::class, 'logout'])->name('logout');

Route::get('dashboard', function () {
    return view('dashboard');
})->middleware('auth')->name('dashboard');

Route::get('/signup', [AuthController::class, 'showSignUpForm']);
// routes/web.php



Route::get('/recipes/create', [RecipeController::class, 'create'])->name('recipes.create');

Route::post('/recipes', [RecipeController::class, 'store'])->name('recipes.store');
