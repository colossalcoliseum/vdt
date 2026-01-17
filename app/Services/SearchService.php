<?php

namespace App\Services;

use App\Models\Post;
use App\Models\User;
use App\Models\Video;
use Illuminate\Support\Facades\DB;

class SearchService
{
    public function searchContent($query)
    {
        try {
            $videoResults = Video::select([
                'id',
                'title',
                'description',
                'thumbnail',
                'slug',
                'creator_id',
                'type_id',
            ])->where(function ($qu) use ($query) {
                $qu->where('title', "like", "%$query%")
                    ->orWhere('description', "like", "%$query%");
            })
                ->orWhereHas('creator', function ($qu) use ($query) {
                    $qu->where('email', "like", "%$query%")
                        ->orWhere('name', "like", "%$query%")
                        ->orWhere('description', "like", "%$query%");
                })
                ->with(['creator', 'type']);

            $postResults = Post::select([
                'id',
                'title',
                'description',
                'thumbnail',
                'slug',
                'creator_id',
                'type_id'

            ])->where(function ($qu) use ($query) {
                $qu->where('title', "like", "%$query%")
                    ->orWhere('description', "like", "%$query%");
            })
                ->orWhereHas('creator', function ($qu) use ($query) {
                    $qu->where('email', "like", "%$query%")
                        ->orWhere('name', "like", "%$query%")
                        ->orWhere('description', "like", "%$query%");
                })
                ->with(['creator', 'type']);

            $result = $videoResults
                ->union($postResults)
                ->with('creator')
                ->paginate(20)
                ->onEachSide(0)
                ->appends($query)
                ->withQueryString();
            return $result;

        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function searchUsers($query)
    {
        try {
            return User::where('name', "like", "%{$query}%")
                ->orWhere('description', "like", "%{$query}%")
                ->WhereHas('videos.creator', function ($qu) use ($query) {
                    $qu->where('creator', "like", "%{$query}%");
                })
                ->WhereHas('posts.creator', function ($qu) use ($query) {
                    $qu->where('creator', "like", "%{$query}%");
                })
                ->WhereHas('role.creator', function ($qu) use ($query) {
                    $qu->where('name', "like", "%{$query}%");
                })
                ->get(['name', 'avatar', 'description']);
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }
}
