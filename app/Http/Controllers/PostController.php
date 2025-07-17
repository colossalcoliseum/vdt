<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadPostRequest;
use App\Models\Post;
use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('creator')->get();
        return Inertia::render('Posts/PostsDashboard', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Posts/CreatePost');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UploadPostRequest $request)
    {
        $validated = $request->validated();
        //dd($request->validated());

        $mainImage = $request->file('main_image')->store( 'postImages', 'public' );
        $thumbnailPath = $request->file('thumbnail')->store( 'postThumbnails', 'public' );
        //dd($path);
        $post = Post::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'main_image' => $mainImage,
            'visibility' => $validated['visibility'],
            'thumbnail' => $thumbnailPath
        ]);
        $post->save();
        return Redirect::route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
