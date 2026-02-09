<?php

namespace Database\Seeders;

use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Visibility;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolesAndPermissionsSeeder::class,
            StatusSeeder::class,
            UsersSeeder::class,
            ContentTypesSeeder::class,
            CategorySeeder::class,
            VisibilitySeeder::class,
            PostSeeder::class,
            VideoSeeder::class,
        ]);

    }
}
