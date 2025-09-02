<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Scout\Searchable;

class SubCategory extends Model
{
    /** @use HasFactory<\Database\Factories\SubCategoryFactory> */
    use HasFactory;    use Searchable;
    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
        ];
    }
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }

    protected function makeAllSearchableUsing(Builder $query): Builder
    {
        return $query
            ->with(['creator','status']);
    }
    public function makeSearchableUsing(Collection $models): Collection
    {
        return $models->load(['creator', 'status']);
    }
    public function shouldBeSearchable(): bool
    {
        return $this->is_active;
    }
}
