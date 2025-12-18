<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\HomeController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'permissions' => auth()->user()->getAllPermissions()->toArray()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', [HomeController::class,'home'])->name('home');

Route::middleware(['auth'])->group(function () {
         Route::get('search', [SearchController::class, 'searchContent'])->name('search.content');
       // Route::get('/posts/', [SearchController::class, 'searchPosts'])->name('search.posts');
       // Route::get('/users/', [SearchController::class, 'searchUsers'])->name('search.users');

});
/*  Create; Update; Delete  content*/
Route::middleware(['auth', 'admin'])->group(function () {
    Route::prefix('manage')->group(function () {
        Route::resource('videos', VideoController::class)->names('moderate.videos')->except(['index', 'show']);
        Route::resource('posts', PostController::class)->names('moderate.posts')->except(['index', 'show']);
        Route::resource('users', UserController::class)->names('moderate.users')->except(['index', 'show']);
    });
});

/*  Users Layout    */
Route::middleware(['auth', /*'verified'*/])->group(function () {

    Route::resource('videos', VideoController::class)->names('videos');
    Route::resource('posts', PostController::class)->names('posts');
     Route::resource('users', UserController::class)->names('user')->only(['index', 'show']);

    Route::prefix('profile')->name('profile.')->group(function () {
        Route::get('/edit', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('/update', [ProfileController::class, 'update'])->name('update');
        Route::delete('/destroy', [ProfileController::class, 'destroy'])->name('destroy');
        Route::singleton('/avatar', UpdateUserAvatarController::class)->except(['edit']);
    });
});
Route::middleware(['auth'])->group(function () {
    Route::prefix('{user}')->group(function () {
        Route::resource('videos', VideoController::class)->names('manage.videos');
        Route::resource('posts', PostController::class)->names('manage.posts');
    });
});
require __DIR__ . '/auth.php';
