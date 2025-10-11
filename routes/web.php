<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\UpdateUserAvatarController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use App\Models\Post;
use App\Models\Video;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'posts' => Post::with('creator')->get(),
        'videos' => Video::with('creator')->get(),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'permissions' => auth()->user()->getAllPermissions()->toArray()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');
/*  Admin Layout, Panel, etc.   */
/*Route::middleware(['auth', 'admin'])->group(function () {
    Route::prefix('admin')->group(function () {

    });
});*/
Route::middleware(['auth'])->group(function () {
    Route::prefix('search')->group(function () {
        Route::get('/videos/{video}', [SearchController::class, 'searchVideos'])->name('search');
        Route::get('/posts/{post}', [SearchController::class, 'searchPosts'])->name('search');
        Route::get('/users/{user}', [SearchController::class, 'searchUsers'])->name('search');
    });
});
/*  Users Layout    */
Route::middleware('auth')->group(function () {
    Route::resource('videos', VideoController::class)->names('video');
    Route::resource('posts', PostController::class)->names('post');
    Route::resource('users', UserController::class)->names('user');

    Route::resource('chats', ChatController::class)->names('chat');
    Route::prefix('profile')->name('profile.')->group(function () {
        Route::get('/edit', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('/update', [ProfileController::class, 'update'])->name('update');
        Route::delete('/destroy', [ProfileController::class, 'destroy'])->name('destroy');
        Route::singleton('/avatar', UpdateUserAvatarController::class)->except(['edit']);
    });
});


require __DIR__ . '/auth.php';
