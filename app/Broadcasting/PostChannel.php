<?php

namespace App\Broadcasting;

use App\Models\Post;
use App\Models\User;

class PostChannel
{
    /**
     * Create a new channel instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     */
    public function join(User $user): array|bool
    {
        return true;
    }
}
