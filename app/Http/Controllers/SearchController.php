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
        dd( $this->searchService->searchPosts($query));
    }
    public function searchVideos($query){
        dd( $this->searchService->searchVideos($query));
    }
    public function searchUsers($query){
        dd( $this->searchService->searchUsers($query));
    }
}
