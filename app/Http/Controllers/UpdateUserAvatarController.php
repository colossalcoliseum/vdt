<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UpdateUserAvatarController extends Controller
{
    /**
     * Show the form for creating the resource.
     */
    public function create(Request $request)
    {
        dd($request->all());

    }

    /**
     * Store the newly created resource in storage.
     */
    public function store(Request $request)
    {
        $avatarPath = $request->file('avatar')->store( 'avatars', 'public' );
        $request->user()->update(['avatar' => $avatarPath]);
        dd($request->user());

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
    public function edit()
    {
        //
    }

    /**
     * Update the resource in storage.
     */
    public function update(Request $request)
    {
        //$avatarPath = $request->data['avatar'];//->store( 'avatars', 'public' );
        if (isset($request->data['avatar'])){
            $avatarPath = $request->data['avatar']->store( 'avatars', 'public' );
            $request->user()->update(['avatar' => $avatarPath]);
        }else{
            $request->user()->update(['avatar' => null]);
        }
      //  $request->user()->update(['avatar' => $avatarPath]);
    }

    /**
     * Remove the resource from storage.
     */
    public function destroy(): never
    {
        abort(404);
    }
}
