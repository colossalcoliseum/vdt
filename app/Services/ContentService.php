<?php
namespace App\Services;

use App\Models\Category;
use App\Models\Post;
use App\Models\SubCategory;
use App\Models\Video;

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
    public function getPost($id){
        try {
            $post = Post::with('creator')->find($id);

        }
        catch (\Exception $exception){
            return $exception->getMessage();
        }
    }
    public function loadCategories(){
        try {
            return Category::all();
        }
        catch (\Exception $exception){
            return $exception->getMessage();
        }
    }
    public function loadSubCategories(){
        try {
            return SubCategory::all();
        }
        catch (\Exception $exception){
            return $exception->getMessage();
        }
    }

}
