<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateAvatarRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UpdateUserAvatarController extends Controller
{
    /**
     * Show the form for creating the resource.
     */
    public function create(Request $request):never
    {
        abort(404);
    }

    /**
     * Store the newly created resource in storage.
     */
    public function store(Request $request):never
    {
        abort(404);
    }

    /**
     * Display the resource.
     */
    public function show()
    {
        return Inertia::render('Profile/Partials/Avatar/UpdateAvatar');
    }

    /**
     * Show the form for editing the resource.
     */
    public function edit():never
    {
        abort(404);
    }

    /**
     * Update the resource in storage.
     */
    public function update(UpdateAvatarRequest $request)
    {
        $validated = $request->validated();
        $avatarPath = $validated['avatar']->store('avatars', 'public');
        $request->user()->update(['avatar' => "/storage/".$avatarPath]);

    }

    /**
     * Remove the resource from storage.
     */
    public function destroy(): never
    {
        abort(404);
    }
}
