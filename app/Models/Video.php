<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Video extends Model
{
    /** @use HasFactory<\Database\Factories\VideoFactory> */
    use HasFactory;
    use Searchable;
    protected $guarded = [];

    public function broadcastOn(string $event): array
    {
        return match ($event) {
            'default' => [$this, $this->creator]
        };
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class,'creator_id','id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id','id');
    }

    public function categories(): hasMany
    {
        return $this->hasMany(Category::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }

    public function visibility(): BelongsTo
    {
        return $this->belongsTo(Visibility::class);
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(ContentType::class, 'type_id','id');
    }

    protected function makeAllSearchableUsing(Builder $query): Builder
    {
        return $query
            ->with(['creator', 'status', 'category']);
    }

    public function makeSearchableUsing(Collection $models): Collection
    {
        return $models->load(['creator', 'status', 'category']);
    }

    public function shouldBeSearchable(): bool
    {
        return $this->is_active?? false;
    }

    public function getRouteKeyName ()
    {
        return 'slug';
    }
}
