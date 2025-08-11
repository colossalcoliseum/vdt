<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Video;
use App\Models\User;

class VideoPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return
            true;//TODO: добави проверка потребителят дали е ограничен
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Video $video): bool
    {
        return
            true;//TODO: същото като горе
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return
            $user->can('publish_videos') ||
            $user->hasRole('admin') ||
            $user->hasRole('super_admin');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Video $video): bool
    {
        return
            $user->can('edit_videos') ||
            $user->hasRole('admin') ||
            $user->hasRole('super_admin');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Video $video): bool
    {
        return
            $user->can('delete_videos') ||
            $user->hasRole('admin') ||
            $user->hasRole('super_admin');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Video $video): bool
    {
        return
            $user->can('unarchive_videos') ||
            $user->hasRole('admin') ||
            $user->hasRole('super_admin');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Video $video): bool
    {
        return false;
    }
}
