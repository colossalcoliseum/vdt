<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadPostRequest;
use App\Models\Post;
use App\Services\ContentService;
use App\Services\SearchService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(
       public ContentService $contentService
    ){}
    public function index()
    {
        //die($this->contentService->getPaginatedPosts());
       //dd($this->contentService->getAllPosts());
        return Inertia::render('Posts/PostsDashboard', [
            'posts' =>  $this->contentService->getAllPosts()

        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $response = Gate::inspect('create', Post::class);
        if ($response->allowed()) {
            return Inertia::render('Posts/CreatePost');
        }
        flash()
            ->option('position', 'top-right')
            ->option('duration', 10000)
            ->option('direction', 'top')
            ->warning("You don't have permission to create posts", [], 'Missing permission');
        return back();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UploadPostRequest $request)
    {
        $response = Gate::inspect('create', Post::class);
        if ($response->allowed()) {

            $validated = $request->validated();
            $mainImage = $request->file('main_image')->store('postImages', 'public');
            $thumbnailPath = $request->file('thumbnail')->store('storage/postThumbnails', 'public');
            //dd($path);
            $post = Post::create([
                'title' => $validated['title'],
                'is_published' => $validated['is_published'],
                'category_id' => $validated['category_id'],
                'status_id' => $validated['status_id'],
                'visibility_id' => $validated['visibility_id'],
                'description' => $validated['description'],
                'main_image' => $mainImage,
                'creator_id' => auth()->user()->id,
                'visibility' => $validated['visibility'],
                'thumbnail' => $thumbnailPath
            ]);
            $post->save();
           // PostPublished::dispatch($post);//<--- event
            return Redirect::route('dashboard');
        }
        flash()
            ->option('position', 'top-right')
            ->option('duration', 10000)
            ->option('direction', 'top')
            ->warning("You don't have permission to publish posts", [], 'Missing permission');
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $post = Post::with('creator')->find($post->id);
        //dd($post);
        return Inertia::render('Posts/Post', ['post' => $post]);
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
