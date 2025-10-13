<?php
namespace App\Services;

use App\Models\Post;
use App\Models\Video;

class ContentService
{
    public function getVideos($status = "active", $visibility = "public")
    {
        try {
            $videos = Video::whereHas('visibility', function ($query) use ($visibility) {
                $query->where('slug', $visibility);
            })
                ->WhereHas('status', function ($query) use ($status) {
                    $query->where('slug', $status);
                })
                ->with('creator')->get();
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
                ->with('creator')->paginate(9)->onEachSide(0);

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
    public function getPost($id){
        try {
            $post = Post::with('creator')->find($id);

        }
        catch (\Exception $exception){
            return $exception->getMessage();
        }
    }

}
