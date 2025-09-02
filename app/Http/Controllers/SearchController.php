<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SearchController extends Controller
{
    public function __invoke(Request $request): \Illuminate\Http\JsonResponse
    {
     $categories = Category::search(
         $request->input('query')
     )
     ->take(10)
     ->get();
     $users = Category::search(
         $request->input('query')
     )
     ->take(10)
     ->get();
     return response()->json([
         'categories' => $categories,
         'users' => $users,
     ]);
    }
}
