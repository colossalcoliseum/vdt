<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Scout\Searchable;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;



class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;
    use HasRoles;
    use Searchable;


    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    public static array $permissionsPerRole = [
        'admin' => [
            "edit_users",
            "delete_users",
            "ban_users",
            "unban_users",
            "restrict_users",
            "unrestrict_users",
            "archive_videos",
            "archive_posts",
            "unarchive_videos",
            "unarchive_posts",
            "delete_videos",
            "delete_posts",
        ],
        'writer' => [
            "publish_posts",
        ],
        'video_creator' => [
            "publish_videos",
        ],
        'moderator' => [
            "edit_videos",
            "edit_posts",
        ],
        'member' => [

        ],
    ];
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar'
    ];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'creator_id','id');
    }


    public function videos(): HasMany
    {
        return $this->hasMany(Video::class, 'creator_id','id');
    }
    public function getRouteKeyName ()
    {
        return 'handle';
    }



}
