<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Category extends Model
{
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory;    use Searchable;

    public static array $categories = [
        'nature'=>[
            'Waterfall',
            'Cave',
            'Rainbow',
            'Animal',
            'Fish',
            'Tree',
            'Bush',
            'Volcano',
        ],
        'sport'=>[
            'Karate',
            'Football',
            'Jio Jitsu',
            'Soccer',
            'Swimming',
            'Biking',
            'Running',
            'Marathon',
        ],
        'esport'=>[
            'Chess',
            'Pocker',
            'Black Jack',
            'Minecraft',
            'Halo',
            'Flight-Simulator',

        ],
        'food'=>[
            'Pizza',
            'Cake',
            'Hot Dog',
            'Burger',
            'Spaghetti',
            'Soup',

        ],
        'kitchen'=>[
            'Cooking',
            'Boiling',
            'Frying',
            'BBQ',
            'Street Food',
            'Homemade',
            'Takeout',

        ],
        'programming'=>[
            'SQL',
            'PHP',
            'C#',
            'C++',
            'PYTHON',

        ],
        'industry'=>[
            'Coal',
            'Gas',
            'Steel',
            'Cars',
            'Airplanes',
            'Trains',
            'Rockets',
            'Computers',

        ],
        'music'=>[
            'Pop',
            'Hip-Hop',
            'Traditional',
            'Jazz',
            'Bebop',

        ],
        'art'=>[
            'Canvas',
            'Black And White',
            'Street Art',
            'Digital Art',
            'Baroque',
            'Gothic',

        ],
        'engineering'=>[
            'Electrical',
            'Electronic',
            'Industrial',
            'Computer',

        ],
        'space' => [
            'Earth',
            'Saturn',
            'Mars',
            'Neptune',
            'Moon',
            'Sun',

        ],
        'Sport'=>[],
        'Breaking News'=>[],
        'Travel'=>[],
        'Ideas'=>[],
        'Hobby'=>[],
    ];
    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
            'is_active'=>(bool)$this->is_active,
            'require_subscription'=>(bool)$this->require_subscription,
            'status_id'=>(int)$this->status_id,
        ];
    }
    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function makeAllSearchableUsing(Builder $query): Builder
    {
        return $query
            ->with(['creator','status']);
    }
    public function makeSearchableUsing(Collection $models): Collection
    {
        return $models->load(['creator','status']);
    }
    public function shouldBeSearchable(): bool
    {
        return $this->is_active?? false;
    }
    public function getRouteKeyName (): bool
    {
        return 'slug';
    }
    public function post(): hasMany
    {
        return $this->hasMany(Post::class);
    }
    public function video(): hasMany
    {
        return $this->hasMany(Video::class);
    }
}
