<?php

namespace App\Http\Controllers;

use _PHPStan_781aefaf6\Nette\Neon\Exception;
use App\Http\Requests\UploadVideoRequest;
use App\Models\Video;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

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
    public function store(UploadVideoRequest $request)
    {
        $validated = $request->validated();
        if ($request->hasFile('video')&& $request->hasFile('video')) {
            try {
                $videoPath = $request->file('video')->store('videos', 'public');
                $thumbnailPath = $request->file('thumbnail')->store('videoThumbnails', 'public');
                $videoFile = $request->file('video');
                $video = Video::create([
                    'title' => $validated['title'],
                    'description' => $validated['description'],
                    'video_path' => "/storage/".$videoPath,
                    'thumbnail_path' => $thumbnailPath,
                    'creator_id' => auth()->user()->id,
                    'original_filename' => $videoFile->getClientOriginalName(),
                    'file_size' => $videoFile->getSize(),
                    'video_mime_type' => $videoFile->getMimeType(),
                    'visibility' => $validated['visibility'],
                ]);
            } catch (Exception $e) {
                die($e->getMessage());
            }
        } else {

            dd([
                $request->file('video')->getErrorMessage(),
                $request->file('thumbnail')->getErrorMessage(),

            ]);

        }


        return Redirect::route('dashboard')->with('success', 'Видеото беше качено успешно!');//TODO локализирай го
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {

        $video = Video::with('creator')->find($video->id);
        return Inertia::render('Videos/Video', ['video'=>$video]);

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
