<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\BroadcastsEvents;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory, BroadcastsEvents;    use Searchable;


    protected $guarded = [];


    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id','id');
    }

    public function visibility(): BelongsTo
    {
        return $this->belongsTo(Visibility::class);
    }
    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id','id');
    }
   /* public function categories(): hasMany
    {
        return $this->hasMany(Category::class, 'category_id','id');
    }*/
    public function broadcastOn(string $event): array
    {
        return match ($event) {
            default => [$this, $this->creator]
        };
    }

    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'title' => $this->title,
            'description' => (string) $this->description,
        ];
    }
    protected function makeAllSearchableUsing(Builder $query): Builder
    {
        return $query
            ->with(['creator', 'visibility', 'category', 'status']);
    }
    public function makeSearchableUsing(Collection $models): Collection
    {
        return $models->load(['creator', 'visibility', 'category', 'status']);
    }
    public function shouldBeSearchable(): bool
    {
        return $this->is_published;
    }
    public function getRouteKeyName ()
    {
        return 'slug';
    }

}
