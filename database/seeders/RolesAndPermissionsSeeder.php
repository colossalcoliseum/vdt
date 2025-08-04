<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $SuperAdmin = Role::create(['name' => 'super_admin']);
        $SuperAdmin->givePermissionTo(Permission::all());

        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        foreach (User::$permissionsPerRole as $role => $permissions) {
            $role = Role::create(['name' => $role]);

            foreach ($permissions as $permission) {
                Permission::create(['name' => $permission]);
            }

            $role->givePermissionTo($permissions);
        }
    }
}
