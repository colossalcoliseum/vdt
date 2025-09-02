<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\EngineManager;
use Laravel\Scout\Engines\Engine;
use Laravel\Scout\Searchable;


class Visibility extends Model
{
    use Searchable;

    public static array $visibleScope = [
        'private' => 'Private',
        'public' => 'Public',
    ];

    public function posts(): hasMany
    {
        return $this->hasMany(Post::class);
    }
    public function videos(): hasMany
    {
        return $this->hasMany(Video::class);
    }
    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
        ];
    }
    protected function makeAllSearchableUsing(Builder $query): Builder
    {
        return $query
            ->with(['posts','videos']);
    }
    public function makeSearchableUsing(Collection $models): Collection
    {
        return $models->load(['posts','videos']);
    }
    /* IMPORTANT: ВАЖНО: Презаписва търсачката по подразбиране*/
    /*public function searchableUsing(): Engine
    {
        return app(EngineManager::class)->engine('meilisearch');
    }*/
}
