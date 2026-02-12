<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Post;
use App\Models\SubCategory;
use App\Models\User;
use App\Models\Video;
use Illuminate\Support\Facades\DB;

class ContentService
{
    public function getPaginatedVideos($status = "active", $visibility = "public")
    {
        try {
            $videos = Video::whereHas('visibility', function ($query) use ($visibility) {
                $query->where('slug', $visibility);
            })
                ->orWhereHas('status', function ($query) use ($status) {
                    $query->where('slug', $status);
                })
                ->with(['creator', 'type'])
                 ->paginate(20)->onEachSide(0);
            return $videos;
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }

    }

    public function getUserPaginatedVideos($userId, $status = "active", $visibility = "public")
    {
        try {
            $videos = Video::where('creator_id', $userId)
                ->with('creator')->paginate(20)->onEachSide(0);
            return $videos;
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function getPaginatedPosts($status = "active", $visibility = "public")
    {
        try {
            $posts = Post::whereHas('visibility', function ($query) use ($visibility) {
                $query->where('slug', $visibility);
            })
                ->orWhereHas('status', function ($query) use ($status) {
                    $query->where('slug', $status);
                })
                ->with(['creator', 'category', 'type'])->paginate(20)->onEachSide(0);

            return $posts;

        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function getUserPaginatedPosts($userId, $status = "active", $visibility = "public")
    {
        try {
            $posts = Post::where('creator_id', $userId)
                ->with('creator')->paginate(20)->onEachSide(0);

            return $posts;
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function getAllPosts($status = "active", $visibility = "public")
    {
        try {
            $posts = Post::whereHas('visibility', function ($query) use ($visibility) {
                $query->where('slug', $visibility);
            })
                ->orWhereHas('status', function ($query) use ($status) {
                    $query->where('slug', $status);
                })
                ->get();
            return $posts;
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }
    public function getAllUserContent(User $user)
    {
        try {
            $videos = Video::select(['id', 'title', 'description', 'thumbnail', 'slug', 'creator_id'])
                ->where('creator_id', "like", $user->id)
                ->addSelect(DB::raw("'videos' as type"));
            $posts = Post::select(['id', 'title', 'description', 'thumbnail', 'slug', 'creator_id'])
                ->where('creator_id', "like", $user->id)
                ->addSelect(DB::raw("'posts' as type"));
            $result = $videos
                ->union($posts)
                 ->with('creator')
                ->paginate(20)
                ->onEachSide(0);
            return $result;

        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }
}
