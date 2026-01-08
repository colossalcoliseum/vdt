<?php

namespace App\Providers;

use App\Events\PostPublished;
use App\Listeners\SendPostNotification;
use App\Models\Post;
use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Event;



class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::before(function (User $user, string $ability) {
            return $user->isSuperAdmin() ? true: null;
        });
        Vite::prefetch(concurrency: 3);
        //Schema::defaultStringLength(125);
        //Model::automaticallyEagerLoadRelationships();
      /*   Event::listen(
            PostPublished::class,
            SendPostNotification::class
        );*/
    }
}
