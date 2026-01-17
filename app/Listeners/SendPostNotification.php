<?php

namespace App\Listeners;

use App\Events\PostPublished;
class SendPostNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PostPublished $event): void
    {
        info("Content [{$event->post->id}] published." );
     }
}
