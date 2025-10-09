<?php

namespace App\Services;

use App\Models\Post;
use App\Models\User;
use App\Models\Video;

class SearchService
{
    public function searchPosts($query)
    {
        try {
            return Post::where('title', "like", "%{$query}%")
                ->orWhere('description', "like", "%{$query}%")
                ->WhereHas('creator', function ($qu) use ($query) {
                    $qu->where('name', "like", "%{$query}%");
                })
                ->get(['title', 'description','thumbnail']);
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function searchVideos($query)
    {
        try {
            return Video::where('title', "like", "%{$query}%")
                ->orWhere('description', "like", "%{$query}%")
                ->WhereHas('creator', function ($qu) use ($query) {//TODO: (инфо) възможно място за грешка;
                    $qu->where('name', "like", "%{$query}%");
                })
                ->get(['title', 'description','thumbnail']);
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
                ->get(['name', 'avatar','description']);
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function globalSearch($query)
    {
        try {

        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }
}
