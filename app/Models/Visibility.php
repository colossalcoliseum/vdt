<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Visibility extends Model
{
    public static array $visibleScope = [
        'private' => 'Private',
        'public' => 'Public',
    ];

    public function posts(): hasMany
    {
        return $this->hasMany(Post::class);
    }
}
