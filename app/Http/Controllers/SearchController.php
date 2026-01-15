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
    public function searchContent(Request $request){
        $query = $request->input('query');
/*        dd($this->searchService->searchContent($query));*/
        $results = $this->searchService->searchContent($query);
       //dd($results[0]['type']);
        return Inertia::render('ContentGrid', [
            'content' =>  $results,
           // 'type'=>$results->type,
            'headerText' => 'Search Results'

        ]);
    }

    public function searchUsers($query){
        dd( $this->searchService->searchUsers($query));
    }
    public function searchAllContent($query){
        dd( $this->searchService->searchUsers($query));
    }
}
