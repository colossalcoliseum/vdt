<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Video extends Model
{
    /** @use HasFactory<\Database\Factories\VideoFactory> */
    use HasFactory;
    protected $guarded = [];
    public function broadcastOn(string $event): array
    {
        return match ($event) {
            'default' => [$this, $this->creator]
        };
    }
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
