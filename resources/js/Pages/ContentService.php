<?php

namespace App\Services;

use App\Models\Post;
use App\Models\Video;
use Illuminate\Support\Facades\DB;

class ContentService
{
    public function __construct(

    ){}

    public function getAllVideos(){
        $videos = Video::with('category')->get()->toArray();
        dd($videos);
        return $videos;
    }
    public function getAllPosts(){
        //$posts = Post::with('category')->get()->toArray();
        $posts = DB::table('posts')
            ->where('status_id', '1')
            ->where('visibility_id', '2')
        ;
        dd($posts);
        return $posts;
    }

}
