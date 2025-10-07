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

    public function getPosts($status = "active", $visibility = "public")
    {
        try {
            $posts = Post::whereHas('visibility', function ($query) use ($visibility) {
                $query->where('slug', $visibility);
            })
                ->orWhereHas('status', function ($query) use ($status) {
                    $query->where('slug', $status);
                })
                ->with('creator')->paginate(15);

            return $posts;

        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }
    public function getPost($id){
        try {

        }
        catch (\Exception $exception){
            return $exception->getMessage();
        }
    }

}
