<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadVideoRequest;
use App\Models\Video;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateVideo');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UploadVideoRequest $request)
    {
        $validated = $request->validated();
        //dd($request->validated());

        $videoPath = $request->file('video')->store( 'videos', 'public' );
        $thumbnailPath = $request->file('thumbnail')->store( 'videoThumbnails', 'public' );
        //dd($path);
        $video = Video::create([
        'title' => $validated['title'],
        'description' => $validated['description'],
        'video' => $videoPath,
        'visibility' => $validated['visibility'],
        'thumbnail' => $thumbnailPath
    ]);
        $video->save();
        return Redirect::route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Video $video)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        //
    }
}
