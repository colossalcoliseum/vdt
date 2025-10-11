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
            $result = Post::where('title', "like", "%{$query}%")
                ->orWhere('description', "like", "%{$query}%")
                ->get();
            $creator =Post::whereHas('creator', function ($qu) use ($query) {
                $qu->where('email', "like", "%$query%")
                    ->orWhere('name', "like", "%$query%")
                    ->orWhere('description', "like", "%$query%");
            })
                ->get();
            $mergedResult = $result->merge($creator);
            return $mergedResult;
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function searchVideos($query)
    {
        try {
            $result = Video::where('title', "like", "%{$query}%")
                ->orWhere('description', "like", "%{$query}%")
                ->get();
            $creator =Video::whereHas('creator', function ($qu) use ($query) {
                $qu->where('email', "like", "%$query%")
                    ->orWhere('name', "like", "%$query%")
                    ->orWhere('description', "like", "%$query%");
            })
                ->get();
            $mergedResult = $result->merge($creator);
            return $mergedResult;
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function searchUsers($query)//TODO: използвай отделни заявки
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
