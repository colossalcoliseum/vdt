<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Visibility;
use App\Models\User;

class VisibilityPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->checkPermissionTo('view-any Visibility');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Visibility $visibility): bool
    {
        return $user->checkPermissionTo('view Visibility');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->checkPermissionTo('create Visibility');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Visibility $visibility): bool
    {
        return $user->checkPermissionTo('update Visibility');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Visibility $visibility): bool
    {
        return $user->checkPermissionTo('delete Visibility');
    }

    /**
     * Determine whether the user can delete any models.
     */
    public function deleteAny(User $user): bool
    {
        return $user->checkPermissionTo('delete-any Visibility');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Visibility $visibility): bool
    {
        return $user->checkPermissionTo('restore Visibility');
    }

    /**
     * Determine whether the user can restore any models.
     */
    public function restoreAny(User $user): bool
    {
        return $user->checkPermissionTo('restore-any Visibility');
    }

    /**
     * Determine whether the user can replicate the model.
     */
    public function replicate(User $user, Visibility $visibility): bool
    {
        return $user->checkPermissionTo('replicate Visibility');
    }

    /**
     * Determine whether the user can reorder the models.
     */
    public function reorder(User $user): bool
    {
        return $user->checkPermissionTo('reorder Visibility');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Visibility $visibility): bool
    {
        return $user->checkPermissionTo('force-delete Visibility');
    }

    /**
     * Determine whether the user can permanently delete any models.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->checkPermissionTo('force-delete-any Visibility');
    }
}
