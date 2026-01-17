<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\ContentService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(
        public ContentService $contentService
    ){}

    public function index()
    {
        $users = User::all();
        return Inertia::render('Users/UsersDashboard'
            , ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $user = User::find($user->id);
        return Inertia::render('Users/User', [
            'user' => $user->load(['roles', 'videos.creator', 'posts.creator']),
            'content' => $this->contentService->getAllUserContent($user)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
