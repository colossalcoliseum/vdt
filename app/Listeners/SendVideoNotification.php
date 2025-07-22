<?php

namespace App\Listeners;

use App\Events\VideoPublished;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendVideoNotification
{
    /**
     * Create the event listener.
     */
    public function __construct(){}

    /**
     * Handle the event.
     */
    public function handle(VideoPublished $event): void
    {
        info("Video ( id: {$event->video->id} ) Published");
    }
}
