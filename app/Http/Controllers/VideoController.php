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
        return Inertia::render('Videos/CreateVideo');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request->file('video'));

        $validated = $request;
       // dd($request->validated());

        //dd($request['video']);
        $videoFile = $request->file('video');
        $fileName = $videoFile->getClientOriginalExtension();
        $videoPath = $videoFile->store('videos', 'public');
        //$videoPath = $videoFile->store('videos', $fileName);
        $thumbnailPath?? $request->file('thumbnail')->store( 'videoThumbnails', 'public' );
        //dd($path);
        dd($thumbnailPath);
        $video = Video::create([
        'title' => $validated['title'],
        'description' => $validated['description'],
        'video_path' => $videoPath,
        'thumbnail_path' => $thumbnailPath,
        'original_file_name' => $videoFile->getClientOriginalName(),
        'file_size' => $videoFile->getSize(),
        'mime_type' => $videoFile->getMimeType(),
        'visibility' => $validated['visibility'],
    ]);

        return Redirect::route('dashboard')->with('success', 'Видеото беше качено успешно!');
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
