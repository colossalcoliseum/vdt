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
            return Post::where(function ($qu) use ($query) {
                $qu->where('title', "like", "%$query%")
                    ->orWhere('description', "like", "%$query%");
            })
                ->orWhereHas('creator', function ($qu) use ($query) {
                $qu->where('email', "like", "%$query%")
                    ->orWhere('name', "like", "%$query%")
                    ->orWhere('description', "like", "%$query%");
            })
                ->with('creator')
                ->paginate(9)
                ->onEachSide(0)
                ->appends($query)
                ->withQueryString();
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }
    public function searchVideos($query)
    {

        try {
            return Post::where(function ($qu) use ($query) {
                $qu->where('title', "like", "%$query%")
                    ->orWhere('description', "like", "%$query%");
            })
                ->orWhereHas('creator', function ($qu) use ($query) {
                $qu->where('email', "like", "%$query%")
                    ->orWhere('name', "like", "%$query%")
                    ->orWhere('description', "like", "%$query%");
            })
                ->with('creator')
                ->paginate(9)
                ->onEachSide(0)
                ->appends($query)
                ->withQueryString();
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
            $this->searchPosts($query);
            $this->searchVideos($query);
            $this->searchUsers($query);
            /*TODO: създаваш колекция и я връщаш*/
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

 /*   public function globalSearch($query)
    {
        try {

        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }*/
}
