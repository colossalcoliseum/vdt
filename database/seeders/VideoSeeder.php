<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Video;
use Database\Factories\VideoFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::factory(10)
            ->has(Video::factory(4))
            ->create();
        Video::factory()->count(10)->create();
    }
}
