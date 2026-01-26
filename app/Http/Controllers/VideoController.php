<?php
namespace App\Http\Controllers;
use App\Http\Requests\UploadVideoRequest;
use App\Models\Category;
use App\Models\User;
use App\Models\Video;
use App\Http\Controllers\Controller;
use App\Services\ContentService;
use App\Services\SearchService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
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
    public function __construct(
        public ContentService $contentService,
    )
    {
    }

    public function index(User $user = null)
    {
        return
            inertia('ContentGrid', [
                'content' =>
                    $user ?
                        $this->contentService->getUserPaginatedVideos($user->id) :
                        $this->contentService->getPaginatedVideos(),
                'headerText' => $user ? "Videos by $user->name" : 'Videos',
                'user' => $user ?? null
            ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Videos/CreateVideo', [
            'categories' => $this->contentService->loadCategories(),
            'subCategories' => $this->contentService->loadSubCategories(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UploadVideoRequest $request)/*TODO: използвай сървис*/
    {
        $response = Gate::inspect('create', Video::class);
        if ($response->allowed()) {
            $validated = $request->validated();
            if ($request->hasFile('thumbnail') && $request->hasFile('video')) {
                try {
                    $videoPath = $request->file('video')->store('videos', 'public');
                    $thumbnailPath = $request->file('thumbnail')->store('videoThumbnails', 'public');
                    $videoFile = $request->file('video');
                    $video = Video::create([
                        'title' => $validated['title'],
                        'description' => $validated['description'],
                        'video_path' => "/storage/" . $videoPath,
                        'thumbnail_path' => $thumbnailPath,
                        'user_id' => auth()->user()->id,
                        'original_filename' => $videoFile->getClientOriginalName(),
                        'file_size' => $videoFile->getSize(),
                        'video_mime_type' => $videoFile->getMimeType(),
                        'visibility_id' => $validated['visibility_id'],
                        'status_id' => 1,
                    ]);
                } catch (\Exception $e) {
                    die($e->getMessage());
                }
            } else {
                dd([
                    $request->file('video')->getErrorMessage(),
                    $request->file('thumbnail')->getErrorMessage(),
                ]);
            }
            return Redirect::route('video.show', $video->id);
        }
        flash()
            ->option('position', 'top-right')
            ->option('duration', 10000)
            ->option('direction', 'top')
            ->warning("You don't have permission to publish videos", [], 'Missing permission');
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        $video = Video::with('creator', 'category', 'type')->find($video->id);
        return Inertia::render('Content', ['content' => $video]);
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
