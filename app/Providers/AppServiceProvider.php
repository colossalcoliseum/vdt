<?php

namespace App\Providers;

use App\Events\PostPublished;
use App\Listeners\SendPostNotification;
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
        Vite::prefetch(concurrency: 3);
        //Schema::defaultStringLength(125);
        Event::listen(
            PostPublished::class,
            SendPostNotification::class
        );
    }
}
