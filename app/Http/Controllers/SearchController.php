<?php

namespace App\Http\Controllers;

use App\Services\SearchService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function __construct(
        public SearchService $searchService
    ){}
    public function searchPosts(Request $request){
        $query = $request->input('query');
        return Inertia::render('Results/ContentResultsDashboard', [
            'content' =>  $this->searchService->searchPosts($query),
            'query' =>  $query,
            'type'=>"posts",

        ]);
    }
    public function searchVideos(Request $request){
        $query = $request->input('query');
        return Inertia::render('Results/ContentResultsDashboard', [
            'content' =>  $this->searchService->searchPosts($query),
            'query' =>  $query,
            'type'=>"videos",

        ]);
    }
   /* public function searchVideos($query){
        return Inertia::render('Results/ContentResultsDashboard', [
            'content' =>  $this->searchService->searchPosts($query)
        ]);
    }*/
    public function searchUsers($query){
        dd( $this->searchService->searchUsers($query));
    }
    public function searchAllContent($query){
        dd( $this->searchService->searchUsers($query));
    }
}
