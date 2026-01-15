<?php

namespace Database\Seeders;

use App\Models\ContentType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContentTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (ContentType::$contentTypes as $slug => $name) {
            ContentType::create([
                'name' => $name,
                'slug' => $slug,
            ]);
        }
    }
}
