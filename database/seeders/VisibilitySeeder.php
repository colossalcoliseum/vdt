<?php

namespace Database\Seeders;

use App\Models\Visibility;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VisibilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (Visibility::$visibleScope as $slug => $name) {
            Visibility::create([
                'name' => $name,
                'slug' => $slug,
            ]);
        }

    }
}
