<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\BroadcastsEvents;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory, BroadcastsEvents;

    protected $guarded = [];


    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
public function visibility(): BelongsTo
    {
        return $this->belongsTo(Visibility::class);
    }

    public function broadcastOn(string $event): array
    {
        return match ($event) {
            default => [$this, $this->creator]
        };
    }
}
