<?php

namespace App\Http\Controllers;

use App\Services\SearchService;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function __construct(
        public SearchService $searchService
    ){}
    public function searchPosts($query){
        return $this->searchService->searchPosts($query);
    }
    public function searchVideos($query){
        return $this->searchService->searchVideos($query);
    }
    public function searchUsers($query){
        return $this->searchService->searchUsers($query);
    }
}
